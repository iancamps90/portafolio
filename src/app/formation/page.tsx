import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formación - IanCamps.dev | Cursos y Academy',
  description: 'Cursos de desarrollo web, automatización y análisis de datos. Academy especializada en tecnologías modernas para profesionales.',
  keywords: [
    'cursos desarrollo web', 'academy programación', 'formación tecnológica',
    'cursos React', 'cursos Python', 'automatización', 'Ian Camps'
  ],
}

export default function FormationPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container-custom section-padding">
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-6">
            <span className="gradient-text-purple">🎓 Academy</span>
          </h1>
            <p className="body-large max-w-2xl mx-auto">
              Accede a nuestra Academy con cursos especializados en desarrollo web, automatización y análisis de datos.
            </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">🎓</div>
            <h2 className="text-2xl font-bold mb-4">Academy IanCamps</h2>
            <p className="text-muted-foreground mb-6">
              Accede a nuestra plataforma de cursos especializados donde encontrarás:
            </p>
            <ul className="text-left max-w-md mx-auto space-y-2">
              <li>• Cursos de React y Next.js</li>
              <li>• Automatización con Python</li>
              <li>• Análisis de datos con Power BI</li>
              <li>• Plantillas y recursos premium</li>
            </ul>
            <div className="mt-8">
              <a 
                href="https://academy.iancamps.dev/" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Acceder a la Academy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
