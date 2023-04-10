<script>
export default {
  props: [ 'partido' ]
}
</script>

<template>
  <div>
    Apostado {{ partido.apostado.cantidad }}€ por {{ partido.apostado.mercado }} 
    en {{ partido.idLocal }} vs {{ partido.idVisitante }} 
    con cuota {{ partido.apostado.cuotaString }}
  </div>
</template>