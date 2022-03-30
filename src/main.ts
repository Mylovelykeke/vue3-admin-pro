import { createApp } from 'vue'
import { store, key } from '/@/store'
import { router } from '/@/router'
import App from './App.vue'
import '/@/styles/index.scss'

import './permission.js'  // 路由重写

const vm = createApp(App)
vm.use(store, key)
vm.use(router)
vm.mount('#app')

