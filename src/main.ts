import { createApp } from 'vue'
import stores from './stores'
import router from './router'
import i18n from './i18n'
import { createVuestic } from 'vuestic-ui'
import vuesticGlobalConfig from './services/vuestic-ui/global-config'
import { createGtm } from '@gtm-support/vue-gtm'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as echarts from 'echarts'


const app = createApp(App)

app.use(stores)
app.use(router)
app.use(i18n)
app.use(createVuestic({ config: vuesticGlobalConfig }))

if (import.meta.env.VITE_APP_GTM_ENABLED) {
  app.use(
    createGtm({
      id: import.meta.env.VITE_APP_GTM_KEY,
      debug: false,
      vueRouter: router,
    }),
  )
}
app.use(ElementPlus)
app.mount('#app')
