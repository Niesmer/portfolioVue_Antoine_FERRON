<script setup lang="ts">
import { projects } from '../assets/data/projects';

const props = defineProps<{
  project: string
}>();

const projectData = projects.find((p) => p.titre === props.project);
if (!projectData) {
  throw new Error(`Project with title ${props.project} not found`);
}
</script>

<template>
  <div class="grid justify-center pb-6">
    <h1>{{ projectData?.titre }}</h1>
    <div class="flex flex-wrap justify-center gap-2 ">
      <h2 class="rounded-full py-1 px-3" v-for="tag in projectData.tags" :key="tag">
        {{ tag }}
      </h2>
    </div>
  </div>
  <div class="flex gap-4">
    <img v-for="image in projectData?.img" :src="image" alt="" :key="image">
  </div>
  <div class="description">{{ projectData?.description }}</div>
</template>

<style>
h1 {
  font-family: 'ppfragmentsans';
  font-weight: 800;
  text-align: center;
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 15px;
}

h2 {
  font-family: 'ppfragmentsans';
  font-size: 1.3rem;
  background-color: rgba(156, 156, 156, 0.6);
  box-shadow: 0 0 2px 0px rgb(0, 0, 0);
}

.description {
  font-family: 'ppfragmentsans';
  font-size: 1.2rem;
  text-align: justify;
  margin-top: 15px;
}
</style>
