<template>
  <div class="components">
    <h3>自定义组件样式</h3>
    <p>你可以设置组件的<code>class</code> 以及自己编写子组件的形式来控制组件的显示的样子。</p>
    <h4>Demo</h4>
    <p>下面是一个图片按钮。</p>
    <p class="user center">
      <img class="avatar" :src="src" />
    </p>
    <div class="center">
      <vue-core-image-upload
        :crop="false"
        @imageuploaded="imageuploaded"
        :data="data"
        :max-file-size="5242880"
        url="http://101.198.151.190/api/upload.php" >
        <img width="150" src="http://img1.vued.vanthink.cn/vuededa653aa59d1a1287d9a6e18890a7e51.png" />
      </vue-core-image-upload>
    </div>
    <p>Code Example</p>
    <pre v-highlightjs><code class="javascript">&lt;vue-core-image-upload
      :crop="false"
      @imageuploaded="imageuploaded"
      :data="data"
      :max-file-size="5242880"
      url="http://101.198.151.190/api/upload.php" &gt;
      &lt;img width="150" src="http://img1.vued.vanthink.cn/vuededa653aa59d1a1287d9a6e18890a7e51.png" /&gt;
    &lt;/vue-core-image-upload&gt;
 </code></pre>
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
