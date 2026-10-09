# Distinction visuelle du diplôme dans la marque

Le correctif rattache `, M.Éd.` à `.brand-degree`, qui était auparavant un `span` vide suivi du diplôme hors du `span`. Le diplôme combine désormais Lora 400 et la couleur secondaire existante, tandis que le nom conserve Lora 600 à la même taille. Le changement reste limité au balisage concerné et à une déclaration de couleur. **Watch for:** aucun point bloquant relevé dans le diff ou la preuve de vérification fournie.

**Verdict**: APPROVED

## High-level view

La cause est corrigée dans le DOM plutôt que contournée par une surcharge CSS : le texte du diplôme se trouve maintenant dans l’élément auquel le poids 400 s’applique. `var(--muted-foreground)` renforce la hiérarchie sans valeur isolée, hausse de spécificité ni `!important`.

La taille et `white-space: nowrap` restent hérités de `.brand`; les règles mobiles et la navigation ne changent pas. La vérification fournie couvre les rendus à 375 px et 1440 px, les poids Lora effectivement utilisés et l’absence de chevauchement.

<details>
<summary>Issues (0)</summary>

Aucun finding bloquant.

</details>

<details><summary>Details</summary>

## Correction de la portée de `.brand-degree`

Le balisage précédent fermait `.brand-degree` avant `, M.Éd.`, de sorte que le diplôme héritait directement du poids 600 de `.brand`. Le déplacement du texte dans le `span` active la règle existante à 400 sur le bon contenu, et la couleur secondaire renforce cette distinction sans créer de règle propre à un breakpoint. La note de vérification confirme Lora 600 pour le nom, Lora 400 pour les sept glyphes du diplôme, une taille commune de 18 px et le texte visible exact `Fabien Brinjean, M.Éd.`.

## Portée du correctif et préservations

Le diff de production ne touche qu’à `index.html`, avec une déclaration CSS et la réparation du `span`; aucune media query, règle de navigation ou propriété de `.brand` n’est modifiée. La preuve fournie confirme `white-space: nowrap`, la navigation masquée à 375 px et affichée à 1440 px, ainsi que l’espace disponible avant Contact. L’état Git montre `index.html` modifié et non validé : aucun commit n’a été créé pour ce correctif.

</details>

<details>
<summary>File map</summary>

- `index.html` — replace le diplôme dans `.brand-degree` et lui applique la couleur secondaire existante.

Diff complet : `git diff -- index.html`

</details>
