// Liste des modules affichés sur l'écran de choix.
// obligatoire: true = coché par défaut et signalé comme socle à connaître.
// Pour ajouter un module : l'ajouter ici, créer questions/<fichier>.js et l'ajouter dans index.html.
const MODULES = [
  { id: "livret1", nom: "Livret 1", detail: "Le juge-arbitre, comportement, sécurité, disciplines", obligatoire: true },
  { id: "livret2", nom: "Livret 2", detail: "Organisation de l'arbitrage, grades, jurys", obligatoire: true },
  { id: "issf",    nom: "ISSF", detail: "Règles générales, cibles papier, carabine, pistolet, plateau, cible mobile", obligatoire: true },
  { id: "wsps",    nom: "WSPS", detail: "Para-tir (nécessite la qualification ISSF Cible)" },
  { id: "iau",     nom: "IAU", detail: "Arbalète Match et Field" },
  { id: "edt",     nom: "Écoles de tir", detail: "Cible et plateau" },
  { id: "mlaic",   nom: "MLAIC", detail: "Armes anciennes" },
  { id: "wbsf",    nom: "WBSF / WRABF", detail: "Bench-rest, tir au score, rimfire" },
  { id: "imssu",   nom: "IMSSU", detail: "Silhouettes métalliques" },
  { id: "tar",     nom: "TAR", detail: "Tir aux armes réglementaires" },
  { id: "ipsc",    nom: "IPSC", detail: "Tir sportif de vitesse, armes de poing" },
  { id: "isr",     nom: "ISR", detail: "ISR et Mini ISR" }
];
const QUESTIONS = [];
