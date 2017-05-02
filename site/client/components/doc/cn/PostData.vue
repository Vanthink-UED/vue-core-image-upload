<template>
<div class="components">
  <h3>向服务端发送数据</h3>
  <p>你可以设置<code>data</code> 来将一些附带的数据发送给服务端。</p>
  <h4>Exmaple:</h4>
  <p>下面会将输入框的内容一并发送过去</p>
  <div class="m-form">
    <input type="text" v-model="data.text" placeholder="输入一些内容吧" class="form-control text" />
    <vue-core-image-upload
      :class="['btn', 'btn-primary']"
      :crop="false"
      @imageuploaded="imageUploded"
      :max-file-size="5242880"
      :multiple="true"
      :multiple-size="4"
      url="http://101.198.151.190/api/upload.php" >
    </vue-core-image-upload>
  </div>
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
import VueCoreImageUpload from '../../../../src/vue-core-image-upload.vue'
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
  }

};

</script>
