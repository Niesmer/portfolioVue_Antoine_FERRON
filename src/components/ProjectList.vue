<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { projects } from '@/assets/data/projects';
import ProjectItem from './ProjectItem.vue';

const sortedProjects = projects.sort((a, b) => (b.annee ?? 0) - (a.annee ?? 0));
const expandedProjectTitle = ref<string | undefined>(undefined);



const toggleExpand = (projectTitle: string) => {
    expandedProjectTitle.value = expandedProjectTitle.value === projectTitle ? undefined : projectTitle;
};


</script>

<template>
    <ul class="flex px-4 gap-2 my-4 items-center flex-col lg:text-xl">
        <ProjectItem @click="toggleExpand(project.titre ?? '')" v-for="project in sortedProjects" ref="projectItems"
            :key="project.titre" :data-title="project.titre" :project="project"
            :is-expanded="expandedProjectTitle === project.titre" />
    </ul>
</template>