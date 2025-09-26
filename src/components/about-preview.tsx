'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Calendar, Award } from 'lucide-react'
import { getOwner, getExperience, getEducation } from '@/lib/content'
import Link from 'next/link'

export function AboutPreview() {
  const owner = getOwner()
  const experience = getExperience()
  const education = getEducation()

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 mb-6">
              Sobre <span className="gradient-text">mí</span>
            </h2>
            <p className="body-large mb-8">
              {owner.bio}
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">{owner.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">
                  {experience[0]?.period || '2023 - Presente'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">
                  {education[0]?.degree || 'Ingeniería Informática'}
                </span>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Conoce más sobre mí
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="glass rounded-2xl p-6 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl font-bold text-primary mb-2"
              >
                8+
              </motion.div>
              <p className="text-sm text-muted-foreground">Proyectos Completados</p>
            </div>
            
            <div className="glass rounded-2xl p-6 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-3xl font-bold text-primary mb-2"
              >
                3+
              </motion.div>
              <p className="text-sm text-muted-foreground">Años de Experiencia</p>
            </div>
            
            <div className="glass rounded-2xl p-6 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-3xl font-bold text-primary mb-2"
              >
                10+
              </motion.div>
              <p className="text-sm text-muted-foreground">Tecnologías</p>
            </div>
            
            <div className="glass rounded-2xl p-6 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-3xl font-bold text-primary mb-2"
              >
                100%
              </motion.div>
              <p className="text-sm text-muted-foreground">Satisfacción</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
