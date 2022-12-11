import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from 'vue-query'

import App from './App.vue'
import VueCookies from 'vue3-cookies'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'


import './services/iconLibrary'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/main.css'

const pinia = createPinia()
const app = createApp(App)

app.component('font-icon', FontAwesomeIcon)

app.use(VueCookies, {
  expireTimes: "1h",
  secure: true
})

app.use(pinia)
app.use(router)
app.use(VueQueryPlugin)

app.mount('#app')
