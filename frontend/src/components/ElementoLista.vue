<script>
export default {
  props: [ 'elemento' ],
  data() {
    return { }
  },
  computed: {
    valor() {
      return this.elemento.valor
    },
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
    Desde <code>ElementoLista</code>, valor es: {{ valor }} y es {{ paridad }}
  </div>
</template>