<script>
// import participantesJson from '@/assets/participantes.json'
import Participante from '../practica-componentes/Participante.vue'
import { mapActions, mapState } from 'pinia'
import { participantesStore } from '@/stores/participantes'

export default {
  components: { Participante },
  computed: {
    // participantes() {
    //   return participantesJson._embedded.participantes
    // },
    ...mapState(participantesStore, [ 'participantes' ]),
    participante() {
        // return this.participantes.find(p => p.id == this.$route.params.id)
        return this.getParticipantePorId(this.$route.params.id)
    }
  },
  methods: {
    ...mapActions(participantesStore, [ 'getParticipantePorId' ]),
    addTarjeta(evento) {
      console.log(evento)
    }
  }
}
</script>

<template>
  <div>
    <!-- <div class="d-inline me-2">{{ participante.nombre }} - <small class="text-muted">{{  participante.id }}</small></div>
    <span class="btn text-light badge bg-success me-2" @click="$emit('addGol')">Añadir gol</span>
    <span class="btn text-light badge bg-secondary" @click="addTarjeta">Añadir tarjeta</span> -->
    <Participante @addTarjeta="addTarjeta" :participante="participante"></Participante>
    <pre>{{ JSON.stringify(participante, null, " ") }}</pre>
  </div>
</template>
