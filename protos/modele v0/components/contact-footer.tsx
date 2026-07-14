import { Mail } from 'lucide-react'

export function ContactFooter() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
              Collaborer
            </p>
            <h2 className="mt-4 text-balance font-serif text-2xl font-medium text-foreground md:text-3xl">
              Pour un usage sobre et ciblé du numérique.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Conseil stratégique, accompagnement individualisé ou conception de
              ressources technopédagogiques : échangeons sur vos enjeux.
            </p>
          </div>

          <a
            href="mailto:"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" />
            Me contacter
          </a>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Conseiller technopédagogique — Enseignement supérieur</p>
          <p className="font-mono">
            © {new Date().getFullYear()} — Conseil stratégique &amp;
            Technopédagogie
          </p>
        </div>
      </div>
    </footer>
  )
}
