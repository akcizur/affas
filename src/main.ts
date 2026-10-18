import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App'
import router from './router'
import './assets/styles/tailwind.css'
import './assets/styles/main.scss'

createApp(App).use(createPinia()).use(router).mount('#app')
