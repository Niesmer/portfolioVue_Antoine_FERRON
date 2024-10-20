export interface ProjectInterface {
    titre: string | undefined;
    languages: string[] | undefined;
    objectif: string | undefined;
    description: string | undefined;
    vid: {
        vidsrc: string | undefined;
        viddesc: string | undefined;
    } | undefined;
    taches: string[] | undefined;
    problemes: string | undefined;
    retenues: string | undefined;
    link: string | undefined;
}

export const projects: ProjectInterface[] = [
    {
        titre: "Motus",
        languages: undefined,
        objectif: undefined,
        description: undefined,
        vid: undefined,
        taches: undefined,
        problemes: undefined,
        retenues: undefined,
        link: "motus"
    },
    {
        titre: "Site e-commerce",
        languages: undefined,
        objectif: undefined,
        description: undefined,
        vid: undefined,
        taches: undefined,
        problemes: undefined,
        retenues: undefined,
        link: "amzzon"
    },
    {
        titre: "WebApp WYS",
        languages: undefined,
        objectif: undefined,
        description: undefined,
        vid: undefined,
        taches: undefined,
        problemes: undefined,
        retenues: undefined,
        link: "wys-app"
    },
    {
        titre: "Dames",
        languages: undefined,
        objectif: undefined,
        description: undefined,
        vid: undefined,
        taches: undefined,
        problemes: undefined,
        retenues: undefined,
        link: "dames"
    }
];
