<script>
import { mapState, mapActions } from 'pinia'
import { partidosStore } from '@/stores/partidos'
import { participantesStore } from '@/stores/participantes'
import Partido from './Partido.vue'
import { Modal } from '~bootstrap'
import FormularioPartido from './FormularioPartido.vue'
import { guardarPartido, actualizarPartido, borrarEntidad } from '@/stores/api-service'
import { dateToString } from '@/utils/utils'

export default {
  components: { Partido, FormularioPartido },
  data() {
    return {
      apuesta: undefined,
      partidoEditar: undefined
    }
  },
  computed: {
    ...mapState(partidosStore, [ 'partidos' ]),
    ...mapState(participantesStore, [ 'participantes' ])
  },
  methods: {
    ...mapActions(partidosStore, [ 'getPartidos' ]),
    dateToString,
    guardarPartido(partido) {
      if (this.partidoEditar) {
        console.log('Actualizar partido', partido)
        actualizarPartido(partido, local, visitante).then(r => {
                                                if (r.status == 200) {
                                                  this.partidos.splice(this.partidos.indexOf(this.partidoEditar), 1, r.data)
                                                  this.partidoEditar = undefined
                                                  Modal.getOrCreateInstance('#editarPartido').hide()
                                                }
                                              })
      } else {
        guardarPartido(partido).then(r => {
                                            if (r.status == 201) {
                                              this.partidos.unshift(r.data)
                                              Modal.getOrCreateInstance('#editarPartido').hide()
                                            }
                                          })
      }
    },
    borrarPartido(partido) {
      borrarEntidad(partido).then(r => {
                                          if (r.status == 204) {
                                            this.partidos.splice(this.partidos.indexOf(partido), 1)
                                          }
                                        })
    },
    editarPartido(partido) {
      this.partidoEditar = partido
      Modal.getOrCreateInstance('#editarPartido').show()
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
      <div><button type="button" class="btn btn-outline-success mb-2" @click="editarPartido(undefined)"><font-awesome-icon icon="fa-solid fa-circle-plus" class="me-2"/>Añadir partido</button></div>
      <div v-for="partido of partidos" :partido="partido"
              class="border-top p-2">
              <div class="opciones d-inline me-2">
                <button type="button" class="btn btn-light me-1" @click="editarPartido(partido)"><font-awesome-icon icon="fa-solid fa-pen"/></button>
                <button type="button" class="btn btn-light" @click="borrarPartido(partido)"><font-awesome-icon icon="fa-solid fa-trash"/></button>
              </div>
              {{ partido.idLocal }} vs {{ partido.idVisitante }}
              <small class="text-muted">{{ dateToString(new Date(partido.timestamp)) }}</small>
      </div>
    </div>
    <div v-else>Cargando datos...</div>

    <!-- Modal -->
    <div class="modal fade" id="editarPartido" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Editar partido</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <FormularioPartido class="border rounded p-2 mb-2"
                         :partidoEditar="partidoEditar"
                         :partidos="partidos"
                         @guardarPartido="guardarPartido" ></FormularioPartido>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
:global(.p-datepicker) {
  z-index: 1200 !important;
}
</style>