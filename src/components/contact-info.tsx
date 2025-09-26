'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin, Clock, Phone } from 'lucide-react'
import { getOwner } from '@/lib/content'

export function ContactInfo() {
  const owner = getOwner()

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: owner.email,
      href: `mailto:${owner.email}`,
      description: 'Respuesta en 24 horas'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'iancamps90',
      href: owner.github,
      description: 'Ver mis proyectos'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'iancamps',
      href: owner.linkedin,
      description: 'Conecta conmigo'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: owner.location,
      href: '#',
      description: 'Disponible remotamente'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-semibold mb-6">Información de contacto</h2>
        <p className="text-muted-foreground mb-8">
          Estoy disponible para proyectos freelance, colaboraciones y oportunidades de trabajo. 
          No dudes en contactarme a través de cualquiera de estos medios.
        </p>
      </div>

      <div className="space-y-6">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.title}
            href={method.href}
            target={method.href.startsWith('http') ? '_blank' : undefined}
            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <method.icon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{method.title}</h3>
              <p className="text-muted-foreground">{method.value}</p>
              <p className="text-sm text-muted-foreground">{method.description}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="glass rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Clock className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Disponibilidad</h3>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>• Lunes a Viernes: 9:00 - 18:00</p>
          <p>• Respuesta a emails: 24 horas</p>
          <p>• Proyectos freelance: Disponible</p>
          <p>• Colaboraciones: Abierto a propuestas</p>
        </div>
      </div>
    </motion.div>
  )
}
