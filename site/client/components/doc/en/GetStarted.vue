<template>
  <div class="components">
    <h3>Get Started</h3>
    <p>Use npm to install the module</p>
    <pre v-highlightjs><code class="bash">npm install vue-core-image-upload --save</code></pre>
    <p>Then edit a vue file</p>
    <pre v-highlightjs><code class="javascript">&lt;template&gt;
&lt;div class="center"&gt;
  &lt;vue-core-image-upload
    class="btn btn-primary"
    :crop="false"
    @imageuploaded="imageuploaded"
    :data="data"
    :max-file-size="5242880"
    url="http://101.198.151.190/api/upload.php" &gt;
  &lt;/vue-core-image-upload&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import VueCoreImageUpload from 'vue-core-image-upload'

export default {
  components: {
    'vue-core-image-upload': VueCoreImageUpload,
  },
  data() {
    return {
      src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
    }
  },
  methods: {
    imageuploaded(res) {
      if (res.errcode == 0) {
        this.src = res.data.src;
      }
    }
  }
};
&lt;/script&gt;
 </code></pre>
  <h5>Code Example</h5>
   <p class="user center">
     <img class="avatar" :src="src" />
   </p>
   <div class="center">
     <vue-core-image-upload
          class="btn btn-primary postImg"
          :crop="false"
          @imageuploaded="imageuploaded"
          @imageuploading="imageuploading"
          :data='data'
          inputOfFile="FeedBack"
          compress="50"
          :max-file-size="10485760"
          :credentials="false"
          url="https://v3.imacco.com/Upload/api/UploadImg" >
      </vue-core-image-upload>
   </div>
    <p>First of all , we need to include out plugin in <code>components</code> . Then we must define the <code>url</code> as your server api ,then we bind a function to
      <code>@imageuploaded</code> for handling the server response.
    </p>
    <p><a class="btn btn-info" href="#/en/props">View more details</a></p>
  </div>
</template>

<style>

.avatar {
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  border-radius: 50%;
  border: 2px solid rgba(0,0,0,.05);
}
</style>

<script>
import VueCoreImageUpload from 'vue-core-image-upload'

export default {
  components: {
    'vue-core-image-upload': VueCoreImageUpload,
  },
  data() {
    return {
      src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
    }
  },
  methods: {
    imageuploaded(res) {
      if (res.errcode == 0) {
        this.src = res.data.src;
      }
    }
  }
};

</script>
