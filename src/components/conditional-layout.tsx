'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from './navbar'
import { Footer } from './footer'

interface ConditionalLayoutProps {
  children: React.ReactNode
}

export const ConditionalLayout = ({ children }: ConditionalLayoutProps) => {
  const pathname = usePathname()
  const isDashboard = pathname === '/'

  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      {!isDashboard && <Footer />}
    </div>
  )
}
