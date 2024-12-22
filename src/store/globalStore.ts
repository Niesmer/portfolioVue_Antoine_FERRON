import { defineStore } from 'pinia';

export const useProjectStore = defineStore('project', {
  state: () => ({
    chosenProject: undefined as string | undefined,
    isAnimating: false,
  }),
  actions: {
    setChosenProject(project?: string) {
      this.chosenProject = project;
    },
    setAnimating(status: boolean) {
      this.isAnimating = status;
    },
  },
});
