<script>
import { apuestasStore } from '@/stores/apuestas.js'
import { mapActions } from 'pinia'

export default {
  props: [ 'partido' ],
  emits: [ 'establecerApuesta'],
  methods: {
    ...mapActions(apuestasStore, { apuestasDeCasas: 'getApuestas' }),
    getApuestas(partido) {
      const formatter = new Intl.NumberFormat('es-ES', { maximumFractionDigits: 2 })
      const apuestas = this.apuestasDeCasas(partido, 'X')
      apuestas.forEach((a, i, array) => {
                              a.cuotaString = formatter.format(a.cuota)
                              if (i == 0) a.color = 'btn-success'
                              else if (array[0].cuota - array[i].cuota < 1) a.color = 'btn-warning'
                              else a.color = 'btn-danger'
                            })

      return apuestas
    }
  }
}
</script>

<template>
  <div class="text-md-end">
    <button v-for="apuesta of getApuestas(partido)" type="button"
            class="btn me-2 mb-2 p-md-2 p-1" :class="apuesta.color"
            @click="$emit('establecerApuesta', { ...apuesta, cantidad: 100 })">
              {{ apuesta.casa }} <span class="badge text-bg-secondary">{{ apuesta.cuotaString }}</span>
    </button>
  </div>
</template>