import { Highlight } from '@/components/highlight'

export function HeroSection() {
  return (
    <section
      id="top"
      className="mx-auto max-w-5xl px-6 pt-20 pb-16 md:pt-28 md:pb-24"
    >
      <p className="mb-8 font-mono text-xs uppercase tracking-[0.28em] text-primary">
        Conseiller technopédagogique
      </p>

      <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <h1 className="max-w-3xl text-balance font-serif text-[1.75rem] leading-[1.35] font-medium text-foreground sm:text-3xl md:text-[2.4rem] md:leading-[1.32]">
            Face à l&apos;omniprésence de l&apos;IA et à la transition numérique
            de l&apos;enseignement supérieur, ma mission est de guider les
            institutions et le corps enseignant vers une adoption réfléchie des
            technologies et une adaptation des méthodes d&apos;enseignement,
            pour à la fois{' '}
            <Highlight>
              répondre aux enjeux modernes et préserver les compétences
              cognitives essentielles
            </Highlight>
            .
          </h1>

          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Un constant travail de veille et d&apos;autoformation sous-tend des{' '}
            <strong className="font-semibold text-foreground">
              actions polyvalentes
            </strong>{' '}
            allant de décisions stratégiques au développement de ressources
            pédagogiques et porté par des accompagnements individualisés auprès
            du corps enseignant.
          </p>

          <p className="mt-10 border-l-2 border-primary pl-5 font-serif text-base italic leading-relaxed text-foreground/90">
            Conseil stratégique &amp; Technopédagogie — Pour un usage sobre et
            ciblé du numérique.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Me contacter
            </a>
            <a
              href="#philosophie"
              className="inline-flex items-center font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              Découvrir l&apos;approche
            </a>
          </div>
        </div>

        {/* Espace réservé pour une future photo de profil */}
        <div
          aria-hidden="true"
          className="hidden aspect-[3/4] w-44 shrink-0 rounded-lg border border-dashed border-border bg-muted/40 md:block lg:w-52"
        />
      </div>
    </section>
  )
}
