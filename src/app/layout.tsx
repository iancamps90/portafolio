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
    default: 'Ian Camps Dev | Desarrollo Web y Automatización Profesional',
    template: '%s | Ian Camps Dev'
  },
  description: 'Desarrollo web Full Stack, automatización de procesos, dashboards con Power BI y consultoría digital. Transformo ideas en soluciones eficientes.',
  keywords: [
    'desarrollo web', 'typescript', 'next.js', 'django', 'react', 'laravel', 
    'automatización', 'zapier', 'make', 'power bi', 'n8n', 'freelance', 
    'valencia', 'programador web', 'Ian Camps', 'desarrollo full-stack',
    'consultoría digital', 'automatización procesos'
  ],
  authors: [{ name: 'iancampsdev', url: 'https://iancamps.dev' }],
  creator: 'iancampsdev',
  publisher: 'Ian Camps Dev',
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
    title: 'Ian Camps Dev | Desarrollo Web y Automatización Profesional',
    description: 'Desarrollo web Full Stack, automatización de procesos, dashboards con Power BI y consultoría digital. Transformo ideas en soluciones eficientes.',
    siteName: 'Ian Camps Dev',
    images: [
      {
        url: '/img/iancamps-og.svg',
        width: 1200,
        height: 630,
        alt: 'Ian Camps Dev - Desarrollo Web y Automatización Profesional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ian Camps Dev | Desarrollo Web y Automatización Profesional',
    description: 'Desarrollo web Full Stack, automatización de procesos, dashboards con Power BI y consultoría digital. Transformo ideas en soluciones eficientes.',
    creator: '@iancamps90',
    images: ['/img/iancamps-og.svg'],
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
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Preconnect hints for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Google Analytics - Updated */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GJGF5PPX54"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GJGF5PPX54', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true
            });
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
