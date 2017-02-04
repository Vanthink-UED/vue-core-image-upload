import helper from './helper';

const isMobile = helper.isMobile;
let moves, stopM;
export default class Drag {
  constructor($el, $container, e) {
    const self = this;
    this.el = $el;
    this.container = $container;
    this.coor = {
      x: (isMobile ? e.touches[0]['clientX'] : e.clientX) - $el.offsetLeft - $el.parentElement.offsetLeft - document.getElementsByClassName('image-aside')[0].offsetLeft
      , y: (isMobile ? e.touches[0]['clientY'] : e.clientY) - $el.offsetTop - $el.parentElement.offsetTop - document.getElementsByClassName('image-aside')[0].offsetTop
      , posX: isMobile ? e.touches[0]['clientX'] : e.clientX
      , posy: isMobile ? e.touches[0]['clientY'] : e.clientY
      , maxLeft: parseInt(this.container.style.width) - parseInt(this.el.style.width)
      , maxTop: parseInt(this.container.style.height) - parseInt(this.el.style.height)
    , };
    moves = function (e) {
      self.move(e);
    }
    stopM = function (e) {
      self.stopMove(e);
    }
    if (isMobile) {
      document.addEventListener('touchmove', moves, false);
      document.addEventListener('touchend', stopM, false);
      return;
    }
    document.addEventListener('mousemove', moves, false);
    document.addEventListener('mouseup', stopM, false);
  }
  move(e) {
    if (!this.el) {
      return;
    }
    // this.coor.posX = isMobile ? e.changedTouches[0]['clientX']:e.clientX;
    // this.coor.posY = isMobile ? e.changedTouches[0]['clientY']:e.clientY;
    var aa = isMobile ? e.changedTouches[0]['clientX'] : e.clientX;
    var bb = isMobile ? e.changedTouches[0]['clientY'] : e.clientY;
    var newPosX = aa - this.el.parentElement.offsetLeft - document.getElementsByClassName('image-aside')[0].offsetLeft - this.coor.x;
    var newPosY = bb - this.el.parentElement.offsetTop - document.getElementsByClassName('image-aside')[0].offsetTop - this.coor.y;
    if (newPosX <= 0) {
      newPosX = 0;
    }
    if (newPosX >= this.coor.maxLeft) {
      newPosX = this.coor.maxLeft;
    }
    if (newPosY <= 0) {
      newPosY = 0;
    }
    if (newPosY >= this.coor.maxTop) {
      newPosY = this.coor.maxTop;
    }
    this.el.style.left = (newPosX) + 'px';
    this.el.style.top = (newPosY) + 'px';
  }
  stopMove() {
    var self = this;
    this.el = null;
    if (isMobile) {
      document.removeEventListener('touchmove', moves, false);
      document.removeEventListener('touchend', stopM, false);
      return;
    }
    document.removeEventListener('mousemove', moves, false);
    document.removeEventListener('mouseup', stopM, false);
  }
};