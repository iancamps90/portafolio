'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code2 } from 'lucide-react'
import { getOwner } from '@/lib/content'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/iancamps90',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/iancamps',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:iancamps90@gmail.com',
    icon: Mail,
  },
]

const footerLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Proyectos', href: '/projects' },
  { name: 'Sobre mí', href: '/about' },
  { name: 'Contacto', href: '/contact' },
]

export function Footer() {
  const owner = getOwner()

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container-custom">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary"
                >
                  <Code2 className="h-5 w-5 text-primary-foreground" />
                </motion.div>
                <span className="font-display text-xl font-semibold">
                  {owner.name}
                </span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md">
                {owner.bio}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label={link.name}
                  >
                    <link.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>{owner.location}</p>
                <a
                  href={`mailto:${owner.email}`}
                  className="block transition-colors hover:text-foreground"
                >
                  {owner.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 py-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {owner.name}. Todos los derechos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Hecho con ❤️ usando Next.js, TypeScript y Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
