import { defineStore } from 'pinia'
import partidosJson from '@/assets/partidos.json'
// import { dateToString } from '@/utils/utils'

const partidos = partidosJson._embedded.partidos
// partidos.forEach(p => p.fecha = dateToString(fecha))

export const partidosStore = defineStore('partidos', {
  state: () => ({
    partidos: partidos
  })
})