<template>
  <div class="components">
    <h3>压缩图片</h3>
    <p>设置<code>compress</code>的数值，你可以在上传之前进行图片的本地压缩。其中 compress 为 0 表示不压缩，数据越大，图片的质量越差，且最大值不能大于100。</p>
    <div class="center">
      <p><img width="300" :src="src" /></p>
      <vue-core-image-upload
        class="btn btn-primary"
        @imageuploaded="imageUploded"
        :max-file-size="5242880"
        compress="50"
        :data="params"
        url="http://101.198.151.190/api/upload.php" >
      </vue-core-image-upload>
    </div>
    <h4>代码示例</h4>
    <pre v-highlightjs><code class="html">&lt;vue-core-image-upload
  :class="['btn', 'btn-primary']"
  @imageuploaded="imageUploded"
  :max-file-size="5242880"
  compress="50"   // 设置压缩比例
  url="http://101.198.151.190/api/upload.php" &gt;
&lt;/vue-core-image-upload&gt;</code></pre>
  </div>
</template>

<script>

import VueCoreImageUpload from '../../../../src/vue-core-image-upload.vue'
export default {
  components: {
    VueCoreImageUpload,
  },
  data() {
    return {
      src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
      params: {
        auth: '123123',
        arr: [123,123123]
      }
    };
  },

  methods: {
    imageUploded(res) {
        this.src = res.data.src;
    }
  }

};

</script>
