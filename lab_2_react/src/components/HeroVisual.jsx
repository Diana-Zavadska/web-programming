import { useRef, useMemo, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleTrail({ isInside }) {
  const mesh = useRef()
  const { mouse, viewport } = useThree()
  
  const count = 400 
  const dummy = useMemo(() => new THREE.Object3D(), [])
  
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      temp.push({
        x: 0, y: 0, z: 0,
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05,
        life: 0,
        size: 0.15 + Math.random() * 0.2 
      })
    }
    return temp
  }, [count])

  useFrame(() => {
    particles.forEach((p, i) => {
      if (p.life <= 0) {
        if (isInside) {
          p.x = (mouse.x * viewport.width) / 2
          p.y = (mouse.y * viewport.height) / 2
          p.life = 0.8 + Math.random() 
          p.vx = (Math.random() - 0.5) * 0.1
          p.vy = (Math.random() - 0.5) * 0.1
        }
      } else {
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.02 
      }

      dummy.position.set(p.x, p.y, 0)
      const s = Math.max(0, p.life * p.size) 
      dummy.scale.set(s, s, s)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.2, 8, 8]} />
      <meshBasicMaterial color="#60a5fa" transparent opacity={0.9} />
    </instancedMesh>
  )
}

export default function HeroVisual() {
  const [isInside, setIsInside] = useState(false)

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-transparent pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 15], fov: 50 }}
        onPointerOver={() => setIsInside(true)}
        onPointerOut={() => setIsInside(false)}
        onPointerLeave={() => setIsInside(false)}
        style={{ pointerEvents: 'auto' }} 
      >
        <ParticleTrail isInside={isInside} />
      </Canvas>
    </div>
  )
}
