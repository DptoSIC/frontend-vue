<template>
  <div>
    <h1>Elige una ruta anidada</h1>

    <div class="mb-3">
      <router-link :to="{ name: 'nested-home' }" :class="$route.name == 'nested-home' ? 'text-dark bg-warning' : ''" class="text-decoration-none p-2 me-2">Home</router-link>
      <router-link :to="{ name: 'nested-partidos' }" :class="$route.name == 'nested-partidos' ? 'text-dark bg-warning' : ''" class="text-decoration-none p-2 me-2">Partidos</router-link>
      <router-link :to="{ name: 'nested-about' }" :class="$route.name == 'nested-about' ? 'text-dark bg-warning' : ''" class="text-decoration-none p-2 me-2">About</router-link>
    </div>
    
    <router-view></router-view>
  </div>
</template>