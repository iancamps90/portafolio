import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Toaster } from 'react-hot-toast'
import '@/styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Ian Camps - Desarrollador Full-Stack & Coordinador de Proyectos',
    template: '%s | Ian Camps'
  },
  description: 'Desarrollador Full-Stack especializado en Django, React y Python. Coordinador de equipos con experiencia en metodologías ágiles, Power BI y análisis de datos. Portfolio profesional con proyectos reales.',
  keywords: [
    'Ian Camps', 'Desarrollador Full-Stack', 'Django', 'React', 'Python', 
    'PostgreSQL', 'Power BI', 'Scrum', 'Metodologías ágiles', 'Coordinador proyectos',
    'Desarrollo web', 'JavaScript', 'TypeScript', 'Portfolio', 'Programador'
  ],
  authors: [{ name: 'Ian Camps', url: 'https://iancamps.dev' }],
  creator: 'Ian Camps',
  publisher: 'Ian Camps',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://iancamps.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://iancamps.dev',
    title: 'Ian Camps - Desarrollador Full-Stack & Coordinador de Proyectos',
    description: 'Desarrollador Full-Stack especializado en Django, React y Python. Coordinador de equipos con experiencia en metodologías ágiles y análisis de datos.',
    siteName: 'Ian Camps Portfolio',
    images: [
      {
        url: '/img/ian-camps-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Ian Camps - Desarrollador Full-Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ian Camps - Desarrollador Full-Stack & Coordinador de Proyectos',
    description: 'Desarrollador Full-Stack especializado en Django, React y Python. Coordinador de equipos con experiencia en metodologías ágiles.',
    creator: '@iancamps90',
    images: ['/img/ian-camps-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <ScrollToTop />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'hsl(var(--card))',
                color: 'hsl(var(--card-foreground))',
                border: '1px solid hsl(var(--border))',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
