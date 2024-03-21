import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'

import { loadIcons } from '@/shared/lib'

import { router } from './providers'

loadIcons()

export const app = createApp(App).use(createPinia()).use(router)
