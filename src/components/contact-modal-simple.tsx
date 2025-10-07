'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaEnvelope, FaUser, FaComment } from 'react-icons/fa'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ContactModalSimple = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Crear el mensaje completo con toda la información
      const fullMessage = `
Nueva solicitud de presupuesto desde iancamps.dev

INFORMACIÓN DEL CLIENTE:
• Nombre: ${formData.name}
• Email: ${formData.email}
• Empresa: ${formData.company || 'No especificada'}

DETALLES DEL PROYECTO:
• Tipo de proyecto: ${formData.project || 'No especificado'}
• Presupuesto aproximado: ${formData.budget || 'No especificado'}

DESCRIPCIÓN:
${formData.message}

---
Este mensaje fue enviado automáticamente desde el formulario de contacto de iancamps.dev
      `.trim()

      // Crear mailto link
      const subject = `Solicitud de presupuesto - ${formData.project || 'Proyecto'} - ${formData.company || 'Sin empresa'}`
      const body = encodeURIComponent(fullMessage)
      const mailtoLink = `mailto:ian@iancamps.dev?subject=${encodeURIComponent(subject)}&body=${body}`
      
      // Abrir cliente de email
      window.open(mailtoLink, '_blank')
      
      setIsSubmitted(true)
      setTimeout(() => {
        onClose()
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          company: '',
          project: '',
          budget: '',
          message: ''
        })
      }, 2000)
    } catch (error) {
      console.error('Error:', error)
      alert('Error al procesar el formulario. Por favor, inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-card border border-border rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Solicita tu presupuesto</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {isSubmitted ? (
              <motion.div
                className="text-center py-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaEnvelope className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">¡Formulario procesado!</h3>
                <p className="text-muted-foreground">Se abrirá tu cliente de email con el mensaje pre-escrito</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <FaUser className="inline w-4 h-4 mr-2" />
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <FaEnvelope className="inline w-4 h-4 mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Empresa</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Tipo de proyecto</label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="desarrollo-web">Desarrollo Web</option>
                      <option value="automatizacion">Automatización</option>
                      <option value="dashboard">Dashboard & Power BI</option>
                      <option value="mantenimiento">Mantenimiento Web</option>
                      <option value="consultoria">Consultoría</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Presupuesto aproximado</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Selecciona un rango</option>
                      <option value="500-1000">500€ - 1.000€</option>
                      <option value="1000-3000">1.000€ - 3.000€</option>
                      <option value="3000-5000">3.000€ - 5.000€</option>
                      <option value="5000+">Más de 5.000€</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <FaComment className="inline w-4 h-4 mr-2" />
                    Descripción del proyecto *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Cuéntame más detalles sobre tu proyecto..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? 'Procesando...' : 'Enviar solicitud'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
