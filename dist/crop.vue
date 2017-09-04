<template>
<div class="image-aside">
  <div class="g-crop-image-box" >
    <div class="g-crop-image-principal" v-on:touchstart="drag" v-on:mousedown="drag">
      <div class="image-wrap"  :style="{ width: width + 'px',height: height + 'px', left: left+ 'px', top: top + 'px', backgroundImage: 'url(' + src + ')', cursor: isResize ? 'default' : 'move'}">
        <img ref="crop-image" style="width:0;height:0;" :src="src" />
      </div>
      <div class="image-mask" v-if="!isResize">
        <div class="mask top" :style="{ top:0, height: cropCSS.top + 'px', left: 0, width: '100%'}"></div>
        <div class="mask bottom" :style="{ bottom:0, top: (cropCSS.top + cropCSS.height) + 'px', left: 0, width: '100%'}"></div>
        <div class="mask left" :style="{top: cropCSS.top + 'px', height: cropCSS.height + 'px', left:0, width: cropCSS.left + 'px'}"></div>
        <div class="mask right" :style="{top: cropCSS.top + 'px', height: cropCSS.height + 'px', left: (cropCSS.left + cropCSS.width) + 'px', right: 0}"></div>
      </div>
      <div class="crop-box" v-if="!isResize" :style="{top: cropCSS.top + 'px', left: cropCSS.left + 'px', height: cropCSS.height + 'px',  width: cropCSS.width + 'px'}">
        <div class="reference-line v"></div>
        <div class="reference-line h"></div>
        <a class="g-resize" v-on:touchstart.self="resize" v-on:mousedown.self="resize"></a>
      </div>
    </div>
    <resize-bar v-if="resize" ref="resizeBar" @resize="resizeImage"></resize-bar>
    <rotate-bar v-if="isRotate" @rotate="rotateImage"></rotate-bar>
  </div>
</div>
</template>

<style scoped>
.g-crop-image-principal{
  overflow: hidden;
  position: relative;
  background-color: #fff;
  background-image: -webkit-linear-gradient(bottom left, #efefef 25%, transparent 25%, transparent 75%, #efefef 75%, #efefef),-webkit-linear-gradient(bottom left, #efefef 25%, transparent 25%, transparent 75%, #efefef 75%, #efefef);
  background-image: -moz-linear-gradient(bottom left, #efefef 25%, transparent 25%, transparent 75%, #efefef 75%, #efefef),-moz-linear-gradient(bottom left, #efefef 25%, transparent 25%, transparent 75%, #efefef 75%, #efefef);
  background-image: -o-linear-gradient(bottom left, #efefef 25%, transparent 25%, transparent 75%, #efefef 75%, #efefef),-o-linear-gradient(bottom left, #efefef 25%, transparent 25%, transparent 75%, #efefef 75%, #efefef);
  background-image: linear-gradient(to top right, #efefef 25%, transparent 25%, transparent 75%, #efefef 75%, #efefef),linear-gradient(to top right, #efefef 25%, transparent 25%, transparent 75%, #efefef 75%, #efefef);
  background-position: 0 0,10px 10px;
  -webkit-background-size: 21px 21px;
  background-size: 21px 21px;
}
.image-aside{
  overflow: hidden;
  position: absolute;
  right: 30px;
  left:30px;
  top:70px;
  bottom:40px;
  text-align: center;
}
.image-aside .image-wrap{
  position: absolute;
  left: 0;
  top: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  box-shadow: 0 3px 5px -2px rgba(0,0,0,.25);
  background-size: cover;
}
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
  z-index: 2000;
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
import canvasHelper from './lib/canvas-helper';
import ResizeBar from './resize-bar.vue';
import RotateBar from './rotate-bar.vue';
// set cropbox size in image
const CROPBOX_PERCENT = 75;
const isMobile = helper.isMobile;
const areaWidth = window.innerWidth - 60;
const areaHeight = window.innerHeight - 110;
export default {
  components: {
    ResizeBar,
    RotateBar,
  },
  props: {
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
    isResize: {
      type: [Boolean],
      default: false,
    },
    isRotate: {
      type: [Boolean],
      default: true,
    }
  },

  data() {
    return {
      src: GIF_LOADING_SRC,
      width: 24,
      height: 24,
      initWidth: 24,
      initHeight: 24,
      left: 0,
      top: 0,
      cropCSS: {

      }
    }
  },

  methods: {
    setImage(src, w, h) {
      this.src = src;
      if (!this.originSrc) {
        this.setOriginalSrc(this.src);
      }
      if (this.ratio.indexOf(':') > 0) {
        this.ratioW = this.ratio.split(':')[0];
        this.ratioH = this.ratio.split(':')[1];
        this.ratioVal = this.ratioW / this.ratioH;
      } else {
        this.ratioW = 1;
        this.ratioH = 1;
        this.ratioVal = this.ratio;
      }
      this.natrualWidth = w;
      this.natrualHeight = h;
      this.setLayout(w, h);
      const resizeBar = this.$refs.resizeBar;
      if (this.isResize) {
        resizeBar.setProgress(100);
      } else {
        resizeBar.setProgress(0);
      }
      return this.imgChangeRatio;
    },

    setOriginalSrc(src) {
      this.originSrc = src;
    },

    resizeImage(progress) {
      let w,
          h;
      if (this.isResize) {
        w = this.natrualWidth * this.imgChangeRatio * progress;
        h = this.natrualHeight * this.imgChangeRatio * progress;
      } else {
        w = this.initWidth + progress * (this.natrualWidth - this.initWidth);
        h = this.initHeight + progress * (this.natrualHeight - this.initHeight);
      }
      if (w <= this.minWidth || h < this.minHeight) {
        return;
      }
      this.left += (this.width - w) / 2;
      this.top += (this.height - h) / 2;
      this.width = w;
      this.height = h;
      this.imgChangeRatio = this.width / this.natrualWidth;
    },

    rotateImage(degress) {
      const data = canvasHelper.rotate2(this.originSrc, degress, (data, w, h) => {
        this.setImage(data, w, h);
      });
      //this.src = src;
    },

    setLayout(w, h) {
      let H = areaHeight,
          W = areaWidth,
          width = w,
          height = h,
          marginLeft = 0,
          marginTop = 0;
      // caculate the image ratio
      let R = width / height;
      let Rs = W / H;
      if (R > Rs) {
        height = H;
        width = H * R;
        marginLeft = (W - H * R) / 2;
      } else {
        width =  H * R,
        height = H;
        marginLeft = (W - H * R) / 2;
      }
      this._setStyle(width, height, marginLeft, marginTop, R, true);
    },

    _setStyle(w, h, ml, mt, r, isInit) {
      const $container = this.$el.querySelector('.g-crop-image-principal');
      if(!isInit) {
        this.marginLeft = this.marginLeft + (this.width - w) / 2;
        this.marginTop = this.marginTop + (this.height - h) / 2;
      }
      $container.style.cssText = 'width:' + w + 'px;height:' + h + 'px;margin-left:'
      + ml + 'px;' + 'margin-top:' + mt + 'px';
      this.setCropBox(w, h);
      if (this.isResize) {
        this.width = w;
        this.height = h;
      } else {
        if (r >= this.cropCSS.width/this.cropCSS.height) {
          this.height = this.cropCSS.height;
          this.width = this.height * r;
        } else {
          this.width = this.cropCSS.width;
          this.height = this.width / r;
        }
        this.initWidth = this.width;
        this.initHeight = this.height;
        this.left = (w - this.width) / 2;
        this.top = (h - this.height) / 2;
      }
      this.imgChangeRatio = this.width / this.natrualWidth;
    },

    setCropBox(w, h, r) {
      if (this.isResize) {
        return;
      }
      let $selectCropBox = this.__find('.crop-box');
      let $wrap = this.$el;
      let imageWidth = w,
          imageHeight = h,
          ratioW = this.ratioW,
          ratioH = this.ratioH;
      let cropWidth = imageWidth;
      if (areaWidth < w) {
        cropWidth = areaWidth;
      }
      const baseCropWidth = (cropWidth / 100) * CROPBOX_PERCENT;
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
      if (this.isResize) {
        return {
          imgChangeRatio: this.imgChangeRatio,
          toCropImgX: 0,
          toCropImgY: 0,
          toCropImgW: this.natrualWidth,
          toCropImgH: this.natrualHeight,
        };
      }
      return {
        toCropImgX: (this.cropCSS.left - this.left) / this.imgChangeRatio,
        toCropImgY: (this.cropCSS.top - this.top) / this.imgChangeRatio,
        toCropImgW: this.cropCSS.width / this.imgChangeRatio,
        toCropImgH: this.cropCSS.height / this.imgChangeRatio,
      };
    },

    getCropImage() {
      return this.$refs['crop-image'];
    },

    __find(str) {
      let dq = this.$el;
      return dq.querySelector(str);
    },
    // resize and drag move
    resize(e) {
      e.stopPropagation();
      if (!this.ratio.indexOf(':')) {
          return;
      }
      let $el = e.target.parentElement;
      let $container = this.__find('.g-crop-image-principal');
      if (this._$container) {
        this._$container = container;
      }
      const self = this;
      const coor = {
        x: helper.isMobile ? e.touches[0].clientX : e.clientX,
        y: helper.isMobile ? e.touches[0].clientY : e.clientY,
        w: $el.offsetWidth,
        h: $el.offsetHeight,
      };
      this.el = $el;
      this.container = $container;
      const maxCoor = this._getMaxCropAreaWidth();
      const move = function (ev) {
        const newCropStyle = resize(ev, self.el, $container, coor, self.ratioVal);
        if (newCropStyle && (newCropStyle.width <= maxCoor.maxWidth || newCropStyle.height <= maxCoor.maxHeight)) {
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

    _getMaxCropAreaWidth() {
      const $cropBox = this.__find('.crop-box');
      if (this.width > this.height) {
        return {
          maxWidth: this.height * this.ratioW / this.ratioH,
          maxHeight: this.height,
        }
      }
      return {
        maxWidth: this.width,
        maxHeight: this.width * this.ratioH / this.ratioW,
      };
    },

    drag(e) {
      e.preventDefault();
      const $el = this.__find('.image-wrap');
      this.el = $el;
      const $cropBox = this.__find('.crop-box');
      const $container = e.currentTarget;
      const self = this;
      const isMobile = helper.isMobile;
      const coor = {
        x: (isMobile ? e.touches[0]['clientX'] : e.clientX) - $el.offsetLeft,
        y: (isMobile ? e.touches[0]['clientY'] : e.clientY) - $el.offsetTop,
        maxLeft: $cropBox.offsetLeft,
        maxTop: $cropBox.offsetTop,
        minLeft: ($cropBox.offsetWidth + $cropBox.offsetLeft) - $el.offsetWidth,
        minTop: ($cropBox.offsetHeight + $cropBox.offsetTop) - $el.offsetHeight,
      };
      const move = function (ev) {
        const newCropStyle = drag(ev, self.el, coor);
        if (newCropStyle) {
          self.left = newCropStyle.left;
          self.top = newCropStyle.top;
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
