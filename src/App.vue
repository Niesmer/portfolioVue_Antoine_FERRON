<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="p-2 mb-2 sticky top-0 flex justify-around bg-white">
    <nav class="rounded-full underline  uppercase w-fit px-4 flex gap-4">
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
.neflite {
  font-family: 'neflite';
}
</style>
