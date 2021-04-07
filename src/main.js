import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import makeRoutes from './routes'
import {store} from './store/store'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = makeRoutes(store)

const router = new VueRouter({
  routes,
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
