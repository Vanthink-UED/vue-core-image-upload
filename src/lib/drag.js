import helper from './helper';

const isMobile = helper.isMobile;
export default function drag(e, el, coor) {
  if (!el) {
    return;
  }
  const currentX = isMobile ? e.changedTouches[0]['clientX'] : e.clientX;
  const currentY = isMobile ? e.changedTouches[0]['clientY'] : e.clientY;

  let left = currentX - el.parentElement.offsetLeft - coor.x;
  let top = currentY - el.parentElement.offsetTop - document.getElementsByClassName('image-aside')[0].offsetTop - coor.y;
  if (left <= 0) {
    left = 0;
  }
  if (left >= coor.maxLeft) {
    left = coor.maxLeft;
  }
  if (top <= 0) {
    top = 0;
  }
  if (top >= coor.maxTop) {
    top = coor.maxTop;
  }
  return {
    left,
    top
  }
};
