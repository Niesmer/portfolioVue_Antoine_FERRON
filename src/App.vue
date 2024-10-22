<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
const openNav = () => {
  console.log("test");  
}
</script>

<template>
  <header class="p-2 mb-2 sticky top-0 flex justify-end bg-white">
    <nav class="rounded-full underline  uppercase w-fit px-4 flex gap-4">
      <a @click="openNav" class="grid grid-cols-2 gap-1 grid-rows-2">
        <div class="w-4 h-4 border-black border-2 rounded-sm" v-for="(item, index) in 4" :key="index" ref="navItem"></div>
      </a>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
.neflite {
  font-family: 'neflite';
}
</style>
