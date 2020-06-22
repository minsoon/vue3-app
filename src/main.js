import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
// import http from './plugins/http'
// import './plugins/vuetify'

// Vue.prototype.$http = http;
// const app = createApp(App)

createApp(App).use(router).mount('#app')
