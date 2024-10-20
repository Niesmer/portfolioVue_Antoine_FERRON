<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">Antoine FERRON</RouterLink>
  </header>
  <RouterView />
</template>

<style scoped>
header a{
  font-family: 'neflite';
}
</style>
