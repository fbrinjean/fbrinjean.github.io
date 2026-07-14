import { SectionHeading } from '@/components/section-heading'
import { Expandable } from '@/components/expandable'
import { Highlight } from '@/components/highlight'

export function ExpertiseSection() {
  return (
    <section id="philosophie" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <SectionHeading
        index="01"
        eyebrow="Expertise et approche"
        title="Piliers d'intervention"
      />

      <div className="grid gap-14 lg:grid-cols-3 lg:gap-10">
        {/* Pilier 1 */}
        <article className="flex flex-col">
          <span className="font-mono text-xs text-primary">01</span>
          <h3 className="mt-3 font-serif text-xl font-medium text-foreground">
            Pédagogie de l&apos;accompagnement
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Qu&apos;il s&apos;agisse d&apos;un professeur sceptique ou d&apos;un
            décanat se heurtant aux enjeux modernes, je m&apos;efforce de{' '}
            <strong className="font-semibold text-foreground">
              cibler les besoins et les habiletés
            </strong>{' '}
            de mes interlocuteurs pour produire des ajustements réalistes et
            fructueux.
          </p>

          <Expandable>
            <p>
              Enseigner à l&apos;Université est complexe : temps et énergie sont
              accaparées par de multiples tâches - charge d&apos;enseignement,
              veille, demande de budgets, recherche, etc. - dans un milieu
              compétitif qui exige l&apos;excellence.
            </p>
            <p>
              À propos de la pédagogie, tous n&apos;ont pas la même aisance, le
              même recul, la même faculté d&apos;identifier leurs angles morts.
              Ceci est tout aussi vrai au regard du virage numérique qu&apos;a
              vécu l&apos;enseignement supérieur et qui parfois démultiplie les
              enjeux.
            </p>
            <p>
              <Highlight>
                Tous aussi n&apos;ont pas la même prédisposition à accepter une
                aide extérieure
              </Highlight>
              . Cette aide extérieure n&apos;est reçue que si un rapport de
              confiance s&apos;est bâti. Celle-ci se construira par la légitimité
              de l&apos;analyse pédagogique et des recommandations mais aussi par
              une qualité d&apos;écoute et d&apos;adaptation du conseiller.
            </p>
            <p>
              C&apos;est pourquoi{' '}
              <Highlight>
                il est nécessaire de s&apos;adapter à chaque personne
              </Highlight>{' '}
              : bien comprendre sa requête, acquiescer du temps et des efforts
              qu&apos;elle est prête à fournir, afin de proposer des ajustements,
              mineurs ou majeurs selon le contexte, mais toujours réalistes.
            </p>
          </Expandable>
        </article>

        {/* Pilier 2 */}
        <article className="flex flex-col">
          <span className="font-mono text-xs text-primary">02</span>
          <h3 className="mt-3 font-serif text-xl font-medium text-foreground">
            Expertise technologique <em className="italic">et</em> discernement
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Je dispose d&apos;une{' '}
            <strong className="font-semibold text-foreground">
              expertise techniques avancées
            </strong>{' '}
            : production multimédia (vidéos, infographies, musique) et de
            ressources pédagogiques multiples, programmation assistée par IA,
            soutien technique pour une plateforme institutionnelle.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Je m&apos;oppose pourtant au solutionnisme qui, parfois, avance
            masqué, et je soutiens l&apos;intégration d&apos;outils
            technologiques seulement pour leur valeur ajoutée.{' '}
            <strong className="font-semibold text-foreground">
              Un usage sobre et ciblé du numérique
            </strong>
            , qui garantit la préservation de compétences humaines
            fondamentales, telles la lecture, l&apos;analyse ou la capacité
            d&apos;attention.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            J&apos;amène le corps enseignant à penser l&apos;
            <strong className="font-semibold text-foreground">
              IA générative
            </strong>{' '}
            sous l&apos;angle spécifique de leur discipline et de leur pratique
            enseignante pour que chacun développe son propre{' '}
            <strong className="font-semibold text-foreground">
              positionnement
            </strong>{' '}
            critique et, éventuellement, une intégration raisonnée.
          </p>

          <Expandable>
            <p>
              Tout objet technologique nous renforce quelque part et nous
              affaiblit ailleurs. Il convient alors d&apos;être prudent et
              mesuré à une époque d&apos;effervescence technologique où il peut
              être tellement tentant de déléguer à la dernière innovation le
              soin de nous apporter une solution.
            </p>
            <p>
              Je suis capable d&apos;accompagner un enseignant dans la
              production d&apos;une vidéo - de la scénarisation jusqu&apos;à
              l&apos;intégration dans l&apos;environnement numérique
              d&apos;apprentissage, en passant par le tournage et même, qui sait
              ?, par la composition de sa musique. Je peux développer un outil
              complètement original pour répondre à un besoin didactique
              particulier (génération d&apos;étude de cas + environnement pour
              le visualiser avec quiz intégré, outil de présentation de
              l&apos;enseignement comodal avec autodiagnostic et recommandations
              personnalisées). Je peux collaborer avec des auteurs de jeux pour
              créer des jeux de cartes et ludifier un cours qui a généralement
              mauvaise presse chez les étudiants.
            </p>
            <p>
              <Highlight>
                <strong>Mais</strong> de telles réalisations, aussi brillantes
                soient-elles, ne sont aucunement des prérequis pour le succès
                d&apos;une collaboration avec un enseignant.
              </Highlight>{' '}
              D&apos;une part car ce ne sont pas forcément les attentes de notre
              collaborateur, mais d&apos;autre part car la solution à ses enjeux
              est peut-être ailleurs, sous une forme plus pragmatique et
              accessible.
            </p>
            <p>
              Une activité de lecture bien planifiée sera peut-être plus
              pertinente - et moins coûteuse en temps et en énergie - qu&apos;une
              vidéo, tout en accompagnant les étudiants à développer leur
              compétence de lecture de textes disciplinaires.
            </p>
            <p>
              L&apos;identification de mécanismes vertueux pour encadrer une
              activité collaborative sera bien plus pertinente que l&apos;ajout
              d&apos;un outil numérique censé favoriser les interactions, en
              responsabilisant les acteurs et en rendant plus équitable
              l&apos;évaluation de ces travaux.
            </p>
            <p>
              <Highlight>
                Certains outils technologiques sont puissants et doivent être
                utilisés à bon escient. Mais ils ne sont pas la clef de la
                préservation de développements cognitifs essentiels (lecture,
                synthèse, communication) ni de la qualité du lien entre
                l&apos;enseignant et sa classe
              </Highlight>
              . Éléments prédominants pour garantir un apprentissage de qualité.
            </p>
          </Expandable>
        </article>

        {/* Pilier 3 */}
        <article className="flex flex-col">
          <span className="font-mono text-xs text-primary">03</span>
          <h3 className="mt-3 font-serif text-xl font-medium text-foreground">
            Évaluation &amp; intégrité académique
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            J&apos;accompagne plusieurs personnes dans la refonte de leurs
            pratiques d&apos;évaluation face à l&apos;intelligence artificielle.
            Le public et les habitudes changent, et ce bond technologique
            provoque d&apos;autres défis qui rendent cruciales des réflexions
            profondes sur l&apos;évaluation. Je participe ainsi aux efforts
            d&apos;intégration d&apos;outils de sécurisation des examens, mais
            j&apos;outille aussi pédagogiquement le corps enseignant qui prend
            conscience des nouveaux angles morts.
          </p>

          <Expandable>
            <p>
              Nous faisons face encore aujourd&apos;hui aux conséquences de la
              crise du COVID. La situation d&apos;urgence a permis
              l&apos;émergence d&apos;autres approches d&apos;enseignement qui
              ont créé alors d&apos;autres attentes du public étudiant. Un
              contexte et des attentes changeantes qui imposent d&apos;adapter
              minimalement ses méthodes d&apos;enseignement et
              d&apos;évaluation. La démocratisation de l&apos;intelligence
              artificielle générative n&apos;a fait qu&apos;accentuer les
              enjeux, rendant certaines approches non plus seulement démodées
              mais désormais obsolètes.
            </p>
            <p>
              Il est ainsi nécessaire de considérer des solutions technologiques
              de sécurisation mais aussi un retour possible, dans certain cas, à
              un retour des approches analogiques ou semblables (papier-crayon ou
              ordinateur verrouillé en salle de classe sous surveillance).
            </p>
            <p>
              <Highlight>
                Il faut oser scruter et arpenter ce territoire sans carte qui
                s&apos;impose à nous, sans pour autant s&apos;interdire des
                mesures de bon sens qui, à ce jour et dans certaines
                circonstances, sont seules capables de préserver
                l&apos;intégrité des examens et la valeur des diplômes.
              </Highlight>
            </p>
          </Expandable>
        </article>
      </div>
    </section>
  )
}
