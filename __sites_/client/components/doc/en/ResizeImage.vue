<template>
  <div class="components">
    <h3>Resize</h3>
    <p>Set <code> resize </code> props to help you to resize the imagey you want to upload. </p>
    <p><code>resize="local"</code> means you can resize image in local browser via canvas and it will send server the resized image.</p>
    <div class="center">
      <div class="user">
          <img class="avatar" :src="src"/>
      </div>
      <vue-core-image-upload
         crop-ratio="1:1"
         class="btn btn-primary"
         resize="local"
         url="http://101.198.151.190/api/upload.php"
         extensions="png,jpeg,jpg"
         text="Resize Image"
         compress="20"
         @imageuploaded="resizeLocalImageUploaded">
      </vue-core-image-upload>
    </div>
    <p>Code Example</p>
    <pre v-highlightjs><code class="HTML">&lt;vue-core-image-upload
     crop-ratio="1:1"
     class="btn btn-primary"
     resize="local"
     url="http://101.198.151.190/api/crop.php"
     extensions="png,gif,jpeg,jpg"
     text="Resize Image"
     @imageuploaded="resizeLocalImageUploaded"&gt;
  &lt;/vue-core-image-upload&gt;
      </code></pre>
    <p><code>resize="server"</code> means it will send the original image you upload，and it will send the server with data params <code>imgChangeRatio</code>. <code>imgChangeRatio</code> is the scaling ratio.</p>
    <a  href="https://github.com/Vanthink-UED/vue-core-image-upload/blob/master/site/client/components/doc/cn/ResizeImage.vue">View Code Source</a>
  </div>
</template>

<script>
import VueCoreImageUpload from 'vue-core-image-upload';
export default {
  components: {
    VueCoreImageUpload
  },
  data() {
    return {
      src: 'http://img1.vued.vanthink.cn/vued7553a09a5d5209ebd00a48264394b7f3.png',
      cropSrc: 'http://img1.vued.vanthink.cn/vued7553a09a5d5209ebd00a48264394b7f3.png',
      cropArgs: {
        toCropImgH: '?',
        toCropImgW: '?',
        toCropImgX: '?',
        toCropImgY: '?'
      }
    };
  },

  methods: {
    resizeLocalImageUploaded(res) {
      this.src = res.data.src;
    },
    crpoServerImageUploaded(res) {
      if (res.errcode === 0) {
        if (res.data.src) {
          this.src = res.data.src;
          return;
        }
        this.name = res.data.name;
        this.cropArgs = {
          toCropImgH: parseInt(res.data.post.toCropImgH),
          toCropImgW: parseInt(res.data.post.toCropImgW),
          toCropImgX: parseInt(res.data.post.toCropImgX),
          toCropImgY: parseInt(res.data.post.toCropImgY)
        }
        this.cropSrc = 'http://img1.vued.vanthink.cn/vued41b900045d6d44f3b32e06049621b415.png';
      }
    }
  }
};

</script>
