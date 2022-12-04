import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from 'vue-query'

import App from './App.vue'
import VueCookies from 'vue3-cookies'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'


// import './assets/vendor/fontawesome/css/all.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown, faSun, faMoon, faBars, faGauge, faLayerGroup, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import './assets/main.css'

library.add(faChevronDown, faSun, faMoon, faBars, faGauge, faLayerGroup, faShieldHalved)

const app = createApp(App)

app.component('font-icon', FontAwesomeIcon)

app.use(VueCookies, {
  expireTimes: "1h",
  secure: true
})

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin)

app.mount('#app')
