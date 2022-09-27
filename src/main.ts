import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from 'vue-query'

import App from './App.vue'
import VueCookies from 'vue3-cookies'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import './assets/main.css'

const app = createApp(App)

app.use(VueCookies, {
  expireTimes: "1h",
  secure: true
})

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin)

app.mount('#app')
