<template>
  <div class="components">
    <h3>裁剪图片</h3>
    <p>你可以通过设置 <code>crop</code>，来实现图片的裁剪。你可以指定图片裁剪的宽高，以及它的最大宽度和高度这些参数。</p>
    <p>设置 <code>cropRatio</code>来限制裁剪图片的形状，需要字符串的格式(1:1 或者2:3这种比例形式)，当然你可以设置为 auto 则不限制裁剪框的形状。</p>
    <p class="warnning"> 设置图片裁剪后，批量上传将不再生效。</p>
    <p>图片裁剪完有两种选择，选择<strong>本地裁剪<code>local</code></strong>或者<strong>服务端裁剪 <code>server</code></strong>。</p>
    <h4>本地裁剪</h4>
    <p>你可以将 crop 设置为 local 来实现本地裁剪。本地裁剪完成后发送给服务端接口的图片便是已经裁剪好的图片。</p>
    <div class="center">
      <div class="user">
          <img class="avatar" :src="src"/>
      </div>
      <vue-core-image-upload
         crop-ratio="1:1"
         class="btn btn-primary"
         crop="local"
         url="http://101.198.151.190/api/upload.php"
         extensions="png,jpeg,jpg"
         text="Crop Image"
         compress="20"
         @imageuploaded="crpoServerImageUploaded">
      </vue-core-image-upload>
    </div>
    <h4>服务端裁剪</h4>
    <p>服务端裁剪是指将原图片和裁剪的参数一起发给后端，方便服务端保存原图，以及对原图的其他操作，而服务端能够接收到post的参数如下:</p>
    <img src="http://img1.vued.vanthink.cn/vueda26e41f79edd6208ec92f6ce915e558a.png" />
    <p>每个字段具体说明如下:</p>
    <ul>
      <li><code>toCropImgX</code>: 裁剪的区域距离图片的左边缘的距离</li>
      <li><code>toCropImgY</code>: 裁剪的区域距离图片的上边缘的距离</li>
      <li><code>toCropImgW</code>: 裁剪的区域的宽度</li>
      <li><code>toCropImgH</code>: 裁剪的区域的高度</li>
      <li><code>maxWidth</code>: 你期望裁剪的图片的最大宽度</li>
      <li><code>maxHeight</code>: 你期望裁剪的图片的最大高度</li>
    </ul>
    <p>裁剪区域的样式，你可以自行复写样式进行覆盖</p>
    <h4>服务端裁剪DEMO</h4>
    <p>上传图片后可以看到裁剪的参数</p>
    <div class="center">
      <div class="user">
          <img class="avatar" :src="cropSrc"/>
      </div>
      <vue-core-image-upload
         crop-ratio="1:1"
         class="btn btn-primary"
         crop="server"
         url="http://101.198.151.190/api/crop.php"
         extensions="png,gif,jpeg,jpg"
         text="Crop Image"
         @imageuploaded="crpoServerImageUploaded">
      </vue-core-image-upload>
    </div>
    <table class="m-table bordered" style="width:100%;">
      <thead>
        <tr>
          <th>H</th>
          <th>W</th>
          <th>X</th>
          <th>Y</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{cropArgs.toCropImgH}}</td>
          <td>{{cropArgs.toCropImgW}}</td>
          <td>{{cropArgs.toCropImgX}}</td>
          <td>{{cropArgs.toCropImgY}}</td>
        </tr>
      </tbody>
    </table>
    <pre v-highlightjs><code class="HTML">&lt;vue-core-image-upload
   crop-ratio="1:1"
   :class="['btn', 'btn-primary']"
   crop="server"
   url="http://101.198.151.190/api/crop.php"
   extensions="png,gif,jpeg,jpg"
   text="Crop Image"
   @imageuploaded="crpoServerImageUploaded"&gt;
&lt;/vue-core-image-upload&gt;

    </code></pre>
    <a  href="https://github.com/Vanthink-UED/vue-core-image-upload/blob/master/site/client/components/doc/cn/CropImage.vue">View Code Source</a>
  </div>
</template>

<script>
import VueCoreImageUpload from 'vue-core-image-upload'
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
    cropLocalImageUploaded(res) {
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
