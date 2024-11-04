<script setup>
import { projects } from '@/data/projects';
import { RouterLink } from "vue-router";
import { TransitionGroup } from 'vue';

const sortedProjects = projects.sort((a, b) => b.annee - a.annee);
</script>

<template>
    <ul class="flex gap-2 mt-4 items-center flex-col">
        <RouterLink class="p-6 bg-black rounded-xl w-full text-white" :to="project.link"
            v-for="project in sortedProjects" :key="project.titre">
            <p class="flex justify-between w-full border-b-2 border-white">{{ project.titre }}<span class="font-thin">{{ project.annee }}</span></p>
        </RouterLink>
    </ul>
</template>



<style></style>