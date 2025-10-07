'use client'

import { motion } from 'framer-motion'
import { FaUser, FaCogs, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

const FloatingIcon = ({ 
  icon: Icon, 
  position, 
  delay, 
  href, 
  tooltip 
}: { 
  icon: any
  position: { x: number; y: number }
  delay: number
  href: string
  tooltip: string
}) => {
  const router = useRouter()

  return (
    <motion.div
      className="floating-icon"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -10, 0]
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
      whileHover={{ 
        scale: 1.2,
        transition: { duration: 0.2 }
      }}
      onClick={() => router.push(href)}
      title={tooltip}
    >
      <div className="relative group">
        <Icon 
          size={48} 
          className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
        />
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
          {tooltip}
        </div>
      </div>
    </motion.div>
  )
}

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradiente de fondo animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(96, 165, 250, 0.1))",
            "linear-gradient(135deg, rgba(96, 165, 250, 0.1), rgba(139, 92, 246, 0.1))",
            "linear-gradient(225deg, rgba(139, 92, 246, 0.1), rgba(96, 165, 250, 0.1))",
            "linear-gradient(315deg, rgba(96, 165, 250, 0.1), rgba(139, 92, 246, 0.1))",
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Partículas flotantes */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Círculos decorativos */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple-400/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-blue-400/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}

export const DashboardAlternative = () => {
  const icons = [
    {
      icon: FaUser,
      position: { x: 20, y: 30 },
      delay: 0.2,
      href: '/about',
      tooltip: 'Sobre mí'
    },
    {
      icon: FaCogs,
      position: { x: 80, y: 25 },
      delay: 0.4,
      href: '/services',
      tooltip: 'Servicios'
    },
    {
      icon: FaProjectDiagram,
      position: { x: 15, y: 70 },
      delay: 0.6,
      href: '/projects',
      tooltip: 'Proyectos'
    },
    {
      icon: FaEnvelope,
      position: { x: 85, y: 75 },
      delay: 0.8,
      href: '/contact',
      tooltip: 'Contacto'
    }
  ]

  return (
    <div className="dashboard-container">
      {/* Fondo animado */}
      <AnimatedBackground />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white logo-glow mb-6">
            IANCAMPS.DEV
          </h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Desarrollo web, automatización y datos para empresas modernas
          </motion.p>
        </motion.div>

        {/* Iconos flotantes */}
        {icons.map((iconData, index) => (
          <FloatingIcon key={index} {...iconData} />
        ))}

        {/* Indicador de scroll */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-sm mb-2">Explora</span>
            <motion.div
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
