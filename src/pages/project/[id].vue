<script setup lang="ts">
import { useRoute } from 'vue-router';
import { projects } from '../../assets/data/projects';
import Flicking from '@egjs/vue3-flicking';
import { Perspective } from '@egjs/flicking-plugins';
import { ref, onMounted, onUnmounted } from 'vue';

const route = useRoute();
const id = (route.params as { id: string }).id;
const perspective = [new Perspective({ rotate: 0.2, perspective: 500, scale: 0.4 })];
const projectData = projects.find((p) => p.link === id);

if (!projectData) {
  throw new Error(`Project with link ${id} not found`);
}

// Reactive flag for large screens
const isLargeScreen = ref(false);

function updateScreenSize() {
  isLargeScreen.value = window.innerWidth >= 1024; // Tailwind `lg` breakpoint
}

onMounted(() => {
  updateScreenSize();
  window.addEventListener('resize', updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
});

</script>
<template>
  <div class="px-4 ppfragment overflow-hidden">
    <!-- Title -->
    <div class="grid justify-center">
      <h1 class="text-center uppercase font-bold text-2xl my-4">{{ projectData.titre }}</h1>
      <div class="flex flex-wrap justify-center gap-2 ">
        <h2 class="rounded-full py-1 px-3 bg-slate-300" v-for="tag in projectData.tags" :key="tag">
          {{ tag }}
        </h2>
      </div>
    </div>

    <!-- Image Carousel (Hidden on Large Screens) -->
    <Flicking v-if="!isLargeScreen" class="z-0 overflow-visible my-2" :options="{ align: 'center', circular: true }"
      :plugins="perspective">
      <div class="flicking-panel max-h-fit h-52 w-1/3 justify-center flex select-none lg:h-fit"
        v-for="image in projectData.img" :key="image.src">
        <img class="select-none object-contain text-center self-center" draggable="false" :src="image.src"
          :alt="image.alt" />
      </div>
    </Flicking>

    <!-- Description -->
    <div class="description">{{ projectData.description }}</div>

    <!-- Sections -->
    <div v-for="section in projectData.sections" :key="section.titre" class="mt-4">
      <h3 class="font-bold text-lg">{{ section.titre }}</h3>
      <p v-if="typeof section.texte === 'string'">{{ section.texte }}</p>
      <ul v-else class="list-disc pl-6">
        <li v-for="text in section.texte" :key="text">{{ text }}</li>
      </ul>
      <div v-if="section.imgs" class="flex flex-wrap justify-center gap-2 mt-2">
        <img v-for="img in section.imgs" :key="img.src" :src="img.src" :alt="img.alt" class="w-1/3 object-contain" />
      </div>
    </div>
  </div>
</template>
