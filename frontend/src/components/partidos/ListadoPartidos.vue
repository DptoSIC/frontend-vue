<script>
import { mapState, mapActions } from 'pinia'
import { partidosStore } from '@/stores/partidos'
import { participantesStore } from '@/stores/participantes'
import Partido from './Partido.vue'
import { Modal } from '~bootstrap'
import { nextTick } from 'vue'
import FormularioPartido from './FormularioPartido.vue'
import { guardarPartido, borrarEntidad } from '@/stores/api-service'

export default {
  components: { Partido, FormularioPartido },
  data() {
    return {
      apuesta: undefined
    }
  },
  computed: {
    ...mapState(partidosStore, [ 'partidos' ]),
    ...mapState(participantesStore, [ 'participantes' ])
  },
  methods: {
    ...mapActions(partidosStore, [ 'getPartidos' ]),
    async apuestaPor(apuesta) {
      this.apuesta = apuesta
      await nextTick()
      Modal.getOrCreateInstance('#apuesta').show()
    },
    apostado(apuesta) {
      const { casa, cantidad, cuota, cuotaString, mercado } = apuesta
      apuesta.evento.apostado = { casa, cantidad, cuota, cuotaString, mercado }
      this.apuesta = undefined
    },
    guardarPartido(partido) {
      guardarPartido(partido).then(r => {
                                          if (r.status == 201) {
                                            r.data.sucesos = []
                                            this.partidos.unshift(r.data)
                                          }
                                        })
    },
    borrarPartido(partido) {
      borrarEntidad(partido).then(r => {
                                          if (r.status == 204) {
                                            this.partidos.splice(this.partidos.indexOf(partido), 1)
                                          }
                                        })
    }
  },
  created() {
    this.getPartidos()
  }
}
</script>

<template>
  <div>
    <h2>Partidos para apostar por EMPATES</h2>

    <div v-if="participantes.length">
      <FormularioPartido class="border rounded p-2 mb-2" @guardarPartido="guardarPartido"></FormularioPartido>

      <Partido v-for="partido of partidos" :partido="partido"
              class="border rounded p-2 mb-2"
              @establecerApuesta="apuestaPor"
              @borrarPartido="borrarPartido"></Partido>
    </div>
    <div v-else>Cargando datos...</div>

    <!-- Modal -->
    <div v-if="apuesta" class="modal fade" id="apuesta" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Establecer Apuesta</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div v-if="apuesta" class="mb-3">
              <p>
                <span class="fw-bold">Casa:</span> {{ apuesta.casa }}<br>
                <span class="fw-bold">Mercado:</span> {{ apuesta.mercado }}<br>
                <span class="fw-bold">Partido:</span> {{ apuesta.evento.idLocal }} vs {{ apuesta.evento.idVisitante }}<br>
                <span class="fw-bold">Cuota:</span> {{ apuesta.cuotaString }}
              </p>
              <label for="exampleFormControlInput1" class="form-label">Cantidad (€):</label>
              <input type="number" class="form-control w-90" id="exampleFormControlInput1" v-model="apuesta.cantidad">
            </div>
            <div v-show="!apuesta">No hay apuesta seleccionada.</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                    @click="apostado(apuesta)">Apostar</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
