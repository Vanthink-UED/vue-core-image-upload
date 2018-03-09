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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
* compress image
* reference https://github.com/brunobar79/J-I-C
**/

/* harmony default export */ __webpack_exports__["default"] = ({
  _getImageType(str) {
    let mimeType = 'image/jpeg';
    const outputType = str.match(/(image\/[\w]+)\.*/)[0];
    if (typeof outputType !== 'undefined'){
      mimeType = outputType;
    }
    return mimeType;
  },

  compress (src, quality, callback) {
    const reader = new FileReader();
    const self = this;
    reader.onload = function(event) {
      const image = new Image();
      image.src = event.target.result;
      image.onload = function() {
        const mimeType = self._getImageType(src.type);
        const cvs = self._getCanvas(image.naturalWidth, image.naturalHeight);
        const ctx = cvs.getContext("2d").drawImage(image, 0, 0);
        const newImageData = cvs.toDataURL(mimeType, quality/100);
        callback(newImageData);
      }
    };
    reader.readAsDataURL(src);
  },
  /**
  * crop image via canvas and generate data
  **/
  crop(image, options, callback) {
    const checkNumber = function(num) {
      return (typeof num === 'number');
    };
    // check crop options
    if (checkNumber(options.toCropImgX) &&
        checkNumber(options.toCropImgY) &&
        options.toCropImgW > 0 &&
        options.toCropImgH > 0) {
      let w = options.toCropImgW;
      let h = options.toCropImgH;
      if(options.maxWidth && options.maxWidth < w) {
        w = options.maxWidth;
        h = options.toCropImgH * w / options.toCropImgW;
      }
      if (options.maxHeight && options.maxHeight < h) {
        h = options.maxHeight
      }
      const cvs = this._getCanvas(w, h);
      const ctx = cvs.getContext('2d').drawImage(image, options.toCropImgX, options.toCropImgY, options.toCropImgW, options.toCropImgH, 0 , 0, w, h);
      const mimeType = this._getImageType(image.src);
      const data = cvs.toDataURL(mimeType, options.compress/100);
      callback(data);
    }
  },

  /**
  * init image for reset size and rotation
  **/
  init(src, callback) {
      let image = new Image();
      image.src = src;
      var self = this;
      image.onload = function() {
        var mimeType = self._getImageType(image.src);
        var cvs = self._getCanvas(image.naturalWidth, image.naturalHeight);
        var ctx = cvs.getContext("2d");
        ctx.drawImage(image, 0, 0);
        var newImageData = cvs.toDataURL(mimeType, 100);
        callback(newImageData);
      }
  },

  /**
  * rotate image via canvas
  **/
  rotate(imageData, direction, callback) {
      let image = new Image();
      image.src = imageData.src;
      var self = this;
      image.onload = function() {
        var mimeType = self._getImageType(image.src);
        var cvs = self._getCanvas(image.naturalHeight, image.naturalWidth);
        var ctx = cvs.getContext("2d");
        if (direction == 1) {
            ctx.rotate(90 * Math.PI / 180);
            ctx.translate(0, -cvs.width);
        } else {
            ctx.rotate(-90 * Math.PI / 180);
            ctx.translate(-cvs.height, 0);
        }
        ctx.drawImage(image, 0, 0);
        var newImageData = cvs.toDataURL(mimeType, 100);
        callback(newImageData);
      }
  },

  resize(image, options, callback) {
    const checkNumber = function(num) {
      return (typeof num === 'number');
    };
    if (checkNumber(options.toCropImgX) && checkNumber(options.toCropImgY) && options.toCropImgW > 0 && options.toCropImgH > 0) {
      const w = options.toCropImgW  * options.imgChangeRatio;
      const h = options.toCropImgH * options.imgChangeRatio;
      const cvs = this._getCanvas(w, h);
      const ctx = cvs.getContext('2d').drawImage(image, 0, 0, options.toCropImgW, options.toCropImgH, 0, 0, w , h);
      const mimeType = this._getImageType(image.src);
      const data = cvs.toDataURL(mimeType, options.compress / 100);
      callback(data);
    }
  },

  rotate2(src, degrees, callback) {
    this._loadImage(src, (image) => {
      let w = image.naturalWidth;
      let h = image.naturalHeight;
      const canvasWidth = Math.max(w, h);
      const cvs = this._getCanvas(canvasWidth, canvasWidth);
      const ctx = cvs.getContext('2d');
      ctx.save();
      ctx.translate(canvasWidth / 2, canvasWidth / 2);
      ctx.rotate(degrees * (Math.PI / 180));
      let x = -canvasWidth / 2;
      let y = -canvasWidth / 2;
      degrees %= 360;
      if (degrees === 0) {
        return callback(src, w, h);
      }
      if ((degrees % 180) !== 0) {
        if (degrees === -90 || degrees === 270) {
          x = -w + canvasWidth / 2;
        } else {
          y = canvasWidth / 2 - h;
        }
        const c = w;
        w = h;
        h = c;
      } else {
        x = canvasWidth / 2 - w;
        y = canvasWidth / 2 - h;
      }
      ctx.drawImage(image, x, y);
      const cvs2 = this._getCanvas(w, h);
      const ctx2 = cvs2.getContext('2d');
      ctx2.drawImage(cvs, 0, 0, w, h, 0, 0, w, h);
      const mimeType = this._getImageType(image.src);
      const data = cvs.toDataURL(mimeType, 1);
      callback(data, w, h);
    });
  },

  _loadImage(data, callback) {
    const image = new Image();
    image.src = data;
    image.onload = function () {
      callback(image);
    };
    image.onerror = function () {
      console.log('Error: image error!');
    };
  },

  _getCanvas(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  },

});


/***/ })

/******/ });
});