import { createApp } from 'vue'

import App from './App.vue'
import installElementPlus from './plugins/element'
import installVueRoute from './plugins/route'
const app = createApp(App)
installElementPlus(app)
installVueRoute(app)
app.mount('#app')
