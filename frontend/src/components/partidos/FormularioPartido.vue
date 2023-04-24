<script>
import { mapActions, mapState } from 'pinia'
import { participantesStore } from '@/stores/participantes'
import Calendar from 'primevue/calendar'
import { clonarObjeto } from '@/utils/utils'

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
  props: [ 'partidos', 'partidoEditar' ],
  components: { Calendar },
  emits: [ 'guardarPartido'],
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
      if (!this.visitante) return this.participantes

      return this.participantes.filter(p => p.id != this.visitante.id)
    },
    participantesVisitante() {
      if (!this.local) return this.participantes

      return this.participantes.filter(p => p.id != this.local.id)
    },
    esEdicion() {
      return this.partidoEditar != undefined
    }
  },
  methods: {
    ...mapActions(participantesStore, [ 'getParticipantePorId' ]),
    partidosEnElDia(date) {
      const { day, month, year } = date

      return this.partidos.filter(p => {
                                          const fecha = new Date(p.timestamp)
                                          return fecha.getDate() == day && fecha.getMonth() == month && fecha.getFullYear() == year
                                        }).length
    }
  },
  watch: {
    partidoEditar(nuevo) {
      if (nuevo) {
        this.partido = clonarObjeto(nuevo)
      } else {
        this.partido = prePartido(this.participantes)
      }
      this.partido.fecha = new Date(this.partido.timestamp)
    },
    'partido.fecha'(nueva) {
      this.partido.timestamp = nueva.getTime()
    }
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
          <template #date="slotProps">
            <div :class="{ 'dia-con-partido': partidosEnElDia(slotProps.date) > 0 }" class="text-center">
              <div v-if="partidosEnElDia(slotProps.date)" class="numero-partidos">{{ partidosEnElDia(slotProps.date) }}
              </div>
              <div>{{ slotProps.date.day }}</div>
            </div>
          </template>
        </Calendar>
        
        <div class="input-group mb-3">
          <span class="input-group-text" id="local">Local</span>
          <select class="form-select" v-model="partido.idLocal" :disabled="esEdicion">
            <option v-for="participante of participantesLocal" :value="participante.id">{{ participante.nombre }}</option>
          </select>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="visitante">Visitante</span>
          <select class="form-select" v-model="partido.idVisitante" :disabled="esEdicion">
            <option v-for="participante of participantesVisitante" :value="participante.id">{{ participante.nombre }}</option>
          </select>
        </div>

        <div v-if="local && visitante">
          <span class="fs-3 me-2">{{ local.nombre }}</span>
          <span class="fs-3 me-2"> vs </span>
          <span class="fs-3 me-2">{{ visitante.nombre }}</span>
        </div>
        <div v-else>Elige a los participantes</div>
      </div>

      <button type="button" class="btn btn-success" @click="$emit('guardarPartido', partido)">
        {{ esEdicion ? 'Actualizar' : 'Guardar' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.dia-con-partido {
  background-color: crimson;
  color: var(--bs-white);
  font-weight: bolder;
  height: 100%;
  width: 100%;
}

.numero-partidos {
  font-size: 0.6rem;
  background-color: var(--bs-white);
  color: crimson;
  border-radius: 50%;
}
</style>