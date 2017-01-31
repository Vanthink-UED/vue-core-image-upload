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
    drags = function (e) {
      self.drag(e);
    };
    stopD = function(e) {
      self.stopDrag(e);
    }
    if(isMobile) {
      document.addEventListener('touchmove', drags, false);
      document.addEventListener('touchend', stopD, false)
    }
    document.addEventListener('mousemove', drags, false);
    document.addEventListener('mouseup', stopD, false);

  }

  drag(e) {
    if(!this.el) {
      return;
    }
    let $dotBox = document.querySelector('.g-crop-image-principal');
    let $topH = document.querySelector('.info-aside');
    let $halfX = parseInt(document.body.offsetWidth) - parseInt(window.getComputedStyle($dotBox).width);
    let $halfY = parseInt(document.body.offsetHeight) - parseInt(window.getComputedStyle($dotBox).height) - parseInt(window.getComputedStyle($topH).height);
    let resetX = isMobile ? e.changedTouches[0]['clientX'] : e.clientX;
    let resetY = isMobile ? e.changedTouches[0]['clientY'] : e.clientY;

    if (this.splitX > this.splitY) {
      if (parseInt(resetX) >= ($halfX / 2) + parseInt(window.getComputedStyle($dotBox).width)) {
        return;
      } else {
        if (parseInt(this.el.offsetWidth) >= parseInt(window.getComputedStyle($dotBox).width)) {
          this.el.style.width = window.getComputedStyle($dotBox).width;
        };
        this.el.style.width = (this.coor.w + (isMobile ? e.changedTouches[0]['clientX']:e.clientX) - this.coor.x) + 'px';
        this.el.style.height = parseInt(this.el.offsetWidth) * (this.splitY / this.splitX) + 'px';
        //限制拖拉的范围在图片内
        if ( parseInt(window.getComputedStyle($dotBox).width) >  parseInt(window.getComputedStyle($dotBox).height)) {
          if (parseInt(this.el.offsetWidth) >= parseInt(window.getComputedStyle($dotBox).height)) {
            this.el.style.height = window.getComputedStyle($dotBox).height;
            this.el.style.width = parseInt(window.getComputedStyle($dotBox).height) * (this.splitX / this.splitY) + 'px';
            return;
          };
        } else if(parseInt(window.getComputedStyle($dotBox).width) <  parseInt(window.getComputedStyle($dotBox).height)) {
          if (parseInt(this.el.offsetWidth) >= parseInt(window.getComputedStyle($dotBox).width)) {
            this.el.style.width = window.getComputedStyle($dotBox).width;
            this.el.style.height = parseInt(window.getComputedStyle($dotBox).width) * (this.splitY / this.splitX) + 'px';
            return;
          }
        } else {
          if (parseInt(this.el.offsetHeight) >= parseInt(window.getComputedStyle($dotBox).width)) {
            this.el.style.width = window.getComputedStyle($dotBox).width;
            this.el.style.height = parseInt(window.getComputedStyle($dotBox).width) * (this.splitY / this.splitX) + 'px';
            return;
          }
        }
      }
    } else if(this.splitX < this.splitY){
      if (parseInt(resetY) >= ($halfY / 2) + parseInt(window.getComputedStyle($dotBox).height) + parseInt(window.getComputedStyle($topH).height)) {
        return;
      } else {
        this.el.style.height = (this.coor.h + (isMobile ? e.changedTouches[0]['clientY']:e.clientY) - this.coor.y) + 'px';
        this.el.style.width = parseInt(this.el.style.height) * (this.splitX / this.splitY) + 'px';
        //限制拖拉的范围在图片内
        if ( parseInt(window.getComputedStyle($dotBox).width) >  parseInt(window.getComputedStyle($dotBox).height)) {
          if (parseInt(this.el.offsetHeight) >= parseInt(window.getComputedStyle($dotBox).height)) {
            this.el.style.height = window.getComputedStyle($dotBox).height;
            this.el.style.width = parseInt(window.getComputedStyle($dotBox).height) * (this.splitX / this.splitY) + 'px';
            return;
          };
        } else if(parseInt(window.getComputedStyle($dotBox).width) <  parseInt(window.getComputedStyle($dotBox).height)) {
          if (parseInt(this.el.offsetWidth) >= parseInt(window.getComputedStyle($dotBox).width)) {
            this.el.style.width = window.getComputedStyle($dotBox).width;
            this.el.style.height = parseInt(window.getComputedStyle($dotBox).width) * (this.splitY / this.splitX) + 'px';
            return;
          }
        } else {
          if (parseInt(this.el.offsetWidth) >= parseInt(window.getComputedStyle($dotBox).width)) {
            this.el.style.width = window.getComputedStyle($dotBox).width;
            this.el.style.height = parseInt(window.getComputedStyle($dotBox).width) * (this.splitY / this.splitX) + 'px';
            return;
          }
        }
      }
    } else {
      if (parseInt(resetX) >= ($halfX / 2) + parseInt(window.getComputedStyle($dotBox).width)) {
        //现在拖拉范围不准超过某一边的范围
        return;
      } else {

        this.el.style.width = (this.coor.w + (isMobile ? e.changedTouches[0]['clientX']:e.clientX) - this.coor.x) + 'px';
        this.el.style.height = this.el.style.width;
        //限制拖拉的范围在图片内
        if ( parseInt(window.getComputedStyle($dotBox).width) >  parseInt(window.getComputedStyle($dotBox).height)) {
          if (parseInt(this.el.offsetHeight) >= parseInt(window.getComputedStyle($dotBox).height)) {
            this.el.style.height = window.getComputedStyle($dotBox).height;
            this.el.style.width = window.getComputedStyle($dotBox).height;
          };
        } else if(parseInt(window.getComputedStyle($dotBox).width) <  parseInt(window.getComputedStyle($dotBox).height)) {
          if (parseInt(this.el.offsetWidth) >= parseInt(window.getComputedStyle($dotBox).width)) {
            this.el.style.width = window.getComputedStyle($dotBox).width;
            this.el.style.height = window.getComputedStyle($dotBox).width;
          }
        } else {
          if (parseInt(this.el.offsetWidth) >= parseInt(window.getComputedStyle($dotBox).width)) {
            this.el.style.width = this.el.style.height = window.getComputedStyle($dotBox).width;
          }
        }
      }
    }
    // if(isMobile) {
    //   document.addEventListener('touchend',this.stopDrag.bind(this),false);
    // } else {
    //   document.addEventListener('mouseup',this.stopDrag.bind(this),false);
    // }
  }

  stopDrag(e) {
    this.el = null;
    if(isMobile) {
      document.removeEventListener('touchmove',drags,false);
      document.removeEventListener('touchend',stopD,false);
    }
    document.removeEventListener('mousemove',drags,false);
    document.removeEventListener('mouseup',stopD,false);
    //this.container = null;
  }
};