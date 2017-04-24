import Vue from 'vue'
import Router from 'vue-router'
import CnHome from '../components/doc/cn/Home.vue';
import EnHome from '../components/doc/en/Home.vue';
import CnGetStarted from '../components/doc/cn/GetStarted.vue';
import CnAttributes from '../components/doc/cn/Attributes.vue';
import CnEvents from '../components/doc/cn/Events.vue';

Vue.use(Router)


export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: CnHome
    },
    {
      path: '/cn/home',
      component: CnHome
    },
    {
      path: '/en/home',
      component: EnHome
    },
    {
      path: '/cn/get-stared',
      component: EnHome
    },
    {
      path: '/cn/api',
      component: CnApi
    },
    {
      path: '/cn/events',
      component: CnEvents
    },
    {
      path: '/cn/crop-image',
      component: CnEvents
    }
  ]
})
