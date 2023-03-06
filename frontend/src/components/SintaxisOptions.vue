<script>
export default {
  data() {
    return {
      count: 1,
      mensaje: "Hola mundo",
      objeto: undefined,
      array: [ { valor: 3 }, { valor: 2 } ]
    }
  },
  computed: {
    suma() {
      console.log('Ejecuto suma por nuevo valor', this.array[1])
      return this.array.reduce((p, c) => p + c.valor, 0)
    },
    esPar() {
      return this.suma % 2 == 0
    },
    paridad() {
      return this.esPar ? 'par' : 'impar'
    }
  },

  // `mounted` is a lifecycle hook which we will explain later
  created() {
    const count = 3
    // `this` refers to the component instance.
    console.log(this.count) // => 1
    // data can be mutated as well
    this.count = 2

    const objetoNuevo = { valor: 5 }
    this.objeto = objetoNuevo
    console.log("this.objeto es: ", this.objeto)
    console.log("objetoNuevo es: ", objetoNuevo)
    console.log("suma es: ", this.suma)
  }
}
</script>

<template>
  <div>
    <div>
      Esto es el componente SintaxisOptions<br>
      Valor de count es {{ count }}<br>
      El mensaje es {{ mensaje }}<br>
      <button type="button" @click="array[1].valor++">count is {{ suma }}</button><br>
      La suma es {{ suma }}
    </div>
    
    <div>
      Ejemplo v-if: 
      <!-- VARIAS FORMAS DE HACER LO MISMO. SE COMENTAN LAS PEORES POR SER MENOS LEGIBLES -->
      <!-- Suma {{ suma }} es <span v-if="suma % 2 == 0">par</span><span v-else>impar</span> -->
      Suma {{ suma }} es {{ paridad }}
      <!-- Suma {{ suma }} es <span v-show="suma % 2 != 0">im</span>par -->
    </div>
  </div>
</template>