import knowledgePack from '@/content/knowledge-pack.json'

export interface Owner {
  name: string
  role: string
  goal: string
  skills: string[]
  bio: string
  location: string
  email: string
  github: string
  linkedin: string
  website: string
}

export interface Project {
  slug: string
  name: string
  type: string
  stack: string[]
  value: string
  status: 'completado' | 'en desarrollo' | 'por hacer'
  showcase_priority: number
  summary: string
  description: string
  features: string[]
  challenges: string[]
  lessons: string[]
  repo: string
  demo: string | null
  images: string[]
  tags: string[]
}

export interface Skill {
  name: string
  level: number
  category: string
}

export interface Skills {
  frontend: Skill[]
  backend: Skill[]
  devops: Skill[]
  tools: Skill[]
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export interface Education {
  degree: string
  institution: string
  period: string
  description: string
  achievements: string[]
}

export interface Certification {
  name: string
  issuer: string
  date: string
  credential: string
}

export interface KnowledgePack {
  owner: Owner
  projects: Project[]
  skills: Skills
  experience: Experience[]
  education: Education[]
  certifications: Certification[]
}

// Load the knowledge pack
export const knowledgePackData: KnowledgePack = knowledgePack as KnowledgePack

// Helper functions
export function getOwner(): Owner {
  return knowledgePackData.owner
}

export function getProjects(): Project[] {
  return knowledgePackData.projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return knowledgePackData.projects.find(project => project.slug === slug)
}

export function getShowcaseProjects(): Project[] {
  return knowledgePackData.projects
    .filter(project => project.showcase_priority <= 6)
    .sort((a, b) => a.showcase_priority - b.showcase_priority)
}

export function getProjectsByTag(tag: string): Project[] {
  return knowledgePackData.projects.filter(project => 
    project.tags.includes(tag)
  )
}

export function getAllTags(): string[] {
  const allTags = knowledgePackData.projects.flatMap(project => project.tags)
  return Array.from(new Set(allTags)).sort()
}

export function getSkills(): Skills {
  return knowledgePackData.skills
}

export function getExperience(): Experience[] {
  return knowledgePackData.experience
}

export function getEducation(): Education[] {
  return knowledgePackData.education
}

export function getCertifications(): Certification[] {
  return knowledgePackData.certifications
}

// SEO helpers
export function generateProjectMetadata(project: Project) {
  return {
    title: `${project.name} - ${project.type} | Ian Camps Portfolio`,
    description: project.summary,
    keywords: project.tags.join(', '),
    openGraph: {
      title: project.name,
      description: project.summary,
      type: 'website',
      images: project.images.length > 0 ? [project.images[0]] : [],
    },
  }
}

export function generateSiteMetadata() {
  const owner = getOwner()
  return {
    title: `${owner.name} - ${owner.role}`,
    description: owner.bio,
    keywords: owner.skills.join(', '),
    openGraph: {
      title: `${owner.name} - ${owner.role}`,
      description: owner.bio,
      type: 'website',
      url: owner.website,
    },
  }
}
