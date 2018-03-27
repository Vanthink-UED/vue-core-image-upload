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
/******/ 	return __webpack_require__(__webpack_require__.s = 105);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(31)('wks');
var uid = __webpack_require__(19);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(6)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var createDesc = __webpack_require__(18);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(39);
var toPrimitive = __webpack_require__(34);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(40);
var defined = __webpack_require__(25);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(44);
var enumBugKeys = __webpack_require__(26);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = drag;

var _helper = __webpack_require__(0);

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isMobile = _helper2.default.isMobile; /**
                                           * return drag element coordinate
                                          */
function drag(e, el, coor) {
  if (!el) {
    return;
  }
  var currentX = isMobile ? e.changedTouches[0]['clientX'] : e.clientX;
  var currentY = isMobile ? e.changedTouches[0]['clientY'] : e.clientY;

  var left = currentX - coor.x;
  var top = currentY - coor.y;
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
    left: left,
    top: top
  };
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GIF_LOADING_SRC = 'data:image/gif;base64,R0lGODlhGAAYAPQAAP///3FxcePj4/v7++3t7dLS0vHx8b+/v+Dg4MfHx+jo6M7Oztvb2/f397Kysru7u9fX16qqqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJBwAAACwAAAAAGAAYAAAFriAgjiQAQWVaDgr5POSgkoTDjFE0NoQ8iw8HQZQTDQjDn4jhSABhAAOhoTqSDg7qSUQwxEaEwwFhXHhHgzOA1xshxAnfTzotGRaHglJqkJcaVEqCgyoCBQkJBQKDDXQGDYaIioyOgYSXA36XIgYMBWRzXZoKBQUMmil0lgalLSIClgBpO0g+s26nUWddXyoEDIsACq5SsTMMDIECwUdJPw0Mzsu0qHYkw72bBmozIQAh+QQJBwAAACwAAAAAGAAYAAAFsCAgjiTAMGVaDgR5HKQwqKNxIKPjjFCk0KNXC6ATKSI7oAhxWIhezwhENTCQEoeGCdWIPEgzESGxEIgGBWstEW4QCGGAIJEoxGmGt5ZkgCRQQHkGd2CESoeIIwoMBQUMP4cNeQQGDYuNj4iSb5WJnmeGng0CDGaBlIQEJziHk3sABidDAHBgagButSKvAAoyuHuUYHgCkAZqebw0AgLBQyyzNKO3byNuoSS8x8OfwIchACH5BAkHAAAALAAAAAAYABgAAAW4ICCOJIAgZVoOBJkkpDKoo5EI43GMjNPSokXCINKJCI4HcCRIQEQvqIOhGhBHhUTDhGo4diOZyFAoKEQDxra2mAEgjghOpCgz3LTBIxJ5kgwMBShACREHZ1V4Kg1rS44pBAgMDAg/Sw0GBAQGDZGTlY+YmpyPpSQDiqYiDQoCliqZBqkGAgKIS5kEjQ21VwCyp76dBHiNvz+MR74AqSOdVwbQuo+abppo10ssjdkAnc0rf8vgl8YqIQAh+QQJBwAAACwAAAAAGAAYAAAFrCAgjiQgCGVaDgZZFCQxqKNRKGOSjMjR0qLXTyciHA7AkaLACMIAiwOC1iAxCrMToHHYjWQiA4NBEA0Q1RpWxHg4cMXxNDk4OBxNUkPAQAEXDgllKgMzQA1pSYopBgonCj9JEA8REQ8QjY+RQJOVl4ugoYssBJuMpYYjDQSliwasiQOwNakALKqsqbWvIohFm7V6rQAGP6+JQLlFg7KDQLKJrLjBKbvAor3IKiEAIfkECQcAAAAsAAAAABgAGAAABbUgII4koChlmhokw5DEoI4NQ4xFMQoJO4uuhignMiQWvxGBIQC+AJBEUyUcIRiyE6CR0CllW4HABxBURTUw4nC4FcWo5CDBRpQaCoF7VjgsyCUDYDMNZ0mHdwYEBAaGMwwHDg4HDA2KjI4qkJKUiJ6faJkiA4qAKQkRB3E0i6YpAw8RERAjA4tnBoMApCMQDhFTuySKoSKMJAq6rD4GzASiJYtgi6PUcs9Kew0xh7rNJMqIhYchACH5BAkHAAAALAAAAAAYABgAAAW0ICCOJEAQZZo2JIKQxqCOjWCMDDMqxT2LAgELkBMZCoXfyCBQiFwiRsGpku0EshNgUNAtrYPT0GQVNRBWwSKBMp98P24iISgNDAS4ipGA6JUpA2WAhDR4eWM/CAkHBwkIDYcGiTOLjY+FmZkNlCN3eUoLDmwlDW+AAwcODl5bYl8wCVYMDw5UWzBtnAANEQ8kBIM0oAAGPgcREIQnVloAChEOqARjzgAQEbczg8YkWJq8nSUhACH5BAkHAAAALAAAAAAYABgAAAWtICCOJGAYZZoOpKKQqDoORDMKwkgwtiwSBBYAJ2owGL5RgxBziQQMgkwoMkhNqAEDARPSaiMDFdDIiRSFQowMXE8Z6RdpYHWnEAWGPVkajPmARVZMPUkCBQkJBQINgwaFPoeJi4GVlQ2Qc3VJBQcLV0ptfAMJBwdcIl+FYjALQgimoGNWIhAQZA4HXSpLMQ8PIgkOSHxAQhERPw7ASTSFyCMMDqBTJL8tf3y2fCEAIfkECQcAAAAsAAAAABgAGAAABa8gII4k0DRlmg6kYZCoOg5EDBDEaAi2jLO3nEkgkMEIL4BLpBAkVy3hCTAQKGAznM0AFNFGBAbj2cA9jQixcGZAGgECBu/9HnTp+FGjjezJFAwFBQwKe2Z+KoCChHmNjVMqA21nKQwJEJRlbnUFCQlFXlpeCWcGBUACCwlrdw8RKGImBwktdyMQEQciB7oACwcIeA4RVwAODiIGvHQKERAjxyMIB5QlVSTLYLZ0sW8hACH5BAkHAAAALAAAAAAYABgAAAW0ICCOJNA0ZZoOpGGQrDoOBCoSxNgQsQzgMZyIlvOJdi+AS2SoyXrK4umWPM5wNiV0UDUIBNkdoepTfMkA7thIECiyRtUAGq8fm2O4jIBgMBA1eAZ6Knx+gHaJR4QwdCMKBxEJRggFDGgQEREPjjAMBQUKIwIRDhBDC2QNDDEKoEkDoiMHDigICGkJBS2dDA6TAAnAEAkCdQ8ORQcHTAkLcQQODLPMIgIJaCWxJMIkPIoAt3EhACH5BAkHAAAALAAAAAAYABgAAAWtICCOJNA0ZZoOpGGQrDoOBCoSxNgQsQzgMZyIlvOJdi+AS2SoyXrK4umWHM5wNiV0UN3xdLiqr+mENcWpM9TIbrsBkEck8oC0DQqBQGGIz+t3eXtob0ZTPgNrIwQJDgtGAgwCWSIMDg4HiiUIDAxFAAoODwxDBWINCEGdSTQkCQcoegADBaQ6MggHjwAFBZUFCm0HB0kJCUy9bAYHCCPGIwqmRq0jySMGmj6yRiEAIfkECQcAAAAsAAAAABgAGAAABbIgII4k0DRlmg6kYZCsOg4EKhLE2BCxDOAxnIiW84l2L4BLZKipBopW8XRLDkeCiAMyMvQAA+uON4JEIo+vqukkKQ6RhLHplVGN+LyKcXA4Dgx5DWwGDXx+gIKENnqNdzIDaiMECwcFRgQCCowiCAcHCZIlCgICVgSfCEMMnA0CXaU2YSQFoQAKUQMMqjoyAglcAAyBAAIMRUYLCUkFlybDeAYJryLNk6xGNCTQXY0juHghACH5BAkHAAAALAAAAAAYABgAAAWzICCOJNA0ZVoOAmkY5KCSSgSNBDE2hDyLjohClBMNij8RJHIQvZwEVOpIekRQJyJs5AMoHA+GMbE1lnm9EcPhOHRnhpwUl3AsknHDm5RN+v8qCAkHBwkIfw1xBAYNgoSGiIqMgJQifZUjBhAJYj95ewIJCQV7KYpzBAkLLQADCHOtOpY5PgNlAAykAEUsQ1wzCgWdCIdeArczBQVbDJ0NAqyeBb64nQAGArBTt8R8mLuyPyEAOwAAAAAAAAAAAA==';

exports.default = GIF_LOADING_SRC;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(1);
var ctx = __webpack_require__(75);
var hide = __webpack_require__(7);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;
	var sourceMap = obj.sourceMap;

	if (media) {
		styleElement.setAttribute("media", media);
	}

	if (sourceMap) {
		// https://developer.chrome.com/devtools/docs/javascript-debugging
		// this makes source maps inside style tags work properly in Chrome
		css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}


/***/ }),
/* 22 */
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

/***/ }),
/* 23 */
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

/***/ }),
/* 24 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(8).f;
var has = __webpack_require__(4);
var TAG = __webpack_require__(3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(31)('keys');
var uid = __webpack_require__(19);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(25);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(11);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(1);
var LIBRARY = __webpack_require__(27);
var wksExt = __webpack_require__(36);
var defineProperty = __webpack_require__(8).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(3);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var a=e();for(var r in a)("object"==typeof exports?exports:t)[r]=a[r]}}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(a[r])return a[r].exports;var o=a[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,r){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return"number"==typeof t};e.default={init:function(t,e){var a=this,r=this._createImage(t);r.onload=function(){var t=a._getImageType(r.src),o=a._getCanvas(r.naturalWidth,r.naturalHeight);o.getContext("2d").drawImage(r,0,0);var n=o.toDataURL(t,100);e(n)}},_getImageType:function(t){var e="image/jpeg",a=t.match(/(image\/[\w]+)\.*/)[0];return void 0!==a&&(e=a),e},compress:function(t,e,a){var r=new FileReader,o=this;r.onload=function(r){var n=new Image;n.src=r.target.result,n.onload=function(){var r=o._getImageType(t.type),i=o._getCanvas(n.naturalWidth,n.naturalHeight),g=i.toDataURL(r,e/100);a(g)}},r.readAsDataURL(t)},crop:function(t,e,a){if(r(e.toCropImgX)&&r(e.toCropImgY)&&e.toCropImgW>0&&e.toCropImgH>0){var o=e.toCropImgW,n=e.toCropImgH;e.maxWidth&&e.maxWidth<o&&(o=e.maxWidth,n=e.toCropImgH*o/e.toCropImgW),e.maxHeight&&e.maxHeight<n&&(n=e.maxHeight);var i=this._getCanvas(o,n),g=this._getImageType(t.src);a(i.toDataURL(g,e.compress/100))}},resize:function(t,e,a){if(r(e.toCropImgX)&&r(e.toCropImgY)&&e.toCropImgW>0&&e.toCropImgH>0){var o=e.toCropImgW*e.imgChangeRatio,n=e.toCropImgH*e.imgChangeRatio,i=this._getCanvas(o,n),g=this._getImageType(t.src);a(i.toDataURL(g,e.compress/100))}},rotate:function(t,e,a){var r=this;this._loadImage(t,function(o){var n=o.naturalWidth,i=o.naturalHeight,g=Math.max(n,i),u=r._getCanvas(g,g),s=u.getContext("2d");s.save(),s.translate(g/2,g/2),s.rotate(e*(Math.PI/180));var c=0,m=0;if(0===(e%=360))return a(t,n,i);if(e%180!=0){-90===e||270===e?c=g/2-n:m=g/2-i;var f=n;n=i,i=f}else c=g/2-n,m=g/2-i;s.drawImage(o,c,m),r._getCanvas(n,i).getContext("2d").drawImage(u,0,0,n,i,0,0,n,i);var p=r._getImageType(o.src),l=u.toDataURL(p,1);a(l,n,i),u=null,s=null})},_loadImage:function(t,e){var a=this._createImage(t);a.onload=function(){e(a)}},_getCanvas:function(t,e){var a=document.createElement("canvas");return a.width=t,a.height=e,a},_createImage:function(t){var e=new Image;return e.src=t,e}}}])});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(6)(function () {
  return Object.defineProperty(__webpack_require__(38)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(24);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(27);
var $export = __webpack_require__(15);
var redefine = __webpack_require__(45);
var hide = __webpack_require__(7);
var has = __webpack_require__(4);
var Iterators = __webpack_require__(16);
var $iterCreate = __webpack_require__(79);
var setToStringTag = __webpack_require__(29);
var getPrototypeOf = __webpack_require__(86);
var ITERATOR = __webpack_require__(3)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(10);
var dPs = __webpack_require__(83);
var enumBugKeys = __webpack_require__(26);
var IE_PROTO = __webpack_require__(30)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(38)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(77).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(44);
var hiddenKeys = __webpack_require__(26).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);
var toIObject = __webpack_require__(9);
var arrayIndexOf = __webpack_require__(73)(false);
var IE_PROTO = __webpack_require__(30)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(88)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(41)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(93);
var global = __webpack_require__(2);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(16);
var TO_STRING_TAG = __webpack_require__(3)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
var __vue_styles__ = {}
__webpack_require__(107)
__vue_script__ = __webpack_require__(53)
if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
  console.warn("[vue-loader] src/resize-bar.vue: named exports in *.vue files are ignored.")}
__vue_template__ = __webpack_require__(101)
module.exports = __vue_script__ || {}
if (module.exports.__esModule) module.exports = module.exports.default
var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
if (__vue_template__) {
__vue_options__.template = __vue_template__
}
if (!__vue_options__.computed) __vue_options__.computed = {}
Object.keys(__vue_styles__).forEach(function (key) {
var module = __vue_styles__[key]
__vue_options__.computed[key] = function () { return module }
})
if (false) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  var id = "_v-09adc880/resize-bar.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(60);

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__(61);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(59);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _typeof2 = __webpack_require__(64);

var _typeof3 = _interopRequireDefault(_typeof2);

var _coreImageXhr = __webpack_require__(65);

var _coreImageXhr2 = _interopRequireDefault(_coreImageXhr);

var _daycaca = __webpack_require__(37);

var _daycaca2 = _interopRequireDefault(_daycaca);

var _loadingGif = __webpack_require__(14);

var _loadingGif2 = _interopRequireDefault(_loadingGif);

var _props = __webpack_require__(23);

var _props2 = _interopRequireDefault(_props);

var _crop = __webpack_require__(103);

var _crop2 = _interopRequireDefault(_crop);

var _resizeBar = __webpack_require__(48);

var _resizeBar2 = _interopRequireDefault(_resizeBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var overflowVal = '';
exports.default = {
  components: {
    Crop: _crop2.default,
    ResizeBar: _resizeBar2.default
  },
  props: _props2.default,
  data: function data() {
    return {
      files: [],
      hasImage: false,
      options: this.props,
      uploading: false,
      image: {
        src: _loadingGif2.default,
        width: 24,
        height: 24,
        minProgress: 0.05
      }
    };
  },


  computed: {
    name: function name() {
      if (this.multiple) {
        return this.inputOfFile + '[]';
      }
      return this.inputOfFile;
    }
  },

  methods: {
    __dispatch: function __dispatch(name, res, data) {
      this.$emit && this.$emit(name, res, data);
    },
    __find: function __find(el) {
      return this.$el.querySelector(el);
    },
    dragover: function dragover() {
      this.$el.classList.add('is-dragover');
    },
    dragleave: function dragleave() {
      var element = this.$refs.container;
      this.$el.classList.remove('is-dragover');
    },
    change: function change(e) {
      var _this = this;

      var fileVal = e.target.value.replace(/C:\\fakepath\\/i, "");
      var fileExt = fileVal.substring(fileVal.lastIndexOf(".") + 1);
      var extensionsArr = this.extensions.split(',');
      if (extensionsArr.length > 1) {
        var reg = new RegExp('^[' + extensionsArr.join('|') + ']+$', 'i');
        if (!reg.test(fileExt)) {
          return this.__dispatch('errorhandle', 'TYPE ERROR');
        }
      }
      if (e.target.files[0].size > this.maxFileSize) {
        var formatSize;
        if (parseInt(this.maxFileSize / 1024 / 1024) > 0) {
          formatSize = (this.maxFileSize / 1024 / 1024).toFixed(2) + 'MB';
        } else if (parseInt(this.maxFileSize / 1024) > 0) {
          formatSize = (this.maxFileSize / 1024).toFixed(2) + 'kB';
        } else {
          formatSize = options.maxFileSize.toFixed(2) + 'Byte';
        }
        console.warn('FILE IS TOO LARGER MAX FILE IS ' + formatSize);
        return this.__dispatch('errorhandle', 'FILE IS TOO LARGER MAX FILE IS ' + formatSize);
      }

      if (this.multipleSize > 0 && e.target.files.length > this.multipleSize) {
        console.warn('FILE NUM IS LARGER THAN ' + this.multipleSize);
        return this.__dispatch('errorhandle', 'FILE NUM OVERLOAD');
      }

      this.files = e.target.files;
      if (this.crop || this.resize) {
        this.__showImage();
        return;
      }
      var file = this.files.length > 1 ? this.files : this.files[0];
      this.__dispatch('imagechanged', file);
      if (this.compress && this.files[0]['type'] !== 'image/png' && this.files[0]['type'] !== 'image/gif') {
        _daycaca2.default.compress(this.files[0], 100 - this.compress, function (code) {
          _this.tryAjaxUpload('', true, code);
        });
      } else {
        this.tryAjaxUpload();
      }
    },
    __showImage: function __showImage() {
      this.hasImage = true;
      this.__readFiles();
    },
    __readFiles: function __readFiles() {
      var reader = new FileReader();
      var self = this;
      reader.onload = function (e) {
        var src = e.target.result;
        overflowVal = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        self.__initImage(src);
      };
      reader.readAsDataURL(this.files[0]);
    },
    __initImage: function __initImage(src) {
      var pic = new Image();
      var self = this;
      pic.src = src;
      var cropBox = this.$refs.cropBox;
      pic.onload = function () {
        self.image.minProgress = self.minWidth / pic.naturalWidth;
        _daycaca2.default.init(src, function (src) {
          self.imgChangeRatio = cropBox.setImage(src, pic.naturalWidth, pic.naturalHeight);
        });
      };
    },
    resizeImage: function resizeImage(progress) {
      var cropBox = this.$refs.cropBox;
      cropBox.resizeImage(progress);
    },
    doRotate: function doRotate(e) {
      var self = this;
      var cropBox = this.$refs.cropBox;
      var targetImage = cropBox.getCropImage();
      this.data.compress = 100 - this.compress;
      return _daycaca2.default.rotate(targetImage, 1, function (src) {
        self.__initImage(src);
      });
    },
    doReverseRotate: function doReverseRotate(e) {
      var self = this;
      var cropBox = this.$refs.cropBox;
      var targetImage = cropBox.getCropImage();
      this.data.compress = 100 - this.compress;
      return _daycaca2.default.rotate(targetImage, -1, function (src) {
        self.__initImage(src);
      });
    },
    doCrop: function doCrop(e) {
      var _this2 = this;

      this.__setData('crop');
      var cropBox = this.$refs.cropBox;
      var upload = this.__setUpload(e.target);
      if (this.crop === 'local') {
        var targetImage = cropBox.getCropImage();
        this.data.compress = 100 - this.compress;
        return _daycaca2.default.crop(targetImage, this.data, function (code) {
          upload(code);
          _this2.__dispatch('imagechanged', code);
        });
      }
      upload();
    },
    doResize: function doResize(e) {
      var _this3 = this;

      this.__setData('resize');
      var cropBox = this.$refs.cropBox;
      var upload = this.__setUpload(e.target);
      if (this.resize === 'local') {
        var targetImage = cropBox.getCropImage();
        this.data.compress = 100 - this.compress;
        return _daycaca2.default.resize(targetImage, this.data, function (code) {
          upload(code);
          _this3.__dispatch('imagechanged', code);
        });
      }
      upload();
    },
    __setData: function __setData(type) {
      if ((0, _typeof3.default)(this.data) !== 'object') {
        this.data = {};
      }
      this.data["request"] = type;
      var cropBox = this.$refs.cropBox;
      var newCSSObj = cropBox.getCropData();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(newCSSObj)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var k = _step.value;

          this.data[k] = newCSSObj[k];
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (this.maxWidth) {
        this.data['maxWidth'] = this.maxWidth;
      }
      if (this.maxHeight) {
        this.data['maxHeight'] = this.maxHeight;
      }
      if (this.minWidth) {
        this.data['minWidth'] = this.minWidth;
      }
    },
    __setUpload: function __setUpload(btn) {
      var _this4 = this;

      btn.value = btn.value + '...';
      btn.disabled = true;
      var upload = function upload(code) {
        _this4.tryAjaxUpload(function () {
          btn.value = btn.value.replace('...', '');
          btn.disabled = false;
        }, code ? true : false, code);
      };
      return upload;
    },
    cancel: function cancel() {
      this.hasImage = false;
      document.body.style.overflow = overflowVal;
      this.files = '';
      var cropBox = this.$refs.cropBox;
      cropBox.setOriginalSrc(null);
      this.$input.value = '';
    },
    tryAjaxUpload: function tryAjaxUpload(callback, isBinary, base64Code) {
      var self = this;
      this.__dispatch('imageuploading', this.files[0]);
      var done = function done(res) {
        if (typeof callback === 'function') {
          callback();
        }
        self.uploading = false;
        self.cancel();
        self.__dispatch('imageuploaded', res, self.data);
      };
      var errorUpload = function errorUpload(err) {
        self.__dispatch('errorhandle', err);
      };
      if (!this.isXhr) {
        if (this.crop) {
          this.hasImage = false;
        }
        return done();
      }
      var data = void 0;
      if (isBinary) {
        data = {
          type: this.files[0]['type'],
          filename: this.files[0]['name'],
          filed: this.inputOfFile,
          base64Code: base64Code
        };
        if ((0, _typeof3.default)(this.data) === 'object') {
          data = (0, _assign2.default)(this.data, data);
        }
      } else {
        data = new FormData();
        for (var i = 0; i < this.files.length; i++) {
          data.append(this.name, this.files[i]);
        }
        if ((0, _typeof3.default)(this.data) === 'object') {
          for (var k in this.data) {
            if (this.data[k] !== undefined) {
              data.append(k, this.data[k]);
            }
          }
        }
      }
      (0, _coreImageXhr2.default)('POST', this.url, this.headers, data, done, errorUpload, isBinary, this.credentials);
    }
  },

  mounted: function mounted() {
    this.$input = this.__find('input');
  }
};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"g-core-image-upload-btn\">\n  <slot>{{text}}</slot>\n  <form class=\"g-core-image-upload-form\" v-show=\"!hasImage\" method=\"post\" enctype=\"multipart/form-data\" action=\"\" style=\"\">\n    <input \n      :disabled=\"uploading\" \n      :name=\"name\" \n      :multiple=\"multiple\" \n      type=\"file\" \n      :accept=\"inputAccept\" \n      @change=\"change\" \n      @dragover=\"dragover\" \n      @dragenter=\"dragover\" \n      @dragleave=\"dragleave\" \n      @dragend=\"dragleave\" \n      @drop=\"dragleave\" />\n  </form>\n  <div class=\"g-core-image-corp-container\" v-show=\"hasImage\">\n    <crop \n      ref=\"cropBox\" \n      :is-resize=\"resize && !crop\" \n      :ratio=\"cropRatio\" \n      :is-rotate=\"rotate\">\n    </crop>\n    <div class=\"info-aside\">\n      <p class=\"btn-groups rotate-groups\" style=\"display:none\">\n        <button type=\"button\" @click=\"doRotate\" class=\"btn btn-rotate\">↺</button>\n        <button type=\"button\" @click=\"doReverseRotate\" class=\"btn btn-reverserotate\">↻</button>\n      </p>\n      <p class=\"btn-groups\" v-if=\"crop\">\n        <button type=\"button\" @click=\"doCrop\" class=\"btn btn-upload\">{{cropBtn.ok}}</button>\n        <button type=\"button\" @click=\"cancel\" class=\"btn btn-cancel\">{{cropBtn.cancel}}</button>\n      </p>\n      <p class=\"btn-groups\" v-if=\"resize && !crop\">\n        <button type=\"button\" @click=\"doResize\" class=\"btn btn-upload\">{{ResizeBtn.ok}}</button>\n        <button type=\"button\" @click=\"cancel\" class=\"btn btn-cancel\">{{ResizeBtn.cancel}}</button>\n      </p>\n    </div>\n  </div>\n</div>\n";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(21)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/_css-loader@0.25.0@css-loader/index.js!../../node_modules/_vue-loader@8.7.0@vue-loader/lib/style-rewriter.js!./style.css", function() {
			var newContent = require("!!../../node_modules/_css-loader@0.25.0@css-loader/index.js!../../node_modules/_vue-loader@8.7.0@vue-loader/lib/style-rewriter.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _daycaca = __webpack_require__(37);

var _daycaca2 = _interopRequireDefault(_daycaca);

var _drag2 = __webpack_require__(13);

var _drag3 = _interopRequireDefault(_drag2);

var _resize2 = __webpack_require__(22);

var _resize3 = _interopRequireDefault(_resize2);

var _loadingGif = __webpack_require__(14);

var _loadingGif2 = _interopRequireDefault(_loadingGif);

var _helper = __webpack_require__(0);

var _helper2 = _interopRequireDefault(_helper);

var _resizeBar = __webpack_require__(48);

var _resizeBar2 = _interopRequireDefault(_resizeBar);

var _rotateBar = __webpack_require__(104);

var _rotateBar2 = _interopRequireDefault(_rotateBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CROPBOX_PERCENT = 75;
var isMobile = _helper2.default.isMobile;
var areaWidth = window.innerWidth - 60;
var areaHeight = window.innerHeight - 110;
exports.default = {
  components: {
    ResizeBar: _resizeBar2.default,
    RotateBar: _rotateBar2.default
  },
  props: {
    ratio: {
      type: String,
      default: '1:1'
    },
    minWidth: {
      type: Number,
      default: 50
    },
    minHeight: {
      type: Number,
      default: 50
    },
    isResize: {
      type: [Boolean],
      default: false
    },
    isRotate: {
      type: [Boolean],
      default: true
    }
  },

  data: function data() {
    return {
      src: _loadingGif2.default,
      width: 24,
      height: 24,
      initWidth: 24,
      initHeight: 24,
      left: 0,
      top: 0,
      cropCSS: {}
    };
  },


  methods: {
    setImage: function setImage(src, w, h) {
      this.src = src;
      if (!this.originSrc) {
        this.setOriginalSrc(this.src);
      }
      if (this.ratio.indexOf(':') > 0) {
        this.ratioW = this.ratio.split(':')[0];
        this.ratioH = this.ratio.split(':')[1];
        this.ratioVal = this.ratioW / this.ratioH;
      } else {
        this.ratioW = 1;
        this.ratioH = 1;
        this.ratioVal = this.ratio;
      }
      this.natrualWidth = w;
      this.natrualHeight = h;
      this.setLayout(w, h);
      var resizeBar = this.$refs.resizeBar;
      if (this.isResize) {
        resizeBar.setProgress(100);
      } else {
        resizeBar.setProgress(50);
      }
      return this.imgChangeRatio;
    },
    setOriginalSrc: function setOriginalSrc(src) {
      this.originSrc = src;
    },
    resizeImage: function resizeImage(progress) {
      var w = void 0,
          h = void 0;
      if (this.isResize) {
        w = this.natrualWidth * this.imgChangeRatio * progress;
        h = this.natrualHeight * this.imgChangeRatio * progress;
      } else {
        w = this.initWidth + progress * (this.natrualWidth - this.initWidth);
        h = this.initHeight + progress * (this.natrualHeight - this.initHeight);
      }
      if (w <= this.minWidth || h < this.minHeight) {
        return;
      }
      this.left += (this.width - w) / 2;
      this.top += (this.height - h) / 2;
      this.width = w;
      this.height = h;
      this.imgChangeRatio = this.width / this.natrualWidth;
    },
    rotateImage: function rotateImage(degress) {
      var _this = this;

      var data = _daycaca2.default.rotate2(this.originSrc, degress, function (data, w, h) {
        _this.setImage(data, w, h);
      });
    },
    setLayout: function setLayout(w, h) {
      var H = areaHeight,
          W = areaWidth,
          width = w,
          height = h,
          marginLeft = 0,
          marginTop = 0;

      var R = width / height;
      var Rs = W / H;
      if (R > Rs) {
        height = H;
        width = H * R;
        marginLeft = (W - H * R) / 2;
      } else {
        width = H * R, height = H;
        marginLeft = (W - H * R) / 2;
      }
      this._setStyle(width, height, marginLeft, marginTop, R, true);
    },
    _setStyle: function _setStyle(w, h, ml, mt, r, isInit) {
      var $container = this.$el.querySelector('.g-crop-image-principal');
      if (!isInit) {
        this.marginLeft = this.marginLeft + (this.width - w) / 2;
        this.marginTop = this.marginTop + (this.height - h) / 2;
      }
      $container.style.cssText = 'width:' + w + 'px;height:' + h + 'px;margin-left:' + ml + 'px;' + 'margin-top:' + mt + 'px';
      this.setCropBox(w, h);
      if (this.isResize) {
        this.width = w;
        this.height = h;
      } else {
        if (r >= this.cropCSS.width / this.cropCSS.height) {
          this.height = this.cropCSS.height;
          this.width = this.height * r;
        } else {
          this.width = this.cropCSS.width;
          this.height = this.width / r;
        }
        this.initWidth = this.width;
        this.initHeight = this.height;
        this.left = (w - this.width) / 2;
        this.top = (h - this.height) / 2;
      }
      this.imgChangeRatio = this.width / this.natrualWidth;
    },
    setCropBox: function setCropBox(w, h, r) {
      if (this.isResize) {
        return;
      }
      var $selectCropBox = this.__find('.crop-box');
      var $wrap = this.$el;
      var imageWidth = w,
          imageHeight = h,
          ratioW = this.ratioW,
          ratioH = this.ratioH;
      var cropWidth = imageWidth;
      if (areaWidth < w) {
        cropWidth = areaWidth;
      }
      var baseCropWidth = cropWidth / 100 * CROPBOX_PERCENT;
      var CSSObj = {
        width: baseCropWidth,
        height: baseCropWidth / ratioW * ratioH
      };
      CSSObj.left = (imageWidth - baseCropWidth) / 2;
      CSSObj.top = (imageHeight - CSSObj.height) / 2;
      $selectCropBox.style.cssText = _helper2.default.setCssText(CSSObj);
      if (CSSObj.height > imageHeight) {
        var baseCropHeight = imageHeight / 100 * CROPBOX_PERCENT;
        CSSObj.height = baseCropHeight;
        CSSObj.width = CSSObj.height * ratioW / ratioH;
        CSSObj.left = (imageWidth - CSSObj.width) / 2, CSSObj.top = (imageHeight - CSSObj.height) / 2, $selectCropBox.style.cssText = _helper2.default.setCssText(CSSObj);
      };
      this.cropCSS = CSSObj;
    },
    getCropData: function getCropData() {
      if (this.isResize) {
        return {
          imgChangeRatio: this.imgChangeRatio,
          toCropImgX: 0,
          toCropImgY: 0,
          toCropImgW: this.natrualWidth,
          toCropImgH: this.natrualHeight
        };
      }
      return {
        toCropImgX: (this.cropCSS.left - this.left) / this.imgChangeRatio,
        toCropImgY: (this.cropCSS.top - this.top) / this.imgChangeRatio,
        toCropImgW: this.cropCSS.width / this.imgChangeRatio,
        toCropImgH: this.cropCSS.height / this.imgChangeRatio
      };
    },
    getCropImage: function getCropImage() {
      return this.$refs['crop-image'];
    },
    __find: function __find(str) {
      var dq = this.$el;
      return dq.querySelector(str);
    },
    resize: function resize(e) {
      e.stopPropagation();
      if (!this.ratio.indexOf(':')) {
        return;
      }
      var $el = e.target.parentElement;
      var $container = this.__find('.g-crop-image-principal');
      if (this._$container) {
        this._$container = container;
      }
      var self = this;
      var coor = {
        x: _helper2.default.isMobile ? e.touches[0].clientX : e.clientX,
        y: _helper2.default.isMobile ? e.touches[0].clientY : e.clientY,
        w: $el.offsetWidth,
        h: $el.offsetHeight
      };
      this.el = $el;
      this.container = $container;
      var maxCoor = this._getMaxCropAreaWidth();
      var move = function move(ev) {
        var newCropStyle = (0, _resize3.default)(ev, self.el, $container, coor, self.ratioVal);
        if (newCropStyle && (newCropStyle.width <= maxCoor.maxWidth || newCropStyle.height <= maxCoor.maxHeight)) {
          self.cropCSS.width = newCropStyle.width;
          self.cropCSS.height = newCropStyle.height;
        }
      };
      var end = function end(ev) {
        this.el = null;
        if (_helper2.default.isMobile) {
          document.removeEventListener('touchmove', move, false);
          document.removeEventListener('touchend', end, false);
        }
        document.removeEventListener('mousemove', move, false);
        document.removeEventListener('mouseup', end, false);
      };
      if (_helper2.default.isMobile) {
        document.addEventListener('touchmove', move, false);
        document.addEventListener('touchend', end, false);
      }
      document.addEventListener('mousemove', move, false);
      document.addEventListener('mouseup', end, false);
    },
    _getMaxCropAreaWidth: function _getMaxCropAreaWidth() {
      var $cropBox = this.__find('.crop-box');
      if (this.width > this.height) {
        return {
          maxWidth: this.height * this.ratioW / this.ratioH,
          maxHeight: this.height
        };
      }
      return {
        maxWidth: this.width,
        maxHeight: this.width * this.ratioH / this.ratioW
      };
    },
    drag: function drag(e) {
      e.preventDefault();
      var $el = this.__find('.image-wrap');
      this.el = $el;
      var $cropBox = this.__find('.crop-box');
      var $container = e.currentTarget;
      var self = this;
      var isMobile = _helper2.default.isMobile;
      var coor = {
        x: (isMobile ? e.touches[0]['clientX'] : e.clientX) - $el.offsetLeft,
        y: (isMobile ? e.touches[0]['clientY'] : e.clientY) - $el.offsetTop,
        maxLeft: $cropBox.offsetLeft,
        maxTop: $cropBox.offsetTop,
        minLeft: $cropBox.offsetWidth + $cropBox.offsetLeft - $el.offsetWidth,
        minTop: $cropBox.offsetHeight + $cropBox.offsetTop - $el.offsetHeight
      };
      var move = function move(ev) {
        var newCropStyle = (0, _drag3.default)(ev, self.el, coor);
        if (newCropStyle) {
          self.left = newCropStyle.left;
          self.top = newCropStyle.top;
        }
      };
      var stopMove = function stopMove(ev) {
        self.el = null;
        if (isMobile) {
          document.removeEventListener('touchmove', move, false);
          document.removeEventListener('touchend', stopMove, false);
          return;
        }
        document.removeEventListener('mousemove', move, false);
        document.removeEventListener('mouseup', stopMove, false);
      };
      if (isMobile) {
        document.addEventListener('touchmove', move, false);
        document.addEventListener('touchend', stopMove, false);
        return;
      }
      document.addEventListener('mousemove', move, false);
      document.addEventListener('mouseup', stopMove, false);
    }
  }

};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helper = __webpack_require__(0);

var _helper2 = _interopRequireDefault(_helper);

var _drag2 = __webpack_require__(13);

var _drag3 = _interopRequireDefault(_drag2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    minProgress: {
      type: [Number, String],
      default: 0
    }

  },
  data: function data() {
    return {
      progress: 100,
      left: 100
    };
  },


  methods: {
    setProgress: function setProgress(num) {
      this.left = num;
    },
    drag: function drag(e) {
      e.preventDefault();
      e.stopPropagation();
      var $el = e.target;
      this.el = $el;
      var $container = this.$el.parentElement;
      var self = this;
      var isMobile = _helper2.default.isMobile;
      var width = 200;
      var coor = {
        x: (isMobile ? e.touches[0]['clientX'] : e.clientX) - $el.offsetLeft,
        y: (isMobile ? e.touches[0]['clientY'] : e.clientY) - $el.offsetTop,
        maxLeft: width,
        maxTop: parseInt($container.style.height) - parseInt($el.style.height),
        minLeft: 0,
        minTop: 0
      };
      var move = function move(ev) {
        var newCoor = (0, _drag3.default)(ev, self.el, coor);
        if (newCoor) {
          if (newCoor.left / width < self.minProgress) {
            return;
          }
          self.progress = (newCoor.left - width / 2) / width;
          self.left = newCoor.left / width * 100;

          self.$emit('resize', self.progress);
        }
      };
      var stopMove = function stopMove(ev) {
        self.el = null;
        if (isMobile) {
          document.removeEventListener('touchmove', move, false);
          document.removeEventListener('touchend', stopMove, false);
          return;
        }
        document.removeEventListener('mousemove', move, false);
        document.removeEventListener('mouseup', stopMove, false);
      };
      if (isMobile) {
        document.addEventListener('touchmove', move, false);
        document.addEventListener('touchend', stopMove, false);
        return;
      }
      document.addEventListener('mousemove', move, false);
      document.addEventListener('mouseup', stopMove, false);
    }
  }

};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      rotateDegree: 0
    };
  },


  methods: {
    rotateRight: function rotateRight() {
      this.rotateDegree += 90;
      this.$emit('rotate', this.rotateDegree);
    },
    rotateLeft: function rotateLeft() {
      this.rotateDegree -= 90;
      this.$emit('rotate', this.rotateDegree);
    }
  }
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.g-rotate-bar{\n    position: absolute;\n    bottom: 30px;\n    left: 0;\n    right: 0;\n    text-align: center;\n}\n.g-rotate-bar .svg-icon{\n  display: inline-block;\n  width: 1.2em;\n  height: 1.2em;\n  margin: 0 2em;\n}\n", ""]);

// exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, ".g-core-image-upload-btn{\n  position: relative;\n  overflow: hidden;\n}\n.g-core-image-upload-form{\n  position: absolute;\n  left:0;\n  right: 0;\n  top:0;\n  bottom:0;\n  width: 100%;\n  height: 100%;\n  min-height: 61px;\n  opacity: 0;\n}\n.g-core-image-upload-form input{\n    width: 100%;\n    height: 100%;\n}\n.g-core-image-upload-container{\n  position: absolute;\n  background: #111;\n  z-index: 900;\n}\n.g-core-image-upload-modal{\n  position: absolute;\n  left:0;\n  right:0;\n  width: 100%;\n  height: 100%;\n  border:1px solid #ccc;\n  z-index: 899;\n}\n.dropped{\n  border:4px solid #ea6153;\n}\n.g-core-image-corp-container{\n  z-index: 1900;\n  position:fixed;\n  left:0;\n  right:0;\n  top:0;\n  bottom: 0;\n  background: rgba(0,0,0,.9);\n  color:#f1f1f1;\n}\n.g-core-image-corp-container .image-aside{\n  position: absolute;\n  right: 30px;\n  left:30px;\n  top:60px;\n  bottom:20px;\n  text-align: center;\n}\n.g-core-image-corp-container .image-aside img{\n  max-width: 100%;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.g-core-image-corp-container .info-aside{\n  position: absolute;\n  left:0;\n  right: 0;\n  top:0;\n  height: 40px;\n  padding-left: 10px;\n  padding-right: 10px;\n  background: #fefefe;\n  color:#777;\n}\n.g-core-image-corp-container .btn-groups{\n  text-align: right;\n  margin: 5px 0 0;\n}\n.g-core-image-corp-container .btn{\n  display: inline-block;\n  padding: 0 15px;\n  height: 32px;\n  margin-left: 15px;\n  background: #fff;\n  border:1px solid #ccc;\n  border-radius: 2px;\n  font-size: 13px;\n  color:#222;\n  line-height: 32px;\n  transition: all .1s ease-in;\n}\n.g-core-image-corp-container .btn:hover{\n  border:1px solid #777;\n  box-shadow: 0 1px 3px rgba(0,0,0,.05);\n}\n.g-core-image-corp-container .btn:active{\n  background: #ddd;\n}\n.g-core-image-corp-container .btn:disabled{\n  background: #eee !important;\n  border-color:#ccc;\n  cursor: not-allowed;\n}\n.g-core-image-corp-container .btn-upload{\n  background: #27ae60;\n  border-color:#27ae60;\n  color:#fff;\n}\n.g-core-image-corp-container .btn-upload:hover{\n  background: #2dc26c;\n  border-color:#27ae60;\n  box-shadow: 0 1px 3px rgba(0,0,0,.05);\n}\n", ""]);

// exports


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n.g-resize-bar[_v-09adc880]{\n  position: absolute;\n  bottom: 0px;\n  margin: 17px auto;\n  height: 6px;\n  border-radius: 3px;\n  width:200px;\n  margin-left: -100px;\n  left: 50%;\n  background-color: #a8f9ca;\n  box-shadow: 0 2px 3px -1px rgba(0,0,0,.3);\n}\n.g-resize-highlight[_v-09adc880]{\n  position: absolute;\n  left: 0;\n  top:0;\n  height: 6px;\n  background-color: #27ae60;\n  border-radius: 3px;\n}\n.circle-btn[_v-09adc880]{\n  display: block;\n  position: absolute;\n  left:0;\n  top: -5px;\n  width: 14px;\n  height: 14px;\n  margin-left: -7px;\n  background-color: #fff;\n  border-radius: 7px;\n  box-shadow: 0 2px 3px -2px rgba(0,0,0,.6), 0 -2px 3px -2px rgba(0,0,0,.55);\n  border-width: 0;\n}\n", ""]);

// exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, ".g-crop-image-principal[_v-4d676256]{\n    overflow: hidden;\n    position: relative;\n    background-color: #fff;\n    background-image: linear-gradient(to top right, #efefef 25%, transparent 25%, transparent 75%, #efefef 75%, #efefef),linear-gradient(to top right, #efefef 25%, transparent 25%, transparent 75%, #efefef 75%, #efefef);\n    background-position: 0 0,10px 10px;\n    background-size: 21px 21px;\n  }\n  .image-aside[_v-4d676256]{\n    overflow: hidden;\n    position: absolute;\n    right: 30px;\n    left:30px;\n    top:70px;\n    bottom:40px;\n    text-align: center;\n  }\n  .image-aside .image-wrap[_v-4d676256]{\n    position: absolute;\n    left: 0;\n    top: 0;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    box-shadow: 0 3px 5px -2px rgba(0,0,0,.25);\n    background-size: cover;\n  }\n  .image-mask[_v-4d676256]{\n    position: absolute;\n    left: 0;\n    top: 0;\n    width:100%;\n    height: 100%;\n  }\n  .image-mask .mask[_v-4d676256] {\n    position: absolute;\n    background-color: rgba(255,255,255,.6);\n  }\n  .crop-box[_v-4d676256]{\n    z-index: 2000;\n    box-sizing: border-box;\n    position: absolute;\n    background: none;\n    cursor: move;\n    width:100px;\n    height: 100px;\n    border:1px solid rgba(255,255,255, .95);\n  }\n  .crop-box[_v-4d676256]:after,\n  .crop-box[_v-4d676256]:before{\n    content: '';\n    display: block;\n    opacity: 0;\n    position: absolute;\n    left: 33.3333%;\n    top: 0;\n    width: 33.334%;\n    height: 100%;\n    background-color: transparent;\n    border-color: rgba(255,255,255,.7);\n    border-style: solid;\n    border-width: 0;\n  }\n  .crop-box[_v-4d676256]:active::before,\n  .crop-box[_v-4d676256]:active::after{\n    opacity: 1;\n  }\n  .crop-box[_v-4d676256]:before{\n    border-left-width: 1px;\n    border-right-width: 1px;\n  }\n  .crop-box[_v-4d676256]:after{\n    top: 33.3333%;\n    left: 0;\n    height: 33.3334%;\n    width: 100%;\n    border-top-width: 1px;\n    border-bottom-width: 1px;\n  \n  }\n  .crop-box .g-resize[_v-4d676256]{\n    display: inline-block;\n    z-index: 1910;\n    position: absolute;\n    bottom: -8px;\n    right: -8px;\n    width: 16px;\n    height: 16px;\n    cursor: se-resize;\n    border-radius: 10px;\n    background-color: #fff;\n    box-shadow: 0 2px 4px -2px rgba(0,0,0,.25);\n  }\n", ""]);

// exports


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(66), __esModule: true };

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(67), __esModule: true };

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(70), __esModule: true };

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(63);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(62);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * simple ajax handler
 **/

//ADD sendAsBinary compatibilty to older browsers
if (XMLHttpRequest.prototype.sendAsBinary === undefined) {
  XMLHttpRequest.prototype.sendAsBinary = function (string) {
    var bytes = Array.prototype.map.call(string, function (c) {
      return c.charCodeAt(0) & 0xff;
    });
    this.send(new Uint8Array(bytes).buffer);
  };
}

module.exports = function (method, url, headers, data, callback, err, isBinary, withCredentials) {

  var r = new XMLHttpRequest();
  var error = err || function () {
    console.error('AJAX ERROR!');
  };
  var boundary = 'webcodeimageupload';
  // Binary?
  var binary = false;
  if (method === 'blob') {
    binary = method;
    method = 'GET';
  }
  method = method.toUpperCase();
  // Xhr.responseType 'json' is not supported in any of the vendors yet.
  r.onload = function () {
    var json = r.response;
    try {
      json = JSON.parse(r.responseText);
    } catch (_e) {
      if (r.status === 401) {
        json = error('access_denied', r.statusText);
      }
    }
    var headers = headersToJSON(r.getAllResponseHeaders());
    headers.statusCode = r.status;
    callback(json || (method === 'GET' ? error('empty_response', 'Could not get resource') : {}), headers);
  };
  r.onerror = function () {
    var json = r.responseText;
    try {
      json = JSON.parse(r.responseText);
    } catch (_e) {
      console.error(_e);
    }
    callback(json || error('access_denied', 'Could not get resource'));
  };
  var x = void 0;
  // Should we add the query to the URL?
  if (method === 'GET' || method === 'DELETE') {
    data = null;
  } else if (isBinary) {
    var keyData = data;
    var code = data.base64Code.replace('data:' + data.type + ';base64,', '');
    data = ['--' + boundary, 'Content-Disposition: form-data; name="' + data.filed + '"; filename="' + data.filename + '"', 'Content-Type: ' + data.type, '', window.atob(code), ''].join('\r\n');
    var keyArr = Object.keys(keyData);
    if (keyArr.length > 4) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = keyArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var k = _step.value;

          if (['filed', 'filename', 'type', 'base64Code'].indexOf(k) == -1) {
            data += ['--' + boundary, 'Content-Disposition: form-data; name="' + k + '";', '', ''].join('\r\n');
            data += [_typeof(keyData[k]) === 'object' ? JSON.stringify(keyData[k]) : encodeURI(keyData[k]), ''].join('\r\n');
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    data += '--' + boundary + '--';
  }
  // Open the path, async
  r.open(method, url, true);
  if (binary) {
    if ('responseType' in r) {
      r.responseType = binary;
    } else {
      r.overrideMimeType('text/plain; charset=x-user-defined');
    }
  }
  // Set any bespoke headers
  if (headers) {
    for (x in headers) {
      r.setRequestHeader(x, headers[x]);
    }
  }
  r.withCredentials = typeof withCredentials === 'undefined' ? true : withCredentials;
  if (isBinary) {
    r.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
    return r.sendAsBinary(data);
  }

  r.send(data);
  return r;
  // Headers are returned as a string
  function headersToJSON(s) {
    var o = {};
    var reg = /([a-z\-]+):\s?(.*);?/gi;
    var m = void 0;
    while (m = reg.exec(s)) {
      o[m[1]] = m[2];
    }
    return o;
  }
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(46);
module.exports = __webpack_require__(92);


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(94);
module.exports = __webpack_require__(1).Object.assign;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(95);
module.exports = __webpack_require__(1).Object.keys;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97);
__webpack_require__(96);
__webpack_require__(98);
__webpack_require__(99);
module.exports = __webpack_require__(1).Symbol;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
__webpack_require__(47);
module.exports = __webpack_require__(36).f('iterator');


/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(9);
var toLength = __webpack_require__(90);
var toAbsoluteIndex = __webpack_require__(89);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(24);
var TAG = __webpack_require__(3)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(71);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(12);
var gOPS = __webpack_require__(28);
var pIE = __webpack_require__(17);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(24);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(42);
var descriptor = __webpack_require__(18);
var setToStringTag = __webpack_require__(29);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(3)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(19)('meta');
var isObject = __webpack_require__(11);
var has = __webpack_require__(4);
var setDesc = __webpack_require__(8).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(6)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(12);
var gOPS = __webpack_require__(28);
var pIE = __webpack_require__(17);
var toObject = __webpack_require__(33);
var IObject = __webpack_require__(40);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(6)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var anObject = __webpack_require__(10);
var getKeys = __webpack_require__(12);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(17);
var createDesc = __webpack_require__(18);
var toIObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(34);
var has = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(39);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(9);
var gOPN = __webpack_require__(43).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(4);
var toObject = __webpack_require__(33);
var IE_PROTO = __webpack_require__(30)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(15);
var core = __webpack_require__(1);
var fails = __webpack_require__(6);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32);
var defined = __webpack_require__(25);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(32);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(74);
var ITERATOR = __webpack_require__(3)('iterator');
var Iterators = __webpack_require__(16);
module.exports = __webpack_require__(1).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(10);
var get = __webpack_require__(91);
module.exports = __webpack_require__(1).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(72);
var step = __webpack_require__(80);
var Iterators = __webpack_require__(16);
var toIObject = __webpack_require__(9);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(41)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(15);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(82) });


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(33);
var $keys = __webpack_require__(12);

__webpack_require__(87)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 96 */
/***/ (function(module, exports) {



/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(5);
var $export = __webpack_require__(15);
var redefine = __webpack_require__(45);
var META = __webpack_require__(81).KEY;
var $fails = __webpack_require__(6);
var shared = __webpack_require__(31);
var setToStringTag = __webpack_require__(29);
var uid = __webpack_require__(19);
var wks = __webpack_require__(3);
var wksExt = __webpack_require__(36);
var wksDefine = __webpack_require__(35);
var enumKeys = __webpack_require__(76);
var isArray = __webpack_require__(78);
var anObject = __webpack_require__(10);
var isObject = __webpack_require__(11);
var toIObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(34);
var createDesc = __webpack_require__(18);
var _create = __webpack_require__(42);
var gOPNExt = __webpack_require__(85);
var $GOPD = __webpack_require__(84);
var $DP = __webpack_require__(8);
var $keys = __webpack_require__(12);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(43).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(17).f = $propertyIsEnumerable;
  __webpack_require__(28).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(27)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(35)('asyncIterator');


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(35)('observable');


/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"g-rotate-bar\">\n  <a href=\"javascript:;\" @click=\"rotateLeft\">\n    <svg class=\"svg-icon\" viewBox=\"0 0 481.95 481.95\">\n      <path d=\"M281.7,243.8V138.2c75.9,13.5,135.4,78.6,135.4,159.8s-59.6,146.3-135.4,159.8V512\n        c105.7-13.5,189.6-102.9,189.6-214s-84-200.5-189.6-214V0L159.8,121.9L281.7,243.8z M94.8,270.9c2.7-24.4,13.5-46.1,27.1-67.7\n        L84,165.2C59.6,197.8,46.1,233,40.6,270.9H94.8z M159.8,430.7l-37.9,37.9c32.5,24.4,67.7,37.9,105.7,43.3v-54.2\n        C203.2,455.1,181.5,444.3,159.8,430.7z M94.8,325.1H40.6c2.7,37.9,19,73.1,43.3,105.7l37.9-37.9\n        C108.4,371.1,97.5,349.5,94.8,325.1z\" fill=\"#27ae60\" />\n    </svg>\n  </a>\n  <a href=\"javascript:;\" @click=\"rotateRight\">\n    <svg class=\"svg-icon\" viewBox=\"0 0 481.95 481.95\">\n    \t\t<path d=\"M331.5,114.75L216.75,0v79.05C117.3,91.8,38.25,175.95,38.25,280.5s79.05,188.7,178.5,201.45v-51    C145.35,418.2,89.25,357,89.25,280.5s56.1-137.7,127.5-150.45v99.45L331.5,114.75z M443.7,255    c-5.101-35.7-17.851-68.85-40.8-99.45l-35.7,35.7c12.75,20.4,22.95,40.8,25.5,63.75H443.7z M267.75,430.95v51    c35.7-5.101,68.85-17.851,99.45-40.8l-35.7-35.7C311.1,418.2,290.7,428.4,267.75,430.95z M367.2,369.75l35.7,35.7    c22.949-30.601,38.25-63.75,40.8-99.45h-51C390.15,328.95,379.95,349.35,367.2,369.75z\" fill=\"#27ae60\"/>\n    </svg>\n  </a>\n</div>\n";

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"g-resize-bar\" _v-09adc880=\"\">\n  <div class=\"g-resize-highlight\" :style=\"{width: left + '%',}\" _v-09adc880=\"\"></div>\n  <button class=\"circle-btn\" @touchstart.self=\"drag\" @mousedown.self=\"drag\" :style=\"{left: left + '%',}\" _v-09adc880=\"\"></button>\n</div>\n";

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"image-aside\" _v-4d676256=\"\">\n  <div class=\"g-crop-image-box\" _v-4d676256=\"\">\n    <div class=\"g-crop-image-principal\" @touchstart=\"drag\" @:mousedown=\"drag\" _v-4d676256=\"\">\n      <div class=\"image-wrap\" :style=\"{ width: width + 'px',height: height + 'px', left: left+ 'px', top: top + 'px', backgroundImage: 'url(' + src + ')', cursor: isResize ? 'default' : 'move'}\" _v-4d676256=\"\">\n        <img ref=\"crop-image\" style=\"width:0;height:0;\" :src=\"src\" _v-4d676256=\"\">\n      </div>\n      <div class=\"image-mask\" v-if=\"!isResize\" _v-4d676256=\"\">\n        <div class=\"mask top\" :style=\"{ top:0, height: cropCSS.top + 'px', left: 0, width: '100%'}\" _v-4d676256=\"\"></div>\n        <div class=\"mask bottom\" :style=\"{ bottom:0, top: (cropCSS.top + cropCSS.height) + 'px', left: 0, width: '100%'}\" _v-4d676256=\"\"></div>\n        <div class=\"mask left\" :style=\"{top: cropCSS.top + 'px', height: cropCSS.height + 'px', left:0, width: cropCSS.left + 'px'}\" _v-4d676256=\"\"></div>\n        <div class=\"mask right\" :style=\"{top: cropCSS.top + 'px', height: cropCSS.height + 'px', left: (cropCSS.left + cropCSS.width) + 'px', right: 0}\" _v-4d676256=\"\"></div>\n      </div>\n      <div class=\"crop-box\" v-if=\"!isResize\" :style=\"{top: cropCSS.top + 'px', left: cropCSS.left + 'px', height: cropCSS.height + 'px',  width: cropCSS.width + 'px'}\" _v-4d676256=\"\">\n        <div class=\"reference-line v\" _v-4d676256=\"\"></div>\n        <div class=\"reference-line h\" _v-4d676256=\"\"></div>\n        <a class=\"g-resize\" @touchstart.self=\"resize\" @mousedown.self=\"resize\" _v-4d676256=\"\"></a>\n      </div>\n    </div>\n    <resize-bar v-if=\"resize\" ref=\"resizeBar\" @resize=\"resizeImage\" _v-4d676256=\"\"></resize-bar>\n    <rotate-bar v-if=\"isRotate\" @rotate=\"rotateImage\" _v-4d676256=\"\"></rotate-bar>\n  </div>\n</div>\n";

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
var __vue_styles__ = {}
__webpack_require__(108)
__vue_script__ = __webpack_require__(52)
if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
  console.warn("[vue-loader] src/crop.vue: named exports in *.vue files are ignored.")}
__vue_template__ = __webpack_require__(102)
module.exports = __vue_script__ || {}
if (module.exports.__esModule) module.exports = module.exports.default
var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
if (__vue_template__) {
__vue_options__.template = __vue_template__
}
if (!__vue_options__.computed) __vue_options__.computed = {}
Object.keys(__vue_styles__).forEach(function (key) {
var module = __vue_styles__[key]
__vue_options__.computed[key] = function () { return module }
})
if (false) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  var id = "_v-4d676256/crop.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
var __vue_styles__ = {}
__webpack_require__(106)
__vue_script__ = __webpack_require__(54)
if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
  console.warn("[vue-loader] src/rotate-bar.vue: named exports in *.vue files are ignored.")}
__vue_template__ = __webpack_require__(100)
module.exports = __vue_script__ || {}
if (module.exports.__esModule) module.exports = module.exports.default
var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
if (__vue_template__) {
__vue_options__.template = __vue_template__
}
if (!__vue_options__.computed) __vue_options__.computed = {}
Object.keys(__vue_styles__).forEach(function (key) {
var module = __vue_styles__[key]
__vue_options__.computed[key] = function () { return module }
})
if (false) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  var id = "_v-19ca7532/rotate-bar.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
var __vue_styles__ = {}
__webpack_require__(51)
__vue_script__ = __webpack_require__(49)
if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
  console.warn("[vue-loader] src/vue-core-image-upload.vue: named exports in *.vue files are ignored.")}
__vue_template__ = __webpack_require__(50)
module.exports = __vue_script__ || {}
if (module.exports.__esModule) module.exports = module.exports.default
var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
if (__vue_template__) {
__vue_options__.template = __vue_template__
}
if (!__vue_options__.computed) __vue_options__.computed = {}
Object.keys(__vue_styles__).forEach(function (key) {
var module = __vue_styles__[key]
__vue_options__.computed[key] = function () { return module }
})
if (false) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  var id = "_v-5c8cffc4/vue-core-image-upload.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(21)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/_css-loader@0.25.0@css-loader/index.js!../node_modules/_vue-loader@8.7.0@vue-loader/lib/style-rewriter.js!../node_modules/_vue-loader@8.7.0@vue-loader/lib/selector.js?type=style&index=0!./rotate-bar.vue", function() {
			var newContent = require("!!../node_modules/_css-loader@0.25.0@css-loader/index.js!../node_modules/_vue-loader@8.7.0@vue-loader/lib/style-rewriter.js!../node_modules/_vue-loader@8.7.0@vue-loader/lib/selector.js?type=style&index=0!./rotate-bar.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(21)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/_css-loader@0.25.0@css-loader/index.js!../node_modules/_vue-loader@8.7.0@vue-loader/lib/style-rewriter.js?id=_v-09adc880&scoped=true!../node_modules/_vue-loader@8.7.0@vue-loader/lib/selector.js?type=style&index=0!./resize-bar.vue", function() {
			var newContent = require("!!../node_modules/_css-loader@0.25.0@css-loader/index.js!../node_modules/_vue-loader@8.7.0@vue-loader/lib/style-rewriter.js?id=_v-09adc880&scoped=true!../node_modules/_vue-loader@8.7.0@vue-loader/lib/selector.js?type=style&index=0!./resize-bar.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(21)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/_css-loader@0.25.0@css-loader/index.js!../../node_modules/_vue-loader@8.7.0@vue-loader/lib/style-rewriter.js?id=_v-4d676256&scoped=true!./crop.css", function() {
			var newContent = require("!!../../node_modules/_css-loader@0.25.0@css-loader/index.js!../../node_modules/_vue-loader@8.7.0@vue-loader/lib/style-rewriter.js?id=_v-4d676256&scoped=true!./crop.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })
/******/ ]);
});