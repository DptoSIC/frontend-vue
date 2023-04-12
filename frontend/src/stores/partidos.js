import { defineStore } from 'pinia'
// import { participantesStore } from '@/stores/participantes'
import { getEntidades, llamadaApi } from './api-service'

export const partidosStore = defineStore('partidos', {
  state: () => ({
    partidos: []
  }),
  actions: {
    async getPartidos() {
      // const participanteStore = participantesStore()
      // await participanteStore.getParticipantes()
      this.partidos = (await getEntidades('partidos?sort=id,desc')).data._embedded.partidos
      this.partidos.forEach(p => {
                                    p.sucesos = []
                                    llamadaApi(p._links.sucesos.href.replace('http', 'https')).then(r => p.sucesos = r.data._embedded)
                                  })
    }
  }
})