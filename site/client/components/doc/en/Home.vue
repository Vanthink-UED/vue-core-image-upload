<template>
  <div class="components c-home">
    <p class="center">
      <img src="http://img1.vued.vanthink.cn/vued6c7ab0cd17f3d6159e2b23a270437b44.png" alt="vue core image upload" />
    </p>
    <p class="btn-wrap center">
      <a class="btn btn-primary btn-go-started" href="#display-svg">Get Started</a>
    </p>
    <p class="center"><a href="javascipt:;" title="View Chinese Document">Chinese Document</a></p>
    <p><strong>vue-core-image-upload</strong> is a lightweight plugin for developers to upload and crop images. There is also a good experience on mobile devices. We has define different type events for developers and they can control the file flow and do more thing they want. </p>
    
  </div>
</template>

<style>
.c-home {
  text-align: center;
}
.c-home img {
  width: 360px;
}
.c-home .btn-go-started{
  border-radius: 25px;
  padding: 5px 40px;
}
</style>

<script>
import vendor from '../../../lib/vendor'  
export default {
  methods: {
    goToEnglishDoc() {
      vendor.setLocalData('lan', 'en');
      window.lan = 'en';
      location.href = './index.html/#/en/home';
    }
  }
};

</script>
