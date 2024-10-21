<script setup>
import ProjectList from "../components/ProjectList.vue"
</script>

<template>
  <main class="grid gap-4 flex-col">
    <div class="px-4 left flex flex-col leading-none">
      <h1 class="mb-3 whitespace-pre-line">{{ "Antoine\nFERRON" }}</h1>
      <p class="mb-2">Je suis un développeur polyvalent avec une solide experience en applications web et mobile, ainsi
        qu'un début d'experience en réalité virtuelle.</p>
      <p class="mb-2"> Je maitrise des technologies telles que React,
        Node.js, MongoDB, Unity et Flutter et m'efforce de transformer des idées complexes en solutions simples et
        efficaces.</p>
      <p> Mon objectif est d'allier innovation et performance pour offrir des expériences utilisateur
        intuitives et optimisées.</p>
    </div>
    <ProjectList />
  </main>
</template>

<style scoped>
main {
  grid-template-rows: auto auto;
}

.left h1 {
  font-family: 'Neflite';
  font-size: clamp(2rem, 12.5vw, 4rem);
}

.left p {
  font-family: 'ppfragmentglare';
  line-height: 1.5;
  font-weight: 300;
}
</style>