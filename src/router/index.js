import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home/Home.vue'
import Info from 'views/Info/Info.vue'
import Channel from 'views/Channel/Channel.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/info', name: 'info', component: Info },
  { path: '/channel', component: Channel }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
