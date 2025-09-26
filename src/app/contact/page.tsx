import { ContactHero } from '@/components/contact-hero'
import { ContactForm } from '@/components/contact-form'
import { ContactInfo } from '@/components/contact-info'

export const metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto conmigo para discutir proyectos, colaboraciones o cualquier consulta.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      <ContactHero />
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}
