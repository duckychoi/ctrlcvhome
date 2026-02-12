'use client'

import { useFrame } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import { Float, Line, PerspectiveCamera } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import { Color, Group, MathUtils, Vector3 } from 'three'
import { timelineStages } from '../config/timelineStages'
import type { HumanPose, ScenePose, TimelineStage } from '../types'
import { LineHuman } from './LineHuman'

type LandingTimelineSceneProps = {
  progress: number
}

const poseKeys: (keyof HumanPose)[] = [
  'bodyLean',
  'twist',
  'headTilt',
  'headTurn',
  'leftShoulder',
  'rightShoulder',
  'leftElbow',
  'rightElbow',
  'leftHip',
  'rightHip',
  'leftKnee',
  'rightKnee'
]

function smoothStep(value: number): number {
  const t = Math.max(0, Math.min(1, value))
  return t * t * (3 - 2 * t)
}

function lerp3(a: [number, number, number], b: [number, number, number], t: number): [number, number, number] {
  return [MathUtils.lerp(a[0], b[0], t), MathUtils.lerp(a[1], b[1], t), MathUtils.lerp(a[2], b[2], t)]
}

function lerpPose(a: HumanPose, b: HumanPose, t: number): HumanPose {
  const result = { ...a }
  for (const key of poseKeys) {
    result[key] = MathUtils.lerp(a[key], b[key], t)
  }
  return result
}

function sampleStage(progress: number): { pose: HumanPose; scene: ScenePose } {
  const last = timelineStages.length - 1
  const clamped = Math.max(0, Math.min(last, progress))
  const index = Math.floor(clamped)
  const nextIndex = Math.min(last, index + 1)
  const local = smoothStep(clamped - index)
  const from = timelineStages[index]
  const to = timelineStages[nextIndex]

  return {
    pose: lerpPose(from.pose, to.pose, local),
    scene: {
      figurePosition: lerp3(from.scene.figurePosition, to.scene.figurePosition, local),
      figureRotation: lerp3(from.scene.figureRotation, to.scene.figureRotation, local),
      figureScale: MathUtils.lerp(from.scene.figureScale, to.scene.figureScale, local),
      cameraPosition: lerp3(from.scene.cameraPosition, to.scene.cameraPosition, local),
      cameraLookAt: lerp3(from.scene.cameraLookAt, to.scene.cameraLookAt, local),
      tint: new Color(from.scene.tint).lerp(new Color(to.scene.tint), local).getStyle()
    }
  }
}

function StageRig({ progress }: { progress: number }) {
  const figureRef = useRef<Group>(null)
  const cameraLookAt = useRef(new Vector3(0, 0.9, 0))

  const stage = useMemo(() => sampleStage(progress), [progress])

  useFrame((state, delta) => {
    const { pose, scene } = stage
    const pointerX = state.pointer.x * 0.38
    const pointerY = state.pointer.y * 0.28
    const time = state.clock.elapsedTime

    if (figureRef.current) {
      figureRef.current.position.x = MathUtils.damp(
        figureRef.current.position.x,
        scene.figurePosition[0] + Math.sin(time * 0.56) * 0.08,
        4.4,
        delta
      )
      figureRef.current.position.y = MathUtils.damp(
        figureRef.current.position.y,
        scene.figurePosition[1] + Math.sin(time * 1.18 + 0.4) * 0.05,
        4.4,
        delta
      )
      figureRef.current.position.z = MathUtils.damp(figureRef.current.position.z, scene.figurePosition[2], 4.4, delta)

      figureRef.current.rotation.x = MathUtils.damp(
        figureRef.current.rotation.x,
        scene.figureRotation[0] + pointerY * 0.2 + Math.sin(time * 0.92) * 0.05,
        4.7,
        delta
      )
      figureRef.current.rotation.y = MathUtils.damp(
        figureRef.current.rotation.y,
        scene.figureRotation[1] + pointerX * 0.3 + Math.cos(time * 0.65) * 0.08,
        4.7,
        delta
      )
      figureRef.current.rotation.z = MathUtils.damp(
        figureRef.current.rotation.z,
        scene.figureRotation[2] + Math.sin(time * 1.1) * 0.03,
        4.5,
        delta
      )

      const scale = MathUtils.damp(figureRef.current.scale.x, scene.figureScale, 4.6, delta)
      figureRef.current.scale.setScalar(scale)
    }

    state.camera.position.x = MathUtils.damp(
      state.camera.position.x,
      scene.cameraPosition[0] + pointerX * 0.62 + Math.sin(time * 0.4) * 0.08,
      4.2,
      delta
    )
    state.camera.position.y = MathUtils.damp(
      state.camera.position.y,
      scene.cameraPosition[1] + pointerY * 0.44 + Math.cos(time * 0.64) * 0.05,
      4.2,
      delta
    )
    state.camera.position.z = MathUtils.damp(state.camera.position.z, scene.cameraPosition[2], 4.2, delta)

    cameraLookAt.current.x = MathUtils.damp(cameraLookAt.current.x, scene.cameraLookAt[0], 4.5, delta)
    cameraLookAt.current.y = MathUtils.damp(cameraLookAt.current.y, scene.cameraLookAt[1], 4.5, delta)
    cameraLookAt.current.z = MathUtils.damp(cameraLookAt.current.z, scene.cameraLookAt[2], 4.5, delta)
    state.camera.lookAt(cameraLookAt.current)
  })

  return (
    <>
      <Float speed={1.2} rotationIntensity={0.16} floatIntensity={0.16}>
        <group ref={figureRef}>
          <LineHuman
            pose={stage.pose}
            tint={stage.scene.tint}
            profile={{
              densityScale: 1.28,
              opacityScale: 1.02,
              widthScale: 1.06,
              darkness: 0.94,
              motionBoost: 1.15,
              phase: 0
            }}
          />
          <group position={[0.06, 0.03, -0.18]} rotation={[0.03, -0.07, 0.02]}>
            <LineHuman
              pose={stage.pose}
              tint={'#2f2f31'}
              profile={{
                densityScale: 0.92,
                opacityScale: 0.44,
                widthScale: 0.92,
                darkness: 0.72,
                motionBoost: 1.34,
                phase: 1.8
              }}
            />
          </group>
        </group>
      </Float>

      <Line
        points={[
          [-3.4, -2.5, 0],
          [-2.2, -2.2, 0.22],
          [0.4, -2.34, -0.1],
          [3.1, -2.22, 0.05]
        ]}
        color={'#111111'}
        lineWidth={0.7}
        transparent
        opacity={0.14}
      />

      <Line
        points={[
          [-3, 2.45, -0.2],
          [-1.8, 2.75, 0.2],
          [0.2, 2.5, 0.4],
          [2.2, 2.85, 0]
        ]}
        color={'#1a1a1a'}
        lineWidth={0.56}
        transparent
        opacity={0.12}
      />
    </>
  )
}

export function LandingTimelineScene({ progress }: LandingTimelineSceneProps) {
  return (
    <Canvas dpr={[1, 2]} gl={{ alpha: true, antialias: true }}>
      <color attach="background" args={['#efefef']} />
      <PerspectiveCamera makeDefault position={[0.1, 0.65, 9.4]} fov={26} near={0.1} far={100} />
      <StageRig progress={progress} />
    </Canvas>
  )
}

export function getStageLabel(progress: number): TimelineStage['label'] {
  const index = Math.max(0, Math.min(timelineStages.length - 1, Math.round(progress)))
  return timelineStages[index].label
}
