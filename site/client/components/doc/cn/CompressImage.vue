<template>
  <div class="components">
    <h3>压缩图片</h3>
    <p>通过设置<code>compress</code>的数值，你可以在上传之前进行图片的压缩。其中 compress 为 0 表示不压缩，数据越大，这图片的质量越差，不大于100。</p>
    <div class="center">
      <p><img width="300" :src="src" /></p>
      <vue-core-image-upload
        :class="['btn', 'btn-primary']"
        :crop="false"
        @imagechanged="imageChanged"
        @imageuploaded="imageUploded"
        :max-file-size="5242880"
        compress="50"
        url="http://101.198.151.190/api/crop.php" >
      </vue-core-image-upload>
    </div>


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
    };
  },

  methods: {
    imageChanged(files) {
      coreImageCompress(files, 'asd', 90);
    },
    imageUploded(res) {

    }
  }

};

</script>
