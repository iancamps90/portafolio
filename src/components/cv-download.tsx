'use client'

import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'

export function CVDownload() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/CV-IAN-25.pdf'
    link.download = 'Ian_Camps_CV_2025.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleDownload}
      className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-lg font-medium transition-all duration-200"
    >
      <FileText className="w-4 h-4" />
      Descargar CV
      <Download className="w-4 h-4" />
    </motion.button>
  )
}
