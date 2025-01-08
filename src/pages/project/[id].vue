<script setup lang="ts">
import { useRoute } from 'vue-router';
import { projects } from '../../assets/data/projects';
import { Perspective } from '@egjs/flicking-plugins';
import { ref, onMounted, onUnmounted, defineAsyncComponent } from 'vue';
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const CustomFlicking = defineAsyncComponent(() =>
  import('../../components/CustomFlicking.vue')
);
const carouselConfig = {
  itemsToShow: 3.5,
  wrapAround: true
}

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
  <div class=" ppfragment overflow-hidden">
    <!-- Title -->
    <div class="px-4 grid justify-center">
      <h1 class="text-center uppercase font-bold text-2xl my-4">{{ projectData.titre }}</h1>
      <div class="flex flex-wrap justify-center gap-2 ">
        <h2 class="rounded-full py-1 px-3 bg-slate-300" v-for="tag in projectData.tags" :key="tag">
          {{ tag }}
        </h2>
      </div>
    </div>

    <!-- Image Carousel (Hidden on Large Screens) -->
    <CustomFlicking v-if="!isLargeScreen" :images="projectData.imgs" :perspective="perspective" />

    <!-- Description -->
    <div class="px-4 description">{{ projectData.description }}</div>

    <!-- Sections -->
    <div v-for="section in projectData.sections" :key="section.titre" class="px-4 mt-4">
      <h3 class="font-bold text-lg">{{ section.titre }}</h3>
      <p v-if="typeof section.texte === 'string'">{{ section.texte }}</p>
      <ul v-else class="list-disc pl-6">
        <li v-for="text in section.texte" :key="text">{{ text }}</li>
      </ul>
    </div>

    <!-- Image Carousel (Visible on Large Screens) -->
    <Carousel v-if="isLargeScreen" class="mt-8 mb-16" v-bind="carouselConfig">
      <Slide v-for="slide in projectData.imgs" :key="slide">
        <div class="select-none grid place-items-center">
          <img class="h-60" :src="slide.src" alt="" />
          <p>{{ slide.alt }}</p>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>
