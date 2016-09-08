
<template>
<div class="g-core-image-upload-btn button button-full">
    {{text}}
    <form class="g-core-image-upload-form" v-show="!hasImage" method="post" enctype="multipart/form-data" action="/api2/common_user/cropHeadUrl" style="display: block; cursor: pointer; position: absolute; left: 0px; top: 0px; width: 1242px; height: 61px; opacity: 0; margin: 0px; padding: 0px; overflow: hidden;">
      <input v-disbaled="uploading" id="g-core-upload-input" name="{{inputOfFile}}" type="file" accept="image/*" v-on:change="change" style="width: 100%; height: 100%;">
    </form>
</div>  

<div class="g-core-image-corp-container" v-show="hasImage">
    <div class="image-aside">
      <div class="g-crop-image-box">
        <div class="g-crop-image-principal">
          <img v-bind:src="image.src" v-bind:style="{ width:image.width + 'px',height: image.height + 'px' }">
          <div class="select-recorte" style="width:100px;height:100px;">
            <div class="g-s-resize" style="z-index: 90;"></div>
            <div class="g-e-resize" style="z-index: 90;"></div>
            <div class="g-resize" v-on:mousedown="resize"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="info-aside">
      <p class="btn-groups">
        <button type="button" v-on:click="doCrop()" class="btn btn-upload">确定</button>
        <button type="button" v-on:click="cancel()" class="btn btn-cancel">取消</button>
      </p>
    </div>
</div>

</template>

<style>
.g-core-image-upload-btn{
    position: relative;
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
.g-core-image-corp-container .btn:active,{
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
    
}
.g-core-image-corp-container .g-resize{
  z-index: 90;
  position: absolute;
  bottom: 1px;
  right: 1px;
  width: 14px;
  height: 14px;
  cursor: se-resize;
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
  /**simple ajax handler**/

  let xhr = function (method, url, headers, data, callback,error) {

    var r = new XMLHttpRequest();
    var error = error || function() {
      console.error('AJAX ERROR!')
    };

    // Binary?
    var binary = false;
    if (method === 'blob') {
        binary = method;
        method = 'GET';
    }

    method = method.toUpperCase();

    // Xhr.responseType 'json' is not supported in any of the vendors yet.
    r.onload = function (e) {
        var json = r.response;
        try {
            json = JSON.parse(r.responseText);
        } catch (_e) {
            if (r.status === 401) {
                json = error('access_denied', r.statusText);
            }
        }

        var headers = headersToJSON(r.getAllResponseHeaders());
        headers.statusCode = r.status;

        callback(json || (method === 'GET' ? error('empty_response', 'Could not get resource') : {}), headers);
    };

    r.onerror = function (e) {
        var json = r.responseText;
        try {
            json = JSON.parse(r.responseText);
        } catch (_e) {}

        callback(json || error('access_denied', 'Could not get resource'));
    };

    var x;

    // Should we add the query to the URL?
    if (method === 'GET' || method === 'DELETE') {
        data = null;
    } else if (data && typeof (data) !== 'string' && !(data instanceof FormData) && !(data instanceof File) && !(data instanceof Blob)) {
        // Loop through and add formData
        var f = new FormData();
        for (x in data)
            if (data.hasOwnProperty(x)) {
                if (data[x] instanceof HTMLInputElement) {
                    if ('files' in data[x] && data[x].files.length > 0) {
                        f.append(x, data[x].files[0]);
                    }
                } else if (data[x] instanceof Blob) {
                    f.append(x, data[x], data.name);
                } else {
                    f.append(x, data[x]);
                }
            }

        data = f;
    }

    // Open the path, async
    r.open(method, url, true);

    if (binary) {
      if ('responseType' in r) {
          r.responseType = binary;
      } else {
          r.overrideMimeType('text/plain; charset=x-user-defined');
      }
    }

    // Set any bespoke headers
    if (headers) {
        for (x in headers) {
            r.setRequestHeader(x, headers[x]);
        }
    }

    r.send(data);

    return r;

    // Headers are returned as a string
    function headersToJSON(s) {
      var r = {};
      var reg = /([a-z\-]+):\s?(.*);?/gi;
      var m;
      while ((m = reg.exec(s))) {
          r[m[1]] = m[2];
      }

      return r;
    }
  };
  
  let resizeedObj = null;
  
  // 进行缩放
  class Resize {
    constructor($el,$container,e) {
      this.coor = {
        x: e.clientX,
        y: e.clientY,
        w: parseInt(window.getComputedStyle($el).width),
        h: parseInt(window.getComputedStyle($el).height),
      };
      this.el = $el;
      this.container = $container;
      
      this.container.addEventListener('mousemove',this.drag.bind(this),false);
      this.container.addEventListener('mouseup',this.stopDrag.bind(this),false);
    }
    
    drag(e) {
      if(!this.el) {
        return;
      }
      this.el.style.width = (this.coor.w + e.clientX - this.coor.x) + 'px';
      this.el.style.height = (this.coor.h + e.clientY - this.coor.y) + 'px';
    }
    
    stopDrag(e) {
      this.el = null;
      this.container = null;
    }
  };
  
  
  class Drag() {
    constractor($el,$container) {
      
    }
  }
  
  
  
  /** a vue plugin for image crop and upload
  *  Github: https://github.com/Vanthink-UED/vue.core.image.upload
  **/
  
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
      extensions: {
        type: String,
        default:'png.jpg,jpeg,gif,svg,webp'
      },
      uploadedCallback: {
        type: Function,
        default: function() {
          
        },
      },
      inputOfFile: {
        type: String,
        default: 'files'
      },
      
      crop: {
        type: Boolean,
        default: false,
      },
      cropRatio: {
        type: String,
        default: '1:1'
      },
      errorHandle:{
        type: Function,
        default: function(error) {
          console.error(error);
        }
      },
      maxFileSize:{
        type: Number,
        default: 1024 * 1024 * 100,
      }
    },
    data() {
      console.log(this.crop);
      return {
        files: [],
        hasImage: false,
        options: this.props,
        uploading: false,
        image:{
          src: GIF_LOADING_SRC,
          width:24,
          height:24,
        },
      }
    },
    
    methods: {
      
      __dispatch(name,res) {
        this.$dispatch && this.$dispatch(name, res);
        this.events && this.events[name] && this.events[name](res);
      },
      
      change(e) {
        let fileVal = document.querySelector('#g-core-upload-input').value.replace(/C:\\fakepath\\/i, "");
        let fileExt = fileVal.substring(fileVal.lastIndexOf(".") + 1);
        const extensionsArr = this.extensions.split(',');
        if(extensionsArr.length>1) {
            var reg = new RegExp('^[' + extensionsArr.join('|') + ']+$','i');
            if (!reg.test(fileExt)) {
                return options.extensionError();
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
            this.errorHandle('FILE IS TOO LARGER MAX FILE IS ' + formatSize);
            return;
        }
        
        this.files = e.target.files;
        console.log(this.files);
        if(this.crop) {
          this.__showImage();
          return;
            
        }
      //  this.tryAjaxUpload();  
         
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
          src = 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c20ef542264643.57c6da5de6402.png';
          self.__initImage(src);
          
        }
         reader.readAsDataURL(this.files[0]);
      },
      
      // 对图像进行处理
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
        let $selectCropBox = document.querySelector('.select-recorte');
        let $wrap = document.querySelector('.g-crop-image-principal');
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
        let $container = document.querySelector('.g-crop-image-principal'); 
        if (R > Rs) {
          this.image.width = W;
          this.image.height = H;
          // I don't hope to use a state to change the container stye
          $container.style.cssText = 'width:' + W + 'px;height:' + W / R + 'px;marginTop:' + (H - W / R) / 2 + 'px';
          
        } else {
          this.image.width =  H * R,
          this.image.height = H;
          
          $container.style.cssText = 'width:' + H * R + 'px;height:' + H + 'px;marginLeft:' + (W - H * R) / 2 + 'px;';
        }
       
      },
      
      doCrop(e) {
        let btn = e.target;
        btn.value = btn.value + '...';
        btn.disabled = true;
        this.tryAjaxUpload();
      },
      
      
      cancel() {
        this.hasImage = false;
        this.files = '';
        document.querySelector('#g-core-upload-input').value = '';
      },
      
      // use ajax upload  IE9+ 
      tryAjaxUpload(callback) {
        let self = this;
        let data = new FormData();
        for(let i=0;i<this.files.length;i++) { 
          data.append(self.inputOfFile, this.files[i]);  
        }
        
        if (typeof this.data === 'object') { 
            
            for(let k in this.data) {
              data.append(k,this.data['k']);
            }      

        }
        
        xhr('POST',this.url,{},data,function(res) {
          if(typeof callback === 'function') {
            callback();
          }
          self.uploading = false;
          if(self.enableCrop) {
              self.hasImage = false;
           } 
           self.__dispatch('imageUploaded',res);
        });  
      },
      
      // resize and drag move
      
      resize(e) {
        let $el = e.target.parentElement;
        let $container = document.querySelector('.g-crop-image-principal');
        let resizedObj = new Resize($el,$container,e);
        
      }
      
      
    },
    
  };

</script>
