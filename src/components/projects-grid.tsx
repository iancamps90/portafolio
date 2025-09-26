'use client'

import { useState } from 'react'
import { ProjectCard } from '@/components/project-card'
import { Project } from '@/lib/content'

interface ProjectsGridProps {
  projects: Project[]
  filter?: string
}

export function ProjectsGrid({ projects, filter }: ProjectsGridProps) {
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const filtered = filter 
    ? projects.filter(project => project.tags.includes(filter))
    : filteredProjects

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filtered.map((project, index) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}
