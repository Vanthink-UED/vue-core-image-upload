<template>
  <div class="ft">
    <div class="icon-list">
      <a href="https://vanthink-ued.github.io/jquery.core.image.upload/upload.html" aria-label="jQuery" class="hint--bottom">
        <img src="http://img1.vued.vanthink.cn/vued13ba6fc08037fafe634545b603f06083.png" aria-label="vue.js" width="60" alt=""></a>
      <a href="https://vanthink-ued.github.io/vue-core-image-upload/index.html" class="hint--bottom">
        <img src="http://img1.vued.vanthink.cn/vued25ad97bd5a7fb23f1544d2bdcaeff0dc.png" width="60" alt="">
      </a>
      <a href="https://github.com/Vanthink-UED/angular-core-image-upload" class="hint--bottom">
        <img src="http://img1.vued.vanthink.cn/vuedae1c985a7d11d46340be19878a1b3984.png" width="60" alt="">
      </a>
      <a href="http://vanthink-ued.github.io/react-core-image-upload/upload.html" aria-label="React.js" class="hint--bottom">
        <img src="http://img1.vued.vanthink.cn/vuede7738ce4bcff0e00874b3566ef518783.png" width="60" alt=""></a>
    </div>
    <p class="other-info">All Rights Reserved By Vanthink-UED</p>
    <p class="lang-list">
      <a href="javascript:;" title="中文文档" :class="{'active': lan == 'cn'}" @click="changeCn"> 🇨🇳 Chinese </a>
      <a href="javascript:;" title="View Enlish Document" :class="{'active': lan == 'en'}"  @click="changeEn"> 🇺🇸 English </a>
    </p>
</div>
</template>

<script>
import vendor from '../lib/vendor'

export default {
  data() {
    return {
      lan: window.lan || 'cn'
    };  
  },

  methods: {
    changeCn() {
      vendor.setLocalData('lan', 'cn');
      location.href="./index.html#/cn/home";
      location.reload();
    },

    changeEn() {
      vendor.setLocalData('lan', 'en');
      location.href="./index.html#/en/home";
      location.reload();
    }
  }

};

</script>
