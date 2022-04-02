import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from '/@/router'
import App from './App.vue'
import '/@/styles/index.scss'

import './permission.js' // 路由重写

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
