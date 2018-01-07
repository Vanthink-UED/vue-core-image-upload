<template>
  <div class="components">
    <h3>快速开始</h3>
    <p>使用 npm 安装依赖</p>
    <pre v-highlightjs><code class="bash">npm install vue-core-image-upload --save</code></pre>
    <p>安装完成后，编辑源码</p>
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
       class="btn btn-primary"
       :crop="false"
       @imageuploaded="imageuploaded"
       :data="data"
       :max-file-size="5242880"
       url="http://101.198.151.190/api/upload.php" >
     </vue-core-image-upload>
   </div>
    <p>如果我们要使用上传插件，我们首先需要引入我们的组件然后并在<code>components</code>中声明。
      实现上传，我们需要定义我们上传的服务器地址<code>url</code>，然后我们需要指定上传完成后触发的方法，也就是<code>@imageuploaded</code>，这样我们才能获取上传完后的数据，从而进行下一步的操作。
    </p>
    <p><a class="btn btn-info" href="#/cn/attributes">查看详细文档</a></p>
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
