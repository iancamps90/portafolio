'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa'
import { ContactModalSimple } from './contact-modal-simple'

export const ContactCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const contactMethods = [
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      link: 'https://wa.me/message/7HZMOL4IAX73H1',
      color: 'from-pink-500 to-red-500',
      description: 'Chat directo'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      link: 'mailto:ian@iancamps.dev',
      color: 'from-purple-500 to-pink-500',
      description: 'ian@iancamps.dev'
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      link: 'https://github.com/iancamps90',
      color: 'from-blue-400 to-cyan-500',
      description: 'github.com/iancamps90'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/ian-camps-gomez-1a60a9126',
      color: 'from-orange-400 to-yellow-500',
      description: 'linkedin.com/in/ian-camps-gomez'
    }
  ]

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Mega Tarjeta Digital */}
      <motion.div
        className="bg-card border border-border rounded-3xl overflow-hidden shadow-2xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Header con gradiente */}
        <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 p-8 text-center">
          {/* Logo circular */}
          <motion.div
            className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex flex-col items-center justify-center mx-auto mb-4 border-2 border-white/20"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-white font-bold text-sm">IANCAMPS</span>
            <span className="text-white font-bold text-xs">.DEV</span>
            <span className="text-white/80 text-xs">DESARROLLO WEB</span>
          </motion.div>
          
          {/* Nombre */}
          <h2 className="text-3xl font-bold text-white mb-2">iancamps.dev</h2>
          <p className="text-white/90 text-lg">Desarrollo web, automatización y datos para empresas modernas</p>
        </div>

        {/* Enlaces de contacto */}
        <div className="p-6 space-y-4">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-all duration-200 group"
              whileHover={{ x: 5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-foreground">{method.title}</h3>
                <p className="text-muted-foreground">{method.description}</p>
              </div>
              <FaExternalLinkAlt className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </motion.a>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="p-6 bg-muted/30 border-t border-border">
          <motion.button
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsModalOpen(true)}
          >
            <FaEnvelope className="w-4 h-4" />
            Solicita presupuesto
          </motion.button>
        </div>
      </motion.div>

      {/* Modal */}
      <ContactModalSimple 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </motion.div>
  )
}
