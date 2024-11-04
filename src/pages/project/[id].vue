<script setup lang="ts">
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from '../../data/projects';
const route = useRoute();

const id = route.params.id;

const projectData = projects.find((p) => p.link === id);
if (!projectData) {
  throw new Error(`Project with link ${id} not found`);
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
    <img :class="{'w-1/2 min-w-20 max-h-[400px] object-contain': projectData?.img?.length == 2}" v-for="image in projectData?.img" :src="image" alt=""
      :key="image">
  </div>
  <div class="description">{{ projectData?.description }}</div>
</template>

<style>
h1 {
  font-family: 'ppfragmentsans';
  font-weight: 800;
  text-align: center;
  font-size: 2.5rem;
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
