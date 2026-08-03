# Spécifications de cohérence esthétique — Portfolio Fabien Brinjean

Document de référence à transmettre à un développeur pour produire de nouvelles pages HTML cohérentes avec `index.html` (version de référence actuelle). Toutes les valeurs ci-dessous sont extraites telles quelles de ce fichier — il n'y a pas d'ambiguïté à lever, seulement à respecter.

---

## 1. Principe général

Le site est **un fichier HTML autonome par page** (pas de framework, pas de build). Chaque nouvelle page doit :
- Réutiliser **exactement** les mêmes variables CSS (`:root`), la même police, les mêmes classes de composants.
- Copier l'en-tête (`<header class="site-header">`), le pied de page (`<footer class="contact-footer">`) et les scripts JS communs tels quels.
- Ne pas réinventer de nouvelles couleurs, tailles de police ou espacements « à l'œil » — piocher dans les tokens ci-dessous.

Le thème est **unique** (clair), il n'y a **pas** de bascule clair/sombre dans cette version — contrairement à d'anciennes versions du projet (`bolt.html`, `v0-bolt claude.html`). Ne pas réintroduire de toggle sans consigne explicite.

---

## 2. Polices (à charger dans le `<head>`)

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300..700;1,300..700&family=Lora:ital,wght@0,400..700;1,400..700&family=IBM+Plex+Mono:wght@400;600&display=swap" rel="stylesheet" />
```

| Rôle | Police | Variable CSS |
|---|---|---|
| Texte courant | Source Sans 3 | `--font-sans` |
| Titres, citations, accent éditorial | Lora | `--font-serif` |
| Libellés techniques, dates, eyebrows | IBM Plex Mono | `--font-mono` |

⚠️ Ne pas confondre avec la police utilisée dans les maquettes de référence (`bolt.html`, `v0-bolt claude.html`) qui utilisaient Playfair Display / Inter / JetBrains Mono — **ce n'est plus le stack actuel**.

---

## 3. Palette de couleurs (variables `:root`)

```css
--background: #f5f1e8;       /* fond général, beige clair */
--foreground: #1b2724;       /* texte principal, vert très sombre */
--card: #ebe5d9;              /* fond des cartes/encadrés */
--card-foreground: #1b2724;
--primary: #b4472c;           /* terracotta — accent unique du site */
--primary-foreground: #fffaf0;
--muted: #ded8cc;
--muted-foreground: #59635f;
--border: #c7c0b4;
--ring: #b4472c;
```

**Deux sections dérogent volontairement à ce thème et redéfinissent leurs propres variables en local (fixes, non togglables) :**

- `.section-curriculum` (section Curriculum) : vert très sombre + crème
  ```css
  --background: #1b2724;
  --foreground: #f5f1e8;
  --card: #1b2724;
  --muted-foreground: rgba(245,241,232,.62);
  --border: rgba(245,241,232,.14);
  ```
- `.contact-footer` (pied de page contact) : terracotta plein
  ```css
  background: #b4472c;
  --foreground: #fffaf0;
  --primary: #b4472c;
  --primary-foreground: #fffaf0;
  ```

C'est une **progression de contraste volontaire** : le site s'assombrit/s'intensifie en descendant vers le bas de page (clair → vert sombre → terracotta). Toute nouvelle page longue doit respecter cette logique de gradation si elle a une fin de type « conclusion / contact ».

---

## 4. Typographie — usages

- **Eyebrow** (surtitre) : `.eyebrow` — mono, 0.75rem, majuscules, letter-spacing 0.15em, couleur `--primary`.
- **Titre de section** : `.expertise-title` — Lora, `clamp(2.4rem, 5vw, 3.8rem)`, avec un `<em>` en italique gris pour l'accent secondaire (ex. `Expertise <em>&amp; approche</em>`).
- **Titre de bloc** (sous-titre d'étude de cas) : `.block-title` — Lora, 1.5rem.
- **Corps de texte** : 1rem, `line-height: 1.625`, couleur `--muted-foreground` ; les mots-clés en `<strong>` passent en `--foreground`.
- **Surlignage éditorial** : `<mark class="highlight">` — fond terracotta à 12 %, utilisé pour le texte que Monsieur a marqué en `==...==` dans le Markdown source. **Convention à respecter** : chaque passage `==texte==` du fichier `.md` source devient un `<mark class="highlight">`.

---

## 5. Layout

- Conteneur : `.container` — `max-width: 80rem`, `padding: 0 1.25rem` (`0 2.5rem` dès 768px).
- Points de rupture : **768px** (tablette — nav visible, colonnes doublent) et **1024px** (desktop — grilles 2-3 colonnes, hero passe en 2 colonnes texte+photo).
- Rythme vertical des sections : `.section-pad` = `5rem`/`5rem` (mobile) → `8rem`/`8rem` (≥768px).
- Sections alternent `.section-card` (fond `--card`, bordures haut/bas) et fond neutre, pour marquer les ruptures de contenu sans couleur criarde.

---

## 6. Composants réutilisables (classes existantes à réemployer, pas à recréer)

| Composant | Classe(s) | Notes |
|---|---|---|
| En-tête collant | `.site-header` + `.scroll-progress` | Grid 3 colonnes (logo / nav / CTA), fond flouté (`backdrop-filter`), barre de progression de scroll en bas. |
| Cartes « pilier » | `.pilier` + `.pilier-svg-watermark` | Grille auto-fit, filigrane SVG en fond, bouton **Plus** ouvrant un `<dialog>` natif. |
| Fenêtre de lecture | `.reading-dialog` (+ `-close`, `-watermark`, `-inner`, `-eyebrow`, `-content`) | `<dialog>` HTML natif, jamais de librairie modale externe. Ouverture/fermeture via `showModal()` + classe `.is-open` pour la transition (voir script). |
| Chiffres clés animés | `.stat-card` + `<span class="count" data-target="N">` | Comptent de 0 à la cible à l'entrée dans le viewport (IntersectionObserver). |
| Liste à info-bulle au survol | `.tip` / `.tip-trigger` / `.tip-bubble` | Utilisé pour détailler un livrable sans surcharger le texte visible. Nécessite `tabindex="0"` + `aria-describedby` pour l'accessibilité clavier. |
| Cartes « engagement » | `.engagement`, grille 3 colonnes ≥768px | |
| Timeline parcours | `.timeline` / `.timeline-item` / `.timeline-dot` | Ligne verticale, points pleins (actif) ou grisés (passé). |
| Bloc « formation » style CLI | `.terminal`, `.terminal-bar`, `.terminal-body`, `.diploma-line1/2` | Trois points façon fenêtre macOS, contenu façon terminal — **réservé aux données structurées** (diplômes), jamais au texte narratif. |
| Pied de page contact | `.contact-footer`, `.contact-top`, `.btn-contact` | Fond terracotta fixe, bouton pilule contour. |

---

## 7. Comportements JavaScript à répliquer (vanilla JS, sans dépendance)

1. **Apparition au défilement** (`.reveal` + `IntersectionObserver`) — respecte `prefers-reduced-motion` (désactivation totale si l'utilisateur le demande).
2. **Fenêtres de lecture natives** — `<dialog>.showModal()`, fermeture au clic hors contenu ou touche Échap, transition contrôlée par classe `.is-open`.
3. **Hauteur d'en-tête publiée en variable CSS** (`--header-height`) — recalculée au resize et après chargement des polices, utilisée par `scroll-margin-top` pour un ancrage précis sous le header collant.
4. **Nav active au scroll** (scroll-spy) — bascule `.is-active` sur le lien de nav correspondant à la section visible.
5. **Compteurs animés** — easing cubique, se figent instantanément si `prefers-reduced-motion`.
6. **Barre de progression de scroll** — largeur en % liée au scroll de la page.
7. **Préparation à l'impression** — sur `beforeprint` (+ fallback Safari via `matchMedia('print')`), les compteurs et les `.reveal` sont figés à leur état final pour ne pas imprimer des « 0+ » ou du contenu invisible.

---

## 8. Feuille de style d'impression

Une section `@media print` complète existe déjà (dernière règle du CSS, volontairement en dernière position pour primer sur le reste). Toute nouvelle page **doit** répliquer cette logique : neutraliser les éléments d'interface (header, boutons, filigranes), aplatir les fonds colorés en blanc, déplier les `<dialog>` et les info-bulles (normalement invisibles) pour que le contenu ne disparaisse pas au format papier.

---

## 9. Métadonnées / SEO / partage social

Chaque page doit inclure, sur le même modèle qu'`index.html` :
- `<meta name="description">` spécifique à la page.
- Balises Open Graph (`og:title`, `og:description`, `og:url`, `og:type`, `og:locale`, `og:site_name`).
- `<link rel="canonical">` avec l'URL absolue réelle de la page.
- Le favicon SVG inline (monogramme « FB » sur fond terracotta) — même `data:` URI, à ne pas régénérer.
- Le JSON-LD `schema.org/Person` peut être répété ou adapté si la page a un contenu biographique équivalent (ex. une page CV séparée) — sinon l'omettre plutôt que le dupliquer à l'identique sans pertinence.

---

## 10. Accessibilité — conventions déjà en place à ne pas casser

- `.sr-only` pour le vrai `<h1>` de page (masqué visuellement, présent pour lecteurs d'écran/SEO), pattern à reprendre si une page a aussi un titre « habillé » différent du `<h1>` sémantique.
- `:focus-visible` stylé globalement — ne jamais supprimer les contours de focus.
- Tous les boutons/liens interactifs ont un `aria-label` explicite quand leur contenu est une icône seule.
- Respect systématique de `prefers-reduced-motion` pour toute nouvelle animation.

---

## 11. Ce qu'il ne faut PAS faire

- Ne pas introduire de nouvelle police, couleur, ou radius sans les ajouter aux variables `:root` d'abord.
- Ne pas utiliser de framework CSS externe (Tailwind, Bootstrap) — le site est volontairement du CSS natif à variables.
- Ne pas dupliquer les couleurs fixes du Curriculum/Contact ailleurs sur le site : elles marquent une progression de contraste précise et perdent leur sens si elles apparaissent ailleurs.
- Ne pas casser le contrat markdown → HTML : tout `==surligné==` du document source devient un `<mark class="highlight">`, jamais un simple gras.
