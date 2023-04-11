<script setup>
import { storeToRefs } from 'pinia'
import { authStore } from '@/stores/auth'
import { onMounted } from 'vue'
import { participantesStore } from '@/stores/participantes'

const auth = authStore()
const { tipoUsuario } = storeToRefs(auth)
const { cambiarNivel } = auth
// Hay varias formas de meter la funcion ademas de como arriba:
//   const cambiarNivel = () => auth.cambiarNivel()
//   function cambiarNivel() { auth.cambiarNivel() }
// Incluso se pueden todas si se hace @click="auth.cambiarNivel"

/* 
  Lo mismo usando Options API
  ---------------------------
  
  import { authStore } from '@/stores/auth'
  import { mapState, mapActions } from 'pinia'

  export default {
    computed: {
      ...mapState(authStore, [ 'tipoUsuario' ])
    },
    methods: {
      ...mapActions(authStore, [ 'cambiarNivel' ])
    }
  }
*/

onMounted(async () => {
  await participantesStore().getParticipantes()
})
</script>

<template>
  <div class="container text-start">
    <h1 class="my-3">Práctica con Datos Deportivos</h1>
    <div class="my-4">Tipo de usuario <span class="badge text-bg-primary" @click="cambiarNivel">{{ tipoUsuario }}</span></div>

    <div class="mb-3">
      <router-link :to="{ name: 'home' }" :class="$route.name == 'home' ? 'text-white bg-success' : ''" class="text-decoration-none p-2 me-2">Home</router-link>
      <router-link :to="{ name: 'partidos' }" :class="$route.name == 'partidos' ? 'text-white bg-success' : ''" class="text-decoration-none p-2 me-2">Partidos</router-link>
      <router-link :to="{ name: 'about' }" :class="$route.name == 'about' ? 'text-white bg-success' : ''" class="text-decoration-none p-2 me-2">About</router-link>
      <router-link :to="{ name: 'nested-about' }" :class="($route.name && $route.name.startsWith('nested')) ? 'text-white bg-success' : ''" class="text-decoration-none p-2 me-2">Nested</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<style scoped>
:deep(.badge) {
  cursor: pointer;
}
</style>
