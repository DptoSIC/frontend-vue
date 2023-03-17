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
    <div class="d-inline me-2">{{ participante.nombre }} - <small class="text-muted">{{  participante.id }}</small></div>
    <span class="btn text-light badge bg-success me-2" @click="$emit('addGol')">Añadir gol</span>
    <span class="btn text-light badge bg-secondary" @click="addTarjeta">Añadir tarjeta</span>
  </div>
</template>
