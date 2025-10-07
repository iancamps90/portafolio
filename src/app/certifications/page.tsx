import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Certificaciones - IanCamps.dev | Portfolio de Certificados',
  description: 'Portfolio completo de certificaciones profesionales en desarrollo web, automatización y tecnologías modernas.',
  keywords: [
    'certificaciones', 'portfolio certificados', 'desarrollo web certificado',
    'OpenWebinars', 'certificaciones profesionales', 'Ian Camps'
  ],
}

export default function CertificationsPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container-custom section-padding">
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-6">
            <span className="gradient-text-purple">🏆 Certificaciones</span>
          </h1>
          <p className="body-large max-w-2xl mx-auto">
            Portfolio completo de certificaciones profesionales y cursos completados.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">🚧</div>
            <h2 className="text-2xl font-bold mb-4">En Construcción</h2>
            <p className="text-muted-foreground mb-6">
              Estamos organizando todas las certificaciones. Muy pronto podrás ver:
            </p>
            <ul className="text-left max-w-md mx-auto space-y-2">
              <li>• Certificaciones de OpenWebinars</li>
              <li>• Cursos de desarrollo web</li>
              <li>• Certificados de automatización</li>
              <li>• Badges profesionales</li>
            </ul>
            <div className="mt-8">
              <a 
                href="https://certificados.iancamps.dev/" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Ver certificaciones completas
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
