
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

<style>
  .g-core-image-upload-btn{
    position: relative;
    overflow: hidden;
  }
    
  .g-core-image-upload-form{
    position: absolute;
    left:0;
    right: 0;
    top:0;
    bottom:0;
    opacity: 0;
  }
  .g-core-image-upload-container{
    position: absolute;
    background: #111;
    z-index: 900;
  }
  .g-core-image-upload-modal{
    position: absolute;
    left:0;
    right:0;
    width: 100%;
    height: 100%;
    border:1px solid #ccc;
    z-index: 899;
  }
  .dropped{
    border:4px solid #ea6153;
  }

  .g-core-image-corp-container{
    z-index: 1900;
    position:fixed;
    left:0;
    right:0;
    top:0;
    bottom: 0;
    background: rgba(0,0,0,.9);
    color:#f1f1f1;
  }
  .g-core-image-corp-container .image-aside{
    overflow: hidden;
    position: absolute;
    right: 30px;
    left:30px;
    top:60px;
    bottom:20px;
    text-align: center;
  }
  .g-core-image-corp-container .image-aside img{
    max-width: 100%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .g-core-image-corp-container .info-aside{
    position: absolute;
    left:0;
    right: 0;
    top:0;
    height: 40px;
    padding-left: 10px;
    padding-right: 10px;
    background: #fefefe;
    color:#777;
  }
  .g-core-image-corp-container .info-aside .image-corp-preview{
    position: relative;
    overflow: hidden;
    text-align: center;
    border:2px solid #ccc;
  }
  .g-core-image-corp-container .info-aside .image-corp-preview.circled{
    border-radius: 160px;
  }
  .g-core-image-corp-container .info-aside .image-corp-preview img{
    width: 100%;
  }
  .g-core-image-corp-container .info-aside .config-info .image-details{
    width: 100%;
    color:#999;    
  }

  .g-core-image-corp-container .info-aside .config-info .image-details td{
    border:none; 
    line-height: 24px;
  }
  .g-core-image-corp-container .info-aside .config-info .image-details tr td:first-child{
    width:36%;  
  }
  .g-core-image-corp-container .info-aside .config-info .image-details tr td:last-child{
    color:#555; 
  }
  .g-core-image-corp-container .btn-groups{
    text-align: right;
    margin: 5px 0 0;
  }
  .g-core-image-corp-container .btn{
    display: inline-block;
    padding: 0 15px;
    height: 32px;
    margin-left: 15px;
    background: #fff;
    border:1px solid #ccc;
    border-radius: 2px;
    font-size: 13px;
    color:#222;
    line-height: 32px;
    transition: all .1s ease-in;
  }
  .g-core-image-corp-container .btn:hover{
    border:1px solid #777;
    box-shadow: 0 1px 3px rgba(0,0,0,.05); 
  }
  .g-core-image-corp-container .btn:active{
    background: #ddd;
  }
  .g-core-image-corp-container .btn:disabled{
    background: #eee !important;
    border-color:#ccc;
    cursor: not-allowed;
  }
  .g-core-image-corp-container .btn-upload{
    background: #27ae60;
    border-color:#27ae60;
    color:#fff;
  }
  .g-core-image-corp-container .btn-upload:hover{
    background: #2dc26c;
    border-color:#27ae60;
    box-shadow: 0 1px 3px rgba(0,0,0,.05); 
  }
  .g-core-image-corp-container .g-crop-image-box,.g-core-image-corp-container .g-crop-image-box .g-crop-image-principal{
    position: relative;   
      
  }
  .g-core-image-corp-container .g-crop-image-box .select-recorte{
    position: absolute;
    background: #fff;
    opacity: .5;
    border:2px dashed #555;
    cursor: move;
      
  }
  .g-core-image-corp-container .g-resize{
    z-index: 90;
    position: absolute;
    bottom: 1px;
    right: 1px;
    width: 20px;
    height: 20px;
    cursor: se-resize;
  }
  .g-core-image-corp-container .g-resize:after{
    content: '';
    display: block;
    position: absolute;
    background: #000;
    width: 5px;
    height: 5px;
    right: 0;
    bottom: 0;
  }
  .g-core-image-corp-container .g-e-resize{
    cursor: e-resize;
    position: absolute;
    width: 7px;
    right: -5px;
    top: 0;
    height: 100%;
  }
  .g-core-image-corp-container .g-s-resize{
    position: absolute;
    cursor: s-resize;
    height: 7px;
    width: 100%;
    bottom: -5px;
    left: 0;
  }  
</style>

<script>
  
  
  /*if(window.Vue.version.substring(0,1) == '1') {
    console.warn('please use vue-core-image-upload 1.x https://github.com/Vanthink-UED/vue-core-image-upload/tree/v1.x');
  }*/
  
  import Drag from './lib/drag';
  import Resize from './lib/resize';
  import xhr from './lib/xhr';
  
  const GIF_LOADING_SRC = 'data:image/gif;base64,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';
    

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
        xhr('POST',this.url,this.headers,data,function(res) {
          if(typeof callback === 'function') {
            callback();
          }
          self.uploading = false;
          if(self.crop) {
              self.hasImage = false;
           } 
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
