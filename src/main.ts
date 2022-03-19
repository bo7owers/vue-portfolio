import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Menubar from 'primevue/menubar'

import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css' //icons'
import './assets/sass/css/styles.css' //custom styles

const app = createApp(App)
app.use(router)
app.use(PrimeVue)
app.component('Menubar', Menubar)
app.mount('#app')
