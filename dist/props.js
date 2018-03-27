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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  url: {
    type: String
  },
  text: {
    type: String,
    default: 'Upload Image'
  },
  extensions: {
    type: String,
    default: 'png,jpg,jpeg,gif,svg,webp'
  },
  inputOfFile: {
    type: String,
    default: 'files'
  },
  crop: {
    type: [String, Boolean],
    default: ''
  },
  cropBtn: {
    type: Object,
    default: function _default() {
      return {
        ok: 'Ok',
        cancel: 'Cancel'
      };
    }
  },
  cropRatio: {
    type: String,
    default: '1:1'
  },
  resize: {
    type: [String, Boolean],
    default: false
  },
  rotate: {
    type: Boolean,
    default: false
  },
  ResizeBtn: {
    type: Object,
    default: function _default() {
      return {
        ok: 'Ok',
        cancel: 'Cancel'
      };
    }
  },
  maxFileSize: {
    type: Number,
    default: 1024 * 1024 * 100
  },
  maxWidth: {
    type: Number
  },
  maxHeight: {
    type: Number
  },
  inputAccept: {
    type: String,
    default: 'image/jpg,image/jpeg,image/png,image/gif'
  },
  isXhr: {
    type: Boolean,
    default: true
  },
  headers: {
    type: Object,
    default: function _default() {
      return {};
    }
  },
  data: {
    type: Object,
    default: function _default() {
      return {};
    }
  },
  multiple: {
    type: Boolean,
    default: false
  },
  multipleSize: {
    type: Number,
    default: 0
  },
  minWidth: {
    type: Number,
    default: 50
  },
  compress: {
    type: [Number, String],
    default: 0
  },
  credentials: {
    type: [String, Boolean],
    default: true
  }
};

/***/ })

/******/ });
});