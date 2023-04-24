import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Home from '@/components/practica-componentes/PracticaComponentes.vue'
import ListadoPartidos from '@/components/partidos/ListadoPartidos.vue'
import ListadoPartidosSimple from '@/components/partidos/ListadoPartidosSimple.vue'
import About from '@/components/practica-rounting/About.vue'
import NestedRoute from '@/components/practica-rounting/NestedRoute.vue'
// import ParticipanteInfo from '@/components/practica-rounting/ParticipanteInfo.vue'
import NotFound from '@/components/practica-rounting/NotFound.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

import { createPinia } from 'pinia'

import 'primevue/resources/themes/saga-blue/theme.css'  //theme
import 'primevue/resources/primevue.min.css'            //core css
import 'primeicons/primeicons.css'                      //icons
import PrimeVue from 'primevue/config'

// Import our custom CSS
import './scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFutbol, faSquareFull, faPen, faTrash, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faFutbol, faSquareFull, faPen, faTrash, faPlusCircle)

const pinia = createPinia()

const ParticipanteInfo = () => import('@/components/practica-rounting/ParticipanteInfo.vue')

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/partidos', component: ListadoPartidos, name: 'partidos' },
  { path: '/partidos-simple', component: ListadoPartidosSimple, name: 'partidos-simple' },
  { path: '/about', component: About, name: 'about' },
  { path: '/participante/:identificador', component: ParticipanteInfo, name: 'participante' },
  {
    path: '/nested',
    component: NestedRoute,
    children: [
      { path: 'home', component: Home, name: 'nested-home' },
      { path: 'partidos', component: ListadoPartidos, name: 'nested-partidos' },
      { path: 'about', component: About, name: 'nested-about' },
    ],
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

import { authStore } from '@/stores/auth'
router.beforeEach(async (to, from) => {
  const auth = authStore()
  if (!auth.esAdmin && to.name !== 'about') {
    return { name: 'about' }
  }
})

const app = createApp(App)

app.use(pinia)

app.use(router)

app.use(PrimeVue)

/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
