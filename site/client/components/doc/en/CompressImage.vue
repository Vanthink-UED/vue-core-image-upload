<template>
  <div class="components">
    <h3>Compress Image</h3>
    <p>Props <code>compress</code> means the quality of the image you want to compress via browser
      and then send the compressed image to the server. </p>
    <div class="center">
      <p><img width="300" :src="src" /></p>
      <vue-core-image-upload
        class="btn btn-primary"
        @imageuploaded="imageUploded"
        :max-file-size="5242880"
        compress="50"
        url="http://101.198.151.190/api/upload.php" >
      </vue-core-image-upload>
    </div>
    <h4>Code example</h4>
    <pre v-highlightjs><code class="html">&lt;vue-core-image-upload
  :class="['btn', 'btn-primary']"
  @imageuploaded="imageUploded"
  :max-file-size="5242880"
  compress="50"
  url="http://101.198.151.190/api/upload.php" &gt;
&lt;/vue-core-image-upload&gt;</code></pre>
  </div>
</template>

<script>

import VueCoreImageUpload from 'vue-core-image-upload'
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
    imageUploded(res) {
        this.src = res.data.src;
    }
  }

};

</script>
