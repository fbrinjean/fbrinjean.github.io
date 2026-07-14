import { SectionHeading } from '@/components/section-heading'

const guitareDetails = [
  {
    label: 'Conception pédagogique',
    text: "Élaboration de programmes de formation et de grilles d'évaluation adaptées aux différents cycles d'apprentissage.",
  },
  {
    label: 'Pédagogie différenciée',
    text: "Ajustement constant des méthodes d'enseignement selon les profils, le rythme et les habiletés des apprenants.",
  },
  {
    label: 'Compétences créatives',
    text: "Développement d'une expertise en arrangement, composition et structure narrative, aujourd'hui mise au service de la production de ressources technopédagogiques (vidéos, audio).",
  },
]

export function ParcoursSection() {
  return (
    <section id="parcours" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <SectionHeading index="03" eyebrow="Curriculum" title="Le parcours" />

      <div className="relative border-l border-border pl-8 md:pl-10">
        {/* Conseiller technopédagogique */}
        <div className="relative pb-16">
          <span
            aria-hidden="true"
            className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background md:-left-[calc(2.5rem+5px)]"
          />
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
            Depuis 2020
          </p>
          <h3 className="mt-3 font-serif text-xl font-medium text-foreground">
            Conseiller technopédagogique
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Centre de Pédagogie Universitaire
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Au sein du Centre de Pédagogie Universitaire, j&apos;accompagne les
            facultés et le corps enseignant dans la transformation de leurs
            dispositifs de formation et l&apos;intégration raisonnée du
            numérique.
          </p>
        </div>

        {/* Professeur de guitare */}
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-muted-foreground ring-4 ring-background md:-left-[calc(2.5rem+5px)]"
          />
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
            2005 — 2018
          </p>
          <h3 className="mt-3 font-serif text-xl font-medium text-foreground">
            Professeur de guitare
          </h3>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Enseignement individuel et collectif de la musique auprès de publics
            hétérogènes. Ce parcours d&apos;une douzaine d&apos;années constitue
            le socle de mon expertise en pédagogie et en création de contenus.
          </p>

          <dl className="mt-8 grid gap-6 sm:grid-cols-3">
            {guitareDetails.map((item) => (
              <div key={item.label}>
                <dt className="font-medium text-foreground">{item.label}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
