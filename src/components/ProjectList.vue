<script setup>
import { projects } from '@/data/projects';
import { RouterLink } from "vue-router";
import { TransitionGroup } from 'vue';
</script>

<template>
    <ul id="projets" class="flex items-center flex-col">
        <RouterLink class="p-4 m-0.5 bg-black rounded-md w-full text-white" :to="project.link"
            v-for="project in projects" :key="project.titre">
            <p class="block w-full border-b-2 border-white">{{ project.titre }}</p>
        </RouterLink>
    </ul>
</template>



<style></style>