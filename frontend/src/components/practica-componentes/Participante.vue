<script>
export default {
  props: {
    participante: { id: String, nombre: String }
  },
  emits: [ 'addGol', 'addTarjeta' ],
  methods: {
    addTarjeta() {
      this.$emit('addTarjeta', Math.random() > .5 ? 'amarilla' : 'roja')
    }
  }
}
</script>

<template>
  <div>
    <div>{{ participante.nombre }} - ({{  participante.id }})</div>
    <span @click="$emit('addGol')">Añadir gol</span> <span @click="addTarjeta">Añadir tarjeta</span>
  </div>
</template>
