<template>
  <div class="components">
    <h3>Custom Events</h3>
    <p>It defines different custom event in different upload progress. You can control the files flow via binding some functions.</p>
    <h5>imageuploaded</h5>
    <p>When image has been uploaded, it call the function you bind. You could recive response from server as an param</p>
    <h5>imagechanged</h5>
    <p>When input[file] velue has been changed, it call the function you bind. You could recive an file source param</p>
    <h5>imageuploading</h5>
    <p>When the image is uploading.</p>
    <h5>errorhandle</h5>
    <p>Whne you meet some error like network error or file size error.</p>
    <h5>Code Example</h5>
    <div class="center">
      <img class="avatar" :src="src" />
    </div>
    <div class="center">
      <vue-core-image-upload
        class="btn btn-primary"
        :crop="false"
        @imagechanged="imagechanged"
        @imageuploading="imageuploading"
        @imageuploaded="imageuploaded"
        :max-file-size="5242880"
        url="http://101.198.151.190/api/upload.php" >
      </vue-core-image-upload>
    </div>
    <div>
      <table class="m-table bordered">
        <thead>
          <tr>
            <th>Selected</th>
            <th>Uplaoding</th>
            <th>Finished</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span class="circle-bar" :class="{'active': step>0}"></span>
            </td>
            <td><span class="circle-bar" :class="{'active': step>1}"></span></td>
            <td><span class="circle-bar" :class="{'active': step>2}"></span></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>Code：</p>
    <pre v-highlightjs><code class="html">&lt;vue-core-image-upload
  class="btn btn-primary"
  :crop="false"
  @imagechanged="imagechanged"
  @imageuploading="imageuploading"
  @imageuploaded="imageuploaded"
  :max-file-size="5242880"
  url="http://101.198.151.190/api/upload.php" &gt;
&lt;/vue-core-image-upload&gt;</code></pre>
    <pre v-highlightjs><code class="javascript">methods: {
    imagechanged() {
      this.step += 1;
    },

    imageuploading() {
      this.step += 1;
    },

    imageuploaded(res) {
      this.step += 1;
      this.src = res.data.src;
    }
  }</code></pre>
    <a href="https://github.com/Vanthink-UED/vue-core-image-upload/blob/master/site/client/components/doc/en/Events.vue">View code source</a>
  </div>
</template>

<style>
  .circle-bar{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: #999;
  }
  .circle-bar.active{
    background-color: #2ecc71;
  }
</style>

<script>
import VueCoreImageUpload from 'vue-core-image-upload'
export default {
  components: {
    VueCoreImageUpload,
  },

  data() {
    return {
      src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
      step: 0,
    }
  },

  methods: {
    imagechanged() {
      this.step += 1;
    },
    imageuploading() {
      this.step += 1;
    },

    imageuploaded(res) {
      this.step += 1;
      this.src = res.data.src;
    }
  }
}
</script>
