import Vue from 'vue'
import Router from 'vue-router'
import CnHome from '../components/doc/cn/Home.vue';
import EnHome from '../components/doc/en/Home.vue';
import CnGetStarted from '../components/doc/cn/GetStarted.vue';
import EnGetStarted from '../components/doc/en/GetStarted.vue';
import CnProps from '../components/doc/cn/Props.vue';
import EnProps from '../components/doc/en/Props.vue';
import CnEvents from '../components/doc/cn/Events.vue';
import EnEvents from '../components/doc/en/Events.vue';
import CnCustomComponent from '../components/doc/cn/CustomComponent.vue';
import EnCustomComponent from '../components/doc/en/CustomComponent.vue';
import CnCropImage from '../components/doc/cn/CropImage.vue';
import EnCropImage from '../components/doc/en/CropImage.vue';
import CnResizeImage from '../components/doc/cn/ResizeImage.vue';
import EnResizeImage from '../components/doc/en/ResizeImage.vue';
import CnMultipleFile from '../components/doc/cn/MultipleFile.vue';
import EnMultipleFile from '../components/doc/en/MultipleFile.vue';
import CnCompressImage from '../components/doc/cn/CompressImage.vue';
import EnCompressImage from '../components/doc/en/CompressImage.vue';
import CnPostData from '../components/doc/cn/PostData.vue';
import EnPostData from '../components/doc/en/PostData.vue';
import CnOthers from '../components/doc/cn/Others.vue';
import EnOthers from '../components/doc/en/Others.vue';

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
      path: '/en/get-started',
      component: EnGetStarted,
    },
    {
      path: '/cn/props',
      component: CnProps
    },
    {
      path: '/en/props',
      component: EnProps
    },
    {
      path: '/cn/events',
      component: CnEvents
    },
    {
      path: '/en/events',
      component: EnEvents,
    },
    {
      path: '/cn/custom-component',
      component: CnCustomComponent,
    },
    {
      path: '/en/custom-component',
      component: EnCustomComponent,
    },
    {
      path: '/cn/crop-image',
      component: CnCropImage
    },
    {
      path: '/en/crop-image',
      component: EnCropImage
    },
    {
      path: '/cn/resize-image',
      component: CnResizeImage,
    },
    {
      path: '/en/resize-image',
      component: EnResizeImage,
    },
    {
      path: '/cn/multiple-file',
      component: CnMultipleFile
    },
    {
      path: '/en/multiple-file',
      component: EnMultipleFile
    },
    {
      path: '/cn/compress-image',
      component: CnCompressImage,
    },
    {
      path: '/en/compress-image',
      component: EnCompressImage,
    },
    {
      path: '/cn/post-data',
      component: CnPostData
    },
    {
      path: '/en/post-data',
      component: EnPostData,
    },
    {
      path: '/cn/others',
      component: CnOthers,
    },
    {
      path: '/en/others',
      component: EnOthers,
    }
  ]
})
