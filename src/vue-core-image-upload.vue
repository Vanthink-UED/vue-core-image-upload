
<template>
  <div class="g-core-image-upload-btn">
    {{text}}
    <form class="g-core-image-upload-form" v-show="!hasImage" method="post" enctype="multipart/form-data" action="/api2/common_user/cropHeadUrl" style="display: block; cursor: pointer; position: absolute; left: 0px; top: 0px; width: 1242px; height: 61px; opacity: 0; margin: 0px; padding: 0px; overflow: hidden;">
      <input v-bind:disabled="uploading" v-bind:id="'g-core-upload-input-' + formID" v-bind:name="inputOfFile" type="file" v-bind:accept="inputAccept" v-on:change="change" style="width: 100%; height: 100%;">
    </form>
    <div class="g-core-image-corp-container" v-bind:id="'vciu-modal-' + formID" v-show="hasImage">
    <div class="image-aside">
      <div class="g-crop-image-box">
        <div class="g-crop-image-principal">
          <img v-bind:src="image.src" v-bind:style="{ width:image.width + 'px',height: image.height + 'px' }">
          <div class="select-recorte" v-on:touchstart.self="drag" v-on:mousedown.self="drag" style="width:100px;height:100px;">
            <div class="g-s-resize" style="z-index: 90;"></div>
            <div class="g-e-resize" style="z-index: 90;"></div>
            <div class="g-resize" v-on:touchstart.self="resize" v-on:mousedown.self="resize"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="info-aside">
      <p class="btn-groups">
        <button type="button" v-on:click="doCrop" class="btn btn-upload">{{cropBtn.ok}}</button>
        <button type="button" v-on:click="cancel()" class="btn btn-cancel">{{cropBtn.cancel}}</button>
      </p>
    </div>
</div>
  </div>


</template>

<style src="./style/style.css">
</style>

<script>

  import Drag from './lib/drag';
  import Resize from './lib/resize';
  import xhr from './lib/xhr';
  import GIF_LOADING_SRC from './lib/loading-gif';

  export default {
    props:{
      url: {
        type: String,
      },
      text: {
        type:String,
        default:  'Upload Image'
      },
      class: {
        type: Array,
        default:function() {
          return [];
        }
      },
      extensions: {
        type: String,
        default:'png.jpg,jpeg,gif,svg,webp'
      },
      inputOfFile: {
        type: String,
        default: 'files'
      },
      crop: {
        type: Boolean,
        default: false,
      },
      cropBtn: {
        type: Object,
        default: function() {
          return {
            ok: 'Ok',
            cancel: 'Cancel',
          }
        }
      },
      cropRatio: {
        type: String,
        default: '1:1'
      },
      maxFileSize:{
        type: Number,
        default: 1024 * 1024 * 100,
      },
      maxWidth:{
        type: Number,
      },
      maxHeight:{
        type: Number,
      },
      inputAccept:{
        type: String,
        default: 'image/jpg,image/jpeg,image/png'
      },
      isXhr: {
        type: Boolean,
        default: true
      },
      headers: {
        type: Object,
        default: function() {
          return {};
        }
      },
      data: {
        type: Object,
        default: function() {
          return {};
        }
      }
    },
    data() {
      return {
        files: [],
        hasImage: false,
        options: this.props,
        uploading: false,
        formID: (Math.random() * 10000 + '').split('.')[0],
        image:{
          src: GIF_LOADING_SRC,
          width:24,
          height:24,
        },
      }
    },

    methods: {
      __dispatch(name,res) {
        this.$emit && this.$emit(name, res);
      },
      __find(str) {
        let dq = document.querySelector('#vciu-modal-' + this.formID);
        return dq.querySelector(str);
      },
      change(e) {
        let fileVal = document.querySelector('#g-core-upload-input-' + this.formID).value.replace(/C:\\fakepath\\/i, "");
        let fileExt = fileVal.substring(fileVal.lastIndexOf(".") + 1);
        const extensionsArr = this.extensions.split(',');
        if(extensionsArr.length>1) {
            var reg = new RegExp('^[' + extensionsArr.join('|') + ']+$','i');
            if (!reg.test(fileExt)) {
                return this.__dispatch('errorhandle','TYPE ERROR');
            }
        }

        if (e.target.files[0].size > this.maxFileSize) {
            var formatSize;
            if (parseInt(this.maxFileSize / 1024 / 1024) > 0) {
                formatSize = (this.maxFileSize / 1024 / 1024).toFixed(2) + 'MB';
            } else if (parseInt(this.maxFileSize / 1024) > 0) {
                formatSize = (this.maxFileSize / 1024).toFixed(2) + 'kB';
            } else {
                formatSize = options.maxFileSize.toFixed(2) + 'Byte';
            }
            console.warn('FILE IS TOO LARGER MAX FILE IS ' + formatSize);
            return this.__dispatch('errorhandle','FILE IS TOO LARGER MAX FILE IS ' + formatSize);
        }

        this.files = e.target.files;

        if(this.crop) {
          this.__showImage();
          return;

        }
        this. __dispatch('imagechanged',this.files[0]);
        this.tryAjaxUpload();

      },


      __showImage() {

        this.hasImage = true;
        this.__readFiles();
      },

       __readFiles() {
        let reader = new FileReader();
        let self = this;
        reader.onload = function(e) {
          let src = e.target.result;
          self.__initImage(src);

        }
         reader.readAsDataURL(this.files[0]);
      },

      // set the image size
      __initImage(src) {
        let pic = new Image();
        let self = this;
        pic.src = src;

        pic.onload= function() {
          self.image.src = src;
          self.image.width = pic.naturalWidth;
          self.image.height = pic.naturalHeight;
          self.__reseyLayout();
          self.__initCropBox();
        }
      },

      // init crop area
      __initCropBox (){
        let dq = document.querySelector('#vciu-modal-' + this.formID);
        let $selectCropBox = dq.querySelector('.select-recorte');
        let $wrap = dq.querySelector('.g-crop-image-principal');
        let imageWidth = parseInt($wrap.style['width']),
            imageHeight = parseInt($wrap.style['height']);
        let ratioW = this.cropRatio.split(':')[0],
            ratioH = this.cropRatio.split(':')[1];
        let Swidth = (imageWidth / 100) * 80;
        let Sheight = (Swidth / ratioW) * ratioH;
        $selectCropBox.style.cssText = 'width:' + Swidth + 'px;height: ' + Sheight + 'px;left:' + (imageWidth - Swidth) / 2 + 'px;top:' + (imageHeight - Sheight) / 2 + 'px;';
        if (Sheight > imageHeight) {
          Sheight = (imageHeight / 100) * 80;
          Swidth = (Sheight * ratioW) / ratioH;
          $selectCropBox.style.cssText = 'width:' + Swidth + 'px;height:' + Sheight + 'px;left:' + (imageWidth - Swidth) / 2 + 'px;top:' + (imageHeight - Sheight) / 2 + 'px';
        };

      },


      // reset layout
      __reseyLayout: function() {
        let H = window.innerHeight - 80,
            W = window.innerWidth - 60,
            imageWidth = this.image.width,
            imageHeight = this.image.height;
        // caculate the image ratio
        let R = imageWidth / imageHeight;
        let Rs = W / H;
        let dq = document.querySelector('#vciu-modal-' + this.formID);
        let $container = dq.querySelector('.g-crop-image-principal');
        if (R > Rs) {
          this.image.width = W;
          this.image.height = W / R;
          // I don't hope to use a state to change the container stye
          $container.style.cssText = 'width:' + W + 'px;height:' + W / R + 'px;margin-top:' + (H - W / R) / 2 + 'px';

        } else {
          this.image.width =  H * R,
          this.image.height = H;

          $container.style.cssText = 'width:' + H * R + 'px;height:' + H + 'px;margin-left:' + (W - H * R) / 2 + 'px;';
        }
        this.imgChangeRatio = imageWidth / this.image.width;

      },

      doCrop(e) {
        let btn = e.target;
        btn.value = btn.value + '...';
        btn.disabled = true;
        if(typeof this.data !== 'object') {
          this.data = {};
        }

        let $selectCrop = this.__find('.select-recorte');
        this.data["request"] = "crop";

        this.data["toCropImgX"] = parseInt(window.getComputedStyle($selectCrop).left) * this.imgChangeRatio;
        this.data["toCropImgY"] = parseInt(window.getComputedStyle($selectCrop).top) * this.imgChangeRatio;
        this.data["toCropImgW"] = parseInt(window.getComputedStyle($selectCrop).width)  * this.imgChangeRatio;
        this.data["toCropImgH"] = parseInt(window.getComputedStyle($selectCrop).height)  * this.imgChangeRatio;
        this.tryAjaxUpload(function() {
          btn.value = btn.value.replace('...','');
          btn.disabled = false;
        });

      },


      cancel() {
        this.hasImage = false;
        this.files = '';
        document.querySelector('#g-core-upload-input-' + this.formID).value = '';
      },

      // use ajax upload  IE9+
      tryAjaxUpload(callback) {
        this. __dispatch('imageuploading',this.files[0]);
        if (!this.isXhr) {
          if(this.crop) {
            this.hasImage = false;
          }
          return typeof callback === 'function' && callback();
        }
        const self = this;
        let data = new FormData();
        for(let i=0;i<this.files.length;i++) {
          data.append(self.inputOfFile, this.files[i]);
        }
        if (typeof this.data === 'object') {

            for(let k in this.data) {
              if(this.data[k] !== undefined) {
                data.append(k,this.data[k]);
              }
            }

        }
        xhr('POST',this.url, this.headers, data,function(res) {
          if(typeof callback === 'function') {
            callback();
          }
          self.uploading = false;
          if(self.crop) {
              self.hasImage = false;
           }
           document.querySelector("#g-core-upload-input-" + self.formID).value = '';
           self.__dispatch('imageuploaded',res);
        });
      },

      // resize and drag move
      resize(e) {
        e.stopPropagation();
        let $el = e.target.parentElement;
        let $container = this.__find('.g-crop-image-principal');
        let resizedObj = new Resize($el,$container,this.cropRatio,e);
      },

      drag(e) {
        e.preventDefault();
        let $el = e.target;
        let $container = this.__find('.g-crop-image-principal');
        let dragObj = new Drag($el,$container,e);
      }
    },

  };

</script>
