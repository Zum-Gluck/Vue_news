import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import './plugins/vant.js'
import './assets/css/base.css'
import './assets/font/iconfont.css'

Vue.prototype.$Bus = new Vue()

Vue.config.productionTip = false
axios.defaults.baseURL = "http://localhost:3000/api"
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
