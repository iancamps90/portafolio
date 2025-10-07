import { Metadata } from 'next'
import { ServicesHero } from '@/components/services-hero'
import { ServicesGrid } from '@/components/services-grid'
import { ServicesCTA } from '@/components/services-cta'

export const metadata: Metadata = {
  title: 'Servicios - Desarrollo Web & Automatización',
  description: 'Servicios profesionales de desarrollo web full-stack, automatización de procesos, dashboards y mantenimiento web. Precios competitivos y soluciones personalizadas.',
  keywords: [
    'servicios desarrollo web', 'automatización procesos', 'dashboards', 
    'mantenimiento web', 'precios desarrollo', 'consultoría tecnológica'
  ],
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
    </div>
  )
}
