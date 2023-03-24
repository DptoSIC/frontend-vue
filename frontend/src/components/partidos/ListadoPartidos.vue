<script>
import { mapState } from 'pinia'
import { partidosStore } from '@/stores/partidos'
import Partido from './Partido.vue'

export default {
  components: { Partido },
  computed: {
    ...mapState(partidosStore, [ 'partidos' ])
  },
}
</script>

<template>
  <div>
    <h2>Partidos para apostar por EMPATES</h2>
    <Partido v-for="partido of partidos" :partido="partido"
             class="border rounded p-2 mb-2"></Partido>
  </div>
</template>
