import { ProjectsGrid } from '@/components/projects-grid'
import { ProjectsFilters } from '@/components/projects-filters'
import { getAllTags, getProjects } from '@/lib/content'

export const metadata = {
  title: 'Proyectos',
  description: 'Explora todos mis proyectos de desarrollo full-stack, frontend y backend.',
}

export default function ProjectsPage() {
  const projects = getProjects()
  const tags = getAllTags()

  return (
    <div className="min-h-screen pt-16">
      <div className="container-custom section-padding">
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-6">
            Mis <span className="gradient-text">Proyectos</span>
          </h1>
          <p className="body-large max-w-2xl mx-auto">
            Una colección completa de mis proyectos de desarrollo, desde aplicaciones web 
            hasta APIs y herramientas de productividad.
          </p>
        </div>

        <ProjectsFilters tags={tags} />
        <ProjectsGrid projects={projects} />
      </div>
    </div>
  )
}
