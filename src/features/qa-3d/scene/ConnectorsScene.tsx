'use client'

import { useMemo, useReducer } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Lightformer, MeshTransmissionMaterial } from '@react-three/drei'
import Connector from './Connector'
import Model from './Model'

type ConnectorsSceneProps = {
  className?: string
}

const ACCENTS = ['#bf1c2b', '#0a4fb8', '#eef2f7', '#d45a6a']

const shuffle = (accent: number) => [
  { color: '#bf1c2b', roughness: 0.18 },
  { color: '#8f1220', roughness: 0.76 },
  { color: '#0a4fb8', roughness: 0.72 },
  { color: '#eef2f7', roughness: 0.14 },
  { color: '#d7dbe2', roughness: 0.76 },
  { color: '#eef2f7', roughness: 0.1 },
  { color: ACCENTS[accent], roughness: 0.1, accent: true },
  { color: ACCENTS[accent], roughness: 0.72, accent: true },
  { color: ACCENTS[accent], roughness: 0.12, accent: true }
]

function SceneContent({ accent }: { accent: number }) {
  const connectors = useMemo(() => shuffle(accent), [accent])

  return (
    <>
      <color attach="background" args={['#111522']} />
      <ambientLight intensity={0.38} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.1} castShadow />

      {connectors.map((item, index) => (
        <Connector key={`${index}-${accent}`} slot={index} color={item.color} roughness={item.roughness} accent={item.accent} />
      ))}
      <Connector slot={connectors.length} position={[2.6, 2.4, 1.2]}>
        <Model>
          <MeshTransmissionMaterial
            clearcoat={1}
            thickness={0.1}
            anisotropicBlur={0.08}
            chromaticAberration={0.08}
            distortionScale={0}
            temporalDistortion={0}
            samples={4}
            resolution={256}
          />
        </Model>
      </Connector>

      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
        </group>
      </Environment>
    </>
  )
}

export default function ConnectorsScene({ className }: ConnectorsSceneProps) {
  const [accent, cycleAccent] = useReducer((state: number) => (state + 1) % ACCENTS.length, 0)

  return (
    <div className={className}>
      <Canvas
        onClick={cycleAccent}
        shadows
        dpr={[1, 1.35]}
        gl={{ antialias: false }}
        camera={{ position: [0, 0, 13], fov: 23, near: 1, far: 24 }}
      >
        <SceneContent accent={accent} />
      </Canvas>
    </div>
  )
}
