<template>
  <div class="g-core-image-upload-btn">
    <slot>{{text}}</slot>
    <form class="g-core-image-upload-form" v-show="!hasImage" method="post" enctype="multipart/form-data" action="" style="">
      <input 
        :disabled="uploading" 
        :name="name" 
        :multiple="multiple" 
        type="file" 
        :accept="inputAccept" 
        @change="change" 
        @dragover="dragover" 
        @dragenter="dragover" 
        @dragleave="dragleave" 
        @dragend="dragleave" 
        @drop="dragleave" />
    </form>
    <div class="g-core-image-corp-container" v-show="hasImage">
      <crop 
        ref="cropBox" 
        :is-resize="resize && !crop" 
        :ratio="cropRatio" 
        :is-rotate="rotate">
      </crop>
      <div class="info-aside">
        <p class="btn-groups rotate-groups" style="display:none">
          <button type="button" @click="doRotate" class="btn btn-rotate">↺</button>
          <button type="button" @click="doReverseRotate" class="btn btn-reverserotate">↻</button>
        </p>
        <p class="btn-groups" v-if="crop">
          <button type="button" @click="doCrop" class="btn btn-upload">{{cropBtn.ok}}</button>
          <button type="button" @click="cancel" class="btn btn-cancel">{{cropBtn.cancel}}</button>
        </p>
        <p class="btn-groups" v-if="resize && !crop">
          <button type="button" @click="doResize" class="btn btn-upload">{{ResizeBtn.ok}}</button>
          <button type="button" @click="cancel" class="btn btn-cancel">{{ResizeBtn.cancel}}</button>
        </p>
      </div>
    </div>
  </div>
</template>

<style src="./style/style.css">
</style>

<script>
  import xhr from 'core-image-xhr';
  import daycaca from 'daycaca';
  import GIF_LOADING_SRC from './lib/loading-gif';
  import props from './props';
  import Crop from './crop.vue';
  import ResizeBar from './resize-bar.vue';

  // remember the overflow value
  let overflowVal = '';
  export default {
    components: {
      Crop,
      ResizeBar
    },
    props: props,
    data() {
      return {
        files: [],
        hasImage: false,
        options: this.props,
        uploading: false,
        image:{
          src: GIF_LOADING_SRC,
          width:24,
          height:24,
          minProgress: 0.05,
        },
      }
    },

    computed: {
      name() {
        if(this.multiple) {
          return this.inputOfFile + '[]';
        }
        return this.inputOfFile;
      }
    },

    methods: {
      __dispatch(name,res, data) {
        this.$emit && this.$emit(name, res, data);
      },

      __find(el) {
        return this.$el.querySelector(el);
      },

      dragover() {
        this.$el.classList.add('is-dragover');
      },

      dragleave() {
        let element = this.$refs.container;
        this.$el.classList.remove('is-dragover');
      },

      change(e) {
        let fileVal = e.target.value.replace(/C:\\fakepath\\/i, "");
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

        if (this.multipleSize > 0 && e.target.files.length > this.multipleSize) {
              console.warn('FILE NUM IS LARGER THAN ' + this.multipleSize);
              return this.__dispatch('errorhandle', 'FILE NUM OVERLOAD');
          }

        this.files = e.target.files;
        if (this.crop || this.resize) {
          this.__showImage();
          return;
        }
        const file =  this.files.length > 1 ? this.files : this.files[0];
        this. __dispatch('imagechanged', file);
        if (this.compress && this.files[0]['type'] !== 'image/png' && this.files[0]['type'] !== 'image/gif') {
          daycaca.compress(this.files[0], 100 - this.compress, (code) => {
            this.tryAjaxUpload('', true, code);
          });
        } else {
          this.tryAjaxUpload();
        }
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
          overflowVal = document.body.style.overflow;
          document.body.style.overflow = 'hidden';
          self.__initImage(src);
        }
        reader.readAsDataURL(this.files[0]);
      },

      // set the image size
      __initImage(src) {
        let pic = new Image();
        let self = this;
        pic.src = src;
        const cropBox = this.$refs.cropBox;
        pic.onload= function() {
          self.image.minProgress = self.minWidth / pic.naturalWidth;
          daycaca.init(src, (src) => {
            self.imgChangeRatio = cropBox.setImage(src, pic.naturalWidth, pic.naturalHeight);
          });
        }
      },

      resizeImage(progress) {
        const cropBox = this.$refs.cropBox;
        cropBox.resizeImage(progress);
      },

      doRotate(e) {
        let self = this;
        const cropBox = this.$refs.cropBox;
        const targetImage = cropBox.getCropImage();
        this.data.compress = 100 - this.compress;
        return daycaca.rotate(targetImage, 1, (src) => {
            self.__initImage(src)
          })
      },

      doReverseRotate(e) {
        let self = this;
        const cropBox = this.$refs.cropBox;
        const targetImage = cropBox.getCropImage();
        this.data.compress = 100 - this.compress;
        return daycaca.rotate(targetImage, -1, (src) => {
            self.__initImage(src)
          })
      },

      doCrop(e) {
        this.__setData('crop');
        const cropBox = this.$refs.cropBox;
        const upload = this.__setUpload(e.target);
        if (this.crop === 'local') {
          const targetImage = cropBox.getCropImage();
          this.data.compress = 100 - this.compress;
          return daycaca.crop(targetImage, this.data, (code) => {
            upload(code);
            this.__dispatch('imagechanged', code);
          })
        }
        upload();
      },

      doResize(e) {
        this.__setData('resize');
        const cropBox = this.$refs.cropBox;
        const upload = this.__setUpload(e.target);
        if (this.resize === 'local') {
          const targetImage = cropBox.getCropImage();
          this.data.compress = 100 - this.compress;
          return daycaca.resize(targetImage, this.data, (code) => {
            upload(code);
            this.__dispatch('imagechanged', code);
          })
        }
        upload();
      },

      __setData(type) {
        if (typeof this.data !== 'object') {
          this.data = {};
        }
        this.data["request"] = type;
        const cropBox = this.$refs.cropBox;
        const newCSSObj = cropBox.getCropData();
        for (const k of Object.keys(newCSSObj)) {
          this.data[k] = newCSSObj[k];
        }
        if (this.maxWidth) {
          this.data['maxWidth'] = this.maxWidth;
        }
        if (this.maxHeight) {
          this.data['maxHeight'] = this.maxHeight;
        }
        if (this.minWidth) {
          this.data['minWidth'] = this.minWidth;
        }
      },

      __setUpload(btn) {
        btn.value = btn.value + '...';
        btn.disabled = true;
        const upload = (code) => {
          this.tryAjaxUpload(() => {
            btn.value = btn.value.replace('...','');
            btn.disabled = false;
          }, code ? true: false, code);
        };
        return upload;
      },

      cancel() {
        this.hasImage = false;
        document.body.style.overflow = overflowVal;
        this.files = '';
        const cropBox = this.$refs.cropBox;
        cropBox.setOriginalSrc(null);
        this.$input.value = '';
      },

      // use ajax upload  IE10+
      tryAjaxUpload(callback, isBinary, base64Code) {
        const self = this;
        this. __dispatch('imageuploading',this.files[0]);
        const done = function(res) {
          if(typeof callback === 'function') {
            callback();
          }
          self.uploading = false;
          self.cancel();
          self.__dispatch('imageuploaded',res, self.data);
        };
        const errorUpload = function(err) {
          self.__dispatch('errorhandle', err);
        };
        if (!this.isXhr) {
          if(this.crop) {
            this.hasImage = false;
          }
          return done();
        }
        let data;
        if (isBinary) {
          data = {
            type: this.files[0]['type'],
            filename: this.files[0]['name'],
            filed: this.inputOfFile,
            base64Code: base64Code
          };
          if (typeof this.data === 'object') {
            data = Object.assign(this.data, data);
          }
        } else {
          data = new FormData();
          for (let i=0;i<this.files.length;i++) {
            data.append(this.name, this.files[i]);
          }
          if (typeof this.data === 'object') {
            for(let k in this.data) {
              if(this.data[k] !== undefined) {
                data.append(k,this.data[k]);
              }
            }
          }
        }
        xhr('POST',this.url, this.headers, data, done, errorUpload, isBinary, this.credentials);
      },
    },
    
    mounted() {
      this.$input = this.__find('input');
    }

  };

</script>
