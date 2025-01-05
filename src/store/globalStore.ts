import { projects, type ProjectInterface } from "../assets/data/projects";
import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", {
  state: () => ({
    chosenProject: undefined as string | undefined,
    isAnimating: 1,
  }),
  actions: {
    findProjectfromPath(path: string): ProjectInterface | undefined {
      return projects.find((project) => project.link === path);
    },
    setChosenProject(project?: string) {
      this.chosenProject = project;
    },
    setAnimating(status: number) {
      this.isAnimating = status;
    },
  },
});
