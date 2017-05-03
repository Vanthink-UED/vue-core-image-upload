## Vue-Core-Image-Upload

[![npm](https://img.shields.io/npm/v/vue-core-image-upload.svg?maxAge=2592000)]()


a vue plugin for image upload and crop ( Support 📱 IE10+)

[查看文档](http://vanthink-ued.github.io/vue-core-image-upload/index.html#/cn/get-started)


[English Document](http://vanthink-ued.github.io/vue-core-image-upload/index.html#/en/home)

if you use vue.js(<=2.0), you should go [here](https://github.com/Vanthink-UED/vue-core-image-upload/tree/v1.x).Or select
1.x.x version.

<img width="360" src="./shots/vue-core-image-upload.png" />


### Install

``` bash
npm i vue-core-image-upload --save
```

Code Example (ES6)
``` html
<vue-core-image-upload
  :class="['btn', 'btn-primary']"
  :crop="false"
  @imageuploaded="imageuploaded"
  :data="data"
  :max-file-size="5242880"
  url="your server url" >
</vue-core-image-upload>
```
``` js


import VueCoreImageUpload  from 'vue-core-image-upload';

new Vue({
  el: '#app',
  components: {
    'vue-core-image-upload': VueCoreImageUpload
  },
  data: {
    src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
  },
  methods: {
     imageuploaded(res) {
      if (res.errcode == 0) {
        this.src = 'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png';
      }
    }
  }
});
```

[Demo](http://vanthink-ued.github.io/vue-core-image-upload/upload.html)

### Props
<table class="m-table bordered">
  <thead>
    <tr>
      <th>Props</th>
      <th align="left">Data Type</th>
      <th>Example</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>url</td>
      <td align="left">String</td>
      <td>'/crop.php'</td>
      <td>Your server api</td>
    </tr>
    <tr>
      <td>text</td>
      <td align="left">String</td>
      <td>'Upload Image'</td>
      <td>The text of your uploading button</td>
    </tr>
    <tr>
      <td>inputOfFile</td>
      <td align="left">String &nbsp; &nbsp;</td>
      <td>&nbsp; 'file'</td>
      <td>Yout input[file] name</td>
    </tr>
    <tr>
      <td>extensions</td>
      <td align="left">String</td>
      <td>'png,jpg,gif'</td>
      <td>Limit the image type</td>
    </tr>
    <tr>
      <td>crop</td>
      <td align="left">Boolean</td>
      <td>'server'</td>
      <td>Crop image option</td>
    </tr>
    <tr>
      <td>cropRatio</td>
      <td align="left">String</td>
      <td>'1:1'</td>
      <td>The cropped image shape</td>
    </tr>
    <tr>
      <td>cropBtn</td>
      <td align="left">Object</td>
      <td>{ok:'Save','cancel':'Give Up'}</td>
      <td>The Text of cropping button text</td>
    </tr>
    <tr>
      <td>maxFileSize</td>
      <td align="left">Number</td>
      <td>10485760(10M)</td>
      <td>Limit the size of the file</td>
    </tr>
    <tr>
      <td>maxWidth</td>
      <td align="left">Number</td>
      <td>150</td>
      <td>The maximum width of cropped image </td>
    </tr>
    <tr>
      <td>maxheight</td>
      <td align="left">Number</td>
      <td>150</td>
      <td>限制图片的最大高度</td>
    </tr>
    <tr>
      <td>inputAccept</td>
      <td align="left">string</td>
      <td>'image/*' / 'image/jpg,image/jpeg,image/png'</td>
      <td>the input[file] accept</td>
    </tr>
    <tr>
      <td>compress</td>
      <td align="left">Number</td>
      <td>50</td>
      <td>Set the quality of compressed image</td>
    </tr>
    <tr>
      <td>isXhr</td>
      <td align="left">Boolean</td>
      <td>true</td>
      <td>IF cancel ajax uploading</td>
    </tr>
    <tr>
      <td>headers</td>
      <td align="left">Object</td>
      <td>{auth: xxxxx}</td>
      <td>Set customed header when ajax uploading</td>
    </tr>
    <tr>
      <td>data</td>
      <td align="left">Object</td>
      <td>{auth: xxxxx}</td>
      <td>Set customed data when ajax posting server</td>
    </tr>
  </tbody>
</table>

### Contributions

Your contributions and suggestions are welcome 😄😄😄💐💐💐.


