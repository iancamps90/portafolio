'use client'

import { motion } from 'framer-motion'
import { FaCode, FaRobot, FaChartBar, FaTools, FaLightbulb } from 'react-icons/fa'

const services = [
  {
    icon: FaCode,
    title: 'Desarrollo Web Profesional',
    description: 'Aplicaciones web completas con React, Next.js, TypeScript, Django y Python. Desde landing pages hasta sistemas complejos de gestión empresarial.',
    price: 'desde 600 €',
    features: [
      'Frontend con React/Next.js/TypeScript',
      'Backend con Django/Python',
      'Bases de datos PostgreSQL/MySQL',
      'APIs RESTful y GraphQL',
      'Responsive design y PWA',
      'SEO optimizado y performance'
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: FaRobot,
    title: 'Automatización con IA y n8n',
    description: 'Automatizaciones 24/7 con n8n, agentes IA, clasificación de correos, respuestas automáticas, agenda de reuniones y orquestación multi-app.',
    price: 'desde 250 €',
    features: [
      'Agentes IA (Gemini/OpenAI) conectados a tu negocio',
      'Clasificación y respuesta de correos',
      'Agenda automática (Google Calendar)',
      'Chatbots web y Telegram con memoria',
      'Integraciones con APIs y webhooks',
      'Monitorización y documentación'
    ],
    color: 'from-green-500 to-green-600'
  },
  {
    icon: FaChartBar,
    title: 'Dashboards y Power BI',
    description: 'Visualiza tus datos empresariales con Power BI, Python y herramientas de análisis avanzado. Toma decisiones basadas en datos reales y actualizados.',
    price: 'desde 350 €',
    features: [
      'Dashboards interactivos Power BI',
      'Análisis de datos con Python/Pandas',
      'Reportes automatizados y programados',
      'Visualizaciones personalizadas',
      'Integración con múltiples fuentes de datos',
      'Exportación en múltiples formatos'
    ],
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: FaTools,
    title: 'Mantenimiento Web Mensual',
    description: 'Mantén tu sitio web actualizado, seguro y funcionando perfectamente. Soporte técnico continuo, actualizaciones y optimización constante.',
    price: 'desde 50 €/mes',
    features: [
      'Actualizaciones de seguridad regulares',
      'Backups automáticos diarios',
      'Monitoreo de rendimiento 24/7',
      'Soporte técnico prioritario',
      'Actualizaciones de contenido',
      'Optimización continua de velocidad'
    ],
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: FaLightbulb,
    title: 'Consultoría Tecnológica',
    description: 'Sesiones de consultoría personalizada para optimizar tu infraestructura tecnológica, procesos digitales y estrategia de automatización.',
    price: '60 €/sesión',
    features: [
      'Análisis de procesos actuales',
      'Recomendaciones de mejora',
      'Estrategia de digitalización',
      'Evaluación de herramientas',
      'Plan de implementación',
      'Seguimiento y soporte'
    ],
    color: 'from-indigo-500 to-indigo-600'
  }
]

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  return (
    <motion.div
      className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
          <service.icon className="w-8 h-8 text-white" />
        </div>

        <h3 className="heading-3 mb-4">{service.title}</h3>
        <p className="body-text mb-6">{service.description}</p>

        <div className="mb-6">
          <span className="text-3xl font-bold text-primary">{service.price}</span>
        </div>

        <ul className="space-y-3 mb-8">
          {service.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <motion.button
          className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            const subject = encodeURIComponent(`Solicitud de presupuesto - ${service.title}`)
            const body = encodeURIComponent(`Hola Ian,\n\nMe interesa el servicio de "${service.title}" y me gustaría solicitar un presupuesto.\n\nDetalles del proyecto:\n- Descripción:\n- Plazo estimado:\n- Presupuesto aproximado:\n\nGracias.`)
            window.open(`mailto:ian@iancamps.dev?subject=${subject}&body=${body}`)
          }}
        >
          Solicitar presupuesto
        </motion.button>
      </div>
    </motion.div>
  )
}

export const ServicesGrid = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-2 mb-4">¿Qué puedo hacer por tu empresa?</h2>
          <p className="body-large max-w-2xl mx-auto">
            Cada proyecto es único. Trabajo contigo para entender tus necesidades 
            y crear soluciones que impulsen tu negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
