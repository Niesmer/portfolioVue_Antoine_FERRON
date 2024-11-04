export interface ProjectInterface {
  titre?: string;
  tags?: string[];
  objectif?: string;
  description?: string;
  img?: string[];
  vid?: {
    vidsrc?: string;
    viddesc?: string;
  };
  taches?: string[];
  problemes?: string;
  retenues?: string;
  link?: string;
  annee?: number;
}

export const projects: ProjectInterface[] = [
  {
    titre: "Space hokey",
    tags: ["Android", "Java", "Game", "Duo"],
    img: [
      "/src/assets/images/Space Hokey/image-6_1080x2170.png",
      "/src/assets/images/Space Hokey/image-8_1080x2170.png",
    ],
    description:
      "Ce projet est un jeu android lors duquel j’ai majoritairement été en charge des fonctionnalités du jeu tel que la gravité le score la détection du toucher.",

    link: "space-hokey",
    annee: 2024,
  },
  {
    titre: "Site e-commerce",

    link: "amzzon",
    annee: 2023,
  },
  {
    titre: "WebApp WYS",
    tags: ["Web", "React", "Stage"],
    img:["/src/assets/images/Wys/WebAppv1.png"],
    description: "Ce projet est réalisé lors d'un stage dans l'entreprise win your star, cette webapp est une version numérique du jeu d'intelligence emotionnelle WYS. J'ai été en charge de repenser et d'implémenter une nouvelle interface front avec Figma et React.",

    link: "wys-app",
    annee: 2024,
  },
  {
    titre: "Dames",

    link: "dames",
    annee: 2024,
  },
  {
    titre: "Carte interactive",
    link: "map-iut",
    tags: ["Web", "JavaScript", "Leaflet", "Groupe de 4"],
    description:
      "Le projet consistait à réaliser une carte interactive regroupant chaque IUT de france la carte dispose de fonctionnalité de recherche avancé, ce projet était réalisé en groupe de 4 en méthode agile. Ce projet était en partenariat avec l'UNPIUT et l'association des directeurs d'IUT.",
    img: ["/src/assets/images/Carte Iut/Explorateur IUT 1.png"],

    annee: 2023,
  },
];
