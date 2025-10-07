import { Metadata } from 'next'
import { AboutHero } from '@/components/about-hero'
import { AboutTimeline } from '@/components/about-timeline'
import { AboutSkills } from '@/components/about-skills'
import { AboutStats } from '@/components/about-stats'

export const metadata: Metadata = {
  title: 'Sobre mí - Ian Camps, Desarrollador & Consultor Tecnológico',
  description: 'Conoce a Ian Camps, desarrollador Full-Stack y consultor tecnológico especializado en automatización, análisis de datos y desarrollo web para empresas.',
  keywords: [
    'Ian Camps', 'desarrollador', 'consultor tecnológico', 'automatización', 
    'análisis de datos', 'desarrollo web', 'experiencia profesional'
  ],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <AboutHero />
      <AboutStats />
      <AboutTimeline />
      <AboutSkills />
    </div>
  )
}
