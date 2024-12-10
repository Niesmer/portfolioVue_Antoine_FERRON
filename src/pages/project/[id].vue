<script setup lang="ts">
import { useRoute } from 'vue-router';
import { projects } from '../../assets/data/projects';
import Flicking from '@egjs/vue3-flicking';
import { Perspective } from '@egjs/flicking-plugins'
const route = useRoute();
const id = (route.params as { id: string }).id;
const perspective = [new Perspective({ rotate: 0.2, perspective: 500, scale: 0.4 })]
const projectData = projects.find((p) => p.link === id);
if (!projectData) {
  throw new Error(`Project with link ${id} not found`);
}
</script>

<template>
  <div>
    <div class="grid justify-center pb-6">
      <h1>{{ projectData?.titre }}</h1>
      <div class="flex flex-wrap justify-center gap-2 ">
        <h2 class="rounded-full py-1 px-3" v-for="tag in projectData.tags" :key="tag">
          {{ tag }}
        </h2>
      </div>
    </div>
    <Flicking class="z-0 overflow-visible" :options="{ align: 'center', circular: true }" :plugins="perspective">
      <div class="flicking-panel max-h-fit h-52 w-1/3 justify-center flex select-none" v-for="image in projectData?.img"
        :key="image">
        <img class="select-none object-contain" draggable="false" :src="image">
      </div>
    </Flicking>
    <div class="description">{{ projectData?.description }}</div>
  </div>
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
