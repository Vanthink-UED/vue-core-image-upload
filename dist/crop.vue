<template>
<div class="g-crop-image-principal">
  <div class="image-wrap" :style="{ width:width + 'px',height: height + 'px' }">
    <img ref="crop-image" :src="src" :style="{ width:'100%',height: '100%', }">
  </div>
  <div class="image-mask" v-if="!hideCrop">
    <div class="mask top" :style="{ top:0, height: cropCSS.top + 'px', left: 0, width: '100%'}"></div>
    <div class="mask bottom" :style="{ bottom:0, top: (cropCSS.top + cropCSS.height) + 'px', left: 0, width: '100%'}"></div>
    <div class="mask left" :style="{top: cropCSS.top + 'px', height: cropCSS.height + 'px', left:0, width: cropCSS.left + 'px'}"></div>
    <div class="mask right" :style="{top: cropCSS.top + 'px', height: cropCSS.height + 'px', left: (cropCSS.left + cropCSS.width) + 'px', right: 0}"></div>
  </div>
  <div class="crop-box" v-if="!hideCrop" v-on:touchstart.self="drag" v-on:mousedown.self="drag" :style="{top: cropCSS.top + 'px', left: cropCSS.left + 'px', height: cropCSS.height + 'px',  width: cropCSS.width + 'px'}">
    <div class="reference-line v"></div>
    <div class="reference-line h"></div>
    <a class="g-resize" v-on:touchstart.self="resize" v-on:mousedown.self="resize"></a>
  </div>
</div>
</template>

<style scoped>
.image-mask{
  position: absolute;
  left: 0;
  top: 0;
  width:100%;
  height: 100%;
}
.image-mask .mask {
  position: absolute;
  background-color: rgba(255,255,255,.6);
}
.crop-box{
  box-sizing: border-box;
  position: absolute;
  background: none;
  cursor: move;
  width:100px;
  height: 100px;
  border:1px solid rgba(255,255,255, .95);
}
.crop-box:after,
.crop-box:before{
  content: '';
  display: block;
  opacity: 0;
  position: absolute;
  left: 33.3333%;
  top: 0;
  width: 33.334%;
  height: 100%;
  background-color: transparent;
  border-color: rgba(255,255,255,.7);
  border-style: solid;
  border-width: 0;
}
.crop-box:active::before,
.crop-box:active::after{
  opacity: 1;
}
.crop-box:before{
  border-left-width: 1px;
  border-right-width: 1px;
}
.crop-box:after{
  top: 33.3333%;
  left: 0;
  height: 33.3334%;
  width: 100%;
  border-top-width: 1px;
  border-bottom-width: 1px;

}
.crop-box .g-resize{
  display: inline-block;
  z-index: 1910;
  position: absolute;
  bottom: -8px;
  right: -8px;
  width: 16px;
  height: 16px;
  cursor: se-resize;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px -2px rgba(0,0,0,.25);
}
</style>

<script>
import drag from './lib/drag';
import resize from './lib/resize';
import GIF_LOADING_SRC from './lib/loading-gif';
import helper from './lib/helper';
// set cropbox size in image
const CROPBOX_PERCENT = 75;
export default {
  props: {
    formId: {
      type: String,
      default: '',
    },
    ratio: {
      type: String,
      default: '1:1'
    },
    minWidth: {
      type: Number,
      default: 50,
    },
    minHeight: {
      type: Number,
      default: 50,
    },
    hideCrop: {
      type: [String, Boolean],
      default: false,
    }
  },

  data() {
    return {
      src: GIF_LOADING_SRC,
      width: 24,
      height: 24,
      cropCSS: {

      }
    }
  },

  methods: {
    setImage(src, w, h) {
      this.src = src;
      if (this.ratio.indexOf(':') > 0) {
        this.ratioW = this.ratio.split(':')[0];
        this.ratioH = this.ratio.split(':')[1];
        this.ratioVal = this.ratioW / this.ratioH;
      } else {
        this.ratioW = 1;
        this.ratioH = 1;
        this.ratioVal = this.ratio;
      }
      this.setLayout(w, h);
      this.setCropBox();
      this.natrualWidth = w;
      this.natrualHeight = h;
      return this.imgChangeRatio;
    },

    resizeImage(progress) {
      const w = this.natrualWidth * this.imgChangeRatio * progress;
      const h = this.natrualHeight * this.imgChangeRatio * progress;
      if (w <= this.minWidth || h < this.minHeight) {
        return;
      }
      this._setStyle(w, h, w/h);
      this.setCropBox();
    },

    setLayout(w, h) {
      let H = window.innerHeight - 80,
          W = window.innerWidth - 60,
          width = w,
          height = h,
          marginLeft = 0;

      // caculate the image ratio
      let R = width / height;
      let Rs = W / H;
      if (R > Rs) {
        width = W;
        height = W / R;
        marginLeft =  (H - W / R) / 2;
      } else {
        width =  H * R,
        height = H;
        marginLeft = (W - H * R) / 2;
      }
      this.marginLeft = marginLeft;
      this.marginTop = 0;
      this.imgChangeRatio = width / w;
      this._setStyle(width, height, R, true);
    },

    _setStyle(w, h, r, isInit) {
      const $container = this.$el;
      if(!isInit) {
        this.marginLeft = this.marginLeft + (this.width - w) / 2;
        this.marginTop = this.marginTop + (this.height - h) / 2;
      }
      $container.style.cssText = 'width:' + w + 'px;height:' + h + 'px;margin-left:'
      + this.marginLeft + 'px;' + 'margin-top:' + this.marginTop + 'px';
      this.width = w;
      this.height = h;
    },

    setCropBox() {
      if (this.hideCrop) {
        return;
      }
      let $selectCropBox = this.__find('.crop-box');
      let $wrap = this.$el;
      let imageWidth = this.width,
          imageHeight = this.height;
      let ratioW = this.ratioW,
          ratioH = this.ratioH;
      const baseCropWidth = (imageWidth / 100) * CROPBOX_PERCENT;
      const CSSObj = {
        width: baseCropWidth,
        height: (baseCropWidth / ratioW) * ratioH,
      }
      CSSObj.left = (imageWidth - baseCropWidth) / 2;
      CSSObj.top = (imageHeight - CSSObj.height) / 2;
      $selectCropBox.style.cssText = helper.setCssText(CSSObj);
      if (CSSObj.height > imageHeight) {
        const baseCropHeight = (imageHeight / 100) * CROPBOX_PERCENT
        CSSObj.height = baseCropHeight;
        CSSObj.width = (CSSObj.height * ratioW) / ratioH;
        CSSObj.left = (imageWidth - CSSObj.width) / 2,
        CSSObj.top = (imageHeight - CSSObj.height) / 2,
        $selectCropBox.style.cssText = helper.setCssText(CSSObj);
      };
      this.cropCSS = CSSObj;
    },

    getCropData() {
      // keep compatible with old api
      if (this.hideCrop) {
        return {
          imgChangeRatio: this.imgChangeRatio,
          toCropImgX: 0,
          toCropImgY: 0,
          toCropImgW: this.natrualWidth,
          toCropImgH: this.natrualHeight,
        };
      }
      return {
        toCropImgX: this.cropCSS.left / this.imgChangeRatio,
        toCropImgY: this.cropCSS.top / this.imgChangeRatio,
        toCropImgW: this.cropCSS.width / this.imgChangeRatio,
        toCropImgH: this.cropCSS.height / this.imgChangeRatio,
      };
    },

    getCropImage() {
      return this.$refs['crop-image'];
    },

    __find(str) {
      let dq = document.querySelector('#vciu-modal-' + this.formId);
      return dq.querySelector(str);
    },
    // resize and drag move
    resize(e) {
      e.stopPropagation();
      let $el = e.target.parentElement;
      let $container = this.__find('.g-crop-image-principal');
      if (this._$container) {
        this._$container = container;
      }
      const self = this;
      const coor = {
        x: helper.isMobile ? e.touches[0].clientX : e.clientX,
        y: helper.isMobile ? e.touches[0].clientY : e.clientY,
        w: parseInt(window.getComputedStyle($el).width, 10),
        h: parseInt(window.getComputedStyle($el).height, 10)
      };
      this.el = $el;
      this.container = $container;
      const move = function (ev) {
        const newCropStyle = resize(ev, self.el, $container, coor, self.ratioVal);
        if (newCropStyle) {
          self.cropCSS.width = newCropStyle.width;
          self.cropCSS.height = newCropStyle.height;
        }

      };
      const end = function (ev) {
        this.el = null;
        if (helper.isMobile) {
          document.removeEventListener('touchmove', move, false);
          document.removeEventListener('touchend', end, false);
        }
        document.removeEventListener('mousemove', move, false);
        document.removeEventListener('mouseup', end, false);
      };

      if (helper.isMobile) {
        document.addEventListener('touchmove', move, false);
        document.addEventListener('touchend', end, false);
      }
      document.addEventListener('mousemove', move, false);
      document.addEventListener('mouseup', end, false);
    },

    drag(e) {
      e.preventDefault();
      const $el = e.target;
      this.el = $el;
      const $container = this.$el;
      const $infoAside = document.getElementsByClassName('image-aside')[0];
      const self = this;
      const isMobile = helper.isMobile;
      const coor = {
        x: (isMobile ? e.touches[0]['clientX'] : e.clientX) - $el.offsetLeft - $el.parentElement.offsetLeft - $infoAside.offsetLeft,
        y: (isMobile ? e.touches[0]['clientY'] : e.clientY) - $el.offsetTop - $el.parentElement.offsetTop - $infoAside.offsetTop,
        posX: isMobile ? e.touches[0]['clientX'] : e.clientX,
        posy: isMobile ? e.touches[0]['clientY'] : e.clientY,
        maxLeft: parseInt($container.style.width) - parseInt($el.style.width),
        maxTop: parseInt($container.style.height) - parseInt($el.style.height),
      };
      const move = function (ev) {
        const newCropStyle = drag(ev, self.el, coor);
        if (newCropStyle) {
          self.cropCSS.left = newCropStyle.left;
          self.cropCSS.top = newCropStyle.top;
        }
      };
      const stopMove = function (ev) {
        self.el = null;
        if (isMobile) {
          document.removeEventListener('touchmove', move, false);
          document.removeEventListener('touchend', stopMove, false);
          return;
        }
        document.removeEventListener('mousemove', move, false);
        document.removeEventListener('mouseup', stopMove, false);
      };
      if (isMobile) {
        document.addEventListener('touchmove', move, false);
        document.addEventListener('touchend', stopMove, false);
        return;
      }
      document.addEventListener('mousemove', move, false);
      document.addEventListener('mouseup', stopMove, false);
    },
  },

}
</script>
