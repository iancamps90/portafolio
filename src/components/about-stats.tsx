'use client'

import { motion } from 'framer-motion'
import { getProjects } from '@/lib/content'

export function AboutStats() {
  const projects = getProjects()
  const completedProjects = projects.filter(p => p.status === 'completado').length
  const inProgressProjects = projects.filter(p => p.status === 'en desarrollo').length

  const stats = [
    { label: 'Proyectos Completados', value: completedProjects, icon: '🚀' },
    { label: 'En Desarrollo', value: inProgressProjects, icon: '⚡' },
    { label: 'Tecnologías', value: 20, icon: '🛠️' },
    { label: 'Equipos Coordinados', value: 6, icon: '👥' },
  ]

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-6">
            Mis <span className="gradient-text">Estadísticas</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="text-3xl font-bold text-primary mb-2"
              >
                {stat.value}+
              </motion.div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
