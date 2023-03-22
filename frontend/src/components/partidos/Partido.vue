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
    }
  },
  methods: {
    ...mapActions(participantesStore, [ 'getParticipantePorId' ]),
  }
}
</script>

<template>
  <div>
    <div>{{ fecha }}</div>
    <span>{{ local.nombre }}</span>
    <span>{{ visitante.nombre }}</span>
  </div>
</template>
