<template>
  <div v-if="['motus', 'amzzon', 'wys-app', 'dames'].includes($route.params.project)" class="about">
    <h1>This is project {{ $route.params.project }}</h1>
  </div>
  <div v-else>
    <h1>404</h1>
  </div>
</template>

<style></style>
