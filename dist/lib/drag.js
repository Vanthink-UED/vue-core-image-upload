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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = {
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),

  setCssText: function(obj) {
    var cssArr = [];
    for(var key in obj) {
      var val = obj[key];
      if (typeof val === 'number') {
        val = '' + val + 'px';
      }
      cssArr.push(key + ': ' + val + ';');
    }
    return cssArr.join('');
  }
};


/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = drag;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__helper__);


const isMobile = __WEBPACK_IMPORTED_MODULE_0__helper___default.a.isMobile;
function drag(e, dom, coor, isCrop = false) {
  if (!dom.el) {
    return;
  }
  const currentX = isMobile ? e.changedTouches[0]['clientX'] : e.clientX;
  const currentY = isMobile ? e.changedTouches[0]['clientY'] : e.clientY;

  let lastP = {},left,top;
  lastP.x = coor.x || currentX;
  lastP.y = coor.y || currentY;
  if(isCrop) {
    left = dom.cropCSS.left + (currentX - lastP.x);
    top = dom.cropCSS.top + (currentY - lastP.y);
  }else {
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


/***/ })

/******/ });
});