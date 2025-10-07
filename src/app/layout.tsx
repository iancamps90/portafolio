import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from '@/components/theme-provider'
import { ConditionalLayout } from '@/components/conditional-layout'
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
    default: 'IanCamps.dev - Desarrollo Web & Automatización para Empresas',
    template: '%s | IanCamps.dev'
  },
  description: 'Servicios profesionales de desarrollo web, automatización de procesos y análisis de datos. Soluciones tecnológicas modernas para empresas que buscan eficiencia y crecimiento digital.',
  keywords: [
    'IanCamps.dev', 'Desarrollo web', 'Automatización', 'Análisis de datos', 
    'React', 'Django', 'Python', 'Power BI', 'Zapier', 'Desarrollo full-stack',
    'Servicios web', 'Consultoría tecnológica', 'Empresa desarrollo', 'Freelancer'
  ],
  authors: [{ name: 'Ian Camps', url: 'https://iancamps.dev' }],
  creator: 'Ian Camps',
  publisher: 'IanCamps.dev',
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
    title: 'IanCamps.dev - Desarrollo Web & Automatización para Empresas',
    description: 'Servicios profesionales de desarrollo web, automatización de procesos y análisis de datos para empresas modernas.',
    siteName: 'IanCamps.dev',
    images: [
      {
        url: '/img/iancamps-og.jpg',
        width: 1200,
        height: 630,
        alt: 'IanCamps.dev - Desarrollo Web & Automatización',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IanCamps.dev - Desarrollo Web & Automatización para Empresas',
    description: 'Servicios profesionales de desarrollo web, automatización de procesos y análisis de datos para empresas modernas.',
    creator: '@iancamps90',
    images: ['/img/iancamps-og.jpg'],
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GJGF5PPX54"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GJGF5PPX54');
          `}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
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
