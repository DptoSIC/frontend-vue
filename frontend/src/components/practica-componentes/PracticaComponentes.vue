<script>
import Participante from './Participante.vue'
import participantesJson from '/src/assets/participantes.json'

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
    methods: {
      addTarjeta(color, participante) {
        participante.tarjetas[color + 's']++
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
  <div v-if="participantes" v-for="participante of participantes">
    <Participante :participante="participante"
                  @addGol="participante.goles++"
                  @addTarjeta="addTarjeta($event, participante)"/>
    <div>Goles {{ participante.goles }}</div>
    <div>Tarjetas {{ participante.tarjetas }}</div>
    <hr>
  </div>
</template>
