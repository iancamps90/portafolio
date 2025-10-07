'use client'

import { motion } from 'framer-motion'
import { FaArrowRight, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

export const ServicesCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="heading-2 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ¿Listo para <span className="gradient-text-purple">transformar</span> tu empresa?
          </motion.h2>
          
          <motion.p
            className="body-large mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            No importa el tamaño de tu proyecto. Desde una landing page hasta 
            un sistema completo de automatización, tengo la experiencia para hacerlo realidad.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium flex items-center gap-3 hover:bg-primary/90 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const subject = encodeURIComponent('Consulta sobre servicios - IanCamps.dev')
                const body = encodeURIComponent('Hola Ian,\n\nMe gustaría conocer más sobre tus servicios y discutir un posible proyecto.\n\nDetalles:\n- Tipo de proyecto:\n- Descripción:\n- Plazo:\n\nGracias.')
                window.open(`mailto:ian@iancamps.dev?subject=${subject}&body=${body}`)
              }}
            >
              <FaEnvelope className="w-5 h-5" />
              Enviar email
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>

            <motion.button
              className="group bg-green-600 text-white px-8 py-4 rounded-lg font-medium flex items-center gap-3 hover:bg-green-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.open('https://wa.me/34612345678?text=Hola%20Ian,%20me%20interesa%20conocer%20más%20sobre%20tus%20servicios', '_blank')
              }}
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-12 p-6 bg-card border border-border rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-4">¿Por qué elegir IanCamps.dev?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-medium mb-2">Entrega rápida</h4>
                <p className="text-sm text-muted-foreground">Proyectos entregados en tiempo y forma</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-medium mb-2">Enfoque en resultados</h4>
                <p className="text-sm text-muted-foreground">Soluciones que impulsan tu negocio</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="font-medium mb-2">Soporte continuo</h4>
                <p className="text-sm text-muted-foreground">Acompañamiento durante todo el proceso</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
