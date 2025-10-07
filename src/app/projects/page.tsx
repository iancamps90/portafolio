import { Metadata } from 'next'
import { ProjectsGrid } from '@/components/projects-grid'
import { ProjectsFilters } from '@/components/projects-filters'
import { getAllTags, getProjects } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Proyectos - Portfolio de Desarrollo Web & Automatización',
  description: 'Explora los proyectos de desarrollo web, automatización y análisis de datos realizados para empresas. Casos de éxito y soluciones tecnológicas implementadas.',
  keywords: [
    'proyectos desarrollo web', 'casos de éxito', 'automatización', 
    'dashboards', 'aplicaciones web', 'portfolio empresarial'
  ],
}

export default function ProjectsPage() {
  const projects = getProjects()
  const tags = getAllTags()

  return (
    <div className="min-h-screen pt-16">
      <div className="container-custom section-padding">
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-6">
            Proyectos <span className="gradient-text-purple">Empresariales</span>
          </h1>
          <p className="body-large max-w-2xl mx-auto">
            Casos de éxito y soluciones tecnológicas implementadas para empresas. 
            Desde desarrollo web hasta automatización de procesos y análisis de datos.
          </p>
        </div>

        <ProjectsGrid projects={projects} />
      </div>
    </div>
  )
}
