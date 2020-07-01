import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import http from './http'
import moment from 'moment'
import mitt from 'mitt'

const app = createApp(App)

app.use(router)

app.config.globalProperties.$http = http
app.config.globalProperties.$moment = moment
app.config.globalProperties.$mitt = mitt()

app.mixin({
    beforeCreate() {
    }
})

router.isReady().then(() => app.mount('#app'))

