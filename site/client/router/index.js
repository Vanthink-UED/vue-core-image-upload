import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/doc/cn/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})
