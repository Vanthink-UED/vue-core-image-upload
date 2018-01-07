<template>
  <div class="components">
    <h3>响应事件</h3>
    <p>我们在上传的不同阶段指定了不同的派发事件，你可以绑定每个事件的响应方法，实现对于流程的控制。</p>
    <h5>imageuploaded</h5>
    <p>当图片上传完，会调用该事件绑定的函数，并且用户可以获取到服务端返回的数据。</p>
    <h5>imagechanged</h5>
    <p>当input框改变选择图片时候触发，会返回input的获取的图片数据</p>
    <h5>imageuploading</h5>
    <p>当图片上传过程中触发，你可以自定义你需要处理的内容比如显示加载动画等。</p>
    <h5>errorhandle</h5>
    <p>当图片上传发生错误的时候触发，会返回错误状态信息</p>
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
            <th>图片选中</th>
            <th>图片上传</th>
            <th>图片完成</th>
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
    <p>上面的演示，表示了上传自定义事件的执行状况，参考代码如下：</p>
    <pre v-highlightjs><code class="html">&lt;vue-core-image-upload
  :class="['btn', 'btn-primary']"
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
    <a href="https://github.com/Vanthink-UED/vue-core-image-upload/blob/master/site/client/components/doc/cn/Events.vue">完整代码</a>
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
