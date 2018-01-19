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
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),

  /**
   * transform object to css text
  */
  setCssText: function setCssText(obj) {
    var cssArr = [];
    Object.keys(obj).forEach(function (key) {
      var val = obj[key];
      if (typeof val === 'number') {
        val = '' + val + 'px';
      }
      cssArr.push(key + ': ' + val + ';');
    });
    return cssArr.join('');
  },
  isFunction: function isFunction(fn) {
    return typeof fn === 'function';
  }
};

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resize;

var _helper = __webpack_require__(0);

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isMobile = _helper2.default.isMobile; /** Reszie an element
                                           * @el  dom
                                           * @container  dom
                                           * @ratio  string '1:1' like this
                                           * e events
                                           **/

var W = document.body.offsetWidth;

function resize(e, el, container, coor, ratio) {
  if (!el) {
    return null;
  }
  var H = document.body.offsetHeight;
  var ratioRemainder = 1 / ratio;
  var dotBoxW = parseFloat(window.getComputedStyle(container).width);
  var dotBoxH = parseFloat(window.getComputedStyle(container).height);
  var $topH = document.querySelector('.info-aside');
  var halfX = (W - dotBoxW) / 2;
  var topH = parseFloat(window.getComputedStyle($topH).height);
  var halfY = (H - dotBoxH - topH) / 2;
  var resetX = isMobile ? e.changedTouches[0]['clientX'] : e.clientX;
  var resetY = isMobile ? e.changedTouches[0]['clientY'] : e.clientY;
  var elOffsetWidth = el.offsetWidth;
  var elOffsetHeight = el.offsetHeight;
  var CSSObj = {};
  if (ratio >= 1 && resetX <= halfX + dotBoxW) {
    if (elOffsetWidth >= dotBoxW) {
      CSSObj.width = dotBoxW;
    }
    CSSObj.width = coor.w + resetX - coor.x;
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
  } else if (ratio < 1 && resetY < halfY + dotBoxH + topH) {
    CSSObj.height = coor.h + resetY - coor.y;
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
  } else if (ratio === 'auto' && resetY <= halfY + dotBoxH + topH && resetX <= halfY + dotBoxW) {
    CSSObj.height = coor.h + resetY - coor.y;
    CSSObj.width = coor.w + resetX - coor.x;
  } else if (resetX <= halfX + dotBoxW) {
    CSSObj.width = coor.w + resetX - coor.x;
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
      CSSObj.width = dotBoxW;
      el.style.height = dotBoxW;
    }
  }
  return CSSObj;
};

/***/ })

/******/ });
});