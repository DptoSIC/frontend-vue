<script>
import { mapState } from 'pinia'
import { partidosStore } from '@/stores/partidos'
import Partido from './Partido.vue';

export default {
  components: { Partido },
  computed: {
    ...mapState(partidosStore, [ 'partidos' ])
  },
}
</script>

<template>
  <div>
    Partidos para apostar por EMPATES
    <Partido v-for="partido of partidos" :partido="partido"></Partido>
  </div>
</template>
