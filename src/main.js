import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './plugins/vant.js'
import './assets/css/base.css'
import './assets/font/iconfont.css'

Vue.config.productionTip = false
axios.defaults.baseURL = "http://localhost:3000/api"
Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
