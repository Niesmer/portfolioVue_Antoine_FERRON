export interface ProjectInterface {
  titre?: string;
  tags?: string[];
  objectif?: string;
  description?: string;
  sections?: Array<{
    titre: string;
    texte: string | Array<string>;
    imgs?: Array<{ src: string; alt: string }>;
    vids?: Array<{ src: string; alt: string }>;
  }>;
  link?: string;
  annee?: number;
}

export const projects: ProjectInterface[] = [
  {
    titre: "D'une Halles à l'autre",
    description:
      "Réalisé en partenariat avec Laval Patrimoine, cette application est un jeu d'énigmes en Réalité Virtuelle et Mobile pour découvrir l'histoire des halles de Laval.",
    link: "halles",
    annee: 2024,
    tags: ["VR", "Unity", "Mobile", "C#"],
    sections: [
      {
        titre: "Tâches",
        texte: [
          "Modélisation des assets 3D nécessaires au jeu.",
          "Développement de la logique pour les interactions VR et mobiles.",
          "Refactorisation du code pour unifier les deux environnements (VR et mobile)."
        ],
        imgs: [
          {
            src: "/src/assets/images/halles/vr_session.webp",
            alt: "Session VR dans le jeu 'D'une Halles à l'autre'",
          },
          {
            src: "/src/assets/images/halles/3d_model.webp",
            alt: "Modélisation 3D des Halles",
          },
        ],
      },
      {
        titre: "Challenges",
        texte:
          "Reprendre et restructurer le code existant pour assurer la compatibilité. Intégrer efficacement les environnements VR et mobile. Apprendre Unity et C# rapidement pour répondre aux besoins du projet.",
      },
      {
        titre: "Retenues",
        texte:
          "Apprentissage intensif d'Unity et C#, ainsi qu'une meilleure compréhension des contraintes liées aux projets cross-platform.",
      },
      {
        titre: "Learnings",
        texte:
          "Maîtrise des concepts fondamentaux de Unity et C#. Amélioration des compétences en refactorisation et optimisation du code.",
      },
    ],
  },
  {
    titre: "Space Hockey",
    description:
      "Un jeu Android de air hockey au thème spatial réalisé en Java.",
    link: "space-hokey",
    annee: 2024,
    tags: ["Android", "Java", "Game"],
    sections: [
      {
        titre: "Tâches",
        texte: [
          "Création du système de collisions pour le palet et les bords.",
          "Développement du suivi des scores et de la logique de jeu.",
          "Tentative d'implémentation d'un système basé sur la vélocité de la poignée."
        ],
        imgs: [
          {
            src: "/src/assets/images/space-hokey/acceuil.webp",
            alt: "Table de jeu de Space Hockey",
          },
          {
            src: "/src/assets/images/space-hokey/gameplay.webp",
            alt: "Gameplay de Space Hockey avec thème spatial",
          },
        ],
      },
      {
        titre: "Challenges",
        texte:
          "Gérer les limitations de temps pour finaliser toutes les fonctionnalités prévues. Créer un moteur de collision réaliste adapté au gameplay.",
      },
      {
        titre: "Retenues",
        texte:
          "Approfondissement des principes de physique appliqués au développement de jeux.",
      },
      {
        titre: "Learnings",
        texte:
          "Meilleure gestion de la détection de collisions. Optimisation de la logique pour une expérience fluide.",
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
    sections: [
      {
        titre: "Tâches",
        texte: [
          "Réalisation d'une API REST en Symfony pour gérer les produits.",
          "Création d'un backoffice en React pour administrer le contenu.",
          "Ajout de protections contre CSRF et XSS."
        ],
        imgs: [
          {
            src: "/src/assets/images/amzzon/admin_dashboard.webp",
            alt: "Tableau de bord du backoffice",
          },
          {
            src: "/src/assets/images/amzzon/api_endpoints.webp",
            alt: "Endpoints de l'API Symfony",
          },
        ],
      },
      {
        titre: "Challenges",
        texte:
          "Mettre en place une API robuste en respectant les bonnes pratiques. Garantir la sécurité des données dans un environnement collaboratif.",
      },
      {
        titre: "Retenues",
        texte:
          "Expérience enrichissante sur la combinaison d'outils backend et frontend pour un projet complet.",
      },
      {
        titre: "Learnings",
        texte:
          "Développement d'API sécurisées. Utilisation avancée des composants React pour des interfaces modulaires.",
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
    sections: [
      {
        titre: "Tâches",
        texte: [
          "Réalisation des maquettes sur Figma.",
          "Développement et intégration du nouveau design dans React.",
          "Ajout d'un rôle administrateur pour une meilleure gestion."
        ],
        imgs: [
          {
            src: "/src/assets/images/wys/old_interface.webp",
            alt: "Ancienne interface utilisateur de la WebApp WYS",
          },
          {
            src: "/src/assets/images/wys/interface.webp",
            alt: "Nouvelle interface utilisateur de la WebApp WYS",
          },
        ],
      },
      {
        titre: "Challenges",
        texte:
          "Reprendre un projet complexe sur Docker sans formation initiale. Assurer la compatibilité avec l'ancien code tout en ajoutant des fonctionnalités modernes.",
      },
      {
        titre: "Retenues",
        texte:
          "Un projet exigeant qui a renforcé ma capacité d'adaptation et mon expertise en développement front.",
      },
      {
        titre: "Learnings",
        texte:
          "Utilisation des conteneurs Docker dans des projets web. Création et refactorisation de rôles pour une meilleure gestion des accès.",
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
    sections: [
      {
        titre: "Tâches",
        texte: [
          "Analyse de la concurrence et interviews des utilisateurs cibles.",
          "Développement du système de recherche et filtrage.",
          "Implémentation de l'affichage des données via Echarts.js."
        ],
        imgs: [
          {
            src: "/src/assets/images/map-iut/interactive_map.webp",
            alt: "Interface de la carte interactive",
          },
        ],
      },
      {
        titre: "Challenges",
        texte:
          "Gestion de données incomplètes ou mal collectées. Utilisation du versioning pour la première fois dans un projet d'équipe.",
      },
      {
        titre: "Retenues",
        texte:
          "Une première expérience enrichissante dans un projet collaboratif impliquant plusieurs rôles.",
      },
      {
        titre: "Learnings",
        texte:
          "Approfondissement des outils de visualisation comme Leaflet. Collaboration efficace au sein d'une équipe avec Git.",
      },
    ],
  },
];
