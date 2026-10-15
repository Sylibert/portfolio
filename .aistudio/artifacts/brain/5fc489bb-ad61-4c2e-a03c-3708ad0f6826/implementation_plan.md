# Plan d'optimisation et d'allègement pour mobile

Optimisation des performances de chargement et de rendu sur smartphone afin de permettre un affichage immédiat du portfolio dès l'ouverture, tout en préservant fidèlement l'esthétique et la disposition actuelle.

## Décisions confirmées & Validation utilisateur

> [!IMPORTANT]
> Les choix suivants ont été confirmés suite à vos réponses et guident l'ensemble des optimisations :

- **Allègement des effets d'arrière-plan sur smartphone** : Les 3 orbes lumineuses massives dotées de filtres de flou gaussien intensifs (`blur-[150px]`, `blur-[160px]`, `blur-[170px]`) ainsi que le calcul de parallaxe sur événement `scroll` seront désactivés ou remplacés par un dégradé radial CSS ultra-léger sans coût GPU sur mobile (`hidden sm:block`).
- **Chargement différé et priorisation des ressources critiques** : Suppression du blocage du premier rendu causé par la feuille de style Font Awesome et les polices Google Fonts, avec chargement asynchrone et priorisation des éléments visibles au-dessus du pli (Hero & Navbar).

---

## 1. Vue d'ensemble & Diagnostic technique

Sur les smartphones (connexions 4G/5G et processeurs graphiques mobiles), le délai d'affichage constaté provenait de 3 facteurs principaux :

1. **Ressources bloquantes dans l'en-tête HTML (`index.html`)** : Font Awesome (~70 Ko de CSS + police web externe) et Google Fonts bloquaient l'analyseur HTML avant même le premier affichage du texte et de l'en-tête.
2. **Goulot d'étranglement GPU des filtres de flou géants** : Les 3 conteneurs de 750px à 900px floutés à plus de 150px forçaient le GPU mobile à recalculer en continu de larges couches de composition avec l'animation `@keyframes liquidFloat` et l'écouteur `scroll`.
3. **Chargement synchrone des miniatures YouTube** : Les images distantes `maxresdefault.jpg` d'Opale, Homunity et des autres projets se disputaient la bande passante initiale du réseau mobile.

---

## 2. Expérience utilisateur & Préservation du design

- **Zéro régression visuelle sur ordinateur** : Tous les effets visuels de flou d'ambiance, d'animations verre liquide et de typographie restent 100% actifs sur écran large (`sm:` et au-delà).
- **Rendu instantané sur mobile** : La barre de navigation, le titre d'ouverture *« production de vidéos »* et les boutons d'action s'affichent immédiatement sans aucun temps d'attente blanc ou noir.
- **Fluidité de défilement (60/120 FPS)** : Suppression des calculs de parallaxe continus sur mobile pour un défilement parfaitement fluide sur iOS et Android.

---

## 3. Détail des optimisations techniques

### A. Déblocage du premier rendu (`index.html`)
- Préconnexion aux domaines critiques (`fonts.googleapis.com`, `fonts.gstatic.com`, `img.youtube.com`).
- Chargement non-bloquant de Font Awesome via la technique standard `media="print" onload="this.media='all'"` avec feuille de secours pour les navigateurs anciens.
- Déclaration `font-display: swap` pour que les textes soient immédiatement visibles avec leur police dès le chargement.

### B. Allègement des orbes d'ambiance (`App.tsx`)
- Restriction des 3 orbes floues `blur-[150px+]` aux écrans tablettes/ordinateurs (`hidden sm:block`).
- Sur mobile, remplacement par un fond sombre uni dégradé propre sans surcoût de rasterisation.
- Conditionnement du listener de scroll parallax pour ne pas solliciter le thread principal sur smartphone.

### C. Chargement prioritaire et différé des médias (`ProjectsSection.tsx`)
- Attribution de `fetchpriority="high"` et décodage asynchrone sur la miniature du premier projet visible (Opale Capital).
- Maintien du `loading="lazy"` et `decoding="async"` sur les autres cartes projets pour libérer la bande passante.

---

## 4. Architecture du flux de chargement optimisé

```
┌─────────────────────────────────────────────────────────────┐
│                    Visite sur Smartphone                    │
└──────────────────────────────┬──────────────────────────────┘
                               │
                ┌──────────────┴──────────────┐
                ▼                             ▼
   [index.html non-bloquant]     [Styles critiques intégrés]
   • Google Fonts (swap)         • Tailwind compilé
   • Font Awesome asynchrone     • Structure immédiate
                │                             │
                └──────────────┬──────────────┘
                               ▼
        ┌─────────────────────────────────────────────┐
        │   Premier rendu visuel immédiat (FMP < 1s)  │
        │   • Navbar + Logo "S" instantanés           │
        │   • Titre "production de vidéos" affiché    │
        │   • Zéro calcul GPU d'orbes lourdes         │
        └──────────────────────┬──────────────────────┘
                               ▼
        ┌─────────────────────────────────────────────┐
        │       Chargement différé en tâche de fond   │
        │       • Miniature Opale Capital prioritaire │
        │       • Autres projets chargés au scroll    │
        └─────────────────────────────────────────────┘
```
