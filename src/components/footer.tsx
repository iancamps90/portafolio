'use client'

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-6">
      <div className="container-custom">
        <div className="flex justify-center">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} IanCamps.dev – Desarrollo Web & Automatización
          </p>
        </div>
      </div>
    </footer>
  )
}
