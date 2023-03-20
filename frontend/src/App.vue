<script setup>
import PracticaComponentes from './components/practica-componentes/PracticaComponentes.vue';
</script>

<template>
  <div class="container text-start">
    <h1 class="my-5">Práctica de routing</h1>

    <router-link to="/" class="badge bg-warning me-2">Home</router-link>
    <router-link to="/about">About</router-link>

    <!-- <PracticaComponentes /> -->
    <router-view class="alert alert-danger"></router-view>
  </div>
</template>

<style scoped>
:deep(.badge) {
  cursor: pointer;
}
</style>
