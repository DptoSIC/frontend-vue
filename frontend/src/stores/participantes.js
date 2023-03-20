import { defineStore } from 'pinia'
import participantesJson from '@/assets/participantes.json'

const participantes = participantesJson._embedded.participantes
participantes.forEach(p =>  {
                              p.goles = 0
                              p.tarjetas = { amarillas: 0, rojas: 0 }
                            })

export const participantesStore = defineStore('participantes', {
  state: () => ({
    participantes: participantes
  }),
})