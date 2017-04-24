import Vue from 'vue'
import Router from 'vue-router'
import CnHome from '../components/doc/cn/Home.vue';
import EnHome from '../components/doc/en/Home.vue';
import CnGetStarted from '../components/doc/cn/GetStarted.vue';
import CnAttributes from '../components/doc/cn/Attributes.vue';
import CnEvents from '../components/doc/cn/Events.vue';
import CnCropImage from '../components/doc/cn/CropImage.vue';
import CnCompressImage from '../components/doc/cn/CompressImage.vue';
import CnOthers from '../components/doc/cn/Others.vue';

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
      path: '/cn/get-started',
      component: CnGetStarted
    },
    {
      path: '/cn/attributes',
      component: CnAttributes
    },
    {
      path: '/cn/events',
      component: CnEvents
    },
    {
      path: '/cn/crop-image',
      component: CnEvents
    },
    {
      path: '/cn/compress-image',
      component: CnCompressImage,
    },
    {
      path: '/cn/others',
      component: CnOthers,
    }
  ]
})
