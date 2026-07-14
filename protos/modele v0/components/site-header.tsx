import { ThemeToggle } from '@/components/theme-toggle'

const navLinks = [
  { label: 'Philosophie', href: '#philosophie' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Parcours', href: '#parcours' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-serif text-lg font-semibold tracking-tight text-foreground"
        >
          Conseil technopédagogique
        </a>

        <nav className="flex items-center gap-6">
          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
