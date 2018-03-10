import helper from './helper';

const isMobile = helper.isMobile;
function drag(e, dom, coor, isCrop = false) {
  if (!dom.el) {
    return;
  }
  const currentX = isMobile ? e.changedTouches[0]['clientX'] : e.clientX;
  const currentY = isMobile ? e.changedTouches[0]['clientY'] : e.clientY;

  let lastP = {}, left, top;
  lastP.x = coor.x || currentX;
  lastP.y = coor.y || currentY;
  if (isCrop) {
    left = dom.cropCSS.left + (currentX - lastP.x);
    top = dom.cropCSS.top + (currentY - lastP.y);
  } else {
    left = dom.left + (currentX - lastP.x);
    top = dom.top + (currentY - lastP.y);
  }
  /*  
   left = dom.left + (currentX - lastP.x);
   top = dom.top + (currentY - lastP.y); */
  // 让拖拽框可以随处移动
  /* if (left <= coor.minLeft) {
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
  } */
  return {
    left,
    top,
    x: currentX,
    y: currentY
  };
};
