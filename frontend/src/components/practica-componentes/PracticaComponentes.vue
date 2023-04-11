<script>
import Participante from './Participante.vue'
import { mapState } from 'pinia'
import { participantesStore } from '@/stores/participantes'

export default {
    components: { Participante },
    computed: {
      ...mapState(participantesStore, { todosLosParticipantes: 'participantes' }),
      participantes() {
        return this.todosLosParticipantes.slice(0, 20)
      },
      coloresTarjetas() {
        return [ 'amarillas', 'rojas' ]
      },
      golesTotales() {
        return this.participantes.reduce((p, c) => p + (c.goles ?? 0), 0)
      }
    },
    methods: {
      addTarjeta(color, participante) {
        if (!participante.tarjetas) {
          participante.tarjetas = {}
        }
        if (!this.cantidadTarjetas(participante, color + 's') > 0) {
          participante.tarjetas[color + 's'] = 0
        }
        participante.tarjetas[color + 's']++
      },
      cantidadTarjetas(participante, colorEnPlural) {
        return participante.tarjetas ? (participante.tarjetas[colorEnPlural] ? participante.tarjetas[colorEnPlural] : 0) : 0
      },
      tarjetasParticipante(participante) {
        return this.coloresTarjetas.reduce((p, c) => p + this.cantidadTarjetas(participante, c), 0)
      },
      tarjetasTotales(color) {
        return this.participantes.reduce((p, c) => p + this.cantidadTarjetas(c, color), 0) 
      }
    }
}
</script>

<template>
  <div>
    <div class="alert alert-warning">
      <h2>Resultados totales</h2>
      <p>Goles totales {{ golesTotales }}</p>
      <p v-for="color of coloresTarjetas">
        Tarjetas {{ color }} totales {{ tarjetasTotales(color) }}
      </p>
    </div>

    <h2>Resultados por participantes</h2>
    <div v-if="participantes" v-for="participante of participantes">
      <Participante :participante="participante"
                    @addGol="participante.goles ? participante.goles++ : participante.goles = 1"
                    @addTarjeta="addTarjeta($event, participante)"/>
      <div v-if="participante.goles">Goles <font-awesome-icon icon="fa-solid fa-futbol" v-for="g in participante.goles" class="me-2"/></div>
      <div v-else>No tienes goles</div>
      <div v-if="tarjetasParticipante(participante)">Tarjetas <span v-for="color of coloresTarjetas">
                      <font-awesome-icon icon="fa-solid fa-square-full" v-for="t in participante.tarjetas[color]" class="me-2" :class="color"/></span>
      </div>
      <div v-else>No tienes tarjetas</div>
      <router-link :to="{ name: 'participante', params: { identificador: participante.id }}">Ver Participante</router-link>
      <hr>
    </div>
  </div>
</template>

<style scoped>
.amarillas {
  color: yellow;
}

.rojas {
  color: red;
}

.amarillas, .rojas {
  border: 1px solid black;
}
</style>