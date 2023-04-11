<script>
import { mapActions } from 'pinia'
import { participantesStore } from '@/stores/participantes'
import { dateToString } from '@/utils/utils'
import Apuestas from '@/components/apuestas/Apuestas.vue'
import Apostado from '@/components/apuestas/Apostado.vue'

export default {
  props: [ 'partido' ],
  components: { Apuestas, Apostado },
  emits: [ 'establecerApuesta'],
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
      if (!this.goles) return 0
      
      return this.goles.filter(g => g.idParticipante == participante.id).length
    }
  }
}
</script>

<template>
  <div class="border rounded p-2 mb-2">
    <div class="d-md-flex d-inline justify-content-between">
      <div>
        <div class="text-muted">{{ fecha }}</div>
        <span class="fs-3 me-2">{{ local.nombre }}</span>
        <span class="fs-3 me-2">{{ golesLocal }} - {{ golesVisitante }}</span>
        <span class="fs-3 me-2">{{ visitante.nombre }}</span>
      </div>
      <div class="flex-column my-auto">
        <component  :is="partido.apostado ? 'Apostado' : 'Apuestas'"
                    :partido="partido"
                    :apostado="partido.apostado"
                    @establecerApuesta="$emit('establecerApuesta', $event)"
                    class="align-middle">
        </component>
      </div>
    </div>
  </div>
</template>
