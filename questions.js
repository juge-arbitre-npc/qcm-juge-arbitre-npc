// Banque de questions – QCM juge-arbitre FFTir
// Sources : Livret 1 Juge-arbitre (janvier 2019) et Livret 2 Juge-arbitre (octobre 2017).
// Format : { livret, theme, q, choix: [...], bonne: index (0 = A), explication }
// Pour ajouter une question : copier un bloc, l'adapter, vérifier l'index de la bonne réponse.

const QUESTIONS = [
  // ======================= LIVRET 1 =======================
  // --- Le juge-arbitre : missions, conditions, statut ---
  {
    livret: 1, theme: "Le juge-arbitre",
    q: "Quel est l'âge minimum pour devenir juge-arbitre à la FFTir ?",
    choix: ["16 ans", "18 ans", "21 ans", "Aucun âge minimum"],
    bonne: 1,
    explication: "Il faut avoir 18 ans et être licencié FFTir (décision du Comité Directeur d'octobre 2008)."
  },
  {
    livret: 1, theme: "Le juge-arbitre",
    q: "À qui le candidat adresse-t-il en premier sa demande pour devenir juge-arbitre ?",
    choix: ["Au Directeur Technique National", "Au président de son club", "Au président de la ligue", "Directement à la CNS Arbitrage"],
    bonne: 1,
    explication: "La demande passe par le président de club, qui la transmet au responsable départemental ou régional de l'arbitrage."
  },
  {
    livret: 1, theme: "Le juge-arbitre",
    q: "Combien de temps dure en principe le statut de juge-arbitre stagiaire ?",
    choix: ["3 mois", "6 mois", "1 an", "4 ans"],
    bonne: 2,
    explication: "Après l'appel à candidature, on est stagiaire pendant un an, avec la formation théorique du tronc commun."
  },
  {
    livret: 1, theme: "Le juge-arbitre",
    q: "Quelle loi protège le juge-arbitre dans sa mission de service public ?",
    choix: ["La loi du 1er juillet 1901", "La loi n° 2006-1294 du 23 octobre 2006", "La loi n° 84-610 du 16 juillet 1984", "Le Code du sport, article L.100-1"],
    bonne: 1,
    explication: "Le livret cite la loi n° 2006-1294 du 23 octobre 2006, qui protège les arbitres dans l'exercice de leur mission."
  },
  {
    livret: 1, theme: "Le juge-arbitre",
    q: "Quel est le statut du juge-arbitre FFTir ?",
    choix: ["Salarié de la ligue", "Bénévole, pouvant être remboursé de ses frais et percevoir une indemnité d'arbitrage", "Prestataire indépendant rémunéré à la compétition", "Bénévole sans aucun remboursement possible"],
    bonne: 1,
    explication: "Il est bénévole et indépendant dans sa mission ; il peut recevoir un remboursement de frais et une indemnité d'arbitrage."
  },
  {
    livret: 1, theme: "Le juge-arbitre",
    q: "Laquelle de ces situations ne fait PAS perdre la qualité de juge-arbitre ?",
    choix: ["La démission", "Le non-renouvellement de la licence", "La radiation", "Une suspension prononcée à sa demande"],
    bonne: 3,
    explication: "La suspension (sanction ou demande personnelle) est une situation temporaire. La qualité se perd par démission, non-renouvellement de licence ou radiation."
  },
  {
    livret: 1, theme: "Le juge-arbitre",
    q: "Quel règlement s'applique au juge-arbitre en matière de sanctions ?",
    choix: ["Le règlement intérieur du club", "Le Règlement disciplinaire FFTir", "Le règlement ISSF uniquement", "Aucun, il est indépendant"],
    bonne: 1,
    explication: "Il est soumis au Règlement disciplinaire FFTir, avec des dispositions particulières pour la suspension, la radiation et la réintégration."
  },
  {
    livret: 1, theme: "Le juge-arbitre",
    q: "Quelle qualification est obligatoire pour arbitrer le Para-Tir (WSPS) ?",
    choix: ["ISSF Plateau", "ISSF Cible", "TSV", "Aucune qualification préalable"],
    bonne: 1,
    explication: "Pour le WSPS Para-Tir, la qualification ISSF Cible est obligatoire."
  },
  {
    livret: 1, theme: "Le juge-arbitre",
    q: "Pour quelle discipline n'existe-t-il qu'un seul échelon d'arbitre, le national ?",
    choix: ["TAR", "Bench Rest", "TSV", "Arbalète"],
    bonne: 2,
    explication: "Le TSV ne comporte qu'un échelon national ; l'arbitre peut aussi y être moniteur."
  },
  {
    livret: 1, theme: "Le juge-arbitre",
    q: "Un stagiaire qui possède déjà le tronc commun peut passer directement l'examen régional, sauf dans une discipline. Laquelle ?",
    choix: ["ISSF Cible", "ISSF Plateau", "Armes anciennes", "Silhouettes métalliques"],
    bonne: 0,
    explication: "L'ISSF Cible est l'exception : il faut passer par le grade départemental."
  },

  // --- Comportement ---
  {
    livret: 1, theme: "Comportement",
    q: "Comment le juge-arbitre doit-il appliquer le règlement ?",
    choix: ["En l'adaptant au niveau des tireurs", "Sans interprétation, en le faisant respecter", "Avec souplesse en compétition départementale", "Selon l'avis du chef de club organisateur"],
    bonne: 1,
    explication: "Parmi ses devoirs : appliquer le règlement sans interprétation et le faire respecter."
  },
  {
    livret: 1, theme: "Comportement",
    q: "Quelle attitude correspond aux qualités attendues d'un juge-arbitre ?",
    choix: ["Autoritaire pour être respecté", "Ferme sans être autoritaire, dévoué sans être servile", "Proche des tireurs, avec un ton familier", "Discret au point de ne jamais intervenir"],
    bonne: 1,
    explication: "Il est précis et clair, ferme sans être autoritaire, toujours correct, dévoué sans être servile."
  },
  {
    livret: 1, theme: "Comportement",
    q: "Un tireur demande au juge-arbitre comment corriger sa position. Que fait l'arbitre ?",
    choix: ["Il le conseille, c'est son rôle pédagogique", "Il l'aide sans jamais faire de coaching", "Il appelle l'entraîneur du club", "Il l'ignore"],
    bonne: 1,
    explication: "Le juge-arbitre aide les tireurs mais ne fait jamais de coaching."
  },
  {
    livret: 1, theme: "Comportement",
    q: "Laquelle de ces attitudes est à PROSCRIRE (et pas seulement à éviter) ?",
    choix: ["Stationner trop près d'un tireur", "Converser bruyamment", "Critiquer ostensiblement le corps arbitral ou la Fédération", "Se restaurer sur le pas de tir hors planning"],
    bonne: 2,
    explication: "Critiquer ostensiblement le corps arbitral, l'organisation ou la Fédération est à proscrire. Les autres sont des attitudes à éviter."
  },
  {
    livret: 1, theme: "Comportement",
    q: "Laquelle de ces attitudes est classée « à éviter » ?",
    choix: ["Fumer", "Être agressif", "Prendre des initiatives personnelles", "Regarder un tireur avec insistance"],
    bonne: 3,
    explication: "Regarder un tireur avec insistance est à éviter. Fumer, être agressif ou prendre des initiatives personnelles sont à proscrire."
  },
  {
    livret: 1, theme: "Comportement",
    q: "Selon le livret, à quel moment le juge-arbitre est-il « la vitrine de la compétition » ?",
    choix: ["Lors de la remise des prix", "Lors du contrôle des licences et des équipements", "Pendant la finale", "Lors du briefing des arbitres"],
    bonne: 1,
    explication: "Le contrôle des licences et équipements est le premier contact avec le tireur."
  },
  {
    livret: 1, theme: "Comportement",
    q: "En cas de doute sur une décision, que doit faire le juge-arbitre ?",
    choix: ["Trancher seul pour ne pas perdre la face", "Consulter un autre juge-arbitre", "Demander l'avis des tireurs voisins", "Laisser le tir continuer et ne rien faire"],
    bonne: 1,
    explication: "Parmi les attitudes à adopter : consulter un autre juge-arbitre en cas de doute."
  },
  {
    livret: 1, theme: "Comportement",
    q: "Comment le juge-arbitre doit-il traiter un tireur qu'il connaît bien (de son club par exemple) ?",
    choix: ["Avec plus d'indulgence", "Avec plus de sévérité pour éviter tout soupçon", "Comme un inconnu", "Il doit refuser d'arbitrer son poste"],
    bonne: 2,
    explication: "Il traite chaque tireur comme un inconnu, gage d'équité."
  },

  // --- Intervention ---
  {
    livret: 1, theme: "Intervention en match",
    q: "Une faute de sécurité manifeste est constatée. Que fait le juge-arbitre ?",
    choix: ["Il attend la fin de la série", "Il intervient immédiatement", "Il prend l'avis d'un second arbitre avant d'agir", "Il rédige un rapport après le match"],
    bonne: 1,
    explication: "Si la sécurité n'est pas respectée et que la faute est manifeste, l'intervention est immédiate."
  },
  {
    livret: 1, theme: "Intervention en match",
    q: "Quand l'intervention peut être différée, que doit faire le juge-arbitre ?",
    choix: ["Intervenir quand même tout de suite", "Prendre l'avis d'un second juge-arbitre", "Prévenir l'entraîneur du tireur", "Attendre la fin de la compétition"],
    bonne: 1,
    explication: "Si l'intervention peut attendre, il prend l'avis d'un second juge-arbitre."
  },
  {
    livret: 1, theme: "Intervention en match",
    q: "À quel moment le juge-arbitre ne doit-il JAMAIS intervenir ?",
    choix: ["Pendant la préparation", "Pendant les essais", "Pendant l'exécution d'un tir", "Pendant un arrêt du tir"],
    bonne: 2,
    explication: "On n'intervient jamais pendant l'exécution d'un tir."
  },
  {
    livret: 1, theme: "Intervention en match",
    q: "Quand faire de préférence une remarque sur la position d'un tireur ?",
    choix: ["Pendant le match, dès qu'on la constate", "Pendant la préparation ou les essais", "À la fin du match", "Jamais, ce n'est pas le rôle de l'arbitre"],
    bonne: 1,
    explication: "Les remarques (position, etc.) se font pendant la préparation ou les essais ; en match, seulement en cas de nécessité absolue."
  },
  {
    livret: 1, theme: "Intervention en match",
    q: "Un tireur veut réparer son arme pendant le match. Où et comment ?",
    choix: ["À son poste, librement", "Hors du pas de tir, sur demande et avec l'accord du chef de pas de tir", "Au poste, avec l'aide du juge-arbitre", "C'est interdit pendant un match"],
    bonne: 1,
    explication: "Toute réparation se fait hors du pas de tir, sur demande et accord du chef de pas de tir."
  },
  {
    livret: 1, theme: "Intervention en match",
    q: "Un tireur en difficulté gêne durablement ses voisins. Que fait le juge-arbitre ?",
    choix: ["Il le conseille pour qu'il retrouve ses moyens", "Il l'invite à quitter le pas de tir", "Il le disqualifie", "Il ne fait rien"],
    bonne: 1,
    explication: "Il n'intervient pas sur les difficultés d'un tireur, sauf gêne durable des voisins : il l'invite alors à quitter le pas de tir."
  },
  {
    livret: 1, theme: "Intervention en match",
    q: "Lorsqu'il motive une intervention, que doit faire le juge-arbitre ?",
    choix: ["Dire simplement « c'est le règlement »", "Expliquer le point de règlement concerné", "Renvoyer le tireur vers le jury", "Ne donner aucune explication"],
    bonne: 1,
    explication: "Rôle pédagogique : expliquer le point de règlement ; « c'est le règlement » ne suffit pas."
  },

  // --- Sécurité ---
  {
    livret: 1, theme: "Sécurité",
    q: "Une arme « approvisionnée » est une arme :",
    choix: ["Dont une munition est dans la chambre", "Qui contient des munitions", "Prête à tirer", "Munie de son drapeau de sécurité"],
    bonne: 1,
    explication: "Approvisionnée = contient des munitions. Chargée = munition dans la chambre."
  },
  {
    livret: 1, theme: "Sécurité",
    q: "Une arme « chargée » est une arme :",
    choix: ["Qui contient des munitions dans le chargeur", "Avec une munition dans la chambre", "Dont le chargeur est engagé", "Rangée avec ses munitions"],
    bonne: 1,
    explication: "Chargée = une munition est dans la chambre."
  },
  {
    livret: 1, theme: "Sécurité",
    q: "Une arme « prête à tirer » est une arme :",
    choix: ["Approvisionnée", "Dont toute action sur la queue de détente fait partir le coup", "Sortie de sa mallette", "Pointée vers la cible"],
    bonne: 1,
    explication: "Prête à tirer : toute action sur la queue de détente fait partir le coup."
  },
  {
    livret: 1, theme: "Sécurité",
    q: "Lequel de ces éléments ne fait PAS partie de la mise en sécurité d'une arme ?",
    choix: ["Ôter le chargeur", "Ouvrir le mécanisme", "Placer le drapeau de sécurité dans le canon", "Engager la sûreté mécanique"],
    bonne: 3,
    explication: "On ne fait jamais confiance aux seules sécurités mécaniques. Mise en sécurité : chargeur ôté, chambre/magasin vidés, mécanisme ouvert, contrôle visuel et physique, drapeau."
  },
  {
    livret: 1, theme: "Sécurité",
    q: "Comment une arme doit-elle toujours être considérée ?",
    choix: ["Comme déchargée si la sûreté est mise", "Comme chargée", "Comme déchargée si le chargeur est ôté", "Selon ce qu'indique son propriétaire"],
    bonne: 1,
    explication: "Une arme est toujours considérée comme chargée."
  },
  {
    livret: 1, theme: "Sécurité",
    q: "En fin de tir, pour ranger l'arme :",
    choix: ["On amène l'arme à la boîte ou à la housse", "On amène la boîte ou la housse à l'arme", "On la range sans contrôle si le tireur l'a vidée", "On la confie à l'arbitre qui la range"],
    bonne: 1,
    explication: "L'arme est mise en sécurité et contrôlée par l'arbitre ; c'est la boîte ou la housse qui va à l'arme, pas l'inverse."
  },
  {
    livret: 1, theme: "Sécurité",
    q: "Avant tout déplacement en avant du pas de tir (aux cibles), les armes doivent être :",
    choix: ["Posées approvisionnées sur la table", "Mises en sécurité", "Rangées dans leur mallette", "Confiées au voisin"],
    bonne: 1,
    explication: "Les armes sont mises en sécurité avant tout déplacement ; interdiction de toucher l'arme ou le chargeur d'autrui."
  },
  {
    livret: 1, theme: "Sécurité",
    q: "Pour le transport entre le domicile et le stand, l'arme doit être :",
    choix: ["Approvisionnée mais non chargée", "Désapprovisionnée, dans une mallette, munitions à part", "Dans une mallette avec ses munitions dans le chargeur", "Portée à la ceinture"],
    bonne: 1,
    explication: "Arme désapprovisionnée dans une mallette, munitions séparées, licence et autorisations sur soi."
  },
  {
    livret: 1, theme: "Sécurité",
    q: "La protection auditive lors des tirs aux armes à feu est :",
    choix: ["Recommandée", "Obligatoire", "Facultative en extérieur", "Obligatoire uniquement pour les arbitres"],
    bonne: 1,
    explication: "Protection auditive obligatoire ; la protection oculaire est recommandée ou obligatoire selon la discipline."
  },

  // --- Disciplines ---
  {
    livret: 1, theme: "Disciplines",
    q: "À la carabine 10 m ISSF, quel est le diamètre du 10 ?",
    choix: ["0,5 mm", "5 mm", "10,4 mm", "11,5 mm"],
    bonne: 0,
    explication: "À la carabine 10 m, le 10 mesure 0,5 mm (c'est un point)."
  },
  {
    livret: 1, theme: "Disciplines",
    q: "À la carabine 300 m ISSF, quel est le calibre maximum ?",
    choix: ["5,6 mm", "7,62 mm", "8 mm", "9 mm"],
    bonne: 2,
    explication: "Calibre maximum 8 mm ; le 10 mesure 10 cm."
  },
  {
    livret: 1, theme: "Disciplines",
    q: "Au pistolet 25 m, partie vitesse, combien de temps le tireur a-t-il pour chaque coup ?",
    choix: ["1 s", "3 s", "7 s", "10 s"],
    bonne: 1,
    explication: "3 s par coup, la cible étant effacée 7 s entre deux coups."
  },
  {
    livret: 1, theme: "Disciplines",
    q: "En pistolet vitesse olympique 25 m, de combien sont écartées les 5 cibles ?",
    choix: ["50 cm", "75 cm", "1 m", "1,5 m"],
    bonne: 1,
    explication: "5 cibles écartées de 75 cm ; 60 coups."
  },
  {
    livret: 1, theme: "Disciplines",
    q: "En fosse olympique, combien de cartouches peut-on tirer par plateau ?",
    choix: ["1", "2", "3", "Illimité"],
    bonne: 1,
    explication: "2 cartouches par plateau en fosse ; 1 seule en skeet."
  },
  {
    livret: 1, theme: "Disciplines",
    q: "Au skeet, combien y a-t-il de postes de tir ?",
    choix: ["5", "6", "8", "10"],
    bonne: 2,
    explication: "Le skeet se tire sur 8 postes, 1 cartouche par plateau."
  },
  {
    livret: 1, theme: "Disciplines",
    q: "En armes anciennes (MLAIC), sur 13 coups tirés, combien sont retenus ?",
    choix: ["Les 13", "Les 10 meilleurs", "Les 10 premiers", "Les 5 meilleurs"],
    bonne: 1,
    explication: "13 coups en 30 min, les 10 meilleurs impacts sont retenus (sauf plateau)."
  },
  {
    livret: 1, theme: "Disciplines",
    q: "En armes anciennes, en cas d'incident (long feu), l'arme reste pointée vers la cible au moins :",
    choix: ["3 secondes", "5 secondes", "10 secondes", "1 minute"],
    bonne: 2,
    explication: "Au moins 10 secondes, arme pointée vers la cible."
  },
  {
    livret: 1, theme: "Disciplines",
    q: "En silhouettes métalliques (IMSSU), quand une cible est-elle valable ?",
    choix: ["Dès qu'elle est touchée", "Quand elle est renversée", "Quand l'impact est dans la zone centrale", "Quand l'arbitre entend l'impact"],
    bonne: 1,
    explication: "La cible (poulet, cochon, dindon, mouflon) doit être renversée."
  },
  {
    livret: 1, theme: "Disciplines",
    q: "En TSV, comment est calculé le résultat ?",
    choix: ["Total des points", "Temps total uniquement", "Points divisés par le temps", "Nombre de cibles touchées"],
    bonne: 2,
    explication: "Le facteur est obtenu en divisant les points par le temps."
  },
  {
    livret: 1, theme: "Disciplines",
    q: "Quel est le calibre minimum en TSV ?",
    choix: [".22 LR", "7,65 mm", "9 x 19", ".45 ACP"],
    bonne: 2,
    explication: "Calibre minimum 9 x 19, étui holster à la ceinture."
  },
  {
    livret: 1, theme: "Disciplines",
    q: "En arbalète field, comment la flèche est-elle mise en place ?",
    choix: ["Arme dirigée vers la cible", "Arme dirigée vers le sol", "Arme à la verticale vers le ciel", "Peu importe"],
    bonne: 1,
    explication: "En field, arme dirigée vers le sol ; en match, arme dirigée vers la cible."
  },
  {
    livret: 1, theme: "Disciplines",
    q: "Dès quel âge peut-on entrer en école de tir ?",
    choix: ["6 ans", "8 ans", "10 ans", "12 ans"],
    bonne: 1,
    explication: "Les écoles de tir sont ouvertes dès 8 ans (poussin, benjamin, minime)."
  },

  // --- Lexique ---
  {
    livret: 1, theme: "Lexique",
    q: "Qu'est-ce que la « mouche » ?",
    choix: ["Le guidon de l'arme", "La partie centrale du 10, qui départage les ex-aequo", "Un impact hors cible", "Le cordon entre deux zones"],
    bonne: 1,
    explication: "La mouche est la partie centrale du 10, utilisée pour départager les ex-aequo."
  },
  {
    livret: 1, theme: "Lexique",
    q: "Le « cordon » d'une cible désigne :",
    choix: ["Le fil qui retient la cible", "Le liseré séparant les zones de valeur", "La partie noire centrale", "Le bord extérieur de la cible"],
    bonne: 1,
    explication: "Le cordon est le liseré qui sépare les zones de valeur. La partie noire centrale est le visuel."
  },
  {
    livret: 1, theme: "Lexique",
    q: "Un tir « juste » se caractérise par :",
    choix: ["Des impacts groupés n'importe où", "Des impacts groupés au centre", "Des impacts dispersés autour du centre", "Un seul impact au centre"],
    bonne: 1,
    explication: "Tir précis = groupé n'importe où ; tir juste = groupé au centre."
  },
  {
    livret: 1, theme: "Lexique",
    q: "Quelle arme est interdite en tir sportif ?",
    choix: ["L'arme semi-automatique", "L'arme à répétition manuelle", "L'arme à répétition automatique", "L'arme à poudre noire"],
    bonne: 2,
    explication: "L'arme à répétition automatique (rafale) est interdite ; en semi-auto, une pression = un seul coup."
  },
  {
    livret: 1, theme: "Lexique",
    q: "« Cliquer » sur une hausse consiste à la déplacer :",
    choix: ["Dans le sens où l'on veut déplacer le tir", "Dans le sens inverse du tir", "Toujours vers le haut", "D'un nombre fixe de clics par série"],
    bonne: 0,
    explication: "On déplace la hausse dans le sens où l'on veut déplacer le tir."
  },

  // ======================= LIVRET 2 =======================
  // --- Généralités ---
  {
    livret: 2, theme: "Généralités",
    q: "Qui décerne la qualité de juge-arbitre ?",
    choix: ["Le président de ligue", "Le Directeur Technique National", "Le président du club", "Le ministère des Sports"],
    bonne: 1,
    explication: "Le DTN, sur proposition de la CNS Arbitrage ou des commissions régionales selon le niveau."
  },
  {
    livret: 2, theme: "Généralités",
    q: "Combien de disciplines d'arbitrage le livret 2 recense-t-il ?",
    choix: ["5", "7", "9", "12"],
    bonne: 2,
    explication: "9 : ISSF Cible, ISSF Plateau, Arbalète, Armes anciennes, Bench Rest, Silhouettes métalliques, TSV, TAR, Para-Tir."
  },
  {
    livret: 2, theme: "Généralités",
    q: "Le grade de juge-arbitre départemental existe :",
    choix: ["Dans toutes les disciplines", "Uniquement en ISSF Cible", "Uniquement en ISSF Cible et Plateau", "Dans aucune discipline"],
    bonne: 1,
    explication: "Le grade départemental n'existe qu'en ISSF Cible ; les autres disciplines commencent au régional."
  },
  {
    livret: 2, theme: "Généralités",
    q: "Que couvre le tronc commun ?",
    choix: ["Uniquement le règlement ISSF", "Connaissances générales des disciplines, sécurité et comportement de l'arbitre", "Le comptage des points électronique", "L'organisation d'un championnat"],
    bonne: 1,
    explication: "Tronc commun : connaissances générales, sécurité, comportement (profil et attitude), spécificités fédérales, terminologie."
  },

  // --- Organisation ---
  {
    livret: 2, theme: "Organisation",
    q: "Que signifie RRA ?",
    choix: ["Référent Régional d'Arbitrage", "Responsable Régional d'Arbitrage", "Représentant des Règles d'Arbitrage", "Responsable du Recrutement des Arbitres"],
    bonne: 1,
    explication: "Responsable Régional d'Arbitrage, nommé par sa ligue."
  },
  {
    livret: 2, theme: "Organisation",
    q: "Qui nomme le Responsable Départemental d'Arbitrage (RDA) ?",
    choix: ["Le RRA", "Le Comité Départemental", "La CNS Arbitrage", "Le DTN"],
    bonne: 1,
    explication: "Le RDA est nommé par le Comité Départemental et applique les directives du RRA."
  },
  {
    livret: 2, theme: "Organisation",
    q: "Quelle est la mission principale du RRA ?",
    choix: ["Arbitrer tous les championnats de France", "Garantir une application identique des règlements dans tous les départements de la ligue", "Délivrer les licences", "Homologuer les stands"],
    bonne: 1,
    explication: "Le RRA garantit l'application identique des règlements et procédures dans toute la ligue ; il tient aussi le fichier des arbitres."
  },
  {
    livret: 2, theme: "Organisation",
    q: "Quels documents sont officiels et opposables aux tireurs ?",
    choix: ["Les consignes écrites du club organisateur", "Les règlements et notifications émis par la FFTir (mémentos, circulaires)", "Les notes du RRA", "Les usages locaux du stand"],
    bonne: 1,
    explication: "Seuls les règlements et notifications FFTir (mémentos, circulaires) sont officiels et opposables."
  },
  {
    livret: 2, theme: "Organisation",
    q: "Quelle instance organise les examens d'arbitre national ?",
    choix: ["La Commission Régionale d'Arbitrage", "La CNS Arbitrage", "Le Comité Départemental", "La ligue"],
    bonne: 1,
    explication: "La CNS Arbitrage organise les examens nationaux et la formation continue des RRA."
  },
  {
    livret: 2, theme: "Organisation",
    q: "Quelle est la durée de validité d'une carte (badge) de juge-arbitre ?",
    choix: ["1 an", "2 ans", "4 ans", "À vie"],
    bonne: 2,
    explication: "4 ans, renouvelable avec obligation de formation continue."
  },
  {
    livret: 2, theme: "Organisation",
    q: "Quel est le rôle du Référent National d'une discipline ?",
    choix: ["Désigner les arbitres des championnats régionaux", "Assurer la formation initiale et continue de sa discipline", "Présider les jurys d'appel", "Tenir le fichier des arbitres"],
    bonne: 1,
    explication: "Un Référent National par discipline, chargé de sa formation initiale et continue."
  },

  // --- Formation et grades ---
  {
    livret: 2, theme: "Formation et grades",
    q: "L'examen du tronc commun est noté par un jury régional qui comprend au moins :",
    choix: ["1 arbitre international", "1 arbitre national", "3 arbitres régionaux", "Le président de ligue"],
    bonne: 1,
    explication: "Jury régional avec au moins 1 arbitre national ; questionnaires fournis aux RRA par la CNS."
  },
  {
    livret: 2, theme: "Formation et grades",
    q: "Quelle est la compétence d'un juge-arbitre stagiaire ?",
    choix: ["Diriger un pas de tir départemental", "Aucune décision d'arbitrage, toujours placé avec un arbitre qualifié", "Contrôler seul les armes", "Résoudre les incidents de tir"],
    bonne: 1,
    explication: "Le stagiaire ne prend aucune décision et est toujours accompagné d'un arbitre qualifié dans la discipline."
  },
  {
    livret: 2, theme: "Formation et grades",
    q: "Combien de parties comporte l'examen de juge-arbitre départemental ISSF Cible ?",
    choix: ["2", "3", "4", "5"],
    bonne: 2,
    explication: "4 parties : théorie, pratique sur le pas de tir, contrôle des points et des armes, oral (4 ou 5 questions)."
  },
  {
    livret: 2, theme: "Formation et grades",
    q: "Pour l'examen régional en armes anciennes (MLAIC), quelles parties sont supprimées ?",
    choix: ["La théorie", "La pratique et l'oral", "Le contrôle des armes uniquement", "Aucune"],
    bonne: 1,
    explication: "Pour le MLAIC, les parties pratiques et l'oral sont supprimées."
  },
  {
    livret: 2, theme: "Formation et grades",
    q: "Quelle est la compétence d'un juge-arbitre régional ?",
    choix: ["Diriger un pas de tir national", "Diriger un pas de tir de championnat départemental ou régional", "Présider le jury d'appel", "Proposer des candidats à l'international"],
    bonne: 1,
    explication: "Il dirige un pas de tir départemental ou régional, un atelier de comptage et le contrôle des armes."
  },
  {
    livret: 2, theme: "Formation et grades",
    q: "Laquelle n'est PAS une condition d'accès à l'examen de juge-arbitre national ?",
    choix: ["Arbitrer assidûment", "Avoir été responsable de pas de tir en championnat régional", "Être proposé par le président de ligue avec le RRA", "Avoir arbitré une compétition internationale"],
    bonne: 3,
    explication: "Les trois conditions : assiduité, responsable de pas de tir en régional, proposition du président de ligue avec le RRA."
  },
  {
    livret: 2, theme: "Formation et grades",
    q: "Qui peut proposer des candidats à l'examen de juge-arbitre international ?",
    choix: ["Le RRA", "Le président de ligue", "Seule la CNS Arbitrage", "Le candidat lui-même"],
    bonne: 2,
    explication: "Seule la CNS Arbitrage peut proposer des candidats à l'international."
  },

  // --- Gestion ---
  {
    livret: 2, theme: "Gestion des arbitres",
    q: "À quel département un juge-arbitre est-il rattaché par défaut ?",
    choix: ["Celui de son domicile", "Celui de son club", "Celui où il arbitre le plus", "Celui de son choix"],
    bonne: 1,
    explication: "Rattachement au département (et à la ligue) de son club."
  },
  {
    livret: 2, theme: "Gestion des arbitres",
    q: "L'enregistrement des arbitrages dans le carnet d'arbitrage est :",
    choix: ["Obligatoire, sous peine de suspension", "Facultatif, et visé par le responsable de la compétition", "Fait par le RRA uniquement", "Remplacé par le fichier fédéral"],
    bonne: 1,
    explication: "Le carnet est remis à chaque arbitre ; l'enregistrement est facultatif et doit être visé par le responsable de la compétition."
  },
  {
    livret: 2, theme: "Gestion des arbitres",
    q: "En cas de mutation, à qui le juge-arbitre adresse-t-il sa demande écrite ?",
    choix: ["Au président de son ancienne ligue", "Au président de la nouvelle ligue", "À la CNS Arbitrage", "Au DTN"],
    bonne: 1,
    explication: "Demande écrite au président de la nouvelle ligue, transmise au RRA."
  },

  // --- Compétitions et jurys ---
  {
    livret: 2, theme: "Compétitions et jurys",
    q: "Quelle condition doit remplir un stand pour accueillir un championnat départemental ou régional ?",
    choix: ["Avoir au moins 20 postes", "Détenir l'homologation sportive fédérale", "Être un stand municipal", "Être équipé de cibles électroniques"],
    bonne: 1,
    explication: "Les stands doivent détenir l'homologation sportive fédérale."
  },
  {
    livret: 2, theme: "Compétitions et jurys",
    q: "Après vérification du site, que doit-on afficher pour les compétiteurs ?",
    choix: ["Le plan d'évacuation", "Le procès-verbal d'acceptation", "La liste des arbitres", "Le règlement intérieur du club"],
    bonne: 1,
    explication: "Le procès-verbal d'acceptation, sans remarque technique, est affiché."
  },
  {
    livret: 2, theme: "Compétitions et jurys",
    q: "Lors d'une compétition, la présence d'au moins un juge-arbitre de quel niveau dans la discipline est obligatoire ?",
    choix: ["Départemental", "Régional", "National", "International"],
    bonne: 2,
    explication: "Au moins un juge-arbitre national de la discipline : du département, sinon de la ligue, sinon d'une ligue voisine."
  },
  {
    livret: 2, theme: "Compétitions et jurys",
    q: "Quel document fait foi pour les règles applicables lors d'une compétition ?",
    choix: ["Le livret de l'arbitre", "Le règlement publié sur le site fédéral", "Le règlement de l'année précédente", "Le règlement du club organisateur"],
    bonne: 1,
    explication: "Ce sont les règles reconnues par la FFTir à la date de la manifestation ; le règlement publié sur le site fédéral fait foi."
  },
  {
    livret: 2, theme: "Compétitions et jurys",
    q: "Après chaque championnat départemental ou régional, le responsable arbitrage transmet au RRA :",
    choix: ["Les cibles", "Une fiche de compte rendu", "Le palmarès signé", "Les feuilles de match"],
    bonne: 1,
    explication: "Il transmet une fiche de compte rendu au RRA."
  },
  {
    livret: 2, theme: "Compétitions et jurys",
    q: "Quel est l'effectif d'un jury ?",
    choix: ["Toujours 3 membres", "Un nombre pair", "Un nombre impair", "Libre"],
    bonne: 2,
    explication: "Les jurys ont un effectif impair."
  },
  {
    livret: 2, theme: "Compétitions et jurys",
    q: "Un juge-arbitre peut-il siéger dans un jury qui statue sur un fait qu'il a lui-même constaté ?",
    choix: ["Oui, il est le mieux placé", "Non", "Oui, s'il est président du jury", "Oui, avec l'accord du tireur"],
    bonne: 1,
    explication: "Il peut siéger dans un jury, mais pas pour un fait qu'il a lui-même constaté."
  },
  {
    livret: 2, theme: "Compétitions et jurys",
    q: "Lors d'une réclamation, que vérifie d'abord le responsable arbitrage ?",
    choix: ["La recevabilité (notamment l'heure)", "Le classement du tireur", "L'avis des autres tireurs", "Les antécédents du tireur"],
    bonne: 0,
    explication: "Il vérifie la recevabilité (notamment l'heure), puis transmet au président du jury."
  },
  {
    livret: 2, theme: "Compétitions et jurys",
    q: "Les décisions du jury de classement sur la valeur ou le nombre de coups tirés sur une cible sont :",
    choix: ["Susceptibles d'appel devant le jury d'appel", "Définitives et sans appel", "Validées par le jury technique", "Provisoires jusqu'à la fin de la compétition"],
    bonne: 1,
    explication: "Elles sont définitives et sans appel."
  },
  {
    livret: 2, theme: "Compétitions et jurys",
    q: "Le jury d'appel ne peut PAS comprendre de membres :",
    choix: ["Du jury de classement", "Du jury technique", "De la Gestion Sportive", "De la ligue"],
    bonne: 1,
    explication: "Le jury d'appel ne comprend pas de membres du jury technique, mais peut comprendre des membres du jury de classement."
  },
  {
    livret: 2, theme: "Compétitions et jurys",
    q: "Comment le jury motive-t-il sa décision ?",
    choix: ["Oralement au tireur", "En citant les articles du règlement, puis la décision est affichée", "Par un vote à main levée des tireurs", "Il n'a pas à la motiver"],
    bonne: 1,
    explication: "Le jury délibère seul et motive sa décision en citant les articles ; réclamations et décisions sont affichées."
  }
];
