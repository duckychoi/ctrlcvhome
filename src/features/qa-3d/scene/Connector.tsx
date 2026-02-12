'use client'

import { useEffect, useMemo, useRef, type ReactNode } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import Model from './Model'

type ConnectorProps = {
  slot?: number
  position?: [number, number, number]
  color?: THREE.ColorRepresentation
  roughness?: number
  accent?: boolean
  children?: ReactNode
}

type BodyState = {
  id: number
  position: THREE.Vector3
  velocity: THREE.Vector3
  angularVelocity: THREE.Vector3
}

const BODY_REGISTRY = new Map<number, BodyState>()
let NEXT_BODY_ID = 1

export default function Connector({
  slot = 0,
  position,
  color = '#ffffff',
  roughness = 0,
  accent = false,
  children
}: ConnectorProps) {
  const groupRef = useRef<THREE.Group>(null)
  const bodyId = useMemo(() => NEXT_BODY_ID++, [])
  const velocity = useMemo(() => new THREE.Vector3(), [])
  const angularVelocity = useMemo(() => new THREE.Vector3(), [])
  const pointerVec = useMemo(() => new THREE.Vector3(), [])
  const prevPointerWorld = useMemo(() => new THREE.Vector3(), [])
  const pointerVelocityVec = useMemo(() => new THREE.Vector3(), [])
  const prevPointer = useMemo(() => new THREE.Vector2(), [])
  const forceVec = useMemo(() => new THREE.Vector3(), [])
  const targetVec = useMemo(() => new THREE.Vector3(), [])
  const workVec = useMemo(() => new THREE.Vector3(), [])
  const hitNormalVec = useMemo(() => new THREE.Vector3(), [])
  const hitTangentVec = useMemo(() => new THREE.Vector3(), [])
  const hitAxisVec = useMemo(() => new THREE.Vector3(), [])
  const clusterVec = useMemo(() => new THREE.Vector3(), [])
  const pointerDelta = useMemo(() => new THREE.Vector2(), [])
  const boundaryVec = useMemo(() => new THREE.Vector3(), [])
  const sepVec = useMemo(() => new THREE.Vector3(), [])
  const relVelVec = useMemo(() => new THREE.Vector3(), [])
  const torqueVec = useMemo(() => new THREE.Vector3(), [])
  const homeVec = useMemo(() => new THREE.Vector3(), [])
  const idleSeconds = useRef(0)
  const lastHitTime = useRef(-10)
  const phase = useMemo(() => Math.random() * Math.PI * 2, [])
  const spin = useMemo(
    () =>
      new THREE.Vector3(
        THREE.MathUtils.randFloat(0.5, 1.4),
        THREE.MathUtils.randFloat(0.4, 1.2),
        THREE.MathUtils.randFloat(0.45, 1.35)
      ),
    []
  )
  const spawnPosition = useMemo<[number, number, number]>(() => {
    if (position) return position
    return [THREE.MathUtils.randFloatSpread(5.2), THREE.MathUtils.randFloatSpread(3.8), THREE.MathUtils.randFloatSpread(5.2)]
  }, [position])
  const bodyRef = useRef<BodyState>({
    id: bodyId,
    position: new THREE.Vector3(spawnPosition[0], spawnPosition[1], spawnPosition[2]),
    velocity,
    angularVelocity
  })

  const clusterOffset = useMemo(() => {
    const angle = slot * 2.399963229728653
    const radius = 0.7 + (slot % 3) * 0.18
    const zBand = -0.65 + (slot % 5) * 0.32
    return new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.55, zBand)
  }, [slot])

  useEffect(() => {
    BODY_REGISTRY.set(bodyId, bodyRef.current)
    return () => {
      BODY_REGISTRY.delete(bodyId)
    }
  }, [bodyId])

  useFrame((state, delta) => {
    const group = groupRef.current
    if (!group) return

    const body = bodyRef.current
    const bodyPos = body.position
    const bodyVel = body.velocity
    const bodyAngVel = body.angularVelocity

    const step = Math.min(delta, 1 / 30)
    const t = state.clock.elapsedTime

    pointerVec.set((state.pointer.x * state.viewport.width) / 2, (state.pointer.y * state.viewport.height) / 2, 0)
    pointerVelocityVec.copy(pointerVec).sub(prevPointerWorld).divideScalar(Math.max(step, 0.0001))
    prevPointerWorld.copy(pointerVec)
    pointerDelta.set(state.pointer.x, state.pointer.y).sub(prevPointer)
    prevPointer.set(state.pointer.x, state.pointer.y)
    const pointerSpeed = pointerDelta.length()
    if (pointerSpeed < 0.0008) {
      idleSeconds.current = Math.min(4.5, idleSeconds.current + delta)
    } else {
      idleSeconds.current = Math.max(0, idleSeconds.current - delta * 2.2)
    }
    const gather = THREE.MathUtils.smoothstep(idleSeconds.current, 0.35, 1.75)

    homeVec.set(spawnPosition[0], spawnPosition[1], spawnPosition[2])
    targetVec.set(
      Math.sin(t * 0.72 + phase) * 0.95,
      Math.cos(t * 0.58 + phase * 1.7) * 0.62,
      Math.sin(t * 0.66 + phase * 0.8) * 0.84
    )
    targetVec.add(homeVec)
    clusterVec.copy(clusterOffset).addScaledVector(targetVec, 0.18)
    targetVec.lerp(clusterVec, gather)

    forceVec.set(0, 0, 0)

    forceVec.addScaledVector(workVec.copy(targetVec).sub(bodyPos), 6.2 + gather * 6.4)
    forceVec.addScaledVector(bodyVel, -(4.2 + gather * 2.2))

    workVec.copy(bodyPos).sub(pointerVec)
    const distToPointer = workVec.length()
    const repelRadius = 2.8 - gather * 1.1
    if (distToPointer < repelRadius) {
      workVec.normalize().multiplyScalar((repelRadius - distToPointer) * (15.5 - gather * 7.5))
      forceVec.add(workVec)
    }

    const hitRadius = 1.6
    const pointerSpeedWorld = pointerVelocityVec.length()
    if (distToPointer < hitRadius && pointerSpeedWorld > 1.9 && t - lastHitTime.current > 0.07) {
      hitNormalVec.copy(bodyPos).sub(pointerVec)
      if (hitNormalVec.lengthSq() < 0.00001) {
        hitNormalVec.set(0, 0, 1)
      } else {
        hitNormalVec.normalize()
      }

      hitTangentVec.copy(pointerVelocityVec)
      if (hitTangentVec.lengthSq() < 0.00001) {
        hitTangentVec.set(1, 0, 0)
      } else {
        hitTangentVec.normalize()
      }

      const strike = Math.min(pointerSpeedWorld, 14)
      bodyVel.addScaledVector(hitTangentVec, strike * 0.52)
      bodyVel.addScaledVector(hitNormalVec, strike * 0.34)

      hitAxisVec.crossVectors(hitNormalVec, hitTangentVec)
      if (hitAxisVec.lengthSq() < 0.00001) {
        hitAxisVec.set(0.35, 0.75, 0.2)
      } else {
        hitAxisVec.normalize()
      }
      bodyAngVel.addScaledVector(hitAxisVec, strike * 1.5)
      lastHitTime.current = t
    }

    const minDistance = 2.7
    const hardDistance = 2.35
    const minDistanceSq = minDistance * minDistance
    const hardDistanceSq = hardDistance * hardDistance
    for (const other of BODY_REGISTRY.values()) {
      if (other.id === bodyId) continue
      sepVec.copy(bodyPos).sub(other.position)
      const distSq = sepVec.lengthSq()
      if (distSq <= 0.00001 || distSq >= minDistanceSq) continue
      const dist = Math.sqrt(distSq)
      const overlap = minDistance - dist
      sepVec.multiplyScalar(1 / dist)
      forceVec.addScaledVector(sepVec, overlap * (31 + gather * 11))

      if (distSq < hardDistanceSq) {
        const correction = (hardDistance - dist) * 0.82
        bodyPos.addScaledVector(sepVec, correction)
      }

      relVelVec.copy(bodyVel).sub(other.velocity)
      const closingSpeed = relVelVec.dot(sepVec)
      if (closingSpeed < 0) {
        bodyVel.addScaledVector(sepVec, -closingSpeed * 0.34)
      }
    }

    const worldRadius = 7.1
    boundaryVec.copy(bodyPos)
    const worldDist = boundaryVec.length()
    if (worldDist > worldRadius) {
      boundaryVec.multiplyScalar(1 / worldDist)
      forceVec.addScaledVector(boundaryVec, -(worldDist - worldRadius) * 24)
    }

    bodyVel.addScaledVector(forceVec, step)
    bodyVel.multiplyScalar(Math.exp(-(2.0 + gather * 1.2) * step))
    const maxLinearSpeed = 8.8
    if (bodyVel.lengthSq() > maxLinearSpeed * maxLinearSpeed) {
      bodyVel.setLength(maxLinearSpeed)
    }
    bodyPos.addScaledVector(bodyVel, step)
    group.position.copy(bodyPos)

    torqueVec.set(
      Math.sin(t * spin.x + phase) * 2.1,
      Math.cos(t * spin.y + phase * 1.2) * 2.0,
      Math.sin(t * spin.z + phase * 0.7) * 1.85
    )
    torqueVec.addScaledVector(bodyVel, 0.24)
    bodyAngVel.addScaledVector(torqueVec, step)
    bodyAngVel.multiplyScalar(Math.exp(-(2.9 + gather * 0.45) * step))
    const maxAngularSpeed = 6.2
    if (bodyAngVel.lengthSq() > maxAngularSpeed * maxAngularSpeed) {
      bodyAngVel.setLength(maxAngularSpeed)
    }

    group.rotation.x += bodyAngVel.x * step
    group.rotation.y += bodyAngVel.y * step
    group.rotation.z += bodyAngVel.z * step
  })

  return (
    <group ref={groupRef} position={spawnPosition}>
      {children ?? <Model color={color} roughness={roughness} />}
      {accent ? <pointLight intensity={4} distance={2.5} color={color} /> : null}
    </group>
  )
}
