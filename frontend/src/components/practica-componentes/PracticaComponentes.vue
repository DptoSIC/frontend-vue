<script>
import Participante from './Participante.vue'
import participantesJson from '@/assets/participantes.json'

export default {
    props: {
        participante: { id: String, nombre: String }
    },
    components: { Participante },
    data() {
        return {
          participantes: participantesJson._embedded.participantes
        }
    },
    computed: {
      golesTotales() {
        return this.participantes.reduce((p, c) => p + c.goles, 0)
      }
    },
    methods: {
      addTarjeta(color, participante) {
        participante.tarjetas[color + 's']++
      },
      tarjetasTotales(color) {
        return this.participantes.reduce((p, c) => p + c.tarjetas[color], 0) 
      }
    },
    created() {
      this.participantes.forEach(p => {
                                        p.goles = 0
                                        p.tarjetas = { amarillas: 0, rojas: 0 }
                                      })
    }
}
</script>

<template>
  <div class="alert alert-warning">
    <h2>Resultados totales</h2>
    <p>Goles totales {{ golesTotales }}</p>
    <p v-for="color of [ 'amarillas', 'rojas' ]">
      Tarjetas {{ color }} totales {{ tarjetasTotales(color) }}
    </p>
  </div>

  <h2>Resultados por participantes</h2>
  <div v-if="participantes" v-for="participante of participantes">
    <Participante :participante="participante"
                  @addGol="participante.goles++"
                  @addTarjeta="addTarjeta($event, participante)"/>
    <div>Goles <font-awesome-icon icon="fa-solid fa-futbol" v-for="g in participante.goles" class="me-2"/></div>
    <div>Tarjetas <span v-for="color of [ 'amarillas', 'rojas' ]">
                    <font-awesome-icon icon="fa-solid fa-square-full" v-for="t in participante.tarjetas[color]" class="me-2" :class="color"/></span>
    </div>
    <hr>
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