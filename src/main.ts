import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(createVuetify())
app.mount('#app')
