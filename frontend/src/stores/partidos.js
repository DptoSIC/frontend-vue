import { defineStore } from 'pinia'
import partidosJson from '@/assets/partidos.json'
import { sucesos } from '@/assets/sucesos'
// import { dateToString } from '@/utils/utils'

const partidos = partidosJson._embedded.partidos
partidos.forEach(p => {
                        // p.fecha = dateToString(fecha)
                        p.sucesos = sucesos(p.idLocal, p.idVisitante)._embedded
                      })

export const partidosStore = defineStore('partidos', {
  state: () => ({
    partidos: partidos
  })
})