const diplomes = [
  {
    titre: 'Maîtrise en Sciences de l\u2019Éducation',
    annee: '2021',
    lieu: 'Université de Montréal (Québec, Canada)',
  },
  {
    titre: "Diplôme d'État d'enseignement de la musique en musiques actuelles",
    annee: '2013',
    lieu: 'Cefedem Rhône-Alpes (France)',
  },
  {
    titre: 'Licence en musique',
    annee: '2005',
    lieu: 'Université Lyon II (France)',
  },
  {
    titre: "Diplôme d'Études Musicales en Jazz",
    annee: '2003',
    lieu: 'Conservatoire de Lyon (France)',
  },
]

export function FormationSection() {
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <div className="mb-10 flex items-baseline gap-4">
          <span className="font-mono text-xs text-primary">04</span>
          <h2 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
            Formation
          </h2>
        </div>

        {/* Bloc style terminal / CLI */}
        <div className="overflow-hidden rounded-xl border border-border bg-card font-mono text-sm shadow-sm">
          <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-destructive/70" />
            <span className="h-3 w-3 rounded-full bg-primary/70" />
            <span className="h-3 w-3 rounded-full bg-muted-foreground/40" />
            <span className="ml-3 text-xs text-muted-foreground">
              ~/formation
            </span>
          </div>

          <div className="space-y-6 p-6 md:p-8">
            {diplomes.map((d) => (
              <div key={d.titre} className="flex flex-col gap-1">
                <div className="flex items-start gap-2">
                  <span className="select-none text-primary">$</span>
                  <span className="text-card-foreground">{d.titre}</span>
                </div>
                <div className="pl-4 text-xs text-muted-foreground">
                  <span className="text-primary">→</span> {d.annee} • {d.lieu}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
