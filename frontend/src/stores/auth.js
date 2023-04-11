import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const authStore = defineStore('autenticacion', () => {
  const tipoUsuario = ref('basico')

  const esAdmin = computed(() => tipoUsuario.value == 'admin')

  function cambiarNivel() {
    tipoUsuario.value = this.esAdmin ? 'basico' : 'admin'
  }

  return { tipoUsuario, esAdmin, cambiarNivel }
})