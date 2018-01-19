(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueCoreImageUpload"] = factory();
	else
		root["VueCoreImageUpload"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/** Reszie an element
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
	    return null;
	  }
	  const H = document.body.offsetHeight;
	  const ratioRemainder = 1 / ratio;
	  const dotBoxW = parseFloat(window.getComputedStyle(container).width);
	  const dotBoxH = parseFloat(window.getComputedStyle(container).height);
	  const $topH = document.querySelector('.info-aside');
	  const halfX = (W - dotBoxW) / 2;
	  const topH = parseFloat(window.getComputedStyle($topH).height);
	  const halfY = (H - dotBoxH - topH) / 2;
	  const resetX = isMobile ? e.changedTouches[0]['clientX'] : e.clientX;
	  const resetY = isMobile ? e.changedTouches[0]['clientY'] : e.clientY;
	  const elOffsetWidth = el.offsetWidth;
	  const elOffsetHeight = el.offsetHeight;
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
	      CSSObj.width = dotBoxW;
	      CSSObj.height = dotBoxW * ratioRemainder;
	    }
	  } else if (ratio < 1 && resetY < (halfY + dotBoxH + topH)) {
	    CSSObj.height = (coor.h + resetY - coor.y);
	    CSSObj.width = elOffsetHeight * ratio;
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
	  } else if (ratio === 'auto' && resetY <= (halfY + dotBoxH + topH) && resetX <= halfY + dotBoxW) {
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


/***/ }
/******/ ])
});
;