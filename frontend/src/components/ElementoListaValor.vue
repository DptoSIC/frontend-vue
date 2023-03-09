<script>
export default {
  props: {
    nombreComponente: String,
    valor: Number
  },
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
  }
}
</script>

<template>
  <div>
    Desde <code>{{ nombreComponente }}</code>, valor es: {{ valor }} y es {{ paridad }}
  </div>
</template>
