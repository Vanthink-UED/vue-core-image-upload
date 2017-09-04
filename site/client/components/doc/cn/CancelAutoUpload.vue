<template>
  <div class="components">
    <h3>取消默认的上传</h3>
    <p>你可以设置<code>isXhr</code> 设置为 false 。然后通过 `imagechanged` 来取得上传文件的信息。如果是单文件，则范围该文件的信息，
      如果上传的
    <div class="m-form">
      <vue-core-image-upload
        :class="['btn', 'btn-primary']"
        :crop="false"
        @imagechanged="imagechanged"
        :isXhr="false"
        text="点击上传"
        url="http://101.198.151.190/api/upload.php" >
      </vue-core-image-upload>
    </div>
    <p v-if="!image">
      There is no image!
    </p>
    <p>上传图片</p>
    <table class="m-table bordered" v-if="image" width="620">
      <tr>
          <th width="50%">原始图片</th>
          <th>压缩图片</th>
      </tr>
      <tr>
        <td><img id="source" width="100%" :src="image" /></td>
        <td><img width="100%" :src="compressSrc" /></td>
      </tr>
    </table>
    <button type="button" @click="upload"> 上传图片 </button>
  </div>
</template>
<style>
</style>


<script>
import VueCoreImageUpload from '../../../../src/vue-core-image-upload.vue'
import jic from 'j-i-c';

console.log();

export default {
  components: {
    VueCoreImageUpload,
  },

  data() {
    return {
      image: false,
      title: '',
      compressSrc: false,
    };
  },

  methods: {
    imagechanged(res) {
      this.title = res.name;
      const reader = new FileReader();
        let self = this;
        reader.onload = function(e) {
          const src = e.target.result;
          self.image = src;
          setTimeout(() => {
            self.compressImage();
          } , 5000);
        }
      reader.readAsDataURL(res);
    },

    compressImage() {
      const quality =  50;
      // output file format (jpg || png)
      const outputFormat = 'jpg';
      //This function returns an Image Object
      const sourceImg = document.querySelector('#source');
      this.compressSrc = jic.compress(sourceImg, quality, outputFormat).src;
    },

    upload() {
      // your code
      console.log(this.compressSrc);
    }
  }

};

</script>
