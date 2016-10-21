## Vue-Core-Image-Upload 
a vue plugin for image upload and crop ( Support 📱 IE9+)

<img width="360" src="./shots/vued0486684bfe534fd6fbec2aa18f8f83a1.png" />


### Install

``` bash
npm i vue-core-image-upload --save
```

Code Example (ES6)
``` js
import VueCoreImageUpload  from './vue.core.image.upload.vue';

new Vue({
  el: '#app',
  components: {
    'vue-core-image-upload': VueCoreImageUpload
  },
  data: {
    src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
  },
  methods: {

  },
  events: {
    imageUploaded(res) {
      if (res.errcode == 0) {
        this.src = 'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png';
      }
    }
  },
});
```

Use CDN Script(ES5)
```js

// include the script ./node_modules/vue-core-image-upload/index.js
<script src="http://s1.vued.vanthink.cn/3e3f5b16269d/vue-core-image-upload.js"></script>
...
<script>
    var MyComponent = Vue.extend(VueCoreImageUpload);
    new Vue({
      el: '#app',
      components: {
        'vue-core-image-upload': MyComponent
      },
      data: {
        src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
      },
      methods: {

      },
      events: {
        imageUploaded: function(res) {
          if (res.errcode == 0) {
            this.src = 'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png';
          }
        }
      },
    });
</script>
```

``` html
<vue-core-image-upload v-bind:class="['pure-button','pure-button-primary','js-btn-crop']" v-bind:crop="false" url="./crop.php" extensions="png,gif,jpeg,jpg"></vue-core-image-upload>
```

[Demo] (http://vanthink-ued.github.io/vue-core-image-upload/upload.html)

### Options

| Props        | Type         | Example  | Description  |
| ------------- |:----------| ---------|--------------|
| url     | String | '/crop.php' | your server url |
| text      | String      |  'Upload Image' | the text you want to show |
| inputOfFile | String     |   'file' | upload file form name |
| extensions | String   |    'png,jpg,gif' | limit the file type |
| crop | Boolean   |   true | if need crop image |
| cropRatio | String   |   '1:1' | limit the cropped image shape|
| cropBtn | Object   |   {ok:'Save','cancel':'Give Up'} | the text of crop button|
| maxFileSize | Number   |   10485760(10M) | limit the file size|
| maxWidth | Number   |   150 | limit the width of your image you cropped|
| maxheight | Number   |   150 | limit the height of your image you cropped|
| inputAccept | string   |  'image/*' / 'image/jpg,image/jpeg,image/png' |  the image file of accept type |

### $dispatch, events

``` js
//finish image uload
imageUploaded(res) {
  if (res.errcode == 0) {
    this.src = 'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png';

  }
}


// uploading image
imageUploading(res) {
  console.info('uploading');
}

// handle some error like ajax not working
errorHandle(err) {
  console.error(err);
}
```

### Server Crop Arguments

If you crop a image , your crop will send a request to your server with some crop arguments;

                        
<img src="./shots/vuedba0ed377b88fc84d51026310efcb255b.png" />


+ `toCropImgX`: the distance of cropbox to the image left;
+ `toCropImgY`: the distance of cropbox to the image top
+ `toCropImgW`: the width of cropbox
+ `toCropImgH`: the height of cropbox
+ `maxWidth`: the maxium width of your target image 
+ `maxHeight`: the maxium height of your target image 
If you want to change the crop window style , you should write your own css files.

### MIT Liscense 
