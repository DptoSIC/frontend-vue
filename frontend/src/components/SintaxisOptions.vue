<script>
import ElementoLista from './ElementoLista.vue'
import ElementoListaValor from './ElementoListaValor.vue'

export default {
  components: {
    ElementoLista,
    ElementoListaValor
  },
  data() {
    return {
      count: 1,
      mensaje: "Hola mundo",
      objeto: undefined,
      array: [ { valor: 3 }, { valor: 2 } ],
      participantes: [
                      {
                        "nombre" : "Barcelona",
                        "id" : "FCBARC(ESP)"
                      }, {
                        "nombre" : "Real Madrid",
                        "id" : "RMADRI(ESP)"
                      }, {
                        "nombre" : "Málaga",
                        "id" : "MALAGA(ESP)"
                      }, {
                        "nombre" : "Eibar",
                        "id" : "EIBAR(ESP)"
                      }, {
                        "nombre" : "Alavés",
                        "id" : "ALAVES(ESP)"
                      }, {
                        "nombre" : "Valencia",
                        "id" : "VALENC(ESP)"
                      }, {
                        "nombre" : "Las Palmas",
                        "id" : "LASPAL(ESP)"
                      }, {
                        "nombre" : "Real Sociedad",
                        "id" : "RSOCIE(ESP)"
                      }, {
                        "nombre" : "Girona",
                        "id" : "GIRONA(ESP)"
                      }, {
                        "nombre" : "Atlético de Madrid",
                        "id" : "ATLMAD(ESP)"
                      }, {
                        "nombre" : "Sevilla",
                        "id" : "SEVILA(ESP)"
                      }, {
                        "nombre" : "Cádiz",
                        "id" : "CADIZ(ESP)"
                      }, {
                        "nombre" : "Gimnastic",
                        "id" : "NASTIC(ESP)"
                      }, {
                        "nombre" : "Huesca",
                        "id" : "HUESCA(ESP)"
                      }, {
                        "nombre" : "Sevilla Atlético",
                        "id" : "SEVATL(ESP)"
                      }, {
                        "nombre" : "Barcelona B",
                        "id" : "BARCAB(ESP)"
                      }, {
                        "nombre" : "Córdoba",
                        "id" : "CORDOB(ESP)"
                      }, {
                        "nombre" : "Sporting",
                        "id" : "SPGIJO(ESP)"
                      }, {
                        "nombre" : "Oviedo",
                        "id" : "OVIEDO(ESP)"
                      }, {
                        "nombre" : "Almería",
                        "id" : "ALMERI(ESP)"
                      }
                    ]
    }
  },
  computed: {
    suma() {
      console.log('Ejecuto suma por nuevo valor', this.array[1])
      return this.array.reduce((p, c) => p + c.valor, 0)
    },
    esParSuma() {
      return this.esPar(this.suma)
    },
    paridadSuma() {
      return this.paridad(this.suma)
    }
  },
  methods: {
    esPar(numero) {
      return numero % 2 == 0
    },
    paridad(numero) {
      // console.log('Ejecutando metodo paridad con número ' + numero)
      return this.esPar(numero) ? 'par' : 'impar'
    },
    elementoClickeado(elemento, paridad, evento) {
      console.log(elemento, paridad, evento)
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
      <!-- <button type="button" @click="array[1].valor++" :disabled="!esPar(array[1].valor)">count is {{ suma }}</button><br> -->
      <button type="button" @click="array[1].valor++">count is {{ suma }}</button><br>
      La suma es {{ suma }}
    </div>
    
    <div>
      Ejemplo v-if: 
      <!-- VARIAS FORMAS DE HACER LO MISMO. SE COMENTAN LAS PEORES POR SER MENOS LEGIBLES -->
      <!-- Suma {{ suma }} es <span v-if="suma % 2 == 0">par</span><span v-else>impar</span> -->
      Suma {{ suma }} es {{ paridadSuma }}
      <!-- Suma {{ suma }} es <span v-show="suma % 2 != 0">im</span>par -->
    </div>

    <div>
      Ejemplo v-for
      <!--

        EJEMPLO DE v-for USADO DIRECTAMENTE CON ETIQUETA

      <div v-for="elemento of array">
        Su valor es: {{ elemento.valor }} y es {{ paridad(elemento.valor) }}
      </div> -->

      <!-- 
        EJEMPLO DE v-for CON UN COMPONENTE CON PROPIEDAD elemento
      -->
      <!-- <ElementoLista v-for="elemento of array" :elemento="elemento" /> -->
      <ElementoListaValor v-for="elemento of array" :valor="elemento.valor" nombreComponente="ElementoListaValor"
                          @clickNombre.once="elementoClickeado('Hecho click en nombre')"
                          @clickValor="elementoClickeado"/>
                          <!-- @click="elementoClickeado('Click en ' + elemento.valor)"/> -->

      <ol>
        <li v-for="participante of participantes">{{ participante.nombre }}</li>
      </ol>
    </div>
  </div>
</template>