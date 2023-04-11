import { defineStore } from 'pinia'
import { getParticipantes } from './api-service'

export const participantesStore = defineStore('participantes', {
  state: () => ({
    participantes: []
  }),
  actions: {
    async getParticipantes() {
      await getParticipantes().then(r => this.participantes.push(...r.data._embedded.participantes))
      this.participantes.forEach(p =>  {
                                    p.goles = 0
                                    p.tarjetas = { amarillas: 0, rojas: 0 }
                                  })
    },
    getParticipantePorId(id) {
      return this.participantes.find(p => p.id == id)
    }
  }
})