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
  }
}
</script>

<template>
  <div>
      Esto es el componente SintaxisOptions<br>
      Valor de count es {{ count }}<br>
      El mensaje es {{ mensaje }}<br>
      <button type="button" @click="objeto.valor++">count is {{ objeto.valor }}</button><br>
  </div>
</template>