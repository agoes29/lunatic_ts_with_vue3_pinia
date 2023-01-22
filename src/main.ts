import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from 'vue-query'

import App from './App.vue'
import VueCookies from 'vue3-cookies'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'


import './services/iconLibrary'
import '/node_modules/flag-icons/css/flag-icons.min.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/main.css'


const pinia = createPinia()
const app = createApp(App)

app.component('icon', FontAwesomeIcon)

app.use(VueCookies, {
  expireTimes: "1h",
  secure: true
})

app.use(pinia)
app.use(router)
app.use(VueQueryPlugin)

app.mount('#app')
