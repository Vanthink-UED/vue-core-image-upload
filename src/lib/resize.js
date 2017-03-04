/** Reszie
 * @el  dom
 * @container  dom
 * @ratio  string '1:1' like this
 * e events
 **/
import helper from './helper';

let drags;
let stopD;
const isMobile = helper.isMobile;
const W = document.body.offsetWidth;
const H = document.body.offsetHeight;
export default class Resize {
  constructor($el, $container, ratio, e) {
    e.stopPropagation();
    const self = this;
    this.coor = {
      x: isMobile ? e.touches[0].clientX : e.clientX,
      y: isMobile ? e.touches[0].clientY : e.clientY,
      w: parseInt(window.getComputedStyle($el).width, 10),
      h: parseInt(window.getComputedStyle($el).height, 10)
    };
    this.splitX = ratio.split(':')[0];
    this.splitY = ratio.split(':')[1];
    this.el = $el;
    this.container = $container;
    drags = function (ev) {
      self.drag(ev);
    };
    stopD = function (ev) {
      self.stopDrag(ev);
    };
    if (isMobile) {
      document.addEventListener('touchmove', drags, false);
      document.addEventListener('touchend', stopD, false);
    }
    document.addEventListener('mousemove', drags, false);
    document.addEventListener('mouseup', stopD, false);
  }

  drag(e) {
    if (!this.el) {
      return;
    }
    const $dotBox = this.container;
    const dotBoxW = parseInt(window.getComputedStyle($dotBox).width);
    const dotBoxH = parseInt(window.getComputedStyle($dotBox).height);
    const $topH = document.querySelector('.info-aside');
    const $halfX = W - dotBoxW;
    const $halfY = H - dotBoxH - window.getComputedStyle($topH).height;
    const resetX = isMobile ? e.changedTouches[0]['clientX'] : e.clientX;
    const resetY = isMobile ? e.changedTouches[0]['clientY'] : e.clientY;
    if (this.splitX > this.splitY) {
      if (parseInt(resetX) <= ($halfX / 2) + dotBoxW) {
        if (parseInt(this.el.offsetWidth) >= dotBoxW) {
          this.el.style.width = window.getComputedStyle($dotBox).width;
        }
        this.el.style.width = (this.coor.w + (isMobile ? e.changedTouches[0]['clientX'] : e.clientX) - this.coor.x) + 'px';
        this.el.style.height = parseInt(this.el.offsetWidth) * (this.splitY / this.splitX) + 'px';
        if (dotBoxW > dotBoxH) {
          if (parseInt(this.el.offsetWidth) >= parseInt(window.getComputedStyle($dotBox).height)) {
            this.el.style.height = window.getComputedStyle($dotBox).height;
            this.el.style.width = parseInt(window.getComputedStyle($dotBox).height) * (this.splitX / this.splitY) + 'px';
          }
        } else if (dotBoxW < dotBoxH) {
          if (parseInt(this.el.offsetWidth) >= dotBoxW) {
            this.el.style.width = window.getComputedStyle($dotBox).width;
            this.el.style.height = dotBoxW * (this.splitY / this.splitX) + 'px';
          }
        } else if (parseInt(this.el.offsetHeight) >= dotBoxW) {
          this.el.style.width = dotBoxW;
          this.el.style.height = dotBoxW * (this.splitY / this.splitX) + 'px';
        }
      }
    } else if (this.splitX < this.splitY) {
      if (parseInt(resetY) <= ($halfY / 2) + dotBoxH + window.getComputedStyle($topH).height) {
        this.el.style.height = (this.coor.h + (isMobile ? e.changedTouches[0]['clientY'] : e.clientY) - this.coor.y) + 'px';
        this.el.style.width = parseInt(this.el.style.height) * (this.splitX / this.splitY) + 'px';
        // 限制拖拉的范围在图片内
        if (dotBoxW > dotBoxH) {
          if (parseInt(this.el.offsetHeight) >= dotBoxH) {
            this.el.style.height = dotBoxH;
            this.el.style.width = dotBoxH * (this.splitX / this.splitY) + 'px';
          }
        } else if (dotBoxW < dotBoxH) {
          if (parseInt(this.el.offsetWidth) >= dotBoxW) {
            this.el.style.width = dotBoxW;
            this.el.style.height = dotBoxW * (this.splitY / this.splitX) + 'px';
          }
        } else if (parseInt(this.el.offsetWidth) >= dotBoxW) {
          this.el.style.width = dotBoxW;
          this.el.style.height = dotBoxW * (this.splitY / this.splitX) + 'px';
        }
      }
    } else if (parseInt(resetX) <= ($halfX / 2) + dotBoxW) {
      this.el.style.width = (this.coor.w + (isMobile ? e.changedTouches[0]['clientX'] : e.clientX) - this.coor.x) + 'px';
      this.el.style.height = this.el.style.width;
      // 限制拖拉的范围在图片内
      if (dotBoxW > dotBoxH) {
        if (parseInt(this.el.offsetHeight) >= dotBoxH) {
          this.el.style.height = dotBoxH;
          this.el.style.width = dotBoxH;
        }
      } else if (dotBoxW < dotBoxH) {
        if (parseInt(this.el.offsetWidth) >= dotBoxW) {
          this.el.style.width = dotBoxW;
          this.el.style.height = dotBoxW;
        }
      } else if (parseInt(this.el.offsetWidth) >= dotBoxW) {
        this.el.style.width = this.el.style.height = dotBoxW;
      }
    }
  }

  stopDrag() {
    this.el = null;
    if (isMobile) {
      document.removeEventListener('touchmove', drags, false);
      document.removeEventListener('touchend', stopD, false);
    }
    document.removeEventListener('mousemove', drags, false);
    document.removeEventListener('mouseup', stopD, false);
  }
}
