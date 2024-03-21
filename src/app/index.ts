import { createPinia } from 'pinia'
import type { Component } from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'

import { router } from './providers'

export const app = createApp(App as Component).use(createPinia()).use(router)
