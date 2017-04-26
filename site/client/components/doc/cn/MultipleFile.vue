<template>
  <div class="components">
    <h3>上传多个文件</h3>
    <h4>multiple</h4>
    <p>你可以使用 <code>multiple</code> 属性设置为true来实现多文件的上传。需要注意的是，你设置了该属性后,服务端收到文件上传的字段数据会是一个数组。</p>
    <h4>multiple-size</h4>
    <p>你可以使用<code>multiple-size</code>来限制图片的数量，你可以限制上传文件的数量。</p>
    <h4>演示</h4>
    <div class="center">
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
    <table class="m-table bordered">
      <thead>
        <tr>
          <th>文件名称</th>
          <th>文件大小</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in fileList" :key="item.name">
          <td>{{item.name}}</td>
          <td>{{item.size}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import VueCoreImageUpload from '../../../../src/vue-core-image-upload.vue' 
export default {
  components: {
    VueCoreImageUpload,
  },
  data() {
    return {
      fileList: [],
    }
  },
  
  methods: {
    imageUploded(res) {
      if(res.errcode == 0) {
        this.fileList = res.data.fileList;
      }
    }
  }
  
};

</script>