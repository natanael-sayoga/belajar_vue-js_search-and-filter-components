import { createApp } from 'vue'
import MyApp from './MyApp.vue'
import { router } from '../src/router/'
import { createPinia } from 'pinia'

const myApp = createApp(MyApp)
myApp.use(router)
myApp.use(createPinia())
myApp.mount("#myapp")