import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

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

const app = createApp(App)

/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
