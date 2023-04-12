<script>
import { mapActions, mapState } from 'pinia'
import { participantesStore } from '@/stores/participantes'
import Calendar from 'primevue/calendar'

function participanteRandom(participantes) {
  return participantes[Math.floor(Math.random() * participantes.length)]
}

function prePartido(participantes) {
  const local = participanteRandom(participantes)
  let visitante = participanteRandom(participantes)
  while (local == visitante) {
    visitante = participanteRandom(participantes)
  }

  return { idLocal: local.id, idVisitante: visitante.id, timestamp: new Date().getTime() }
}

export default {
  components: { Calendar },
  data() {
    return {
      partido: undefined
    }
  },
  computed: {
    ...mapState(participantesStore, [ 'participantes']),
    local() {
      return this.getParticipantePorId(this.partido.idLocal)
    },
    visitante() {
      return this.getParticipantePorId(this.partido.idVisitante)
    },
    participantesLocal() {
      return this.participantes.filter(p => p.id != this.visitante.id)
    },
    participantesVisitante() {
      return this.participantes.filter(p => p.id != this.local.id)
    }
  },
  methods: {
    ...mapActions(participantesStore, [ 'getParticipantePorId' ]),
  },
  created() {
    this.partido = this.partidoEditar ?? prePartido(this.participantes)
    this.partido.fecha = new Date(this.partido.timestamp)
  }
}
</script>

<template>
  <div>
    <div>
      <div>
        <Calendar v-model="partido.fecha" dateFormat="dd MM yy" class="mb-3">
        </Calendar>
        
        <div class="input-group mb-3">
          <span class="input-group-text" id="local">Local</span>
          <select class="form-select" v-model="partido.idLocal">
            <option v-for="participante of participantesLocal" :value="participante.id">{{ participante.nombre }}</option>
          </select>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="visitante">Visitante</span>
          <select class="form-select" v-model="partido.idVisitante">
            <option v-for="participante of participantesVisitante" :value="participante.id">{{ participante.nombre }}</option>
          </select>
        </div>

        <span class="fs-3 me-2">{{ local.nombre }}</span>
        <span class="fs-3 me-2"> vs </span>
        <span class="fs-3 me-2">{{ visitante.nombre }}</span>
      </div>
     </div>
  </div>
</template>
