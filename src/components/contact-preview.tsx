'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, ArrowRight } from 'lucide-react'
import { getOwner } from '@/lib/content'
import Link from 'next/link'

export function ContactPreview() {
  const owner = getOwner()

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="heading-2 mb-6">
            ¿Tienes un <span className="gradient-text">proyecto</span> en mente?
          </h2>
          <p className="body-large mb-12 max-w-2xl mx-auto">
            Estoy siempre interesado en nuevos desafíos y oportunidades. 
            Si tienes un proyecto que te gustaría discutir, no dudes en contactarme.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href={`mailto:${owner.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 btn-primary px-8 py-3 rounded-lg font-medium transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              Enviar Email
            </motion.a>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 btn-secondary px-8 py-3 rounded-lg font-medium transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              Formulario de Contacto
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
