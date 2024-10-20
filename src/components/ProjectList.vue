<script setup>
import { projects } from '@/data/projects';
import { RouterLink } from "vue-router";
</script>

<template>
    <ul>
        <li v-for="project in projects" :key="project.titre">
            <RouterLink :to="project.link">{{ project.titre }}</RouterLink>
        </li>
    </ul>
</template>



<style></style>