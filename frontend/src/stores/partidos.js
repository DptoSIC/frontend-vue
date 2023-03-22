import { defineStore } from 'pinia'
import partidosJson from '@/assets/partidos.json'

const partidos = partidosJson._embedded.partidos

export const partidosStore = defineStore('partidos', {
  state: () => ({
    partidos: partidos
  })
})