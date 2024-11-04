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
    tags: ["Android", "Java", "Game","Duo"],
    img: [
      "/src/assets/images/image-6_1080x2170.png",
      "/src/assets/images/image-8_1080x2170.png",
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

    link: "wys-app",
    annee: 2024,
  },
  {
    titre: "Dames",

    link: "dames",
    annee: 2024,
  },
];
