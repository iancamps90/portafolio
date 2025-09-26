'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface ProjectsFiltersProps {
  tags: string[]
}

export function ProjectsFilters({ tags }: ProjectsFiltersProps) {
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setActiveFilter('all')}
        className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
          activeFilter === 'all'
            ? 'bg-primary text-primary-foreground'
            : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
        }`}
      >
        Todos
      </motion.button>
      
      {tags.map((tag) => (
        <motion.button
          key={tag}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveFilter(tag)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
            activeFilter === tag
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
          }`}
        >
          {tag}
        </motion.button>
      ))}
    </div>
  )
}
