/** Reszie
 * @el  dom
 * @container  dom
 * @ratio  string '1:1' like this
 * e events
 **/
import helper from './helper';

const isMobile = helper.isMobile;

const W = document.body.offsetWidth;
const H = document.body.offsetHeight;
export default function resize(e, el, container, coor, ratio) {
  if (!el) {
    return ;
  }
  const ratioRemainder = 1 / ratio;
  const dotBoxW = parseInt(window.getComputedStyle(container).width);
  const dotBoxH = parseInt(window.getComputedStyle(container).height);
  const $topH = document.querySelector('.info-aside');
  const $halfX = W - dotBoxW;
  const topH = window.getComputedStyle($topH).height;
  const $halfY = H - dotBoxH - topH;
  const resetX = isMobile ? e.changedTouches[0]['clientX'] : e.clientX;
  const resetY = isMobile ? e.changedTouches[0]['clientY'] : e.clientY;
  const elOffsetWidth = parseInt(el.offsetWidth);
  const elOffsetHeight = parseInt(el.offsetHeight);
  const CSSObj = {};
  if (ratio >= 1) {
    if (parseInt(resetX) <= ($halfX / 2) + dotBoxW) {
      if (elOffsetWidth >= dotBoxW) {
        CSSObj.width = window.getComputedStyle($dotBox).width;
      }
      CSSObj.width = (coor.w + (isMobile ? e.changedTouches[0]['clientX'] : e.clientX) - coor.x);
      CSSObj.height = elOffsetWidth * ratioRemainder;
      if (dotBoxW > dotBoxH) {
        if (elOffsetWidth >= dotBoxH) {
          CSSObj.height = dotBoxH;
          CSSObj.width = dotBoxH * ratio;
        }
      } else if (dotBoxW < dotBoxH) {
        if (elOffsetWidth >= dotBoxW) {
          CSSObj.width = dotBoxW;
          CSSObj.height = dotBoxW * ratioRemainder;
        }
      } else if (elOffsetWidth >= dotBoxW) {
        CSSObj.width = dotBoxW ;
        CSSObj.height = dotBoxW * ratioRemainder;
      }
    }
  } else if (ratio < 1) {
    if (parseInt(resetY) <= ($halfY / 2) + dotBoxH + topH) {
      CSSObj.height = (coor.h + (isMobile ? e.changedTouches[0]['clientY'] : e.clientY) - coor.y);
      CSSObj.width = parseInt(el.style.height) * ratio;
      // 限制拖拉的范围在图片内
      if (dotBoxW > dotBoxH) {
        if (elOffsetHeight >= dotBoxH) {
          CSSObj.height = dotBoxH;
          CSSObj.width = dotBoxH * ratio;
        }
      } else if (dotBoxW < dotBoxH) {
        if (elOffsetWidth >= dotBoxW) {
          CSSObj.width = dotBoxW;
          CSSObj.height = dotBoxW * ratioRemainder;
        }
      } else if (elOffsetWidth >= dotBoxW) {
        CSSObj.width = dotBoxW;
        CSSObj.height = dotBoxW * ratioRemainder;
      }
    }
  } else if (parseInt(resetX) <= ($halfX / 2) + dotBoxW) {
    CSSObj.width = (coor.w + (isMobile ? e.changedTouches[0]['clientX'] : e.clientX) - coor.x);
    CSSObj.height = el.style.width;
    // limit the copr box area
    if (dotBoxW > dotBoxH) {
      if (elOffsetHeight >= dotBoxH) {
        CSSObj.height = dotBoxH;
        CSSObj.width = dotBoxH;
      }
    } else if (dotBoxW < dotBoxH) {
      if (elOffsetWidth >= dotBoxW) {
        CSSObj.width = dotBoxW;
        CSSObj.height = dotBoxW;
      }
    } else if (elOffsetWidth >= dotBoxW) {
      CSSObj.width = el.style.height = dotBoxW;
    }
  }
  return CSSObj;
};
