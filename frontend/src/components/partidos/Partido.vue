<script>
export default {
  props: [ 'partido' ],
  computed: {
    local() {
      return this.partido.idLocal
    },
    visitante() {
      return this.partido.idVisitante
    },
  }
}
</script>

<template>
  <div>
    <span>{{ local }}</span>
    <span>{{ visitante }}</span>
  </div>
</template>
