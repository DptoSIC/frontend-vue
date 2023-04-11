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
  <div>
    <div>{{ fecha }}</div>
    <span class="fs-3 me-2">{{ local.nombre }}</span>
    <span class="fs-3 me-2">{{ golesLocal }} - {{ golesVisitante }}</span>
    <span class="fs-3 me-2">{{ visitante.nombre }}</span>

    <component  :is="partido.apostado ? 'Apostado' : 'Apuestas'"
                :partido="partido"
                @establecerApuesta="$emit('establecerApuesta', $event)"></component>

    <!-- <Apuestas v-if="!partido.apostado" :partido="partido"
              @establecerApuesta="$emit('establecerApuesta', $event)"></Apuestas>
    <div v-else>Apostado {{partido.apostado.cantidad }}€ por {{ partido.apostado.mercado }} 
                en {{ partido.idLocal }} vs {{ partido.idVisitante }} 
                con cuota {{ partido.apostado.cuotaString }}</div> -->
  </div>
</template>
