'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Mail, Phone } from 'lucide-react'

export function ContactHero() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="heading-1 mb-6">
            <span className="gradient-text">Contacta</span> conmigo
          </h1>
          <p className="body-large max-w-2xl mx-auto mb-8">
            ¿Tienes un proyecto en mente? ¿Quieres colaborar? 
            Estoy siempre interesado en nuevas oportunidades y desafíos.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <MessageCircle className="w-5 h-5 text-primary" />
              <span>Respuesta rápida</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span>iancamps90@gmail.com</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span>Disponible para proyectos</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
