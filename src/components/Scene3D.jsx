import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei'
import * as THREE from 'three'

const GalaxySphere = () => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[2, 128, 128]} scale={1.5}>
        <MeshDistortMaterial
          color="#dc2626"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          emissive="#7f1d1d"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </Float>
  )
}

const NebulaParticles = () => {
  const particlesRef = useRef()
  const count = 800

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const cols = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      // Spread particles in a galaxy disk shape
      const angle = Math.random() * Math.PI * 2
      const radius = Math.random() * 15 + 3
      const height = (Math.random() - 0.5) * 4
      
      pos[i * 3] = Math.cos(angle) * radius
      pos[i * 3 + 1] = height
      pos[i * 3 + 2] = Math.sin(angle) * radius
      
      // Color variation: red, cream, dim white
      const colorChoice = Math.random()
      if (colorChoice < 0.4) {
        // Red tones
        cols[i * 3] = 0.86
        cols[i * 3 + 1] = 0.15 + Math.random() * 0.1
        cols[i * 3 + 2] = 0.15 + Math.random() * 0.1
      } else if (colorChoice < 0.7) {
        // Cream/warm tones
        cols[i * 3] = 0.99
        cols[i * 3 + 1] = 0.96
        cols[i * 3 + 2] = 0.89
      } else {
        // Dim white/gray
        const v = 0.5 + Math.random() * 0.3
        cols[i * 3] = v
        cols[i * 3 + 1] = v
        cols[i * 3 + 2] = v
      }
    }
    return [pos, cols]
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

const OrbitingRing = () => {
  const ringRef = useRef()

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI * 0.4
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <mesh ref={ringRef} position={[0, 0, 0]}>
      <torusGeometry args={[3.5, 0.01, 16, 100]} />
      <meshBasicMaterial color="#dc2626" transparent opacity={0.3} />
    </mesh>
  )
}

const OrbitingRing2 = () => {
  const ringRef = useRef()

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI * 0.6
      ringRef.current.rotation.z = -state.clock.elapsedTime * 0.15
      ringRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <mesh ref={ringRef} position={[0, 0, 0]}>
      <torusGeometry args={[4.2, 0.005, 16, 100]} />
      <meshBasicMaterial color="#fdf6e3" transparent opacity={0.15} />
    </mesh>
  )
}

const FloatingDebris = () => {
  const debrisRef = useRef()
  
  useFrame((state) => {
    if (debrisRef.current) {
      debrisRef.current.rotation.x = state.clock.elapsedTime * 0.4
      debrisRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={3}>
      <mesh ref={debrisRef} position={[5, 2, -3]} scale={0.3}>
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial
          color="#dc2626"
          wireframe
          transparent
          opacity={0.2}
          emissive="#dc2626"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  )
}

const FloatingDebris2 = () => {
  const debrisRef = useRef()
  
  useFrame((state) => {
    if (debrisRef.current) {
      debrisRef.current.rotation.x = state.clock.elapsedTime * 0.2
      debrisRef.current.rotation.z = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={debrisRef} position={[-4, -2, -4]} scale={0.2}>
        <icosahedronGeometry args={[1]} />
        <meshStandardMaterial
          color="#fdf6e3"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>
    </Float>
  )
}

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Lighting - dramatic and moody */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} color="#fdf6e3" />
        <pointLight position={[-5, -5, -5]} color="#dc2626" intensity={1} distance={20} />
        <pointLight position={[5, 3, 2]} color="#f87171" intensity={0.5} distance={15} />
        <pointLight position={[0, -3, 5]} color="#fdf6e3" intensity={0.2} distance={10} />
        
        {/* Main sphere */}
        <GalaxySphere />
        
        {/* Orbiting rings */}
        <OrbitingRing />
        <OrbitingRing2 />
        
        {/* Galaxy particles */}
        <NebulaParticles />
        
        {/* Floating debris */}
        <FloatingDebris />
        <FloatingDebris2 />
        
        {/* Background stars - deep space */}
        <Stars
          radius={80}
          depth={60}
          count={2000}
          factor={3}
          saturation={0}
          fade
          speed={0.5}
        />
      </Canvas>
    </div>
  )
}

export default Scene3D
