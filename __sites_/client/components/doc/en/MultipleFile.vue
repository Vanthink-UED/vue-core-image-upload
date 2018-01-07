<template>
  <div class="components">
    <h3>Upload multiple files</h3>
    <p>Set <code>multiple</code> equal <code>true</code>, and you could select more than one file. And your server will recieved an array of files.</p>
    <h4>multiple-size</h4>
    <p><code>multiple-size</code>  is a number which limits your count of the files you selected.</p>
    <h4>Demo</h4>
    <div class="center">
      <vue-core-image-upload
        class="btn btn-primary"
        :crop="false"
        @imageuploaded="imageUploded"
        :max-file-size="5242880"
        :multiple="true"
        :multiple-size="4"
        url="http://101.198.151.190/api/upload2.php" >
      </vue-core-image-upload>
    </div>
    <table class="m-table bordered">
      <thead>
        <tr>
          <th>File Name</th>
          <th>File Size</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in fileList" :key="item.name">
          <td>{{item.name}}</td>
          <td>{{item.size}}</td>
        </tr>
      </tbody>
    </table>
    <p>Click the button and you will see the file name and size above the table</p>
    <h4>Code Example</h4>
    <pre v-highlightjs><code class="javascript">&lt;vue-core-image-upload
class="btn btn-primary"
:crop="false"
@imageuploaded="imageUploded"
:max-file-size="5242880"
:multiple="true"
:multiple-size="4"
url="http://101.198.151.190/api/upload2.php" &gt;
&lt;/vue-core-image-upload&gt;</code></pre>
  <a href="https://github.com/Vanthink-UED/vue-core-image-upload/blob/master/site/client/components/doc/en/MultipleFile.vue">View code source</a>
  </div>
</template>

<script>
import VueCoreImageUpload from 'vue-core-image-upload';
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
        this.fileList = res.data;
      }
    }
  }

};

</script>
