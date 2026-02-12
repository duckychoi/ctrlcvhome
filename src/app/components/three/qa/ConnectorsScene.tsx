'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

type ConnectorsSceneProps = {
  className?: string
}

const ACCENTS = ['#4060ff', '#20ffa0', '#ff4060', '#ffcc00']

export default function ConnectorsScene({ className }: ConnectorsSceneProps) {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const root = mountRef.current
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#121420')

    const camera = new THREE.PerspectiveCamera(20, 1, 0.1, 50)
    camera.position.set(0, 0, 16)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    root.appendChild(renderer.domElement)

    const ambient = new THREE.AmbientLight(0xffffff, 0.32)
    scene.add(ambient)

    const keyLight = new THREE.SpotLight(0xffffff, 1.2, 35, 0.36, 0.9)
    keyLight.position.set(9, 8, 9)
    keyLight.castShadow = true
    keyLight.shadow.mapSize.set(1024, 1024)
    scene.add(keyLight)

    const rimLight = new THREE.SpotLight('#66a3ff', 0.7, 26, 0.45, 0.9)
    rimLight.position.set(-9, 5, 8)
    scene.add(rimLight)

    const cluster = new THREE.Group()
    scene.add(cluster)

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(80, 80),
      new THREE.MeshStandardMaterial({ color: '#191c28', roughness: 0.98, metalness: 0.04 })
    )
    floor.rotation.x = -Math.PI / 2
    floor.position.y = -4.2
    floor.receiveShadow = true
    scene.add(floor)

    const partLong = new THREE.BoxGeometry(1.35, 0.36, 0.36)
    const partMid = new THREE.BoxGeometry(0.36, 1.35, 0.36)
    const partDepth = new THREE.BoxGeometry(0.36, 0.36, 1.35)
    const connectorMaterials = [
      new THREE.MeshStandardMaterial({ color: '#444', roughness: 0.1, metalness: 0.2 }),
      new THREE.MeshStandardMaterial({ color: '#444', roughness: 0.75, metalness: 0.2 }),
      new THREE.MeshStandardMaterial({ color: '#444', roughness: 0.75, metalness: 0.2 }),
      new THREE.MeshStandardMaterial({ color: '#fff', roughness: 0.1, metalness: 0.2 }),
      new THREE.MeshStandardMaterial({ color: '#fff', roughness: 0.75, metalness: 0.2 }),
      new THREE.MeshStandardMaterial({ color: '#fff', roughness: 0.1, metalness: 0.2 }),
      new THREE.MeshStandardMaterial({ color: ACCENTS[0], roughness: 0.1, metalness: 0.2 }),
      new THREE.MeshStandardMaterial({ color: ACCENTS[0], roughness: 0.75, metalness: 0.2 }),
      new THREE.MeshStandardMaterial({ color: ACCENTS[0], roughness: 0.1, metalness: 0.2 }),
    ]

    type ConnectorBody = {
      group: THREE.Group
      velocity: THREE.Vector3
      spin: THREE.Vector3
      anchor: THREE.Vector3
    }

    const connectors: ConnectorBody[] = []
    const connectorPartRefs: THREE.Mesh[] = []

    const makeConnector = (material: THREE.MeshStandardMaterial) => {
      const item = new THREE.Group()
      const x = new THREE.Mesh(partLong, material)
      const y = new THREE.Mesh(partMid, material)
      const z = new THREE.Mesh(partDepth, material)
      x.castShadow = true
      y.castShadow = true
      z.castShadow = true
      x.receiveShadow = true
      y.receiveShadow = true
      z.receiveShadow = true
      item.add(x, y, z)
      connectorPartRefs.push(x, y, z)
      return item
    }

    for (let i = 0; i < 9; i += 1) {
      const connector = makeConnector(connectorMaterials[i])
      const anchor = new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(8),
        THREE.MathUtils.randFloatSpread(7),
        THREE.MathUtils.randFloatSpread(8)
      )
      connector.position.copy(anchor)
      connector.rotation.set(
        THREE.MathUtils.randFloatSpread(Math.PI),
        THREE.MathUtils.randFloatSpread(Math.PI),
        THREE.MathUtils.randFloatSpread(Math.PI)
      )
      cluster.add(connector)
      connectors.push({
        group: connector,
        anchor,
        velocity: new THREE.Vector3(THREE.MathUtils.randFloatSpread(0.01), THREE.MathUtils.randFloatSpread(0.01), THREE.MathUtils.randFloatSpread(0.01)),
        spin: new THREE.Vector3(0.25 + Math.random() * 0.35, 0.2 + Math.random() * 0.35, 0.2 + Math.random() * 0.3)
      })
    }

    const heroMaterial = new THREE.MeshPhysicalMaterial({
      color: '#f8f8ff',
      roughness: 0.05,
      metalness: 0.15,
      transmission: 1,
      thickness: 0.4,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      ior: 1.45,
      transparent: true,
      opacity: 0.95,
    })
    const hero = new THREE.Mesh(new THREE.IcosahedronGeometry(0.82, 3), heroMaterial)
    hero.position.set(3, 2.2, 1.8)
    hero.castShadow = true
    cluster.add(hero)

    const accentPoint = new THREE.PointLight(ACCENTS[0], 2.8, 5)
    cluster.add(accentPoint)

    let accentIndex = 0
    const onClick = () => {
      accentIndex = (accentIndex + 1) % ACCENTS.length
      accentPoint.color.set(ACCENTS[accentIndex])
      for (let i = 6; i < connectorMaterials.length; i += 1) {
        connectorMaterials[i].color.set(ACCENTS[accentIndex])
      }
    }
    root.addEventListener('click', onClick)

    const pointer = new THREE.Vector2(0, 0)
    const pointerTarget = new THREE.Vector3()
    const pointerWorld = new THREE.Vector3()
    const onPointerMove = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect()
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
    }
    window.addEventListener('pointermove', onPointerMove)

    const resize = () => {
      const width = root.clientWidth
      const height = root.clientHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener('resize', resize)

    const clock = new THREE.Clock()
    let raf = 0
    const animate = () => {
      const delta = Math.min(clock.getDelta(), 1 / 30)
      const elapsed = clock.getElapsedTime()

      pointerTarget.set(pointer.x * 4, pointer.y * 2.5, 0)
      pointerWorld.set(pointer.x, pointer.y, 0.4).unproject(camera)
      pointerWorld.z = 0

      cluster.rotation.y += (pointerTarget.x * 0.055 - cluster.rotation.y) * 0.06
      cluster.rotation.x += (pointerTarget.y * 0.045 - cluster.rotation.x) * 0.06

      connectors.forEach((body) => {
        const toAnchor = body.anchor.clone().sub(body.group.position).multiplyScalar(0.03)
        body.velocity.addScaledVector(toAnchor, delta * 5)

        const fromPointer = body.group.position.clone().sub(pointerWorld)
        const distance = Math.max(0.8, fromPointer.length())
        if (distance < 3.8) {
          body.velocity.addScaledVector(fromPointer.normalize(), (3.8 - distance) * 0.018)
        }

        body.velocity.multiplyScalar(0.955)
        body.group.position.addScaledVector(body.velocity, delta * 60)

        body.group.rotation.x += body.spin.x * delta
        body.group.rotation.y += body.spin.y * delta
        body.group.rotation.z += body.spin.z * delta
      })

      hero.position.set(2.8 + Math.sin(elapsed * 1.2) * 0.4, 1.9 + Math.cos(elapsed * 1.4) * 0.34, 1.6 + Math.sin(elapsed * 0.8) * 0.25)
      hero.rotation.x = elapsed * 0.62
      hero.rotation.y = elapsed * 0.74
      accentPoint.position.copy(hero.position)

      renderer.render(scene, camera)
      raf = window.requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      root.removeEventListener('click', onClick)

      partLong.dispose()
      partMid.dispose()
      partDepth.dispose()
      connectorPartRefs.length = 0
      connectorMaterials.forEach((material) => material.dispose())
      hero.geometry.dispose()
      heroMaterial.dispose()
      floor.geometry.dispose()
      ;(floor.material as THREE.Material).dispose()

      renderer.dispose()
      if (renderer.domElement.parentNode === root) {
        root.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className={className} />
}
