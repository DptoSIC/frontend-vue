<script>
export default {
  props: [ 'apostado' ]
}
</script>

<template>
  <span class="fs-5 text-success fst-italic">
    Apostado {{ apostado.cantidad }}€ a {{ apostado.mercado }} con cuota {{ apostado.cuotaString }} en {{ apostado.casa }}
  </span>
</template>