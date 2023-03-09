<script>
export default {
  props: {
    nombreComponente: String,
    valor: Number
  },
  emits: [ 'clickNombre', 'clickValor' ],
  data() {
    return { }
  },
  computed: {
    esPar() {
      return this.valor % 2 == 0
    },
    paridad() {
      return this.esPar ? 'par' : 'impar'
    }
  },
  methods: {
    clickValor(evento) {
      // if (this.esPar) {
      if (evento.target.classList.contains('par')) {
        this.$emit('clickValor', this.valor, this.paridad, evento)
      }
    }
  }
}
</script>

<template>
  <div>
    Desde <code @click="$emit('clickNombre')">{{ nombreComponente }}</code>,
      valor es: <span @click="clickValor" :class="{ par: esPar, menorDeCinco: valor < 5 }">{{ valor }}</span> y es {{ paridad }}
  </div>
</template>

<style>
.par {
  color: green;
}

.menorDeCinco {
  font-weight: bold;
}
</style>