import type { ReactNode } from 'react'

import { ThemeToggle } from '@/components/theme-toggle'

function Plus({ children }: { children: ReactNode }) {
  return (
    <details className="group mt-6 border-t border-border pt-5">
      <summary className="flex cursor-pointer list-none items-center justify-between font-mono text-xs font-semibold uppercase tracking-widest text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
        Plus
        <span aria-hidden="true" className="text-lg font-normal transition-transform group-open:rotate-45">+</span>
      </summary>
      <div className="mt-6 flex flex-col gap-5 text-pretty text-base leading-relaxed text-muted-foreground">{children}</div>
    </details>
  )
}

function SectionTitle({ index, eyebrow, children }: { index: string; eyebrow: string; children: ReactNode }) {
  return (
    <header className="mb-10 flex flex-col gap-3 border-b border-border pb-5 md:flex-row md:items-end md:justify-between">
      <h2 className="font-serif text-4xl leading-none tracking-tight text-balance md:text-5xl">{children}</h2>
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{index} / {eyebrow}</p>
    </header>
  )
}

function ExpertiseCard({ number, title, children, more }: { number: string; title: ReactNode; children: ReactNode; more: ReactNode }) {
  return (
    <article className="flex flex-col border-t-2 border-foreground pt-5">
      <div className="mb-12 flex items-start justify-between gap-4">
        <h3 className="max-w-sm font-serif text-3xl leading-tight text-balance">{title}</h3>
        <span className="font-mono text-xs text-muted-foreground">{number}</span>
      </div>
      <div className="flex flex-1 flex-col gap-4 text-pretty leading-relaxed">{children}</div>
      <Plus>{more}</Plus>
    </article>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-10">
        <a href="#accueil" className="font-serif text-lg font-semibold tracking-tight">[Votre nom]</a>
        <nav aria-label="Navigation principale" className="hidden items-center gap-6 font-mono text-xs uppercase tracking-wider md:flex">
          <a href="#expertise" className="hover:text-primary">Expertise</a><a href="#realisations" className="hover:text-primary">Réalisations</a><a href="#parcours" className="hover:text-primary">Parcours</a>
        </nav>
        <a href="#contact" className="border border-foreground px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background">Échanger</a>
      </div>
    </header>
  )
}

export function Hero() {
  return (
    <section id="accueil" className="mx-auto max-w-7xl px-5 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_18rem] lg:items-end">
        <div className="flex flex-col gap-8">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Conseil pédagogique universitaire · Technopédagogie</p>
          <h1 className="max-w-5xl font-serif text-5xl leading-[0.98] tracking-tight text-balance md:text-7xl lg:text-8xl">Transformer l’enseignement avec discernement.</h1>
          <p className="max-w-3xl text-xl leading-relaxed text-pretty md:text-2xl">Face à l’omniprésence de l’IA et à la transition numérique de l’enseignement supérieur, ma mission est de guider les institutions et le corps enseignant vers une adoption réfléchie des technologies et une adaptation des méthodes d&apos;enseignement, pour à la fois <strong>répondre aux enjeux modernes et préserver les compétences cognitives essentielles</strong>.</p>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">Un constant travail de veille et d&apos;autoformation sous-tend des <strong className="text-foreground">actions polyvalentes</strong> allant de décisions stratégiques au développement de ressources pédagogiques et porté par des accompagnements individualisés auprès du corps enseignant.</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex aspect-[4/5] items-center justify-center border border-border bg-muted font-mono text-xs uppercase tracking-widest text-muted-foreground">[Votre photo]</div>
          <p className="border-l-2 border-primary pl-3 font-mono text-xs leading-relaxed text-muted-foreground">Montréal, Québec<br />Disponible pour collaborer</p>
        </div>
      </div>
    </section>
  )
}

export function Expertise() {
  return (
    <section id="expertise" className="bg-card py-24 md:py-32"><div className="mx-auto max-w-7xl px-5 md:px-10">
      <SectionTitle index="01" eyebrow="Approche">Expertise et approche</SectionTitle>
      <div className="grid gap-14 lg:grid-cols-3">
        <ExpertiseCard number="01" title="Pédagogie de l'accompagnement" more={<><p>Enseigner à l&apos;Université est complexe : temps et énergie sont accaparées par de multiples tâches - charge d&apos;enseignement, veille, demande de budgets, recherche, etc. - dans un milieu compétitif qui exige l&apos;excellence.</p><p>À propos de la pédagogie, tous n&apos;ont pas la même aisance, le même recul, la même faculté d&apos;identifier leurs angles morts. Ceci est tout aussi vrai au regard du virage numérique qu&apos;a vécu l&apos;enseignement supérieur et qui parfois démultiplie les enjeux.</p><p><mark>Tous aussi n&apos;ont pas la même prédisposition à accepter une aide extérieure</mark>. Cette aide extérieure n&apos;est reçue que si un rapport de confiance s&apos;est bâti. Celle-ci se construira par la légitimité de l&apos;analyse pédagogique et des recommandations mais aussi par une qualité d&apos;écoute et d&apos;adaptation du conseiller.</p><p>C&apos;est pourquoi <mark>il est nécessaire de s&apos;adapter à chaque personne</mark> : bien comprendre sa requête, acquiescer du temps et des efforts qu&apos;elle est prête à fournir, afin de proposer des ajustements, mineurs ou majeurs selon le contexte, mais toujours réalistes.</p></>}><p>Qu&apos;il s&apos;agisse d&apos;un professeur sceptique ou d&apos;un décanat se heurtant aux enjeux modernes, je m&apos;efforce de <strong>cibler les besoins et les habiletés</strong> de mes interlocuteurs pour produire des ajustements réalistes et fructueux.</p></ExpertiseCard>
        <ExpertiseCard number="02" title={<>Expertise technologique <em>et</em> discernement</>} more={<><p>Tout objet technologique nous renforce quelque part et nous affaiblit ailleurs. Il convient alors d&apos;être prudent et mesuré à une époque d&apos;effervescence technologique où il peut être tellement tentant de déléguer à la dernière innovation le soin de nous apporter une solution.</p><p>Je suis capable d&apos;accompagner un enseignant dans la production d&apos;une vidéo - de la scénarisation jusqu&apos;à l&apos;intégration dans l&apos;environnement numérique d&apos;apprentissage, en passant par le tournage et même, qui sait ?, par la composition de sa musique. Je peux développer un outil complètement original pour répondre à un besoin didactique particulier (génération d&apos;étude de cas + environnement pour le visualiser avec quiz intégré, outil de présentation de l&apos;enseignement comodal avec autodiagnostic et recommandations personnalisées). Je peux collaborer avec des auteurs de jeux pour créer des jeux de cartes et ludifier un cours qui a généralement mauvaise presse chez les étudiants.</p><p><mark><strong>Mais</strong> de telles réalisations, aussi brillantes soient-elles, ne sont aucunement des prérequis pour le succès d&apos;une collaboration avec un enseignant.</mark> D&apos;une part car ce ne sont pas forcément les attentes de notre collaborateur, mais d&apos;autre part car la solution à ses enjeux est peut-être ailleurs, sous une forme plus pragmatique et accessible.</p><p>Une activité de lecture bien planifiée sera peut-être plus pertinente - et moins coûteuse en temps et en énergie - qu&apos;une vidéo, tout en accompagnant les étudiants à développer leur compétence de lecture de textes disciplinaires.</p><p>L&apos;identification de mécanismes vertueux pour encadrer une activité collaborative sera bien plus pertinente que l&apos;ajout d&apos;un outil numérique censé favoriser les interactions, en responsabilisant les acteurs et en rendant plus équitable l&apos;évaluation de ces travaux.</p><p><mark>Certains outils technologiques sont puissants et doivent être utilisés à bon escient. Mais ils ne sont pas la clef de la préservation de développements cognitifs essentiels (lecture, synthèse, communication) ni de la qualité du lien entre l&apos;enseignant et sa classe</mark>. Éléments prédominants pour garantir un apprentissage de qualité.</p></>}><p>Je dispose d&apos;une <strong>expertise techniques avancées</strong> : production multimédia (vidéos, infographies, musique) et de ressources pédagogiques multiples, programmation assistée par IA, soutien technique pour une plateforme institutionnelle.</p><p>Je m&apos;oppose pourtant au solutionnisme qui, parfois, avance masqué, et je soutiens l&apos;intégration d&apos;outils technologiques seulement pour leur valeur ajoutée. <strong>Un usage sobre et ciblé du numérique</strong>, qui garantit la préservation de compétences humaines fondamentales, telles la lecture, l&apos;analyse ou la capacité d&apos;attention.</p><p>J&apos;amène le corps enseignant à penser l&apos;<strong>IA générative</strong> sous l&apos;angle spécifique de leur discipline et de leur pratique enseignante pour que chacun développe son propre <strong>positionnement</strong> critique et, éventuellement, une intégration raisonnée.</p></ExpertiseCard>
        <ExpertiseCard number="03" title="Évaluation & intégrité académique" more={<><p>Nous faisons face encore aujourd&apos;hui aux conséquences de la crise du COVID. La situation d&apos;urgence a permis l&apos;émergence d&apos;autres approches d&apos;enseignement qui ont créé alors d&apos;autres attentes du public étudiant. Un contexte et des attentes changeantes qui imposent d&apos;adapter minimalement ses méthodes d&apos;enseignement et d&apos;évaluation. La démocratisation de l&apos;intelligence artificielle générative n&apos;a fait qu&apos;accentuer les enjeux, rendant certaines approches non plus seulement démodées mais désormais obsolètes.</p><p>Il est ainsi nécessaire de considérer des solutions technologiques de sécurisation mais aussi un retour possible, dans certain cas, à un retour des approches analogiques ou semblables (papier-crayon ou ordinateur verrouillé en salle de classe sous surveillance).</p><p><mark>Il faut oser scruter et arpenter ce territoire sans carte qui s&apos;impose à nous, sans pour autant s&apos;interdire des mesures de bon sens qui, à ce jour et dans certaines circonstances, sont seules capables de préserver l&apos;intégrité des examens et la valeur des diplômes.</mark></p></>}><p>J&apos;accompagne plusieurs personnes dans la refonte de leurs pratiques d&apos;évaluation face à l&apos;intelligence artificielle. Le public et les habitudes changent, et ce bond technologique provoque d&apos;autres défis qui rendent cruciales des réflexions profondes sur l&apos;évaluation. Je participe ainsi aux efforts d&apos;intégration d&apos;outils de sécurisation des examens, mais j&apos;outille aussi pédagogiquement le corps enseignant qui prend conscience des nouveaux angles morts.</p></ExpertiseCard>
      </div>
    </div></section>
  )
}

const projects = [
  { title: 'Hybridation de programmes', text: <>Une <strong>quarantaine de professeurs accompagnés</strong> collectivement, plus d&apos;une <strong>quinzaine individuellement</strong>, en partenariat étroit avec le <strong>décanat</strong> de la faculté des Sciences de l&apos;Éducation.</>, list: <ul><li><strong>Formations</strong> (en présentiel et sous forme de vidéo)</li><li>Productions de <strong>ressources</strong> pour encadrer la transition<ul><li>Gabarits de planification</li><li>Activités et ressources originales par programmation avec IA</li><li>Encadrement des travaux collaboratifs (charte d&apos;équipe, outils d&apos;autoévaluation)</li><li>Outils d&apos;évaluation des séances en ligne</li><li>Documentation sur des outils technologiques : Wooclap, Perusall</li></ul></li><li><strong>Accompagnements individualisés</strong></li></ul> },
  { title: 'Validation du comodal', text: <>Appui à la Faculté de Médecine Vétérinaire sur l&apos;organisation de l&apos;enseignement comodal multi-campus afin de répondre aux exigences réglementaires et aux critères d&apos;accréditation en palliant le nombre limité d&apos;experts enseignants.</> },
  { title: "Rationalisation de l'enseignement à distance", text: <>Conseil auprès d&apos;un organisme externe (RMPQ) pour structurer l&apos;argumentaire scientifique et pédagogique encadrant les limites de la formation à distance pour les apprentissages pratiques complexes en massothérapie.</> },
]

export function Realisations() {
  return <section id="realisations" className="py-24 md:py-32"><div className="mx-auto max-w-7xl px-5 md:px-10"><SectionTitle index="02" eyebrow="Impact">Réalisations récentes</SectionTitle><h3 className="mb-8 font-mono text-xs uppercase tracking-widest text-primary">Conseil stratégique</h3><div className="grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-3">{projects.map((project, i) => <article key={project.title} className="flex flex-col gap-6 bg-background p-7 md:p-9"><span className="font-mono text-xs text-muted-foreground">0{i + 1}</span><h4 className="font-serif text-3xl leading-tight">{project.title}</h4><p className="leading-relaxed text-muted-foreground">{project.text}</p>{project.list && <div className="prose-list text-sm leading-relaxed text-muted-foreground">{project.list}</div>}</article>)}</div><div className="mt-16 grid gap-8 border-t border-border pt-8 lg:grid-cols-[.5fr_1.5fr]"><h3 className="font-mono text-xs uppercase tracking-widest text-primary">Initiatives propres</h3><ul className="flex flex-col gap-5 text-lg leading-relaxed"><li>Conception d&apos;une <strong>formation autoportante en HTML sur l&apos;enseignement comodal</strong> incluant un outil diagnostic pour mieux appréhender une transition vers cette modalité.</li><li>Expérimentation du facteur de pondération individuel</li><li>Conception et animation de parcours de formation sur l&apos;IA générative (ChatGPT) ou sur la revalorisation des activités de lecture universitaire pour contrer les défis modernes liés à la lecture.</li></ul></div></div></section>
}

export function Curriculum() {
  return <section id="parcours" className="bg-foreground py-24 text-background md:py-32"><div className="mx-auto max-w-7xl px-5 md:px-10"><header className="mb-12 flex items-end justify-between border-b border-background/20 pb-5"><h2 className="font-serif text-4xl md:text-5xl">Curriculum</h2><p className="font-mono text-xs uppercase tracking-widest text-background/60">03 / Parcours</p></header><div className="grid gap-16 lg:grid-cols-2"><div className="flex flex-col gap-10"><article><p className="mb-3 font-mono text-xs text-primary-foreground/60">2020 — aujourd&apos;hui</p><h3 className="font-serif text-3xl">Conseiller technopédagogique (2020)</h3><p className="mt-4 leading-relaxed text-background/70">Au sein du Centre de Pédagogie Universitaire, j&apos;accompagne les facultés et le corps enseignant dans la transformation de leurs dispositifs de formation et l&apos;intégration raisonnée du numérique.</p></article><article><p className="mb-3 font-mono text-xs text-primary-foreground/60">2005 — 2018</p><h3 className="font-serif text-3xl">Professeur de guitare (2005-2018)</h3><p className="mt-4 leading-relaxed text-background/70">Enseignement individuel et collectif de la musique auprès de publics hétérogènes. Ce parcours d&apos;une douzaine d&apos;années constitue le socle de mon expertise en pédagogie et en création de contenus.</p><ul className="mt-5 flex flex-col gap-3 text-sm leading-relaxed text-background/70"><li><strong className="text-background">Conception pédagogique :</strong> Élaboration de programmes de formation et de grilles d&apos;évaluation adaptées aux différents cycles d&apos;apprentissage.</li><li><strong className="text-background">Pédagogie différenciée :</strong> Ajustement constant des méthodes d&apos;enseignement selon les profils, le rythme et les habiletés des apprenants.</li><li><strong className="text-background">Compétences créatives :</strong> Développement d&apos;une expertise en arrangement, composition et structure narrative, aujourd&apos;hui mise au service de la production de ressources technopédagogiques (vidéos, audio).</li></ul></article><article className="border-l border-primary pl-5"><h3 className="font-serif text-2xl">Éducateur jeunes enfants (2013)</h3><p className="mt-2 font-semibold">SREPE inc.</p><p className="mt-2 text-background/70">Éducateur remplaçant dans plusieurs CPE de Montréal et sa région.</p></article></div><div><p className="mb-5 font-mono text-xs uppercase tracking-widest text-primary-foreground/60">Formation · CLI</p><div className="overflow-hidden border border-background/20 bg-background/5 font-mono text-sm"><div className="flex gap-2 border-b border-background/20 px-5 py-3" aria-hidden="true"><span className="size-2 rounded-full bg-primary"></span><span className="size-2 rounded-full bg-background/40"></span><span className="size-2 rounded-full bg-background/20"></span></div><div className="flex flex-col gap-8 p-6 md:p-8"><p className="text-primary-foreground/60">$ parcours --formation</p>{[['2021','Maîtrise en Sciences de l’Éducation','Université de Montréal (Québec, Canada)'],['2013',"Diplôme d'État d'enseignement de la musique en musiques actuelles",'Cefedem Rhône-Alpes (France)'],['2005','Licence en musique','Université Lyon II (France)'],['2003',"Diplôme d'Études Musicales en Jazz",'Conservatoire de Lyon (France)']].map(([year,title,place]) => <div key={title} className="grid gap-2 md:grid-cols-[3rem_1fr]"><span className="text-primary-foreground/60">{year}</span><div><h3 className="font-sans text-lg font-semibold">{title}</h3><p className="mt-1 text-background/60">{year} • {place}</p></div></div>)}<p className="text-primary-foreground/60">✓ 4 diplômes trouvés</p></div></div></div></div></div></section>
}

export function Contact() {
  return <footer id="contact" className="bg-primary py-20 text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 md:px-10 lg:flex-row lg:items-end lg:justify-between"><div className="flex max-w-3xl flex-col gap-5"><p className="font-mono text-xs uppercase tracking-widest">Pour poursuivre la conversation</p><h2 className="font-serif text-5xl leading-none tracking-tight text-balance md:text-7xl">Parlons pédagogie, avant de parler outils.</h2></div><a href="mailto:votre-courriel@exemple.ca" className="w-fit border border-primary-foreground px-6 py-4 font-mono text-xs uppercase tracking-wider transition-colors hover:bg-primary-foreground hover:text-primary">[Votre courriel]</a></div></footer>
}
