'use client'

// Imports necesarios para el dashboard ultra interactivo
import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { FaUser, FaCogs, FaProjectDiagram, FaEnvelope, FaGraduationCap } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

// Componente de icono flotante ultra interactivo
const FloatingIcon = ({ 
  icon: Icon, 
  position, 
  mobilePosition,
  delay, 
  href, 
  tooltip,
  mousePosition
}: { 
  icon: any
  position: { x: number; y: number }
  mobilePosition: { x: number; y: number }
  delay: number
  href: string
  tooltip: string
  mousePosition: { x: number; y: number }
}) => {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)
  const iconRef = useRef<HTMLDivElement>(null)

  // Calcular distancia del icono al mouse para efectos interactivos
  const distance = useRef(0)
  useEffect(() => {
    if (iconRef.current) {
      const rect = iconRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const dx = mousePosition.x - centerX
      const dy = mousePosition.y - centerY
      distance.current = Math.sqrt(dx * dx + dy * dy)
    }
  }, [mousePosition])

  // Estados para efectos de escala y rotación basados en proximidad del mouse
  const [scale, setScale] = useState(1)
  const [rotate, setRotate] = useState(0)

  useEffect(() => {
    const maxDistance = 200
    const influence = Math.max(0, 1 - distance.current / maxDistance)
    setScale(1 + influence * 0.3)
    setRotate(influence * 10)
  }, [mousePosition])

  return (
    <motion.div
      ref={iconRef}
      className="absolute cursor-pointer z-20"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `scale(${scale}) rotate(${rotate}deg)`
      }}
      // Animaciones de entrada y flotación
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -10, 0] // Efecto de flotación continua
      }}
      transition={{
        opacity: { delay, duration: 0.5 },
        scale: { delay, duration: 0.5 },
        y: {
          delay: delay + 0.5,
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      // Efecto de hover más grande
      whileHover={{ 
        scale: 1.3,
        transition: { duration: 0.2 }
      }}
      onClick={() => router.push(href)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      title={tooltip}
    >
      <div className="relative group">
        {/* Contenedor del icono con efectos visuales (responsive) */}
        <motion.div 
          className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500/30 to-blue-500/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-400/50 hover:border-purple-300 transition-all duration-300 relative overflow-hidden"
          style={{
            boxShadow: isHovered 
              ? "0 0 50px rgba(139, 92, 246, 0.8), 0 0 100px rgba(96, 165, 250, 0.4)"
              : "0 0 20px rgba(139, 92, 246, 0.3)"
          }}
        >
          {/* Efecto de glitch en hover */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-green-500/20 to-blue-500/20"
              animate={{
                opacity: [0, 1, 0],
                x: [-2, 2, -2, 2, 0]
              }}
              transition={{
                duration: 0.1,
                repeat: 3
              }}
            />
          )}
          
          {/* Icono principal (responsive) */}
          <Icon 
            size={28} 
            className="md:w-9 md:h-9 text-purple-300 hover:text-white transition-colors duration-300 relative z-10"
          />
        </motion.div>
        
        {/* Tooltip que aparece en hover (responsive) */}
        <motion.div
          className="absolute -bottom-16 md:-bottom-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/90 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm whitespace-nowrap border border-purple-400/30"
          animate={{
            y: isHovered ? -5 : 0
          }}
        >
          {tooltip}
        </motion.div>
      </div>
    </motion.div>
  )
}

// Componente para efecto de texto que se escribe automáticamente
const TypingText = ({ text, delay = 0, speed = 50 }: { text: string; delay?: number; speed?: number }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }
    }, speed + delay)

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay, speed])

  return (
    <span>
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-purple-400"
      >
        |
      </motion.span>
    </span>
  )
}

// Campo de partículas interactivas que reaccionan al mouse (responsive)
const ParticleField = ({ mousePosition, isMobile }: { mousePosition: { x: number; y: number }; isMobile: boolean }) => {
  // Generar partículas (menos en móvil para mejor rendimiento)
  const particleCount = isMobile ? 25 : 50
  
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * (isMobile ? 3 : 4) + 1,
    speed: Math.random() * 2 + 0.5
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => {
        // Calcular distancia de la partícula al mouse
        const distance = Math.sqrt(
          Math.pow(mousePosition.x - particle.x, 2) + 
          Math.pow(mousePosition.y - particle.y, 2)
        )
        const influence = Math.max(0, 1 - distance / 300)
        
        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              opacity: 0.3 + influence * 0.7
            }}
            animate={{
              x: influence * 20 * (Math.random() - 0.5),
              y: influence * 20 * (Math.random() - 0.5),
              scale: 1 + influence * 0.5
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut"
            }}
          />
        )
      })}
    </div>
  )
}

// Componente de ondas animadas de fondo
const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-full"
          style={{
            background: `linear-gradient(45deg, 
              rgba(139, 92, 246, ${0.1 - i * 0.03}), 
              rgba(96, 165, 250, ${0.1 - i * 0.03}), 
              rgba(147, 51, 234, ${0.1 - i * 0.03})
            )`,
            clipPath: `polygon(0 ${100 - i * 20}%, 100% ${80 - i * 15}%, 100% 100%, 0% 100%)`,
            opacity: 0.3
          }}
          animate={{
            x: [0, 100, 0]
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

// Hook para detectar si es móvil
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])
  
  return isMobile
}

// Componente principal del dashboard ultra interactivo
export const DashboardUltra = () => {
  const isMobile = useIsMobile()
  
  // Estados para tracking del mouse
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 })

  // Event listener para tracking del mouse (solo en desktop)
  useEffect(() => {
    if (isMobile) return
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePosition({ x, y })
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY, isMobile])

  // Configuración de los iconos flotantes (responsive)
  const icons = [
    {
      icon: FaUser,
      position: { x: 15, y: 20 },
      mobilePosition: { x: 20, y: 25 },
      delay: 0.2,
      href: '/about',
      tooltip: 'Sobre mí'
    },
    {
      icon: FaCogs,
      position: { x: 85, y: 15 },
      mobilePosition: { x: 80, y: 20 },
      delay: 0.3,
      href: '/services',
      tooltip: 'Servicios'
    },
    {
      icon: FaProjectDiagram,
      position: { x: 10, y: 70 },
      mobilePosition: { x: 15, y: 75 },
      delay: 0.4,
      href: '/projects',
      tooltip: 'Proyectos'
    },
    {
      icon: FaGraduationCap,
      position: { x: 85, y: 75 },
      mobilePosition: { x: 80, y: 80 },
      delay: 0.5,
      href: '/formation',
      tooltip: 'Academia'
    },
    {
      icon: FaEnvelope,
      position: { x: 50, y: 85 },
      mobilePosition: { x: 50, y: 90 },
      delay: 0.6,
      href: '/contact',
      tooltip: 'Contacto'
    }
  ]

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* Fondo con ondas animadas */}
      <WaveBackground />
      
      {/* Campo de partículas interactivas */}
      <ParticleField mousePosition={mousePosition} isMobile={isMobile} />
      
      {/* Gradiente animado de fondo más épico con múltiples colores */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 80%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 60%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)",
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Contenido principal centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Título principal con efecto typing (responsive) */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 md:mb-6 px-4"
            style={{
              textShadow: '0 0 30px rgba(139, 92, 246, 0.5)'
            }}
          >
            <TypingText text="IANCAMPS.DEV" delay={500} speed={50} />
          </motion.h1>
          
          {/* Subtítulo con efecto typing más rápido (responsive) */}
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <TypingText text="Desarrollo web, automatización y datos para empresas modernas" delay={2000} speed={15} />
          </motion.p>
        </motion.div>

        {/* Iconos flotantes ultra interactivos (responsive) */}
        {icons.map((iconData, index) => (
          <FloatingIcon 
            key={index} 
            {...iconData} 
            position={isMobile ? iconData.mobilePosition : iconData.position}
            mousePosition={mousePosition}
          />
        ))}

      </div>
    </div>
  )
}
