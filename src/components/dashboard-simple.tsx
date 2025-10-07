'use client'

import { motion } from 'framer-motion'
import { FaUser, FaCogs, FaProjectDiagram, FaEnvelope, FaGraduationCap } from 'react-icons/fa'
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
      className="absolute cursor-pointer z-20"
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
        <div className="w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-400/30 hover:bg-purple-500/30 transition-all duration-300">
          <Icon 
            size={32} 
            className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
          />
        </div>
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/90 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap border border-purple-400/30">
          {tooltip}
        </div>
      </div>
    </motion.div>
  )
}

export const DashboardSimple = () => {
  const icons = [
    {
      icon: FaUser,
      position: { x: 15, y: 20 },
      delay: 0.2,
      href: '/about',
      tooltip: 'Sobre mí'
    },
    {
      icon: FaCogs,
      position: { x: 85, y: 15 },
      delay: 0.3,
      href: '/services',
      tooltip: 'Servicios'
    },
    {
      icon: FaProjectDiagram,
      position: { x: 10, y: 70 },
      delay: 0.4,
      href: '/projects',
      tooltip: 'Proyectos'
    },
    {
      icon: FaGraduationCap,
      position: { x: 85, y: 75 },
      delay: 0.5,
      href: 'https://cursos.iancamps.dev',
      tooltip: 'Formación'
    },
    {
      icon: FaEnvelope,
      position: { x: 50, y: 85 },
      delay: 0.6,
      href: '/contact',
      tooltip: 'Contacto'
    }
  ]

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Fondo animado */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-indigo-900/30"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(96, 165, 250, 0.2))",
              "linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(139, 92, 246, 0.2))",
              "linear-gradient(225deg, rgba(139, 92, 246, 0.2), rgba(96, 165, 250, 0.2))",
              "linear-gradient(315deg, rgba(96, 165, 250, 0.2), rgba(139, 92, 246, 0.2))",
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Partículas */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6" style={{ textShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}>
            IANCAMPS.DEV
          </h1>
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
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
