import { createApp } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './style.css'
import '@/styles/index.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import useStore from '@/store'

// ****** ↓↓↓ 路由 ↓↓↓ ******
import router from '@/router'
const pinia = createPinia()
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(pinia)

app.config.globalProperties.$store = useStore()
app.use(router)
app.mount('#app')
