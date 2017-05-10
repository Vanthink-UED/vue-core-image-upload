<template>
<div class="components">
  <h3>Send Data to Server</h3>
  <p>Setting <code>data</code> attribute will send some data you bind to the server via ajax.
    Of course you could pass data to server via header, just pass data to <code>header</code>.  </p>
  <h4>Exmaple:</h4>
  <p>You could type some text here and its text will be sended to the server when you upload your image.</p>
  <div class="m-form">
    <input type="text" v-model="data.text" placeholder="type some..." class="form-control text" />
    <vue-core-image-upload
      class="btn btn-primary"
      :crop="false"
      :data="data"
      @imageuploaded="imageuploaded"
      :multiple="true"
      :multiple-size="4"
      url="http://101.198.151.190/api/upload.php" >
    </vue-core-image-upload>
  </div>
  <p>We could open chrome devtool to view http status when uploading image. Below is the result after uploading image successfully.</p>
  <p><img width="480" src="http://img1.vued.vanthink.cn/vued6491e814a4b12bfcaecd628a6732beb0.png" /></p>
  <h4>Code Example</h4>
  <pre v-highlightjs><code class="javascript">&lt;template&gt;
&lt;div class="m-form"&gt;
  &lt;input type="text" v-model="data.text" placeholder="输入一些内容吧" class="form-control text" /&gt;
  &lt;vue-core-image-upload
    class="btn btn-primary"
    :crop="false"
    :data="data"
    @imageuploaded="imageuploaded"
    :multiple="true"
    :multiple-size="4"
    url="http://101.198.151.190/api/upload.php" &gt;
  &lt;/vue-core-image-upload&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import VueCoreImageUpload from 'vue-core-image-upload'
export default {
  components: {
    VueCoreImageUpload,
  },

  data() {
    return {
      data: {
        text: ''
      }
    }
  },

};
&lt;/script&gt;
</code></pre>
  <p class="warnning">Set <code>isXhr</code> equal false to cancel default ajax uploading.</p>
  <a href="https://github.com/Vanthink-UED/vue-core-image-upload/blob/master/site/client/components/doc/en/PostData.vue">View code source</a>
</div>
</template>
<style>
.form-control{
  display: block;
  margin: 20px 0;
  padding: 5px 20px;
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
      data: {
        text: ''
      }
    }
  },

  methods: {
    imageuploaded(res) {

    }
  }
};

</script>
