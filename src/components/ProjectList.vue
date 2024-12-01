<script setup lang="ts">
import { ref } from 'vue';
import { projects } from '@/data/projects';
import ProjectItem from './ProjectItem.vue';

const sortedProjects = projects.sort((a, b) => (b.annee ?? 0) - (a.annee ?? 0));
const expandedProjectTitle = ref<string | null>(null);

const toggleExpand = (projectTitle: string) => {
    expandedProjectTitle.value = expandedProjectTitle.value === projectTitle ? null : projectTitle;
}
</script>

<template>
    <ul class="flex gap-2 mt-4 items-center flex-col">
        <ProjectItem @click="toggleExpand(project.titre ?? '')"
            v-for="project in sortedProjects" 
            :key="project.titre" 
            :project="project" 
            :is-expanded="expandedProjectTitle === project.titre"
            @toggle-expand="toggleExpand(project.titre ?? '')"
        />
    </ul>
</template>