import { defineStore } from 'pinia'

const casasDeApuestas = [ 'Bet365', 'W.Hill', 'BetWin', 'Codere', 'BetFlair' ]

export const apuestasStore = defineStore('apuestas', {
  state: () => ({
  }),
  actions: {
    getApuestas(partido, mercado) {
      const apuestas = []
      casasDeApuestas.forEach(c => apuestas.push({ casa: c, evento: partido, mercado, cuota: Math.random() * 9 + 3}))

      return apuestas.sort((a, b) => b.cuota - a.cuota).splice(0, 3)
    }
  }
})