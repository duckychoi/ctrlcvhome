'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { BallCollider, RigidBody } from '@react-three/rapier'
import * as THREE from 'three'

export default function Pointer() {
  const ref = useRef<any>(null)
  const vec = useMemo(() => new THREE.Vector3(), [])

  useFrame(({ mouse, viewport }) => {
    const body = ref.current
    if (!body) return
    body.setNextKinematicTranslation(vec.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0))
  })

  return (
    <RigidBody type="kinematicPosition" colliders={false} position={[0, 0, 0]} ref={ref}>
      <BallCollider args={[1.05]} />
    </RigidBody>
  )
}
