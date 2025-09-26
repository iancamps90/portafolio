import { AboutHero } from '@/components/about-hero'
import { AboutTimeline } from '@/components/about-timeline'
import { AboutSkills } from '@/components/about-skills'
import { AboutStats } from '@/components/about-stats'

export const metadata = {
  title: 'Sobre mí',
  description: 'Conoce más sobre Ian Camps, desarrollador Full-Stack especializado en Django, React y TypeScript.',
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
