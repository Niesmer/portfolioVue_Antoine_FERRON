<script setup>
import ProjectList from "../components/ProjectList.vue"
</script>

<template>
  <main class="grid gap-4">
    <div class="left grid-rows-2 grid gap-20 pt-32 justify-center h-[85vh] pb-[15vh]">
      <p class="self-end text-xl">Je suis un <strong>développeur web et android</strong> créant des applications performantes et intuitives.</p>
      <div class="self-top">
        <p class="text-xl font-bold">Besoin d'un développeur ?</p>
      <a href="#projets" class="text-xl flex items-baseline border-b-2 border-[#D75A00] w-fit gap-2">
        <p class="text-[#D75A00] font-bold">découvrez mon travail</p>
        <svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M26 2.2739C26 1.69954 25.7718 1.14871 25.3657 0.742576C24.9596 0.336444 24.4087 0.108281 23.8344 0.108281L6.50942 0C5.93506 0 5.38423 0.228163 4.97809 0.634296C4.57196 1.04043 4.3438 1.59126 4.3438 2.16562C4.3438 2.73998 4.57196 3.29081 4.97809 3.69694C5.38423 4.10308 5.93506 4.33124 6.50942 4.33124H18.5503L0.640587 22.2842C0.437607 22.4856 0.276497 22.7251 0.166552 22.989C0.056606 23.2529 0 23.5359 0 23.8218C0 24.1077 0.056606 24.3908 0.166552 24.6547C0.276497 24.9186 0.437607 25.1581 0.640587 25.3594C0.841909 25.5624 1.08143 25.7235 1.34533 25.8335C1.60923 25.9434 1.89229 26 2.17818 26C2.46406 26 2.74712 25.9434 3.01102 25.8335C3.27493 25.7235 3.51445 25.5624 3.71577 25.3594L21.6688 7.40642V19.4906C21.6688 20.0649 21.8969 20.6158 22.3031 21.0219C22.7092 21.428 23.26 21.6562 23.8344 21.6562C24.4087 21.6562 24.9596 21.428 25.3657 21.0219C25.7718 20.6158 26 20.0649 26 19.4906V2.2739Z"
            fill="#D75A00" />
        </svg>
      </a>
      </div>
      
    </div>
    <div id="projets" class="projets h-[85vh]">
      <p class="border-b-2 border- border-black w-fit text-xl">Mes projets</p>
      <ProjectList />
    </div>
  </main>
</template>

<style scoped>
main {
  grid-template-rows: auto auto;
}
.left p {
  font-family: 'ppfragmentsans';
}

.projets {
  font-family: 'ppfragmentsans';
  font-weight: 800;
}
</style>