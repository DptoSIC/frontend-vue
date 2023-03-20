<script>
import Participante from './Participante.vue'
// import participantesJson from '@/assets/participantes.json'
import { mapState } from 'pinia'
import { participantesStore } from '@/stores/participantes'

export default {
    components: { Participante },
    data() {
        return {
          // participantes: participantesJson._embedded.participantes
        }
    },
    computed: {
      ...mapState(participantesStore, [ 'participantes' ]),
      coloresTarjetas() {
        return [ 'amarillas', 'rojas' ]
      },
      golesTotales() {
        return this.participantes.reduce((p, c) => p + c.goles, 0)
      }
    },
    methods: {
      addTarjeta(color, participante) {
        participante.tarjetas[color + 's']++
      },
      tarjetasParticipante(participante) {
        return this.coloresTarjetas.reduce((p, c) => p + participante.tarjetas[c], 0)
      },
      tarjetasTotales(color) {
        return this.participantes.reduce((p, c) => p + c.tarjetas[color], 0) 
      }
    },
    // created() {
    //   this.participantes.forEach(p => {
    //                                     if (!p.goles) p.goles = 0
    //                                     if (!p.tarjetas) p.tarjetas = { amarillas: 0, rojas: 0 }
    //                                   })
    // }
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
                    @addGol="participante.goles++"
                    @addTarjeta="addTarjeta($event, participante)"/>
      <div v-if="participante.goles">Goles <font-awesome-icon icon="fa-solid fa-futbol" v-for="g in participante.goles" class="me-2"/></div>
      <div v-else>No tienes goles</div>
      <div v-if="tarjetasParticipante(participante)">Tarjetas <span v-for="color of coloresTarjetas">
                      <font-awesome-icon icon="fa-solid fa-square-full" v-for="t in participante.tarjetas[color]" class="me-2" :class="color"/></span>
      </div>
      <div v-else>No tienes tarjetas</div>
      <router-link :to="`/participante/${participante.id}`">Ver Participante</router-link>
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