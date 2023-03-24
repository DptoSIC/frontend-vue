<script setup>
import PracticaComponentes from './components/practica-componentes/PracticaComponentes.vue';
</script>

<template>
  <div class="container text-start">
    <h1 class="my-3">Práctica con Datos Deportivos</h1>

    <div class="mb-3">
      <router-link :to="{ name: 'home' }" :class="$route.name == 'home' ? 'text-white bg-success' : ''" class="text-decoration-none p-2 me-2">Home</router-link>
      <router-link :to="{ name: 'partidos' }" :class="$route.name == 'partidos' ? 'text-white bg-success' : ''" class="text-decoration-none p-2 me-2">Partidos</router-link>
      <router-link :to="{ name: 'about' }" :class="$route.name == 'about' ? 'text-white bg-success' : ''" class="text-decoration-none p-2 me-2">About</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<style scoped>
:deep(.badge) {
  cursor: pointer;
}
</style>
