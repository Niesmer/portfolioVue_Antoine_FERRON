// export interface ProjectInterface {
//   titre?: string;
//   tags?: string[];
//   objectif?: string;
//   description?: string;
//   LongerDescription?: string;
//   img?: { src: string; alt?: string }[];
//   vid?: {
//     vidsrc?: string;
//     viddesc?: string;
//   };
//   taches?: string[];
//   problemes?: string;
//   retenues?: string;
//   link?: string;
//   annee?: number;
// }

// export const projects: ProjectInterface[] = [
//   {
//     titre: "D'une Halles à l'autre",
//     description:
//       "Réalisé en partenariat avec Laval Patrimoine cette application est un jeux d'enigme en Réalité Virtuelle et Mobile, le but est de découvrir l'histoire des halles de Laval de manière ludique",
//     link: "halles",
//     annee: 2024,
//   },
//   {
//     titre: "Space hokey",
//     tags: ["Android", "Java", "Game", "Duo"],
//     img: [
//       { src: "/src/assets/images/Space Hokey/image-6_1080x2170.png" },
//       { src: "/src/assets/images/Space Hokey/image-8_1080x2170.png" },
//     ],
//     description:
//       "Ce projet est un jeu android lors duquel j’ai majoritairement été en charge des fonctionnalités du jeu tel que la gravité le score la détection du toucher.",
//     link: "space-hokey",
//     annee: 2024,
//   },
//   {
//     titre: "Site e‑commerce",

//     description:
//       "Ce projet est une parodis d'amazon dans le cadre de ma formation lors de ce projet j'ai réalisé une API en Syfony et un backoffice en React, afin de gérer les produits d'une boutique. La partie boutique n'as pas été réalisé",
//     link: "amzzon",
//     annee: 2023,
//   },
//   {
//     titre: "WebApp WYS",
//     tags: ["Web", "React", "Stage"],
//     img: [{ src: "/src/assets/images/Wys/WebAppv1.png" }],
//     description:
//       "Ce projet est réalisé lors d'un stage dans l'entreprise win your star, cette webapp est une version numérique du jeu d'intelligence emotionnelle WYS. J'ai été en charge de repenser et d'implémenter une nouvelle interface front avec Figma et React.",

//     link: "wys-app",
//     annee: 2024,
//   },

//   {
//     titre: "Carte interactive",
//     link: "map-iut",
//     tags: ["Web", "JavaScript", "Leaflet", "Groupe de 4"],
//     description:
//       "Le projet consistait à réaliser une carte interactive regroupant chaque IUT de france la carte dispose de fonctionnalité de recherche avancé, ce projet était réalisé en groupe de 4 en méthode agile. Ce projet était en partenariat avec l'UNPIUT et l'association des directeurs d'IUT.",
//     img: [{ src: "/src/assets/images/Carte Iut/Explorateur IUT 1.png" }],

//     annee: 2023,
//   },
// ];

export interface ProjectInterface {
  titre?: string;
  tags?: string[];
  objectif?: string;
  description?: string;
  LongerDescription?: string;
  img?: { src: string; alt?: string }[];
  vid?: { vidsrc?: string; viddesc?: string };
  taches?: string[];
  problemes?: string;
  retenues?: string;
  link?: string;
  annee?: number;

  // New optional parameters
  challenges?: string[];
  learnings?: string[];
}

export const projects: ProjectInterface[] = [
  {
    titre: "D'une Halles à l'autre",
    description:
      "Réalisé en partenariat avec Laval Patrimoine, cette application est un jeu d'énigmes en Réalité Virtuelle et Mobile pour découvrir l'histoire des halles de Laval.",
    link: "halles",
    annee: 2024,
    tags: ["VR", "Unity", "Mobile", "C#"],
    taches: [
      "Modélisation des assets 3D nécessaires au jeu.",
      "Développement de la logique pour les interactions VR et mobiles.",
      "Refactorisation du code pour unifier les deux environnements (VR et mobile).",
    ],
    challenges: [
      "Reprendre et restructurer le code existant pour assurer la compatibilité.",
      "Intégrer efficacement les environnements VR et mobile.",
      "Apprendre Unity et C# rapidement pour répondre aux besoins du projet.",
    ],
    retenues:
      "Apprentissage intensif d'Unity et C#, ainsi qu'une meilleure compréhension des contraintes liées aux projets cross-platform.",
    learnings: [
      "Maîtrise des concepts fondamentaux de Unity et C#.",
      "Amélioration des compétences en refactorisation et optimisation du code.",
      "Meilleure gestion des projets collaboratifs complexes.",
    ],
    img: [
      {
        src: "/src/assets/images/halles/vr_session.png",
        alt: "Session VR dans le jeu 'D'une Halles à l'autre'",
      },
      {
        src: "/src/assets/images/halles/3d_model.png",
        alt: "Modélisation 3D des Halles",
      },
    ],
  },
  {
    titre: "Space Hockey",
    description:
      "Un jeu Android de air hockey au thème spatial réalisé en Java.",
    link: "space-hokey",
    annee: 2024,
    tags: ["Android", "Java", "Game", "Physics"],
    taches: [
      "Création du système de collisions pour le palet et les bords.",
      "Développement du suivi des scores et de la logique de jeu.",
      "Tentative d'implémentation d'un système basé sur la vélocité de la poignée.",
    ],
    challenges: [
      "Gérer les limitations de temps pour finaliser toutes les fonctionnalités prévues.",
      "Créer un moteur de collision réaliste adapté au gameplay.",
    ],
    retenues:
      "Approfondissement des principes de physique appliqués au développement de jeux.",
    learnings: [
      "Meilleure gestion de la détection de collisions.",
      "Optimisation de la logique pour une expérience fluide.",
    ],
    img: [
      {
        src: "/src/assets/images/space-hokey/hokey_table.png",
        alt: "Table de jeu de Space Hockey",
      },
      {
        src: "/src/assets/images/space-hokey/gameplay.png",
        alt: "Gameplay de Space Hockey avec thème spatial",
      },
    ],
  },
  {
    titre: "Site e‑commerce",
    description:
      "Un projet de parodie d'Amazon avec une API en Symfony et un backoffice en React.",
    link: "amzzon",
    annee: 2023,
    tags: ["Symfony", "React", "API", "Backend"],
    taches: [
      "Réalisation d'une API REST en Symfony pour gérer les produits.",
      "Création d'un backoffice en React pour administrer le contenu.",
      "Ajout de protections contre CSRF et XSS.",
    ],
    challenges: [
      "Mettre en place une API robuste en respectant les bonnes pratiques.",
      "Garantir la sécurité des données dans un environnement collaboratif.",
    ],
    retenues:
      "Expérience enrichissante sur la combinaison d'outils backend et frontend pour un projet complet.",
    learnings: [
      "Développement d'API sécurisées.",
      "Utilisation avancée des composants React pour des interfaces modulaires.",
    ],
    img: [
      {
        src: "/src/assets/images/amzzon/admin_dashboard.png",
        alt: "Tableau de bord du backoffice",
      },
      {
        src: "/src/assets/images/amzzon/api_endpoints.png",
        alt: "Endpoints de l'API Symfony",
      },
    ],
  },
  {
    titre: "WebApp WYS",
    description:
      "Version numérique du serious game Win Your Star, mêlant React et Docker.",
    link: "wys-app",
    annee: 2024,
    tags: ["React", "Docker", "Figma", "Frontend"],
    taches: [
      "Réalisation des maquettes sur Figma.",
      "Développement et intégration du nouveau design dans React.",
      "Ajout d'un rôle administrateur pour une meilleure gestion.",
    ],
    challenges: [
      "Reprendre un projet complexe sur Docker sans formation initiale.",
      "Assurer la compatibilité avec l'ancien code tout en ajoutant des fonctionnalités modernes.",
    ],
    retenues:
      "Un projet exigeant qui a renforcé ma capacité d'adaptation et mon expertise en développement front.",
    learnings: [
      "Utilisation des conteneurs Docker dans des projets web.",
      "Création et refactorisation de rôles pour une meilleure gestion des accès.",
    ],
    img: [
      {
        src: "/src/assets/images/wys/interface.png",
        alt: "Nouvelle interface utilisateur de la WebApp WYS",
      },
    ],
  },
  {
    titre: "Carte interactive",
    description:
      "Une carte interactive regroupant les IUT de France avec recherche avancée.",
    link: "map-iut",
    annee: 2023,
    tags: ["JavaScript", "Leaflet", "API", "Team"],
    taches: [
      "Analyse de la concurrence et interviews des utilisateurs cibles.",
      "Développement du système de recherche et filtrage.",
      "Implémentation de l'affichage des données via Echarts.js.",
    ],
    challenges: [
      "Gestion de données incomplètes ou mal collectées.",
      "Utilisation du versioning pour la première fois dans un projet d'équipe.",
    ],
    retenues:
      "Une première expérience enrichissante dans un projet collaboratif impliquant plusieurs rôles.",
    learnings: [
      "Approfondissement des outils de visualisation comme Leaflet.",
      "Collaboration efficace au sein d'une équipe avec Git.",
    ],
    img: [
      {
        src: "/src/assets/images/map-iut/interactive_map.png",
        alt: "Interface de la carte interactive",
      },
    ],
  },
];
