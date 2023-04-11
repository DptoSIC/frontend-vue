import { defineStore } from 'pinia'
import { getParticipantes } from './api-service'

const participantes = []
await getParticipantes().then(r => participantes.push(...r.data._embedded.participantes))
participantes.forEach(p =>  {
                              p.goles = 0
                              p.tarjetas = { amarillas: 0, rojas: 0 }
                            })

export const participantesStore = defineStore('participantes', {
  state: () => ({
    participantes: participantes
  }),
  actions: {
    // async getParticipantes() {
    //   await getParticipantes().then(r => this.participantes = r.data._embedded.participantes)
    // },
    getParticipantePorId(id) {
      return this.participantes.find(p => p.id == id)
    }
  }
})