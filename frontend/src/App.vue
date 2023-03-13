<script setup>
import PracticaComponentes from './components/practica-componentes/PracticaComponentes.vue';
</script>

<template>
  <div class="container text-start">
    <h1 class="my-5">Listado de participantes</h1>
    <PracticaComponentes />
  </div>
</template>

<style scoped>
:deep(.badge) {
  cursor: pointer;
}
</style>
