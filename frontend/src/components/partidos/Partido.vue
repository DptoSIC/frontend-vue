<script>
import { mapActions } from 'pinia'
import { participantesStore } from '@/stores/participantes'

export default {
  props: [ 'partido' ],
  computed: {
    local() {
      return this.getParticipantePorId(this.partido.idLocal)
    },
    visitante() {
      return this.getParticipantePorId(this.partido.idVisitante)
    },
  },
  methods: {
    ...mapActions(participantesStore, [ 'getParticipantePorId' ]),
  }
}
</script>

<template>
  <div>
    <span>{{ local.nombre }}</span>
    <span>{{ visitante.nombre }}</span>
  </div>
</template>
