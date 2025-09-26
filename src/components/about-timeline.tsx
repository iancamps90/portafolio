'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Award } from 'lucide-react'
import { getExperience, getEducation } from '@/lib/content'

export function AboutTimeline() {
  const experience = getExperience()
  const education = getEducation()

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-6">
            Mi <span className="gradient-text">Trayectoria</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Experiencia Profesional
            </h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">{exp.title}</h4>
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                      <p className="text-muted-foreground text-sm mb-3 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </p>
                      <p className="text-muted-foreground mb-3">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              Educación
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                      <p className="text-primary font-medium mb-2">{edu.institution}</p>
                      <p className="text-muted-foreground text-sm mb-3 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </p>
                      <p className="text-muted-foreground mb-3">{edu.description}</p>
                      <div className="space-y-1">
                        {edu.achievements.map((achievement) => (
                          <p key={achievement} className="text-sm text-muted-foreground">
                            • {achievement}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
