<script>
import { mapActions } from 'pinia'
import { participantesStore } from '@/stores/participantes'
import { dateToString } from '@/utils/utils'

export default {
  props: [ 'partido' ],
  computed: {
    local() {
      return this.getParticipantePorId(this.partido.idLocal)
    },
    visitante() {
      return this.getParticipantePorId(this.partido.idVisitante)
    },
    fecha() {
      return dateToString(new Date(this.partido.timestamp))
    },
    goles() {
      return this.partido.sucesos.goles
    },
    golesLocal() {
      return this.golesParticipante(this.local)
    },
    golesVisitante() {
      return this.golesParticipante(this.visitante)
    }
  },
  methods: {
    ...mapActions(participantesStore, [ 'getParticipantePorId' ]),
    golesParticipante(participante) {
      return this.goles.filter(g => g.idParticipante == participante.id).length
    }
  }
}
</script>

<template>
  <div>
    <div>{{ fecha }}</div>
    <span>{{ local.nombre }}</span>
    <span>{{ golesLocal }} - {{ golesVisitante }}</span>
    <span>{{ visitante.nombre }}</span>
  </div>
</template>
