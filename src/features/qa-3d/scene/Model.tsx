'use client'

import { useRef, type ReactNode } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { easing } from 'maath'
import * as THREE from 'three'

type GLTFResult = {
  nodes: {
    connector: THREE.Mesh
  }
  materials: {
    base: THREE.MeshStandardMaterial
  }
}

type ModelProps = {
  children?: ReactNode
  color?: THREE.ColorRepresentation
  roughness?: number
}

export default function Model({ children, color = '#ffffff', roughness = 0 }: ModelProps) {
  const ref = useRef<THREE.Mesh>(null)
  const { nodes, materials } = useGLTF('/models/c-transformed.glb') as unknown as GLTFResult

  useFrame((_, delta) => {
    if (!ref.current) return
    const material = ref.current.material as THREE.MeshStandardMaterial
    easing.dampC(material.color, color, 0.2, delta)
  })

  return (
    <mesh ref={ref} castShadow receiveShadow scale={10} geometry={nodes.connector.geometry}>
      <meshStandardMaterial metalness={0.2} roughness={roughness} map={materials.base.map} />
      {children}
    </mesh>
  )
}

useGLTF.preload('/models/c-transformed.glb')
