import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import VueHighlightJS from 'vue-highlightjs'
import VueProgressBar from 'vue-progressbar'

sync(store, router)

Vue.use(VueHighlightJS)
Vue.use(VueProgressBar, {
  color: '#2ecc71',
  failedColor: 'red',
  height: '2px'
});

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
