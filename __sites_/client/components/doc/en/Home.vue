<template>
  <div class="components c-home">
    <p class="center">
      <img src="http://img1.vued.vanthink.cn/vuedd7432dee5fe174ac48ad8190b85b79d5.png" alt="vue core image upload" />
    </p>
    <p class="btn-wrap center">
      <a class="btn btn-primary btn-go-started" href="#/en/get-started">Get Started</a>
    </p>
    <p class="center"><a href="./index.html" @click.prevent="goToChineseDoc" title="View Chinese Document">Chinese Document</a></p>
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
    goToChineseDoc() {
      vendor.setLocalData('lan', 'cn');
      window.lan = 'cn';
      location.href = './index.html#/cn/home';
      location.reload();
    }
  }
};

</script>
