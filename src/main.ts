import { createApp } from 'vue'
import { router } from '/@/router'
import App from './App.vue'
import '/@/styles/index.scss'

const vm = createApp(App)
vm.use(router)
vm.mount('#app')
