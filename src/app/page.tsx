import { HeroCinematic } from '@/components/hero-cinematic'
import { ProjectsShowcase } from '@/components/projects-showcase'
import { SkillsShowcase } from '@/components/skills-showcase'
import { AboutPreview } from '@/components/about-preview'
import { ContactPreview } from '@/components/contact-preview'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroCinematic />
      <ProjectsShowcase />
      <SkillsShowcase />
      <AboutPreview />
      <ContactPreview />
    </div>
  )
}
