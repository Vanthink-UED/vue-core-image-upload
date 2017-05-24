<template>
  <div class="components">
    <h3>Crop Image</h3>
    <p>Set <code>crop</code> value to help you crop the image. </p>
    <p class="warnning"> if you setted the crop props, you can not upload multiple files.</p>
    <p><code>cropRatio</code> can be setted for diffrent crop shape.But it must be a string like '2:3' or '1:1'. If you set it to 'auto', users can crop any shape images.</p>
    <p>You have two values to select，<strong>local crop:<code>local</code></strong>or<strong>server-side crop: <code>server</code></strong>.</p>
    <h4>Local Crop</h4>
    <p><code>crop="local"</code> The Browser will crop the image via canvas API and send the cropped image to the server.</p>
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
    <h4>Server-side crop</h4>
    <p><code>crop="server"</code>  means the bwowser will send the original image to the server and post the cropped data below to the server:</p>
    <img style="width:480px;" src="http://img1.vued.vanthink.cn/vuedbb5d2173fa90af576b66f7077a87bfdb.jpeg" />
    <p>Each filed introduce:</p>
    <ul>
      <li><code>toCropImgX</code>: The x-axis distance between the crop area and the image</li>
      <li><code>toCropImgY</code>: The y-axis distance between the crop area and the image</li>
      <li><code>toCropImgW</code>: The width of crop area</li>
      <li><code>toCropImgH</code>: The height of crop area</li>
      <li><code>maxWidth</code>: The maximum width of the crop image</li>
      <li><code>maxHeight</code>: The maximum height of the crop image</li>
    </ul>
    <h4>Code example</h4>
    <p>Click button to upload and you can view some post params.</p>
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
   class="btn btn-primary"
   crop="server"
   url="http://101.198.151.190/api/crop.php"
   extensions="png,gif,jpeg,jpg"
   text="Crop Image"
   @imageuploaded="crpoServerImageUploaded"&gt;
&lt;/vue-core-image-upload&gt;
    </code></pre>
    <a  href="https://github.com/Vanthink-UED/vue-core-image-upload/blob/master/site/client/components/doc/en/CropImage.vue">View Code Source</a>
  </div>
</template>

<script>
import VueCoreImageUpload from '../../../../src/vue-core-image-upload';

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
