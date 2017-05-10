<template>
  <div class="g-resize-bar">
    <div class="g-resize-highlight" :style="{width: left + '%',}"></div>
    <button class="circle-btn" @touchstart.self="drag" @mousedown.self="drag" :style="{left: left + '%',}"></button>
  </div>
</template>

<style scoped>
  .g-resize-bar{
    position: absolute;
    margin: 17px auto;
    height: 6px;
    border-radius: 3px;
    width:200px;
    margin-left: -100px;
    left: 50%;
    background-color: #ddd;
  }
  .g-resize-highlight{
    position: absolute;
    left: 0;
    top:0;
    height: 6px;
    background-color: #27ae60;
    border-radius: 3px;
  }
  .circle-btn{
    display: block;
    position: absolute;
    left:0;
    top: -5px;
    width: 14px;
    height: 14px;
    margin-left: -7px;
    background-color: #fff;
    border-radius: 7px;
    box-shadow: 0 2px 4px -2px rgba(0,0,0,.5), 0 -2px 4px -2px rgba(0,0,0,.45);
    border-width: 0;
  }

  @media all and (max-width:480px) {
    .g-resize-bar{
      width:120px;
      margin-left: auto;
      left:10px;
    }

  }
</style>

<script>
import helper from './lib/helper';
import drag from './lib/drag';

export default {
  props: {
    minProgress: {
      type:[Number, String],
      default: 0,
    }

  },
  data() {
    return {
      progress: 100,
      left: 100,
    }
  },

  methods: {
    setRatio(num) {
      this.progress = 100;
      this.left = 100;
    },

    drag(e) {
      e.preventDefault();
      const $el = e.target;
      this.el = $el;
      const $container = this.$el.parentElement;
      const self = this;
      const isMobile = helper.isMobile;
      const width = document.querySelector('.g-resize-bar').offsetWidth;
      const coor = {
        x: (isMobile ? e.touches[0]['clientX'] : e.clientX) - $el.offsetLeft - $el.parentElement.offsetLeft,
        y: (isMobile ? e.touches[0]['clientY'] : e.clientY) - $el.offsetTop - $el.parentElement.offsetTop,
        posX: isMobile ? e.touches[0]['clientX'] : e.clientX,
        posy: isMobile ? e.touches[0]['clientY'] : e.clientY,
        maxLeft: width,
        maxTop: parseInt($container.style.height) - parseInt($el.style.height),
      };
      const move = function (ev) {
        const newCoor = drag(ev, self.el, coor);
        if (newCoor) {
          if((newCoor.left / width) < self.minProgress) {
            return;
          }
          self.progress = newCoor.left / width;
          self.left = newCoor.left / width * 100;

          self.$emit('resize', self.progress);
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
    }

  },


};
</script>
