import { Metadata } from 'next'
import { ContactCTA } from '@/components/contact-cta'

export const metadata: Metadata = {
  title: 'Contacto - IanCamps.dev | Desarrollo Web & Automatización',
  description: '¿Tienes una idea o proyecto? Contacta con Ian Camps para hablar de soluciones de desarrollo web, automatización y análisis de datos para tu empresa.',
  keywords: [
    'contacto desarrollo web', 'consultoría tecnológica', 'presupuesto proyecto',
    'automatización', 'desarrollo web', 'Ian Camps'
  ],
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container-custom section-padding">
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-6">
            <span className="gradient-text-purple">Contacto</span>
          </h1>
          <p className="body-large max-w-2xl mx-auto">
            ¿Tienes una idea o proyecto? Escríbeme directamente para discutir sobre tu proyecto.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            <ContactCTA />
          </div>
        </div>
      </div>
    </div>
  )
}
