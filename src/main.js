import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {firestorePlugin} from 'vuefire'

import routes from './routes/routes'

Vue.use(VueRouter)
Vue.use(firestorePlugin)

// const router = new VueRouter({ routes, mode: 'history' })
const router = new VueRouter({ routes })

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
