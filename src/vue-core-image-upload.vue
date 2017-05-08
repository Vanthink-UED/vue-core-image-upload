<template>
  <div class="g-core-image-upload-btn">
    <slot>{{text}}</slot>
    <form class="g-core-image-upload-form" v-show="!hasImage" method="post" enctype="multipart/form-data" action="/api2/common_user/cropHeadUrl" style="display: block; cursor: pointer; position: absolute; left: 0px; top: 0px; width: 1242px; height: 61px; opacity: 0; margin: 0px; padding: 0px; overflow: hidden;">
      <input v-bind:disabled="uploading" v-bind:id="'g-core-upload-input-' + formID" v-bind:name="name" v-bind:multiple="multiple" type="file" v-bind:accept="inputAccept" v-on:change="change" style="width: 100%; height: 100%;">
    </form>
    <div class="g-core-image-corp-container" v-bind:id="'vciu-modal-' + formID" v-show="hasImage">
      <div class="image-aside">
        <div class="g-crop-image-box">
          <crop :form-id="formID" ref="cropBox" :hide-crop="resize" :ratio="cropRatio"></crop>
        </div>
      </div>
      <div class="info-aside">
        <resize-bar v-if="resize" :min-progress="image.minProgress" ref="resizeBar" @resize="resizeImage"></resize-bar>
        <p class="btn-groups" v-if="crop">
          <button type="button" v-on:click="doCrop" class="btn btn-upload">{{cropBtn.ok}}</button>
          <button type="button" v-on:click="cancel" class="btn btn-cancel">{{cropBtn.cancel}}</button>
        </p>
        <p class="btn-groups" v-if="resize">
          <button type="button" v-on:click="doResize" class="btn btn-upload">{{ResizeBtn.ok}}</button>
          <button type="button" v-on:click="cancel" class="btn btn-cancel">{{ResizeBtn.cancel}}</button>
        </p>
      </div>
  </div>
</div>
</template>

<style src="./style/style.css">
</style>

<script>
  import xhr from './lib/xhr';
  import GIF_LOADING_SRC from './lib/loading-gif';
  import canvasHelper from './lib/canvas-helper';
  import props from './props';
  import Crop from './crop.vue';
  import ResizeBar from './resize-bar.vue';

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
        formID: (Math.random() * 10000 + '').split('.')[0],
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
        if(this.crop || this.resize) {
          this.__showImage();
          return;
        }
        this. __dispatch('imagechanged', this.files[0]);
        if (this.compress) {
          canvasHelper.compress(this.files[0], 100 - this.compress, (code) => {
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
        const resizeBar = this.$refs.resizeBar;
        pic.onload= function() {
          self.image.minProgress = self.minWidth / pic.naturalWidth;
          self.imgChangeRatio = cropBox.setImage(src, pic.naturalWidth, pic.naturalHeight);
          if (resizeBar) {
            resizeBar.setRatio(self.imgChangeRatio);
          }

        }
      },

      resizeImage(progress) {
        const cropBox = this.$refs.cropBox;
        cropBox.resizeImage(progress);
      },

      doCrop(e) {
        this.__setData('crop');
        const cropBox = this.$refs.cropBox;
        const upload = this.__setUpload(e.target);
        if (this.crop === 'local') {
          const targetImage = cropBox.getCropImage();
          this.data.comprose = 100 - this.compress;
          return canvasHelper.crop(targetImage, this.data, (code) => {
            upload(code);
          })
        }
        upload();

      },

      doResize(e) {
        this.__setData('reszie');
        const cropBox = this.$refs.cropBox;
        const upload = this.__setUpload(e.target);
        if (this.resize === 'local') {
          const targetImage = cropBox.getCropImage();
          this.data.comprose = 100 - this.compress;
          return canvasHelper.resize(targetImage, this.data, (code) => {
            upload(code);
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
        this.files = '';
        document.querySelector('#g-core-upload-input-' + this.formID).value = '';
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
          self.__dispatch('imageuploaded',res);
        };
        const errorUpload = function(err) {
          self.__dispatch('errorhandle', err);
        };
        if (!this.isXhr) {
          if(this.crop) {
            this.hasImage = false;
          }
          return typeof callback === 'function' && callback();
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

        xhr('POST',this.url, this.headers, data, done, errorUpload, isBinary);
      },
    },

  };

</script>
