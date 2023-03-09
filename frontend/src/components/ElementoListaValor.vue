<script>
export default {
  props: [ 'valor' ],
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
    Desde <code>ElementoListaValor</code>, valor es: {{ valor }} y es {{ paridad }}
  </div>
</template>
