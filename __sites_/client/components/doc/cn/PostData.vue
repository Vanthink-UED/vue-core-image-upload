<template>
<div class="components">
  <h3>向服务端发送数据</h3>
  <p>你可以设置<code>data</code> 来将一些附带的数据发送给服务端。
    当然你也可以将一些数据包含在 header 中传递过去，你只需要绑定到 <code>header</code>即可。</p>
  <h4>Exmaple:</h4>
  <p>下面会将输入框的内容一并发送过去</p>
  <div class="m-form">
    <input type="text" v-model="data.text" placeholder="输入一些内容吧" class="form-control text" />
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
  <p>上传的过程中我们可以打开devtool查看请求，可以看到发送数据中带上了一个新的 text 字段，也就是文本框内容。</p>
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
  <p class="warnning">你可以设置 <code>isXhr</code> 来取消向服务端上传。</p>
  <a href="https://github.com/Vanthink-UED/vue-core-image-upload/blob/master/site/client/components/doc/en/PostData.vue">查看源码</a>
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
