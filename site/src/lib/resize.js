/** Reszie
 * @el  dom
 * @container  dom
 * @ratio  string '1:1' like this
 * e events
 **/
import helper from './helper';

const isMobile = helper.isMobile;
const W = document.body.offsetWidth;
export default function resize(e, el, container, coor, ratio) {
  if (!el) {
    return ;
  }
  const H = document.body.offsetHeight;
  const ratioRemainder = 1 / ratio;
  const dotBoxW = parseInt(window.getComputedStyle(container).width);
  const dotBoxH = parseInt(window.getComputedStyle(container).height);
  const $topH = document.querySelector('.info-aside');
  const halfX = (W - dotBoxW) / 2;
  const topH = parseInt(window.getComputedStyle($topH).height);
  const halfY = (H - dotBoxH - topH)/2;
  const resetX = isMobile ? e.changedTouches[0]['clientX'] : e.clientX;
  const resetY = isMobile ? e.changedTouches[0]['clientY'] : e.clientY;
  const elOffsetWidth = parseInt(el.offsetWidth);
  const elOffsetHeight = parseInt(el.offsetHeight);
  const CSSObj = {};
  if (ratio >= 1 && resetX <= halfX + dotBoxW) {
    if (elOffsetWidth >= dotBoxW) {
      CSSObj.width = dotBoxW;
    }
    CSSObj.width = (coor.w + resetX - coor.x);
    CSSObj.height = elOffsetWidth * ratioRemainder;
    if (dotBoxW > dotBoxH) {
      if (elOffsetWidth > dotBoxH) {
        CSSObj.height = dotBoxH;
        CSSObj.width = dotBoxH * ratio;
      }
    } else if (dotBoxW < dotBoxH) {
      if (elOffsetWidth > dotBoxW) {
        CSSObj.width = dotBoxW;
        CSSObj.height = dotBoxW * ratioRemainder;
      }
    } else if (elOffsetWidth >= dotBoxW) {
      CSSObj.width = dotBoxW ;
      CSSObj.height = dotBoxW * ratioRemainder;
    }
  } else if (ratio < 1 && resetY < (halfY + dotBoxH + topH)) {
    CSSObj.height = (coor.h + resetY - coor.y);
    CSSObj.width = parseInt(el.style.height) * ratio;
    // 限制拖拉的范围在图片内
    if (dotBoxW > dotBoxH) {
      if (elOffsetHeight > dotBoxH) {
        CSSObj.height = dotBoxH;
        CSSObj.width = dotBoxH * ratio;
      }
    } else if (dotBoxW < dotBoxH) {
      if (elOffsetWidth > dotBoxW) {
        CSSObj.width = dotBoxW;
        CSSObj.height = dotBoxW * ratioRemainder;
      }
    } else if (elOffsetWidth > dotBoxW) {
      CSSObj.width = dotBoxW;
      CSSObj.height = dotBoxW * ratioRemainder;
    }
  } else if(ratio == 'auto' && resetY <= (halfY + dotBoxH + topH) && resetX <= halfY + dotBoxW) {
    CSSObj.height = (coor.h + resetY - coor.y);
    CSSObj.width = (coor.w + resetX - coor.x);
  } else if (resetX <= halfX + dotBoxW) {
    CSSObj.width = (coor.w + resetX - coor.x);
    CSSObj.height = el.style.width;
    // limit the crop box area
    if (dotBoxW > dotBoxH) {
      if (elOffsetHeight > dotBoxH) {
        CSSObj.height = dotBoxH;
        CSSObj.width = dotBoxH;
      }
    } else if (dotBoxW < dotBoxH) {
      if (elOffsetWidth > dotBoxW) {
        CSSObj.width = dotBoxW;
        CSSObj.height = dotBoxW;
      }
    } else if (elOffsetWidth > dotBoxW) {
      CSSObj.width = el.style.height = dotBoxW;
    }
  }
  return CSSObj;
};
