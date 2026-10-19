// Liste des modules affichés sur l'écran de choix.
// obligatoire: true = coché par défaut et signalé comme socle à connaître.
// Pour ajouter un module : l'ajouter ici, créer questions/<fichier>.js et l'ajouter dans index.html.
const MODULES = [
  { id: "livret1", nom: "Livret 1", detail: "Le juge-arbitre, comportement, sécurité, disciplines", obligatoire: true },
  { id: "livret2", nom: "Livret 2", detail: "Organisation de l'arbitrage, grades, jurys", obligatoire: true },
  { id: "issf",    nom: "ISSF", detail: "Règles générales, cibles papier, carabine, pistolet, plateau, cible mobile", obligatoire: true }
];
const QUESTIONS = [];
