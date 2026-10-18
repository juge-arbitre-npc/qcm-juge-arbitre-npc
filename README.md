# QCM Juge-arbitre FFTir

Site de révision pour l'examen de juge-arbitre de la Fédération Française de Tir.

Site : https://juge-arbitre-npc.github.io/qcm-juge-arbitre-npc/

## Questionnaires

| Module | Contenu | Statut |
|---|---|---|
| Livret 1 | Juge-arbitre, comportement, sécurité, disciplines (janv. 2019) | Obligatoire |
| Livret 2 | Organisation de l'arbitrage, grades, jurys (oct. 2017) | Obligatoire |
| ISSF | Règles générales, cibles papier, carabine, pistolet, plateau, cible mobile | Obligatoire |
| WSPS | Para-tir | Au choix |
| IAU | Arbalète Match et Field | Au choix |
| Écoles de tir | Cible et plateau | Au choix |
| MLAIC | Armes anciennes | Au choix |
| WBSF / WRABF | Bench-rest, tir au score, rimfire | Au choix |
| IMSSU | Silhouettes métalliques | Au choix |
| TAR | Tir aux armes réglementaires | Au choix |
| IPSC | Tir sportif de vitesse | Au choix |
| ISR | ISR et Mini ISR | Au choix |

Les questions des règlements sont tirées des PDF publiés sur fftir.org ; chaque question indique sa source (document et article).

## Fonctionnement

- Choix des modules (le socle obligatoire est coché par défaut)
- 25 ou 50 questions au hasard, ou toutes
- Questions et réponses mélangées à chaque série
- **Correction complète à la fin** : bonne réponse, explication, source, score global et par thème
- **Version papier** imprimable (questions puis corrigé sur une page séparée)

Site 100 % statique (HTML + JS, aucune dépendance).

## Ajouter ou modifier des questions

Un fichier par module dans `questions/`. Chaque question suit ce format :

```js
{
  module: "issf", theme: "Pistolet",
  q: "Texte de la question",
  choix: ["…", "…", "…", "…"],
  bonne: 1,            // index de la bonne réponse (0 = A, 1 = B…)
  explication: "…",
  source: "Règles Pistolet ISSF, art. …"
}
```

Nouveau module : l'ajouter dans `questions/modules.js`, créer son fichier dans `questions/` et l'ajouter dans la liste des `<script>` de `index.html`.

## Déploiement

GitHub Pages, via `.github/workflows/pages.yml`, à chaque push sur `main`.

## Avertissement

Les règlements évoluent chaque saison : en cas de doute, c'est la dernière version publiée sur [fftir.org](https://www.fftir.org) et les consignes de ton RRA qui font foi.
