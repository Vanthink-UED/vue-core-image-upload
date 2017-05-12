import helper from './helper';

const isMobile = helper.isMobile;
export default function drag(e, el, coor) {
  if (!el) {
    return;
  }
  const currentX = isMobile ? e.changedTouches[0]['clientX'] : e.clientX;
  const currentY = isMobile ? e.changedTouches[0]['clientY'] : e.clientY;

  let left = currentX - coor.x;
  let top = currentY - coor.y;
  if (left <= coor.minLeft) {
    left = coor.minLeft;
  }
  if (left >= coor.maxLeft) {
    left = coor.maxLeft;
  }
  if (top <= coor.minTop) {
    top = coor.minTop;
  }
  if (top >= coor.maxTop) {
    top = coor.maxTop;
  }
  return {
    left,
    top
  };
};
