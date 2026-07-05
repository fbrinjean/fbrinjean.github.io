import { Moon, Sun, BookOpen, Cpu, ShieldCheck, ChevronRight, GraduationCap, Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useTheme } from "@/components/theme-provider"

/* ─── Types ───────────────────────────────────────────────────────── */
interface Pilier {
  id: string
  number: string
  icon: React.ElementType
  title: string
  body: string
}

/* ─── Mode Toggle ─────────────────────────────────────────────────── */
function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark =
    theme === "dark" ||
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Basculer le thème"
      className="shrink-0 text-muted-foreground hover:text-foreground"
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  )
}

/* ─── Header ──────────────────────────────────────────────────────── */
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        <span className="font-serif text-base font-semibold tracking-tight text-foreground whitespace-nowrap">
          Conseiller Technopédagogique
        </span>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "#philosophie", label: "Philosophie" },
            { href: "#realisations", label: "Réalisations" },
            { href: "#parcours", label: "Parcours" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        <ModeToggle />
      </div>
    </header>
  )
}

/* ─── Hero / Manifeste ────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      id="philosophie"
      className="max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28"
    >
      <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold mb-8">
        Conseil stratégique &amp; Technopédagogie
      </p>

      <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.18] tracking-tight text-foreground max-w-4xl text-balance mb-10">
        Face à l&apos;omniprésence de l&apos;IA et à la transition numérique de
        l&apos;enseignement supérieur, ma mission est de guider les institutions et
        le corps enseignant vers une adoption réfléchie des technologies et une
        adaptation des méthodes d&apos;enseignement, pour à la fois répondre aux
        enjeux modernes et préserver les compétences cognitives essentielles.
      </h1>

      <div className="flex items-center gap-4 mb-12">
        <Separator className="flex-1 max-w-16 bg-gold opacity-70" />
        <p className="font-sans text-sm text-muted-foreground italic leading-relaxed max-w-xl">
          Pour un usage sobre et ciblé du numérique dans l&apos;enseignement supérieur.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Badge
          variant="outline"
          className="font-mono text-xs tracking-wider border-gold/40 text-gold px-3 py-1"
        >
          Enseignement supérieur
        </Badge>
        <Badge
          variant="outline"
          className="font-mono text-xs tracking-wider border-border text-muted-foreground px-3 py-1"
        >
          IA générative
        </Badge>
        <Badge
          variant="outline"
          className="font-mono text-xs tracking-wider border-border text-muted-foreground px-3 py-1"
        >
          Intégrité académique
        </Badge>
        <Badge
          variant="outline"
          className="font-mono text-xs tracking-wider border-border text-muted-foreground px-3 py-1"
        >
          Hybridation pédagogique
        </Badge>

        <span className="hidden md:block w-px h-5 bg-border mx-1" />

        {/* Remplacer /cv.pdf par votre fichier déposé dans public/ */}
        <a href="/cv.pdf" download aria-label="Télécharger le curriculum vitæ">
          <Button
            variant="outline"
            size="sm"
            className="font-mono text-xs tracking-wider gap-2 border-gold/50 text-gold hover:bg-gold/10 hover:text-gold hover:border-gold transition-colors"
          >
            <Download className="size-3.5" />
            Télécharger le CV
          </Button>
        </a>
      </div>
    </section>
  )
}

/* ─── Données des piliers ─────────────────────────────────────────── */
const PILIERS: Pilier[] = [
  {
    id: "pilier-01",
    number: "01",
    icon: BookOpen,
    title: "Pédagogie de l'accompagnement",
    body: "Cibler les besoins et habiletés des interlocuteurs — du professeur sceptique au décanat — pour co-construire un positionnement critique et une intégration raisonnée face à l'IA générative.",
  },
  {
    id: "pilier-02",
    number: "02",
    icon: Cpu,
    title: "Expertise technique & Discernement",
    body: "Maîtrise avancée de la production multimédia, de la programmation assistée par IA et des plateformes institutionnelles, mise au service d'une opposition ferme au solutionnisme technologique.",
  },
  {
    id: "pilier-03",
    number: "03",
    icon: ShieldCheck,
    title: "Évaluation & Intégrité académique",
    body: "Accompagnement dans la refonte des pratiques d'évaluation face aux défis de l'IA, sécurisation des examens et identification pédagogique des nouveaux angles morts.",
  },
]

/* ─── Piliers d'Intervention ──────────────────────────────────────── */
function PiliersSection() {
  return (
    <section className="bg-card border-y border-border">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold mb-14">
          Piliers d&apos;Intervention
        </p>

        {/* Grille de résumé */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 mb-16">
          {PILIERS.map((pilier) => {
            const Icon = pilier.icon
            return (
              <article key={pilier.id} className="flex flex-col gap-5">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-4xl font-medium text-gold/30 leading-none select-none">
                    {pilier.number}
                  </span>
                  <Icon className="size-5 text-gold mt-1" strokeWidth={1.5} />
                </div>

                <Separator className="bg-border" />

                <h3 className="font-serif text-lg font-medium leading-snug text-foreground">
                  {pilier.title}
                </h3>

                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {pilier.body}
                </p>
              </article>
            )
          })}
        </div>

        {/* Séparateur vers l'accordéon philosophique */}
        <div className="flex items-center gap-4 mb-10">
          <Separator className="flex-1 bg-border" />
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold/70 whitespace-nowrap">
            Philosophie &amp; Positionnement
          </p>
          <Separator className="flex-1 bg-border" />
        </div>

        {/* Accordéon — ouvert par défaut pour lecture passive */}
        <Accordion
          type="multiple"
          defaultValue={["pilier-01", "pilier-02", "pilier-03"]}
          className="flex flex-col gap-0"
        >
          {PILIERS.map((pilier) => {
            const Icon = pilier.icon
            return (
              <AccordionItem
                key={pilier.id}
                value={pilier.id}
                className="border-b border-border last:border-b-0"
              >
                <AccordionTrigger className="py-5 hover:no-underline group">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-gold/50 tracking-widest w-6 shrink-0">
                      {pilier.number}
                    </span>
                    <Icon
                      className="size-4 text-gold/60 group-hover:text-gold transition-colors shrink-0"
                      strokeWidth={1.5}
                    />
                    <span className="font-serif text-base font-medium text-foreground text-left">
                      {pilier.title}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pb-8 pt-2">
                  <div className="pl-14">
                    {/* Zone de texte — à rédiger par le candidat */}
                    <div className="border border-dashed border-border rounded-sm p-6 min-h-32 flex flex-col justify-center items-center gap-2">
                      <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground/40">
                        — À rédiger —
                      </span>
                      <span className="font-serif text-sm italic text-muted-foreground/30 text-center max-w-sm">
                        Votre texte de positionnement philosophique lié à ce pilier
                      </span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </section>
  )
}

/* ─── Featured Case Study ─────────────────────────────────────────── */
function CaseStudySection() {
  const livrables = [
    "Formations collectives en présentiel et parcours vidéo autoportants",
    "Gabarits de planification pédagogique adaptés au comodal et à la classe hybride",
    "Activités originales et exercices conçus par programmation assistée avec IA",
    "Outils d'évaluation et de rétroaction pour les séances en ligne",
    "Documentation ciblée sur des outils institutionnels — Wooclap, Perusall — et leurs limites",
  ]

  return (
    <section id="realisations" className="max-w-5xl mx-auto px-6 py-20 md:py-28">
      <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold mb-8">
        Étude de cas — Chef-d&apos;œuvre
      </p>

      <h2 className="font-serif text-2xl md:text-3xl font-medium leading-tight text-foreground mb-6 max-w-2xl">
        Transformation Institutionnelle&nbsp;: Hybridation de programmes à
        la Faculté des Sciences de l&apos;Éducation
      </h2>

      <p className="font-sans text-sm leading-relaxed text-muted-foreground mb-10 max-w-xl">
        Partenariat étroit avec le décanat pour encadrer la transition numérique
        sur plusieurs années. Conception et déploiement d&apos;un dispositif complet
        d&apos;accompagnement du corps enseignant — de la réflexion stratégique
        initiale jusqu&apos;à la production des ressources et l&apos;évaluation des pratiques.
      </p>

      <div className="flex flex-wrap gap-4 mb-14">
        <div className="border border-gold/30 bg-gold/5 rounded px-5 py-4 flex flex-col gap-1">
          <span className="font-serif text-3xl font-semibold text-gold">40+</span>
          <span className="font-mono text-xs text-muted-foreground tracking-wide leading-relaxed">
            Professeurs accompagnés<br />collectivement
          </span>
        </div>
        <div className="border border-gold/30 bg-gold/5 rounded px-5 py-4 flex flex-col gap-1">
          <span className="font-serif text-3xl font-semibold text-gold">15+</span>
          <span className="font-mono text-xs text-muted-foreground tracking-wide leading-relaxed">
            Accompagnements<br />individuels sur mesure
          </span>
        </div>
      </div>

      <div>
        <p className="font-mono text-xs tracking-wider uppercase text-muted-foreground mb-5">
          Livrables clés
        </p>
        <ul className="flex flex-col gap-4 max-w-2xl">
          {livrables.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <ChevronRight
                className="size-4 text-gold shrink-0 mt-0.5"
                strokeWidth={1.5}
              />
              <span className="font-sans text-sm leading-relaxed text-muted-foreground">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ─── Other Engagements ───────────────────────────────────────────── */
function EngagementsSection() {
  const engagements = [
    {
      institution: "Faculté de Médecine Vétérinaire",
      title: "Validation du comodal",
      body: "Appui sur l'organisation de l'enseignement comodal multi-campus face aux critères réglementaires d'accréditation. Analyse des contraintes institutionnelles et accompagnement pour répondre aux exigences de conformité pédagogique.",
    },
    {
      institution: "RMPQ",
      title: "Rationalisation de l'enseignement à distance",
      body: "Conseil stratégique pour structurer l'argumentaire scientifique posant les limites de la formation à distance pour les apprentissages pratiques complexes. Appui à la rédaction et à la validation institutionnelle.",
    },
    {
      institution: "Initiatives propres",
      title: "Ressources & Formations autoportantes",
      body: "Conception d'une formation autoportante en HTML sur l'enseignement comodal incluant un outil diagnostic, et d'un parcours de revalorisation de la lecture universitaire face aux défis de l'IA générative.",
    },
  ]

  return (
    <section className="bg-card border-y border-border">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold mb-14">
          Autres Initiatives Stratégiques
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {engagements.map(({ institution, title, body }) => (
            <article key={title} className="flex flex-col gap-4">
              <p className="font-mono text-xs tracking-wider uppercase text-gold/70">
                {institution}
              </p>
              <h3 className="font-serif text-lg font-medium leading-snug text-foreground">
                {title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Parcours / Timeline ─────────────────────────────────────────── */
function ParcoursSection() {
  return (
    <section id="parcours" className="max-w-5xl mx-auto px-6 py-20 md:py-28">
      <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold mb-14">
        Parcours Professionnel
      </p>

      <div className="relative flex flex-col gap-0">
        <article className="relative pl-10 pb-16 border-l-2 border-border">
          <span className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gold ring-4 ring-background" />
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-5 mb-4">
            <span className="font-mono text-xs tracking-widest text-gold whitespace-nowrap">
              Depuis 2020
            </span>
            <p className="font-mono text-xs tracking-wider uppercase text-muted-foreground">
              Centre de Pédagogie Universitaire
            </p>
          </div>
          <h3 className="font-serif text-xl font-medium text-foreground mb-3 leading-snug">
            Conseiller technopédagogique
          </h3>
          <p className="font-sans text-sm leading-relaxed text-muted-foreground max-w-xl">
            Accompagnement des facultés et du corps enseignant dans la transformation
            de leurs dispositifs de formation et l&apos;intégration raisonnée du numérique.
            Développement d&apos;une posture critique face à l&apos;IA générative et soutien à
            la refonte des pratiques évaluatives.
          </p>
        </article>

        <article className="relative pl-10 pb-4 border-l-2 border-border">
          <span className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-muted border-2 border-border ring-4 ring-background" />
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-5 mb-4">
            <span className="font-mono text-xs tracking-widest text-muted-foreground whitespace-nowrap">
              2005 — 2018
            </span>
            <p className="font-mono text-xs tracking-wider uppercase text-muted-foreground">
              Fondations de la pratique pédagogique
            </p>
          </div>
          <h3 className="font-serif text-xl font-medium text-foreground mb-3 leading-snug">
            Enseignement musical & Création de contenus
          </h3>
          <p className="font-sans text-sm leading-relaxed text-muted-foreground max-w-xl">
            Treize ans d&apos;enseignement de la musique (guitare) auprès de publics hétérogènes.
            Socle de l&apos;expertise en différenciation pédagogique, élaboration de grilles
            d&apos;évaluation, arrangement et structure narrative — transposée aujourd&apos;hui dans
            la production de ressources multimédias pour l&apos;enseignement supérieur.
          </p>
        </article>

        <span className="absolute -left-[3px] bottom-0 w-1.5 h-1.5 rounded-full bg-border" />
      </div>
    </section>
  )
}

/* ─── Education / Diplômes ────────────────────────────────────────── */
function EducationSection() {
  const degrees = [
    {
      year: "2021",
      degree: "Maîtrise en Sciences de l'Éducation",
      institution: "Université de Montréal",
      country: "Canada",
    },
    {
      year: "2013",
      degree: "Diplôme d'État d'enseignement de la musique",
      institution: "Cefedem Rhône-Alpes",
      country: "France",
    },
    {
      year: "2005",
      degree: "Licence en musique",
      institution: "Université Lyon II",
      country: "France",
    },
    {
      year: "2003",
      degree: "Diplôme d'Études Musicales en Jazz",
      institution: "Conservatoire de Lyon",
      country: "France",
    },
  ]

  return (
    <section className="bg-card border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold mb-12">
          Formation académique
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {degrees.map(({ year, degree, institution, country }) => (
            <article key={degree} className="flex gap-5 items-start">
              <div className="flex flex-col items-center gap-1 pt-0.5 shrink-0">
                <GraduationCap className="size-4 text-gold" strokeWidth={1.5} />
                <span className="font-mono text-xs text-gold/60">{year}</span>
              </div>
              <div>
                <h4 className="font-serif text-base font-medium text-foreground leading-snug mb-1">
                  {degree}
                </h4>
                <p className="font-mono text-xs text-muted-foreground tracking-wide">
                  {institution} — {country}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ──────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-muted-foreground tracking-wide">
          Conseil stratégique &amp; Technopédagogie — Enseignement supérieur
        </span>
        <span className="font-mono text-xs text-muted-foreground/50">
          Montréal, Canada
        </span>
      </div>
    </footer>
  )
}

/* ─── App ─────────────────────────────────────────────────────────── */
export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <PiliersSection />
        <CaseStudySection />
        <EngagementsSection />
        <ParcoursSection />
        <EducationSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
