<template>
  <div class="components c-home">
    <p class="center">
      <img src="http://img1.vued.vanthink.cn/vuedd7432dee5fe174ac48ad8190b85b79d5.png" alt="vue core image upload" />
    </p>
    <p class="btn-wrap center">
      <a class="btn btn-primary btn-go-started" href="#/cn/get-started">快速开始</a>
    </p>
    <p class="center"><a href="./index.html" @click.prevent="goToEnglishDoc" title="View English Document">English Document</a></p>
    <p><strong>vue-core-image-upload</strong> 是一款轻量级的 Vue.js 上传插件，它可以支持的图片的上传，裁剪，压缩。它同样也支持在移动端的图片处理，它定义了诸多上传周期，你可以自由的进行流程控制。</p>

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
      location.href = './index.html#/en/home';
      location.reload();
    }
  }
};

</script>
