# QCM Juge-arbitre FFTir

Site de révision pour le tronc commun juge-arbitre de la Fédération Française de Tir, basé sur :

- **Livret 1** Juge-arbitre (janvier 2019) : le juge-arbitre, comportement, intervention, sécurité, disciplines, lexique
- **Livret 2** Juge-arbitre (octobre 2017) : organisation de l'arbitrage, grades et examens, gestion des arbitres, compétitions et jurys

## Fonctionnement

- Choix du livret (1, 2 ou les deux) et du nombre de questions
- Questions et réponses mélangées à chaque série
- **Correction complète à la fin** : bonne réponse, explication, score global et par thème
- **Version papier** imprimable (questions puis corrigé sur une page séparée)

Site 100 % statique (HTML + JS, aucune dépendance) : il s'ouvre aussi en local en double-cliquant sur `index.html`.

## Ajouter ou modifier des questions

Tout est dans `questions.js`. Chaque question suit ce format :

```js
{
  livret: 1, theme: "Sécurité",
  q: "Une arme « chargée » est une arme :",
  choix: ["...", "...", "...", "..."],
  bonne: 1,            // index de la bonne réponse (0 = A, 1 = B…)
  explication: "..."
}
```

## Déploiement gratuit (GitHub Pages)

Le workflow `.github/workflows/pages.yml` publie le site à chaque push sur `main`.
Une seule fois : **Settings → Pages → Source : GitHub Actions**.

URL : `https://<utilisateur>.github.io/qcm-juge-arbitre-fftir/`

## Avertissement

Les livrets datent de 2017 et 2019. Les règlements sportifs évoluent chaque saison : en cas de doute, c'est la dernière version publiée sur [fftir.org](https://www.fftir.org) et les consignes de ton RRA qui font foi.
