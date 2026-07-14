import { SectionHeading } from '@/components/section-heading'
import { ArrowUpRight } from 'lucide-react'

const livrables = [
  {
    label: 'Formations',
    detail: 'en présentiel et sous forme de vidéo',
  },
  {
    label: 'Productions de ressources pour encadrer la transition',
    sub: [
      'Gabarits de planification',
      'Activités et ressources originales par programmation avec IA',
      "Encadrement des travaux collaboratifs (charte d'équipe, outils d'autoévaluation)",
      'Outils d\u2019évaluation des séances en ligne',
      'Documentation sur des outils technologiques : Wooclap, Perusall',
    ],
  },
  {
    label: 'Accompagnements individualisés',
  },
]

const autres = [
  {
    title: 'Validation du comodal',
    body: "Appui à la Faculté de Médecine Vétérinaire sur l'organisation de l'enseignement comodal multi-campus afin de répondre aux exigences réglementaires et aux critères d'accréditation en palliant le nombre limité d'experts enseignants.",
  },
  {
    title: "Rationalisation de l'enseignement à distance",
    body: "Conseil auprès d'un organisme externe (RMPQ) pour structurer l'argumentaire scientifique et pédagogique encadrant les limites de la formation à distance pour les apprentissages pratiques complexes en massothérapie.",
  },
]

const initiatives = [
  "Conception d'une formation autoportante en HTML sur l'enseignement comodal incluant un outil diagnostic pour mieux appréhender une transition vers cette modalité.",
  'Expérimentation du facteur de pondération individuel',
  "Conception et animation de parcours de formation sur l'IA générative (ChatGPT) ou sur la revalorisation des activités de lecture universitaire pour contrer les défis modernes liés à la lecture.",
]

export function RealisationsSection() {
  return (
    <section
      id="realisations"
      className="border-t border-border bg-muted/30"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <SectionHeading
          index="02"
          eyebrow="Réalisations récentes"
          title="Conseil stratégique"
        />

        {/* Chef-d'œuvre : Hybridation de programmes */}
        <article className="rounded-xl border border-border bg-card p-8 md:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
            Le chef-d&apos;œuvre
          </p>
          <h3 className="mt-4 max-w-2xl text-balance font-serif text-2xl font-medium text-card-foreground md:text-[1.75rem] md:leading-snug">
            Hybridation de programmes
          </h3>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Une{' '}
            <strong className="font-semibold text-card-foreground">
              quarantaine de professeurs accompagnés
            </strong>{' '}
            collectivement, plus d&apos;une{' '}
            <strong className="font-semibold text-card-foreground">
              quinzaine individuellement
            </strong>
            , en partenariat étroit avec le{' '}
            <strong className="font-semibold text-card-foreground">
              décanat
            </strong>{' '}
            de la faculté des Sciences de l&apos;Éducation.
          </p>

          {/* Badges d'impact */}
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="rounded-lg border border-primary/30 bg-primary/5 px-5 py-3">
              <span className="block font-serif text-2xl font-semibold text-primary">
                40+
              </span>
              <span className="mt-1 block text-xs text-muted-foreground">
                Professeurs accompagnés collectivement
              </span>
            </div>
            <div className="rounded-lg border border-primary/30 bg-primary/5 px-5 py-3">
              <span className="block font-serif text-2xl font-semibold text-primary">
                15+
              </span>
              <span className="mt-1 block text-xs text-muted-foreground">
                Accompagnements individuels sur mesure
              </span>
            </div>
          </div>

          {/* Livrables clés */}
          <div className="mt-10 border-t border-border pt-8">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Livrables clés
            </p>
            <ul className="space-y-5">
              {livrables.map((item) => (
                <li key={item.label}>
                  <div className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary"
                    />
                    <div>
                      <p className="font-medium text-card-foreground">
                        {item.label}
                        {item.detail ? (
                          <span className="font-normal text-muted-foreground">
                            {' '}
                            ({item.detail})
                          </span>
                        ) : null}
                      </p>
                      {item.sub ? (
                        <ul className="mt-3 space-y-2 pl-1">
                          {item.sub.map((s) => (
                            <li
                              key={s}
                              className="flex gap-3 text-sm text-muted-foreground"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-2 h-px w-3 shrink-0 bg-primary/60"
                              />
                              {s}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Autres engagements stratégiques */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {autres.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-border bg-card p-8"
            >
              <ArrowUpRight className="h-5 w-5 text-primary" />
              <h4 className="mt-4 font-serif text-lg font-medium text-card-foreground">
                {item.title}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        {/* Initiatives propres */}
        <div className="mt-16">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Initiatives propres
          </p>
          <ul className="space-y-4">
            {initiatives.map((text) => (
              <li key={text} className="flex gap-4 border-b border-border pb-4">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary"
                />
                <p className="leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
