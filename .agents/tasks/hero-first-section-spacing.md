# Espacement entre le hero et « Réalisations & collaborations »

## Réponse synthétique

Modifier `.section-pad` ne change pas l’espace **sous le contenu du hero et avant la ligne horizontale** qui introduit « Réalisations & collaborations », car le hero ne porte pas cette classe. Cet espace est défini par le `padding-bottom` de `.hero` : `6rem` sous 768 px et `8rem` à partir de 768 px. La première ligne horizontale appartient à `#realisations`, via le `border-top` de `.section-card`.

`.section-pad` agit bien sur l’espace **après** cette ligne, entre le bord supérieur de « Réalisations » et son premier contenu. Il ne déplace donc pas le bord/l’intersection visuelle avec le hero. Cela explique l’impression que le premier intervalle ne suit pas les changements appliqués à la ligne 531.

Pour harmoniser cet espace initial avec les autres séparations, l’unique règle la plus cohérente à ajuster est `padding-bottom` de `.hero` (et sa valeur responsive), plutôt que de spécialiser `.section-pad`. Une cible cohérente serait de l’aligner sur les valeurs de `.section-pad` : `4.5rem` sur petit écran et `5rem` à partir de 768 px, au lieu des `6rem` / `8rem` actuels.

## Éléments de preuve

### Structure HTML et emplacement de la séparation

- `index.html:1430` : le hero est l’élément `<section id="accueil" class="hero">`.
  - Son conteneur interne est `index.html:1432`, `<div class="container hero-grid">` : il ne possède pas la classe `.section-pad`.
  - Le hero se ferme à `index.html:1494`, avant la section suivante.
- `index.html:1500` : la première section suivante est `<section id="realisations" class="section-card">`.
- `index.html:1501` : son contenu est placé dans `<div class="container section-pad">`.
  - Ainsi, `.section-pad` commence seulement **à l’intérieur** de `#realisations`, après le début de la section et après son bord supérieur.

### Règles CSS qui déterminent l’espace sous le hero

- `index.html:375-379`, règle `.hero` :
  - `padding-top: 4rem;`
  - `padding-bottom: 6rem;`
- `index.html:380-381`, media query `@media (min-width: 768px)` :
  - `.hero { padding-top: 6rem; padding-bottom: 8rem; }`

À l’écran, l’espace vertical depuis la fin du contenu du hero jusqu’à la fin de la boîte `#accueil` vaut donc `6rem` (largeur inférieure à 768 px) ou `8rem` (largeur d’au moins 768 px). Le prochain élément, `#realisations`, commence immédiatement après cette boîte.

### Règles CSS qui dessinent la ligne et espacent le contenu de « Réalisations »

- `index.html:521-525`, règle `.section-card` appliquée à `#realisations` :
  - `background: var(--card);`
  - `border-top: 1px solid var(--border);`
  - `border-bottom: 1px solid var(--border);`

Le `border-top` de 1 px est la ligne horizontale située au début de `#realisations`. Elle est donc positionnée par la fin du hero et non par le padding du conteneur enfant.

- `index.html:526-530`, règle `.section-pad` :
  - `padding-top: 4.5rem;`
  - `padding-bottom: 4.5rem;`
- `index.html:531-532`, à partir de 768 px :
  - `padding-top: 5rem;`
  - `padding-bottom: 5rem;`

Ces valeurs règlent l’espace entre les bords de chaque section et son contenu. Pour `#realisations`, elles règlent la distance **entre la ligne supérieure** et « Exemples récents » (`index.html:1503`), pas la distance entre le hero et cette ligne.

- `index.html:1315-1316`, uniquement dans la feuille `@media print` : `.section-pad` est ramené à `1.5rem` et `.hero` reçoit `padding-bottom: 1.5rem`. Ces valeurs ne s’appliquent pas à l’affichage écran et ne sont donc pas la cause du comportement observé dans le navigateur.

## Conclusions et recommandation

1. Les séparations entre les sections ordinaires sont perçues comme réglées par `.section-pad` parce que les sections concernées contiennent toutes un enfant `.container.section-pad` : son `padding-bottom` crée l’espace avant leur bord inférieur et son `padding-top` crée l’espace après le bord de la suivante.
2. Le hero est une exception structurelle volontaire : il utilise `.hero-grid`, sans `.section-pad`. Son espace inférieur est autonome (`.hero { padding-bottom: … }`).
3. Changer `.section-pad` peut déplacer le premier texte de « Réalisations » après sa ligne, mais ne peut pas modifier la position de cette ligne ni réduire le vide restant sous le hero ; le `padding-bottom` du hero continue de dominer cette partie du premier intervalle.

**Recommandation unique :** ajuster `padding-bottom` de `.hero` aux lignes `378` et `381`. Pour reproduire la respiration des sections standard, utiliser respectivement `4.5rem` et `5rem`, en conservant `padding-top` inchangé. Cette solution respecte l’architecture actuelle : une seule règle sémantique propre au hero pilote son espace spécifique, sans ajouter d’exception à `.section-pad` ni modifier le HTML.
