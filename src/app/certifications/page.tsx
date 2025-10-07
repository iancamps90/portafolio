'use client'

import { useEffect } from 'react'
import { Metadata } from 'next'

export default function CertificationsPage() {
  useEffect(() => {
    // Redirigir automáticamente al subdominio
    window.location.href = 'https://certificados.iancamps.dev/'
  }, [])

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">🔄</div>
        <h1 className="text-2xl font-bold mb-4">Redirigiendo...</h1>
        <p className="text-muted-foreground mb-6">
          Te estamos llevando a la página de certificaciones
        </p>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
        <div className="mt-4">
          <a 
            href="https://certificados.iancamps.dev/" 
            className="text-primary hover:underline"
          >
            Si no eres redirigido automáticamente, haz clic aquí
          </a>
        </div>
      </div>
    </div>
  )
}
