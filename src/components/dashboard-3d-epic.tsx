'use client'

import { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { 
  Sphere, 
  Box, 
  Torus, 
  Octahedron,
  Text3D,
  Center,
  Float,
  OrbitControls,
  Environment,
  Lightformer,
  useTexture
} from '@react-three/drei'
import { motion } from 'framer-motion'
import { FaUser, FaCogs, FaProjectDiagram, FaEnvelope, FaGraduationCap } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import * as THREE from 'three'

// Componente de geometría 3D flotante
const FloatingGeometry = ({ position, geometry, color, speed = 1 }: any) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed
      meshRef.current.rotation.y += 0.01 * speed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {geometry === 'sphere' && <Sphere args={[0.5, 32, 32]} />}
        {geometry === 'box' && <Box args={[0.8, 0.8, 0.8]} />}
        {geometry === 'torus' && <Torus args={[0.4, 0.2, 16, 32]} />}
        {geometry === 'octahedron' && <Octahedron args={[0.6]} />}
        <meshStandardMaterial 
          color={color} 
          metalness={0.8} 
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  )
}

// Partículas 3D interactivas
const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null!)
  const { mouse } = useThree()
  
  const particleCount = 1000
  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    
    const color = new THREE.Color()
    color.setHSL(0.6 + Math.random() * 0.2, 0.8, 0.6)
    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
  }
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001
      pointsRef.current.rotation.x += 0.0005
      
      // Efecto de mouse
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        const x = positions[i3]
        const y = positions[i3 + 1]
        const z = positions[i3 + 2]
        
        const mouseX = mouse.x * 10
        const mouseY = mouse.y * 10
        
        const distance = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2)
        if (distance < 3) {
          positions[i3 + 2] += (3 - distance) * 0.1
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} vertexColors transparent opacity={0.8} />
    </points>
  )
}

// Texto 3D flotante (simplificado)
const FloatingText3D = ({ children, position, color = '#8B5CF6' }: any) => {
  const textRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1
    }
  })
  
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Center position={position}>
        <Text3D
          ref={textRef}
          size={0.5}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          {children}
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </Text3D>
      </Center>
    </Float>
  )
}

// Icono 3D interactivo
const Icon3D = ({ icon: Icon, position, delay, href, tooltip, mousePosition }: any) => {
  const router = useRouter()
  const [hovered, setHovered] = useState(false)
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.scale.setScalar(hovered ? 1.2 : 1)
      
      // Efecto de mouse
      const distance = Math.sqrt(
        Math.pow(mousePosition.x - position[0], 2) + 
        Math.pow(mousePosition.y - position[1], 2)
      )
      const influence = Math.max(0, 1 - distance / 5)
      meshRef.current.position.z = influence * 2
    }
  })
  
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => router.push(href)}
      >
        <Sphere args={[0.3, 16, 16]}>
          <meshStandardMaterial 
            color={hovered ? '#60A5FA' : '#8B5CF6'} 
            metalness={0.8} 
            roughness={0.2}
            emissive={hovered ? '#60A5FA' : '#8B5CF6'}
            emissiveIntensity={hovered ? 0.5 : 0.2}
          />
        </Sphere>
      </mesh>
    </Float>
  )
}

// Componente principal del Canvas 3D
const Scene3D = ({ mousePosition }: { mousePosition: { x: number; y: number } }) => {
  return (
    <>
      {/* Iluminación épica */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#8B5CF6" intensity={0.5} />
      <pointLight position={[10, 10, 5]} color="#60A5FA" intensity={0.5} />
      
      {/* Partículas 3D */}
      <ParticleField />
      
      {/* Geometrías flotantes */}
      <FloatingGeometry position={[-3, 2, 0]} geometry="sphere" color="#8B5CF6" />
      <FloatingGeometry position={[3, -2, 0]} geometry="box" color="#60A5FA" />
      <FloatingGeometry position={[-2, -3, 1]} geometry="torus" color="#EC4899" />
      <FloatingGeometry position={[2, 3, -1]} geometry="octahedron" color="#10B981" />
      
      {/* Texto 3D */}
      <FloatingText3D position={[0, 1, 0]} color="#FFFFFF">
        IANCAMPS.DEV
      </FloatingText3D>
      
      {/* Iconos 3D interactivos */}
      <Icon3D 
        icon={FaUser} 
        position={[-2, 0, 0]} 
        href="/about" 
        tooltip="Sobre mí"
        mousePosition={mousePosition}
      />
      <Icon3D 
        icon={FaCogs} 
        position={[2, 0, 0]} 
        href="/services" 
        tooltip="Servicios"
        mousePosition={mousePosition}
      />
      <Icon3D 
        icon={FaProjectDiagram} 
        position={[-1, -1.5, 0]} 
        href="/projects" 
        tooltip="Proyectos"
        mousePosition={mousePosition}
      />
      <Icon3D 
        icon={FaGraduationCap} 
        position={[1, -1.5, 0]} 
        href="/formation" 
        tooltip="Academia"
        mousePosition={mousePosition}
      />
      <Icon3D 
        icon={FaEnvelope} 
        position={[0, -2.5, 0]} 
        href="/contact" 
        tooltip="Contacto"
        mousePosition={mousePosition}
      />
      
      {/* Controles de cámara */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  )
}

// Componente principal del dashboard 3D épico
export const Dashboard3DEpic = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      setMousePosition({ x, y })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  if (!mounted) {
    return (
      <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 flex items-center justify-center">
        <div className="text-white text-xl">Cargando experiencia 3D...</div>
      </div>
    )
  }
  
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* Canvas 3D */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene3D mousePosition={mousePosition} />
        </Suspense>
      </Canvas>
      
      {/* Overlay con información */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="flex flex-col items-center justify-center h-full">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-4"
              style={{
                textShadow: '0 0 30px rgba(139, 92, 246, 0.8)',
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)'
              }}
            >
              IANCAMPS.DEV
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Desarrollo web, automatización y datos para empresas modernas
            </motion.p>
          </motion.div>
          
          {/* Instrucciones */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <p className="text-sm mb-2">Mueve el mouse para interactuar</p>
            <p className="text-xs">Haz clic en las esferas para navegar</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
