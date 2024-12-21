<script setup lang="ts">
import { ref } from 'vue';
import { projects } from '@/assets/data/projects';
import ProjectItem from './ProjectItem.vue';
import { onBeforeRouteLeave } from 'vue-router';
import gsap from 'gsap';

const sortedProjects = projects.sort((a, b) => (b.annee ?? 0) - (a.annee ?? 0));
const expandedProjectTitle = ref<string | null>(null);

const toggleExpand = (projectTitle: string) => {
    expandedProjectTitle.value = expandedProjectTitle.value === projectTitle ? null : projectTitle;
}



onBeforeRouteLeave((to, from, next) => {
    if (expandedProjectTitle.value) {
        //const expandedElement = document.querySelector(`[data-title="${expandedProjectTitle.value}"]`);
        // console.log('Expanded project element:', expandedElement);
        // if (expandedElement) {
        //     gsap.to(expandedElement, {
        //         y: -expandedElement.getBoundingClientRect().top,
        //         borderRadius: 0,
        //         width: "100vw",
        //         height: "100vh",
        //         zIndex: 200,
        //         duration: 0.5,
        //         onComplete: () => { setTimeout(() => next(), 500); }
        //     });
        gsap.to("#transition", {
            x: 0,
            duration: 0.5,
            ease: 'power2.inOut',
            delay: 0.2,
            onComplete: () => {
                next();
            }
        });
    } else {
        next();
    }
});
</script>

<template>
    <div class="w-screen translate-x-full h-screen flex items-center justify-center bg-black fixed z-20 top-0" id="transition">
        <p class="text-white uppercase font-bold text-xl">{{ expandedProjectTitle }}</p>
    </div>
    <ul class="flex gap-2 my-4 items-center flex-col">
        <ProjectItem @click="toggleExpand(project.titre ?? '')" v-for="project in sortedProjects" ref="projectItems"
            :key="project.titre" :data-title="project.titre" :project="project"
            :is-expanded="expandedProjectTitle === project.titre" />
    </ul>
</template>