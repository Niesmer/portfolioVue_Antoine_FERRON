<script setup>
import ProjectList from "../components/ProjectList.vue"
</script>

<template>
  <main>
    <div class="left">
      <h1>Développeur fullstack</h1>
    </div>
    <div class="right">
      <p>
        Je suis Antoine un développeur web avec des connaissances en React / Vue / Node/js / Symfony.</p>
      <p>En 3ème Année de BUT MMI, je suis actuellement en recherche d'un stage de 4 mois à partir du 31 mars 2025.
        Si vous voulez en apprendre plus sur moi <a href="#projects">découvrez mon travail</a> </p>
    </div>
    <div class="projects">
      <ProjectList/>
    </div>
  </main>
</template>
