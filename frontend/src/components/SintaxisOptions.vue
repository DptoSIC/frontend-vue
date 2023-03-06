<script>
export default {
  data() {
    return {
      count: 1,
      mensaje: "Hola mundo"
    }
  },

  // `mounted` is a lifecycle hook which we will explain later
  created() {
    const count = 3
    // `this` refers to the component instance.
    console.log(this.count) // => 1
    // data can be mutated as well
    this.count = 2
  }
}
</script>

<template>
  <div>
    Esto es el componente SintaxisOptions<br>
    Valor de count es {{ count }}<br>
    El mensaje es {{ mensaje }}<br>
    <button type="button" @click="count++">count is {{ count }}</button><br>
  </div>
</template>