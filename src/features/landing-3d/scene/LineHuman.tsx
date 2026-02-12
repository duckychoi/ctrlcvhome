'use client'

import { Line } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { Color, Group, MathUtils } from 'three'
import type { HumanPose } from '../types'

type HumanRenderProfile = {
  densityScale: number
  opacityScale: number
  widthScale: number
  darkness: number
  motionBoost: number
  phase: number
}

type LineHumanProps = {
  pose: HumanPose
  tint: string
  profile?: Partial<HumanRenderProfile>
}

type Points = [number, number, number][]

const defaultProfile: HumanRenderProfile = {
  densityScale: 1,
  opacityScale: 1,
  widthScale: 1,
  darkness: 0.9,
  motionBoost: 1,
  phase: 0
}

function clampInt(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, Math.round(value)))
}

function makeSeededRandom(seed: number) {
  let value = seed >>> 0
  return () => {
    value += 0x6d2b79f5
    let t = value
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function makeLimbStrands(
  seed: number,
  length: number,
  radius: number,
  direction: 1 | -1,
  strandCount: number,
  pointCount: number
): Points[] {
  const rand = makeSeededRandom(seed)
  const strands: Points[] = []

  for (let s = 0; s < strandCount; s += 1) {
    const points: Points = []
    const phase = rand() * Math.PI * 2
    const turnA = 2.4 + rand() * 4.8
    const turnB = 3 + rand() * 7.5
    const ring = radius * (0.36 + rand() * 1.1)

    for (let i = 0; i < pointCount; i += 1) {
      const t = i / (pointCount - 1)
      const y = t * length * direction
      const angle = phase + t * Math.PI * turnA + Math.sin(t * turnB + phase) * 0.7
      const bloom = ring * (0.55 + Math.sin(t * (3.2 + rand() * 2.6) + phase) * 0.4)
      const x = Math.cos(angle) * bloom + (rand() - 0.5) * radius * 0.42
      const z = Math.sin(angle) * bloom + (rand() - 0.5) * radius * 0.42
      points.push([x, y, z])
    }

    strands.push(points)
  }

  return strands
}

function makeJointLoops(seed: number, radius: number, loopCount: number, pointCount: number): Points[] {
  const rand = makeSeededRandom(seed)
  const loops: Points[] = []

  for (let l = 0; l < loopCount; l += 1) {
    const points: Points = []
    const theta0 = rand() * Math.PI * 2
    const phi0 = rand() * Math.PI
    const spin = 2.2 + rand() * 4.8
    const freq = 1.8 + rand() * 4

    for (let i = 0; i < pointCount; i += 1) {
      const t = i / (pointCount - 1)
      const theta = theta0 + t * Math.PI * 2 * spin
      const phi = phi0 + Math.sin(t * Math.PI * 2 * freq) * (0.6 + rand() * 0.4)
      const r = radius * (0.74 + rand() * 0.46)
      const x = Math.cos(theta) * Math.sin(phi) * r + (rand() - 0.5) * radius * 0.22
      const y = Math.cos(phi) * r + (rand() - 0.5) * radius * 0.24
      const z = Math.sin(theta) * Math.sin(phi) * r + (rand() - 0.5) * radius * 0.22
      points.push([x, y, z])
    }

    loops.push(points)
  }

  return loops
}

function makeAuraStrands(seed: number, strandCount: number, pointCount: number): Points[] {
  const rand = makeSeededRandom(seed)
  const strands: Points[] = []

  for (let i = 0; i < strandCount; i += 1) {
    const points: Points = []
    let x = (rand() - 0.5) * 0.5
    let y = (rand() - 0.5) * 0.5
    let z = (rand() - 0.5) * 0.5
    const driftX = (rand() - 0.5) * 0.07
    const driftY = (rand() - 0.5) * 0.07
    const driftZ = (rand() - 0.5) * 0.07

    for (let p = 0; p < pointCount; p += 1) {
      const t = p / (pointCount - 1)
      x += (rand() - 0.5) * 0.24 + driftX
      y += (rand() - 0.5) * 0.24 + driftY
      z += (rand() - 0.5) * 0.22 + driftZ
      x = MathUtils.clamp(x, -2.1, 2.1)
      y = MathUtils.clamp(y, -2.6, 2.6)
      z = MathUtils.clamp(z, -1.8, 1.8)
      points.push([x * (0.5 + t * 0.8), y * (0.5 + t * 0.55), z * (0.4 + t * 0.55)])
    }

    strands.push(points)
  }

  return strands
}

function ScribbleLimb({
  id,
  length,
  radius,
  direction,
  color,
  profile,
  density = 22
}: {
  id: number
  length: number
  radius: number
  direction: 1 | -1
  color: string
  profile: HumanRenderProfile
  density?: number
}) {
  const strands = useMemo(
    () =>
      makeLimbStrands(
        id,
        length,
        radius,
        direction,
        clampInt(density * profile.densityScale, 8, 64),
        34
      ),
    [id, length, radius, direction, density, profile.densityScale]
  )

  return (
    <group>
      {strands.map((points, index) => (
        <Line
          key={`limb-${id}-${index}`}
          points={points}
          color={color}
          lineWidth={(index % 5 === 0 ? 1.22 : 0.82) * profile.widthScale}
          transparent
          opacity={(index % 5 === 0 ? 0.72 : 0.28) * profile.opacityScale}
        />
      ))}
    </group>
  )
}

function ScribbleJoint({
  id,
  radius,
  color,
  profile,
  density = 18,
  bold = false
}: {
  id: number
  radius: number
  color: string
  profile: HumanRenderProfile
  density?: number
  bold?: boolean
}) {
  const loops = useMemo(
    () => makeJointLoops(id, radius, clampInt(density * profile.densityScale, 8, 70), 36),
    [id, radius, density, profile.densityScale]
  )

  return (
    <group>
      {loops.map((points, index) => (
        <Line
          key={`joint-${id}-${index}`}
          points={points}
          color={color}
          lineWidth={(bold ? 1.48 : index % 6 === 0 ? 1.32 : 0.84) * profile.widthScale}
          transparent
          opacity={(bold ? 0.8 : index % 6 === 0 ? 0.66 : 0.24) * profile.opacityScale}
        />
      ))}
    </group>
  )
}

function ScribbleAura({ color, profile }: { color: string; profile: HumanRenderProfile }) {
  const strands = useMemo(
    () => makeAuraStrands(900, clampInt(52 * profile.densityScale, 24, 120), 30),
    [profile.densityScale]
  )

  return (
    <group>
      {strands.map((points, index) => (
        <Line
          key={`aura-${index}`}
          points={points}
          color={color}
          lineWidth={(index % 9 === 0 ? 1.05 : 0.6) * profile.widthScale}
          transparent
          opacity={(index % 9 === 0 ? 0.34 : 0.13) * profile.opacityScale}
        />
      ))}
    </group>
  )
}

export function LineHuman({ pose, tint, profile: partialProfile }: LineHumanProps) {
  const profile = { ...defaultProfile, ...partialProfile }

  const rootRef = useRef<Group>(null)
  const torsoRef = useRef<Group>(null)
  const headRef = useRef<Group>(null)
  const leftArmRef = useRef<Group>(null)
  const rightArmRef = useRef<Group>(null)
  const leftForearmRef = useRef<Group>(null)
  const rightForearmRef = useRef<Group>(null)
  const leftLegRef = useRef<Group>(null)
  const rightLegRef = useRef<Group>(null)
  const leftShinRef = useRef<Group>(null)
  const rightShinRef = useRef<Group>(null)

  const stroke = useMemo(
    () => new Color(tint).lerp(new Color('#000000'), profile.darkness).getStyle(),
    [tint, profile.darkness]
  )
  const strokeSoft = useMemo(
    () => new Color(tint).lerp(new Color('#3b3b3b'), 0.62).getStyle(),
    [tint]
  )

  useFrame((state, delta) => {
    const motion = profile.motionBoost
    const t = state.clock.elapsedTime
    const wobble = Math.sin(t * 1.5 + profile.phase) * 0.06 * motion
    const torsion = Math.sin(t * 0.8 + profile.phase * 1.7) * 0.07 * motion
    const damp = (value: number, target: number, smooth = 6) => MathUtils.damp(value, target, smooth, delta)

    if (rootRef.current) {
      rootRef.current.rotation.y = damp(
        rootRef.current.rotation.y,
        pose.twist * 0.7 + state.pointer.x * 0.34 * motion + torsion,
        6.8
      )
      rootRef.current.rotation.x = damp(rootRef.current.rotation.x, state.pointer.y * 0.16 * motion, 6.5)
      rootRef.current.position.y = damp(rootRef.current.position.y, wobble, 6)
      rootRef.current.position.x = damp(rootRef.current.position.x, Math.sin(t * 0.42 + profile.phase) * 0.08 * motion, 5.4)
    }

    if (torsoRef.current) {
      torsoRef.current.rotation.z = damp(torsoRef.current.rotation.z, pose.bodyLean, 7)
      torsoRef.current.rotation.y = damp(torsoRef.current.rotation.y, pose.twist * 0.38 + torsion, 6.8)
      torsoRef.current.rotation.x = damp(
        torsoRef.current.rotation.x,
        state.pointer.y * 0.11 * motion + Math.sin(t * 1.2 + profile.phase) * 0.03,
        6.2
      )
    }

    if (headRef.current) {
      headRef.current.rotation.z = damp(headRef.current.rotation.z, pose.headTilt, 7.6)
      headRef.current.rotation.y = damp(
        headRef.current.rotation.y,
        pose.headTurn + state.pointer.x * 0.23 * motion + Math.sin(t * 1.8 + profile.phase) * 0.05,
        7.8
      )
    }

    if (leftArmRef.current) {
      leftArmRef.current.rotation.x = damp(leftArmRef.current.rotation.x, pose.leftShoulder, 7.3)
      leftArmRef.current.rotation.z = damp(leftArmRef.current.rotation.z, -0.22, 6.8)
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.x = damp(rightArmRef.current.rotation.x, pose.rightShoulder, 7.3)
      rightArmRef.current.rotation.z = damp(rightArmRef.current.rotation.z, 0.22, 6.8)
    }
    if (leftForearmRef.current) {
      leftForearmRef.current.rotation.x = damp(leftForearmRef.current.rotation.x, pose.leftElbow, 7.9)
    }
    if (rightForearmRef.current) {
      rightForearmRef.current.rotation.x = damp(rightForearmRef.current.rotation.x, pose.rightElbow, 7.9)
    }
    if (leftLegRef.current) {
      leftLegRef.current.rotation.x = damp(leftLegRef.current.rotation.x, pose.leftHip, 6.9)
    }
    if (rightLegRef.current) {
      rightLegRef.current.rotation.x = damp(rightLegRef.current.rotation.x, pose.rightHip, 6.9)
    }
    if (leftShinRef.current) {
      leftShinRef.current.rotation.x = damp(leftShinRef.current.rotation.x, pose.leftKnee, 7.2)
    }
    if (rightShinRef.current) {
      rightShinRef.current.rotation.x = damp(rightShinRef.current.rotation.x, pose.rightKnee, 7.2)
    }
  })

  return (
    <group ref={rootRef} position={[0, -1.08, 0]}>
      <ScribbleAura color={strokeSoft} profile={profile} />
      <ScribbleJoint id={100} radius={0.2} color={stroke} profile={profile} density={20} />

      <group ref={torsoRef}>
        <ScribbleLimb id={110} length={1.32} radius={0.16} direction={1} color={stroke} profile={profile} density={30} />

        <group position={[0, 1.3, 0]}>
          <ScribbleJoint id={120} radius={0.18} color={stroke} profile={profile} density={21} />
          <ScribbleLimb id={130} length={0.34} radius={0.12} direction={1} color={stroke} profile={profile} density={16} />

          <group ref={headRef} position={[0, 0.45, 0]}>
            <ScribbleJoint id={140} radius={0.35} color={stroke} profile={profile} density={36} />
          </group>

          <group ref={leftArmRef} position={[-0.5, 0.05, 0]}>
            <ScribbleJoint id={210} radius={0.12} color={stroke} profile={profile} density={18} />
            <ScribbleLimb id={220} length={0.98} radius={0.13} direction={-1} color={stroke} profile={profile} density={26} />
            <group ref={leftForearmRef} position={[0, -0.98, 0]}>
              <ScribbleJoint id={230} radius={0.12} color={stroke} profile={profile} density={18} />
              <ScribbleLimb id={240} length={0.88} radius={0.12} direction={-1} color={stroke} profile={profile} density={24} />
              <group position={[0, -0.88, 0]}>
                <ScribbleJoint id={241} radius={0.18} color={stroke} profile={profile} density={34} bold />
              </group>
            </group>
          </group>

          <group ref={rightArmRef} position={[0.5, 0.05, 0]}>
            <ScribbleJoint id={310} radius={0.12} color={stroke} profile={profile} density={18} />
            <ScribbleLimb id={320} length={0.98} radius={0.13} direction={-1} color={stroke} profile={profile} density={26} />
            <group ref={rightForearmRef} position={[0, -0.98, 0]}>
              <ScribbleJoint id={330} radius={0.12} color={stroke} profile={profile} density={18} />
              <ScribbleLimb id={340} length={0.88} radius={0.12} direction={-1} color={stroke} profile={profile} density={24} />
              <group position={[0, -0.88, 0]}>
                <ScribbleJoint id={341} radius={0.18} color={stroke} profile={profile} density={34} bold />
              </group>
            </group>
          </group>
        </group>
      </group>

      <group ref={leftLegRef} position={[-0.26, -0.03, 0]}>
        <ScribbleJoint id={410} radius={0.13} color={stroke} profile={profile} density={18} />
        <ScribbleLimb id={420} length={1.1} radius={0.13} direction={-1} color={stroke} profile={profile} density={22} />
        <group ref={leftShinRef} position={[0, -1.1, 0]}>
          <ScribbleJoint id={430} radius={0.12} color={stroke} profile={profile} density={18} />
          <ScribbleLimb id={440} length={0.98} radius={0.11} direction={-1} color={stroke} profile={profile} density={20} />
        </group>
      </group>

      <group ref={rightLegRef} position={[0.26, -0.03, 0]}>
        <ScribbleJoint id={510} radius={0.13} color={stroke} profile={profile} density={18} />
        <ScribbleLimb id={520} length={1.1} radius={0.13} direction={-1} color={stroke} profile={profile} density={22} />
        <group ref={rightShinRef} position={[0, -1.1, 0]}>
          <ScribbleJoint id={530} radius={0.12} color={stroke} profile={profile} density={18} />
          <ScribbleLimb id={540} length={0.98} radius={0.11} direction={-1} color={stroke} profile={profile} density={20} />
          <group position={[0, -0.98, 0]}>
            <ScribbleJoint id={541} radius={0.17} color={stroke} profile={profile} density={26} bold />
          </group>
        </group>
      </group>
    </group>
  )
}
