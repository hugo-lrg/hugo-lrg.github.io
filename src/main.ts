import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { createBootstrap } from 'bootstrap-vue-next'

// Importe le CSS de Bootstrap (si tu ne le fais pas déjà dans tes assets)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap/dist/css/bootstrap.min.css' // Importe le CSS de Bootstrap
import 'simple-icons-font/font/simple-icons.css'
import '../src/assets/css/style.scss'



import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(createBootstrap())
app.use(router)

app.mount('#app')
