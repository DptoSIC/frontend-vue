import { defineStore } from 'pinia'
// import { participantesStore } from '@/stores/participantes'
import { getEntidades } from './api-service'
import { sucesos } from '@/assets/sucesos'

export const partidosStore = defineStore('partidos', {
  state: () => ({
    partidos: []
  }),
  actions: {
    async getPartidos() {
      // const participanteStore = participantesStore()
      // await participanteStore.getParticipantes()
      this.partidos = (await getEntidades('partidos')).data._embedded.partidos
      this.partidos.forEach(p => p.sucesos = sucesos(p.idLocal, p.idVisitante)._embedded)
    }
  }
})