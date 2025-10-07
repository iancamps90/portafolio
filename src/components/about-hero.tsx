'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Mail, Github, Linkedin, Download } from 'lucide-react'
import { getOwner } from '@/lib/content'
import { CVDownload } from '@/components/cv-download'

export function AboutHero() {
  const owner = getOwner()

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-1 mb-6">
              Sobre <span className="gradient-text">mí</span>
            </h1>
            <p className="body-large mb-8">
              {owner.bio}
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">{owner.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:ian@iancamps.dev"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  ian@iancamps.dev
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-primary" />
                <a 
                  href={owner.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-primary" />
                <a 
                  href={owner.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <CVDownload />
              <motion.a
                href="https://certificados.iancamps.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🏆 Ver Certificaciones
              </motion.a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="w-64 h-64 rounded-2xl overflow-hidden">
              <Image
                src="/YO.jpg"
                alt={owner.name}
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
