'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.set(0, 2.2, 7.5)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    const ambient = new THREE.AmbientLight(0xffffff, 0.7)
    scene.add(ambient)

    const keyLight = new THREE.DirectionalLight(0xffffff, 0.8)
    keyLight.position.set(3, 5, 4)
    scene.add(keyLight)

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.35)
    rimLight.position.set(-4, 3, -2)
    scene.add(rimLight)

    const group = new THREE.Group()
    scene.add(group)

    const grid = new THREE.GridHelper(24, 40, 0xdadada, 0xe6e6e6)
    grid.position.y = -2
    grid.material.opacity = 0.35
    grid.material.transparent = true
    group.add(grid)

    const cards: THREE.Mesh[] = []
    const cardGeometry = new THREE.PlaneGeometry(2.2, 1.4, 1, 1)
    const gradients = [
      new THREE.Color('#1f1f1f'),
      new THREE.Color('#5d2bff'),
      new THREE.Color('#0b0b0b'),
      new THREE.Color('#c8e8ff'),
      new THREE.Color('#f6b23d'),
    ]

    gradients.forEach((color, index) => {
      const material = new THREE.MeshStandardMaterial({
        color,
        roughness: 0.4,
        metalness: 0.1,
      })
      const card = new THREE.Mesh(cardGeometry, material)
      const x = (index - 2) * 1.8
      card.position.set(x, 0.6 - Math.abs(index - 2) * 0.15, index === 2 ? 0.6 : -0.6)
      card.rotation.y = (index - 2) * 0.12
      card.rotation.x = -0.02
      cards.push(card)
      group.add(card)
    })

    const orbGeometry = new THREE.SphereGeometry(0.35, 32, 32)
    const orbMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
      metalness: 0.4,
      emissive: new THREE.Color('#d9d9d9'),
      emissiveIntensity: 0.15,
      transparent: true,
      opacity: 0.7,
    })
    const orb = new THREE.Mesh(orbGeometry, orbMaterial)
    orb.position.set(2.6, 1.6, 0.2)
    group.add(orb)

    const floaters: THREE.Mesh[] = []
    const floaterGeometry = new THREE.IcosahedronGeometry(0.25, 1)
    for (let i = 0; i < 8; i += 1) {
      const material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.3,
        metalness: 0.2,
        transparent: true,
        opacity: 0.25,
      })
      const floater = new THREE.Mesh(floaterGeometry, material)
      floater.position.set(
        (i - 4) * 0.9,
        1.8 + (i % 3) * 0.4,
        -1.8 + (i % 2) * 0.5
      )
      floaters.push(floater)
      group.add(floater)
    }

    const mouse = new THREE.Vector2(0, 0)
    const handlePointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
    }
    window.addEventListener('pointermove', handlePointerMove)

    const clock = new THREE.Clock()
    const resize = () => {
      const { width, height } = container.getBoundingClientRect()
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener('resize', resize)

    let animationFrameId = 0
    const animate = () => {
      const elapsed = clock.getElapsedTime()
      group.rotation.y = mouse.x * 0.2
      group.rotation.x = mouse.y * 0.12

      orb.position.y = 1.5 + Math.sin(elapsed * 0.8) * 0.15
      floaters.forEach((floater, idx) => {
        floater.position.y += Math.sin(elapsed * 0.6 + idx) * 0.0006
        floater.rotation.x += 0.003
        floater.rotation.y += 0.002
      })

      cards.forEach((card, idx) => {
        card.position.y = 0.6 - Math.abs(idx - 2) * 0.15 + Math.sin(elapsed * 0.7 + idx) * 0.03
      })

      renderer.render(scene, camera)
      animationFrameId = window.requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', handlePointerMove)
      window.cancelAnimationFrame(animationFrameId)
      renderer.dispose()
      cardGeometry.dispose()
      orbGeometry.dispose()
      floaterGeometry.dispose()
      cards.forEach((card) => {
        const material = card.material as THREE.Material
        material.dispose()
      })
      orbMaterial.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="qa-3d-canvas" />
}
