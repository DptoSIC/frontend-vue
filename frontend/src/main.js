import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Home from '@/components/practica-componentes/PracticaComponentes.vue'
import About from '@/components/practica-rounting/About.vue'
import ParticipanteInfo from '@/components/practica-rounting/ParticipanteInfo.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

// Import our custom CSS
import './scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFutbol, faSquareFull } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faFutbol, faSquareFull)

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/participante/:id', component: ParticipanteInfo },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)

app.use(router)

/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
