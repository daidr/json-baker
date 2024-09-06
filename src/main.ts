import '@unocss/reset/tailwind.css'
import './assets/main.css'
import 'virtual:uno.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { loader } from '@guolao/vue-monaco-editor'
import App from './App.vue'

loader.config({
  'paths': {
    vs: 'https://cdn.jsdmirror.com/npm/monaco-editor@0.51.0/min/vs',
  },
  'vs/nls': { availableLanguages: { '*': 'zh-cn' } },
})

const i18n = createI18n({
  locale: 'en',
  messages,
})

const app = createApp(App)

app.use(i18n)
app.use(createPinia())

app.mount('#app')
