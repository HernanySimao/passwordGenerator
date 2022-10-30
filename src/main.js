import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import copyText from "@meforma/vue-copy-to-clipboard"

createApp(App).use(store).use(router).use(copyText).mount('#app')
