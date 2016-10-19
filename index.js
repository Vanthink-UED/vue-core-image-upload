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
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(1)
	__vue_script__ = __webpack_require__(5)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/vue.core.image.upload.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(79)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./vue.core.image.upload.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./vue.core.image.upload.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./vue.core.image.upload.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.g-core-image-upload-btn{\n  position: relative;\n  overflow: hidden;\n}\n  \n.g-core-image-upload-form{\n  position: absolute;\n  left:0;\n  right: 0;\n  top:0;\n  bottom:0;\n  opacity: 0;\n}\n.g-core-image-upload-container{\n  position: absolute;\n  background: #111;\n  z-index: 900;\n}\n.g-core-image-upload-modal{\n  position: absolute;\n  left:0;\n  right:0;\n  width: 100%;\n  height: 100%;\n  border:1px solid #ccc;\n  z-index: 899;\n}\n.dropped{\n  border:4px solid #ea6153;\n}\n\n.g-core-image-corp-container{\n  z-index: 1900;\n  position:fixed;\n  left:0;\n  right:0;\n  top:0;\n  bottom: 0;\n  background: rgba(0,0,0,.9);\n  color:#f1f1f1;\n}\n.g-core-image-corp-container .image-aside{\n  overflow: hidden;\n  position: absolute;\n  right: 30px;\n  left:30px;\n  top:60px;\n  bottom:20px;\n  text-align: center;\n}\n.g-core-image-corp-container .image-aside img{\n  max-width: 100%;\n}\n.g-core-image-corp-container .info-aside{\n  position: absolute;\n  left:0;\n  right: 0;\n  top:0;\n  height: 40px;\n  padding-left: 10px;\n  padding-right: 10px;\n  background: #fefefe;\n  color:#777;\n}\n.g-core-image-corp-container .info-aside .image-corp-preview{\n  position: relative;\n  overflow: hidden;\n  text-align: center;\n  border:2px solid #ccc;\n}\n.g-core-image-corp-container .info-aside .image-corp-preview.circled{\n  border-radius: 160px;\n}\n.g-core-image-corp-container .info-aside .image-corp-preview img{\n  width: 100%;\n}\n.g-core-image-corp-container .info-aside .config-info .image-details{\n  width: 100%;\n  color:#999;    \n}\n\n.g-core-image-corp-container .info-aside .config-info .image-details td{\n  border:none; \n  line-height: 24px;\n}\n.g-core-image-corp-container .info-aside .config-info .image-details tr td:first-child{\n  width:36%;  \n}\n.g-core-image-corp-container .info-aside .config-info .image-details tr td:last-child{\n  color:#555; \n}\n.g-core-image-corp-container .btn-groups{\n  text-align: right;\n  margin: 5px 0 0;\n}\n.g-core-image-corp-container .btn{\n  display: inline-block;\n  padding: 0 15px;\n  height: 32px;\n  margin-left: 15px;\n  background: #fff;\n  border:1px solid #ccc;\n  border-radius: 2px;\n  font-size: 13px;\n  color:#222;\n  line-height: 32px;\n  -webkit-transition: all .1s ease-in;\n  transition: all .1s ease-in;\n}\n.g-core-image-corp-container .btn:hover{\n  border:1px solid #777;\n  box-shadow: 0 1px 3px rgba(0,0,0,.05); \n}\n.g-core-image-corp-container .btn:active,{\n  background: #ddd;\n}\n.g-core-image-corp-container .btn:disabled{\n  background: #eee !important;\n  border-color:#ccc;\n  cursor: not-allowed;\n}\n.g-core-image-corp-container .btn-upload{\n  background: #27ae60;\n  border-color:#27ae60;\n  color:#fff;\n}\n.g-core-image-corp-container .btn-upload:hover{\n  background: #2dc26c;\n  border-color:#27ae60;\n  box-shadow: 0 1px 3px rgba(0,0,0,.05); \n}\n.g-core-image-corp-container .g-crop-image-box,.g-core-image-corp-container .g-crop-image-box .g-crop-image-principal{\n  position: relative;   \n    \n}\n.g-core-image-corp-container .g-crop-image-box .select-recorte{\n  position: absolute;\n  background: #fff;\n  opacity: .5;\n  border:2px dashed #555;\n  cursor: move;\n    \n}\n.g-core-image-corp-container .g-resize{\n  z-index: 90;\n  position: absolute;\n  bottom: 1px;\n  right: 1px;\n  width: 20px;\n  height: 20px;\n  cursor: se-resize;\n}\n.g-core-image-corp-container .g-e-resize{\n  cursor: e-resize;\n  position: absolute;\n  width: 7px;\n  right: -5px;\n  top: 0;\n  height: 100%;\n}\n.g-core-image-corp-container .g-s-resize{\n  position: absolute;\n  cursor: s-resize;\n  height: 7px;\n  width: 100%;\n  bottom: -5px;\n  left: 0;\n}  \n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

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
		if(false) {
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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof2 = __webpack_require__(6);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _classCallCheck2 = __webpack_require__(74);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(75);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	// <template>
	//   <div class="g-core-image-upload-btn" v-bind:class="class">
	//       {{text}}
	//       <form class="g-core-image-upload-form" v-show="!hasImage" method="post" enctype="multipart/form-data" action="/api2/common_user/cropHeadUrl" style="display: block; cursor: pointer; position: absolute; left: 0px; top: 0px; width: 1242px; height: 61px; opacity: 0; margin: 0px; padding: 0px; overflow: hidden;">
	//         <input v-bind:disabled="uploading" id="g-core-upload-input-{{formID}}" name="{{inputOfFile}}" type="file" accept="{{inputAccept}}" v-on:change="change" style="width: 100%; height: 100%;">
	//       </form>
	//   </div>  
	//
	//   <div class="g-core-image-corp-container" id="vciu-modal-{{formID}}" v-show="hasImage">
	//       <div class="image-aside">
	//         <div class="g-crop-image-box">
	//           <div class="g-crop-image-principal">
	//             <img v-bind:src="image.src" v-bind:style="{ width:image.width + 'px',height: image.height + 'px' }">
	//             <div class="select-recorte" v-on:touchstart="drag" v-on:mousedown="drag" style="width:100px;height:100px;">
	//               <div class="g-s-resize" style="z-index: 90;"></div>
	//               <div class="g-e-resize" style="z-index: 90;"></div>
	//               <div class="g-resize" v-on:touchstart="resize" v-on:mousedown="resize"></div>
	//             </div>
	//           </div>
	//         </div>
	//       </div>
	//       <div class="info-aside">
	//         <p class="btn-groups">
	//           <button type="button" v-on:click="doCrop" class="btn btn-upload">确定</button>
	//           <button type="button" v-on:click="cancel()" class="btn btn-cancel">取消</button>
	//         </p>
	//       </div>
	//   </div>
	// </template>
	//
	// <style>
	//   .g-core-image-upload-btn{
	//     position: relative;
	//     overflow: hidden;
	//   }
	//
	//   .g-core-image-upload-form{
	//     position: absolute;
	//     left:0;
	//     right: 0;
	//     top:0;
	//     bottom:0;
	//     opacity: 0;
	//   }
	//   .g-core-image-upload-container{
	//     position: absolute;
	//     background: #111;
	//     z-index: 900;
	//   }
	//   .g-core-image-upload-modal{
	//     position: absolute;
	//     left:0;
	//     right:0;
	//     width: 100%;
	//     height: 100%;
	//     border:1px solid #ccc;
	//     z-index: 899;
	//   }
	//   .dropped{
	//     border:4px solid #ea6153;
	//   }
	//
	//   .g-core-image-corp-container{
	//     z-index: 1900;
	//     position:fixed;
	//     left:0;
	//     right:0;
	//     top:0;
	//     bottom: 0;
	//     background: rgba(0,0,0,.9);
	//     color:#f1f1f1;
	//   }
	//   .g-core-image-corp-container .image-aside{
	//     overflow: hidden;
	//     position: absolute;
	//     right: 30px;
	//     left:30px;
	//     top:60px;
	//     bottom:20px;
	//     text-align: center;
	//   }
	//   .g-core-image-corp-container .image-aside img{
	//     max-width: 100%;
	//   }
	//   .g-core-image-corp-container .info-aside{
	//     position: absolute;
	//     left:0;
	//     right: 0;
	//     top:0;
	//     height: 40px;
	//     padding-left: 10px;
	//     padding-right: 10px;
	//     background: #fefefe;
	//     color:#777;
	//   }
	//   .g-core-image-corp-container .info-aside .image-corp-preview{
	//     position: relative;
	//     overflow: hidden;
	//     text-align: center;
	//     border:2px solid #ccc;
	//   }
	//   .g-core-image-corp-container .info-aside .image-corp-preview.circled{
	//     border-radius: 160px;
	//   }
	//   .g-core-image-corp-container .info-aside .image-corp-preview img{
	//     width: 100%;
	//   }
	//   .g-core-image-corp-container .info-aside .config-info .image-details{
	//     width: 100%;
	//     color:#999;    
	//   }
	//
	//   .g-core-image-corp-container .info-aside .config-info .image-details td{
	//     border:none; 
	//     line-height: 24px;
	//   }
	//   .g-core-image-corp-container .info-aside .config-info .image-details tr td:first-child{
	//     width:36%;  
	//   }
	//   .g-core-image-corp-container .info-aside .config-info .image-details tr td:last-child{
	//     color:#555; 
	//   }
	//   .g-core-image-corp-container .btn-groups{
	//     text-align: right;
	//     margin: 5px 0 0;
	//   }
	//   .g-core-image-corp-container .btn{
	//     display: inline-block;
	//     padding: 0 15px;
	//     height: 32px;
	//     margin-left: 15px;
	//     background: #fff;
	//     border:1px solid #ccc;
	//     border-radius: 2px;
	//     font-size: 13px;
	//     color:#222;
	//     line-height: 32px;
	//     transition: all .1s ease-in;
	//   }
	//   .g-core-image-corp-container .btn:hover{
	//     border:1px solid #777;
	//     box-shadow: 0 1px 3px rgba(0,0,0,.05); 
	//   }
	//   .g-core-image-corp-container .btn:active,{
	//     background: #ddd;
	//   }
	//   .g-core-image-corp-container .btn:disabled{
	//     background: #eee !important;
	//     border-color:#ccc;
	//     cursor: not-allowed;
	//   }
	//   .g-core-image-corp-container .btn-upload{
	//     background: #27ae60;
	//     border-color:#27ae60;
	//     color:#fff;
	//   }
	//   .g-core-image-corp-container .btn-upload:hover{
	//     background: #2dc26c;
	//     border-color:#27ae60;
	//     box-shadow: 0 1px 3px rgba(0,0,0,.05); 
	//   }
	//   .g-core-image-corp-container .g-crop-image-box,.g-core-image-corp-container .g-crop-image-box .g-crop-image-principal{
	//     position: relative;   
	//
	//   }
	//   .g-core-image-corp-container .g-crop-image-box .select-recorte{
	//     position: absolute;
	//     background: #fff;
	//     opacity: .5;
	//     border:2px dashed #555;
	//     cursor: move;
	//
	//   }
	//   .g-core-image-corp-container .g-resize{
	//     z-index: 90;
	//     position: absolute;
	//     bottom: 1px;
	//     right: 1px;
	//     width: 20px;
	//     height: 20px;
	//     cursor: se-resize;
	//   }
	//   .g-core-image-corp-container .g-e-resize{
	//     cursor: e-resize;
	//     position: absolute;
	//     width: 7px;
	//     right: -5px;
	//     top: 0;
	//     height: 100%;
	//   }
	//   .g-core-image-corp-container .g-s-resize{
	//     position: absolute;
	//     cursor: s-resize;
	//     height: 7px;
	//     width: 100%;
	//     bottom: -5px;
	//     left: 0;
	//   }  
	// </style>
	//
	// <script>
	/**simple ajax handler**/

	var xhr = function xhr(method, url, headers, data, callback, error) {

	  var r = new XMLHttpRequest();
	  var error = error || function () {
	    console.error('AJAX ERROR!');
	  };

	  // Binary?
	  var binary = false;
	  if (method === 'blob') {
	    binary = method;
	    method = 'GET';
	  }

	  method = method.toUpperCase();

	  // Xhr.responseType 'json' is not supported in any of the vendors yet.
	  r.onload = function (e) {
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

	  r.onerror = function (e) {
	    var json = r.responseText;
	    try {
	      json = JSON.parse(r.responseText);
	    } catch (_e) {}

	    callback(json || error('access_denied', 'Could not get resource'));
	  };

	  var x;

	  // Should we add the query to the URL?
	  if (method === 'GET' || method === 'DELETE') {
	    data = null;
	  } else if (data && typeof data !== 'string' && !(data instanceof FormData) && !(data instanceof File) && !(data instanceof Blob)) {
	    // Loop through and add formData
	    var f = new FormData();
	    for (x in data) {
	      if (data.hasOwnProperty(x)) {
	        if (data[x] instanceof HTMLInputElement) {
	          if ('files' in data[x] && data[x].files.length > 0) {
	            f.append(x, data[x].files[0]);
	          }
	        } else if (data[x] instanceof Blob) {
	          f.append(x, data[x], data.name);
	        } else {
	          f.append(x, data[x]);
	        }
	      }
	    }data = f;
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

	  r.send(data);

	  return r;

	  // Headers are returned as a string
	  function headersToJSON(s) {
	    var r = {};
	    var reg = /([a-z\-]+):\s?(.*);?/gi;
	    var m;
	    while (m = reg.exec(s)) {
	      r[m[1]] = m[2];
	    }

	    return r;
	  }
	};

	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	/** Reszie
	* @el  dom
	* @container  dom
	* @ratio  string '1:1' like this
	* e events
	**/

	var Resize = function () {
	  function Resize($el, $container, ratio, e) {
	    (0, _classCallCheck3.default)(this, Resize);

	    e.stopPropagation();
	    this.coor = {
	      x: isMobile ? e.touches[0]['clientX'] : e.clientX,
	      y: isMobile ? e.touches[0]['clientY'] : e.clientY,
	      w: parseInt(window.getComputedStyle($el).width),
	      h: parseInt(window.getComputedStyle($el).height)
	    };
	    this.splitX = ratio.split(':')[0];
	    this.splitY = ratio.split(':')[1];
	    this.el = $el;
	    this.container = $container;
	    if (isMobile) {
	      this.container.addEventListener('touchmove', this.drag.bind(this), false);
	    }
	    this.container.addEventListener('mousemove', this.drag.bind(this), false);
	  }

	  (0, _createClass3.default)(Resize, [{
	    key: 'drag',
	    value: function drag(e) {
	      if (!this.el) {
	        return;
	      }
	      var $dotBox = document.querySelector('.g-crop-image-principal');
	      var $topH = document.querySelector('.info-aside');
	      var $halfX = parseInt(document.body.offsetWidth) - parseInt(window.getComputedStyle($dotBox).width);
	      var $halfY = parseInt(document.body.offsetHeight) - parseInt(window.getComputedStyle($dotBox).height) - parseInt(window.getComputedStyle($topH).height);
	      var resetX = isMobile ? e.changedTouches[0]['clientX'] : e.clientX;
	      var resetY = isMobile ? e.changedTouches[0]['clientY'] : e.clientY;

	      if (this.splitX > this.splitY) {
	        if (parseInt(resetX) >= $halfX / 2 + parseInt(window.getComputedStyle($dotBox).width)) {
	          return;
	        } else {
	          if (parseInt(this.el.style.width) >= parseInt(window.getComputedStyle($dotBox).width)) {
	            this.el.style.width = window.getComputedStyle($dotBox).width;
	          };
	          this.el.style.width = this.coor.w + (isMobile ? e.changedTouches[0]['clientX'] : e.clientX) - this.coor.x + 'px';
	          this.el.style.height = parseInt(this.el.style.width) * (this.splitY / this.splitX) + 'px';
	          //限制拖拉的范围在图片内
	          if (parseInt(window.getComputedStyle($dotBox).width) > parseInt(window.getComputedStyle($dotBox).height)) {
	            if (parseInt(this.el.style.height) >= parseInt(window.getComputedStyle($dotBox).height)) {
	              this.el.style.height = window.getComputedStyle($dotBox).height;
	              this.el.style.width = parseInt(window.getComputedStyle($dotBox).height) * (this.splitX / this.splitY) + 'px';
	              return;
	            };
	          } else if (parseInt(window.getComputedStyle($dotBox).width) < parseInt(window.getComputedStyle($dotBox).height)) {
	            if (parseInt(this.el.style.width) >= parseInt(window.getComputedStyle($dotBox).width)) {
	              this.el.style.width = window.getComputedStyle($dotBox).width;
	              this.el.style.height = parseInt(window.getComputedStyle($dotBox).width) * (this.splitY / this.splitX) + 'px';
	              return;
	            }
	          } else {
	            if (parseInt(this.el.style.width) >= parseInt(window.getComputedStyle($dotBox).width)) {
	              this.el.style.width = window.getComputedStyle($dotBox).width;
	              this.el.style.height = parseInt(window.getComputedStyle($dotBox).width) * (this.splitY / this.splitX) + 'px';
	              return;
	            }
	          }
	        }
	      } else if (this.splitX < this.splitY) {
	        if (parseInt(resetY) >= $halfY / 2 + parseInt(window.getComputedStyle($dotBox).height) + parseInt(window.getComputedStyle($topH).height)) {
	          return;
	        } else {
	          this.el.style.height = this.coor.h + (isMobile ? e.changedTouches[0]['clientY'] : e.clientY) - this.coor.y + 'px';
	          this.el.style.width = parseInt(this.el.style.height) * (this.splitX / this.splitY) + 'px';
	          //限制拖拉的范围在图片内
	          if (parseInt(window.getComputedStyle($dotBox).width) > parseInt(window.getComputedStyle($dotBox).height)) {
	            if (parseInt(this.el.style.height) >= parseInt(window.getComputedStyle($dotBox).height)) {
	              this.el.style.height = window.getComputedStyle($dotBox).height;
	              this.el.style.width = parseInt(window.getComputedStyle($dotBox).height) * (this.splitX / this.splitY) + 'px';
	              return;
	            };
	          } else if (parseInt(window.getComputedStyle($dotBox).width) < parseInt(window.getComputedStyle($dotBox).height)) {
	            if (parseInt(this.el.style.width) >= parseInt(window.getComputedStyle($dotBox).width)) {
	              this.el.style.width = window.getComputedStyle($dotBox).width;
	              this.el.style.height = parseInt(window.getComputedStyle($dotBox).width) * (this.splitY / this.splitX) + 'px';
	              return;
	            }
	          } else {
	            if (parseInt(this.el.style.width) >= parseInt(window.getComputedStyle($dotBox).width)) {
	              this.el.style.width = window.getComputedStyle($dotBox).width;
	              this.el.style.height = parseInt(window.getComputedStyle($dotBox).width) * (this.splitY / this.splitX) + 'px';
	              return;
	            }
	          }
	        }
	      } else {
	        if (parseInt(resetX) >= $halfX / 2 + parseInt(window.getComputedStyle($dotBox).width)) {
	          //现在拖拉范围不准超过某一边的范围
	          return;
	        } else {

	          this.el.style.width = this.coor.w + (isMobile ? e.changedTouches[0]['clientX'] : e.clientX) - this.coor.x + 'px';
	          this.el.style.height = this.el.style.width;
	          //限制拖拉的范围在图片内
	          if (parseInt(window.getComputedStyle($dotBox).width) > parseInt(window.getComputedStyle($dotBox).height)) {
	            if (parseInt(this.el.style.height) >= parseInt(window.getComputedStyle($dotBox).height)) {
	              this.el.style.height = window.getComputedStyle($dotBox).height;
	              this.el.style.width = window.getComputedStyle($dotBox).height;
	            };
	          } else if (parseInt(window.getComputedStyle($dotBox).width) < parseInt(window.getComputedStyle($dotBox).height)) {
	            if (parseInt(this.el.style.width) >= parseInt(window.getComputedStyle($dotBox).width)) {
	              this.el.style.width = window.getComputedStyle($dotBox).width;
	              this.el.style.height = window.getComputedStyle($dotBox).width;
	            }
	          } else {
	            if (parseInt(this.el.style.width) >= parseInt(window.getComputedStyle($dotBox).width)) {
	              this.el.style.width = this.el.style.height = window.getComputedStyle($dotBox).width;
	            }
	          }
	        }
	      }
	      if (isMobile) {
	        this.container.addEventListener('touchend', this.stopDrag.bind(this), false);
	      } else {
	        this.container.addEventListener('mouseup', this.stopDrag.bind(this), false);
	      }
	    }
	  }, {
	    key: 'stopDrag',
	    value: function stopDrag(e) {
	      this.el = null;
	      // if(isMobile) {
	      //   this.container.removeEventListener('touchmove',this.drag.bind(this),false);
	      // }
	      // this.container.removeEventListener('mousemove',this.drag.bind(this),false);
	      this.container = null;
	    }
	  }]);
	  return Resize;
	}();

	;

	// 拖拽

	var Drag = function () {
	  function Drag($el, $container, e) {
	    (0, _classCallCheck3.default)(this, Drag);


	    this.el = $el;
	    this.container = $container;
	    this.coor = {
	      x: (isMobile ? e.touches[0]['clientX'] : e.clientX) - $el.offsetLeft - $el.parentElement.offsetLeft,
	      y: (isMobile ? e.touches[0]['clientY'] : e.clientY) - $el.offsetTop - $el.parentElement.offsetTop,
	      posX: isMobile ? e.touches[0]['clientX'] : e.clientX,
	      posy: isMobile ? e.touches[0]['clientY'] : e.clientY,
	      maxLeft: parseInt(this.container.style.width) - parseInt(this.el.style.width),
	      maxTop: parseInt(this.container.style.height) - parseInt(this.el.style.height)
	    };
	    if (isMobile) {
	      this.container.addEventListener('touchmove', this.move.bind(this), false);
	      this.container.addEventListener('touchend', this.stopMove.bind(this), false);
	      return;
	    }
	    this.container.addEventListener('mousemove', this.move.bind(this), false);
	    this.container.addEventListener('mouseup', this.stopMove.bind(this), false);
	  }

	  (0, _createClass3.default)(Drag, [{
	    key: 'move',
	    value: function move(e) {
	      if (!this.el) {
	        return;
	      }
	      this.coor.posX = isMobile ? e.changedTouches[0]['clientX'] : e.clientX;
	      this.coor.posY = isMobile ? e.changedTouches[0]['clientY'] : e.clientY;
	      var newPosX = this.coor.posX - this.coor.x;
	      var newPosY = this.coor.posY - this.coor.y;
	      if (newPosX <= 0) {
	        newPosX = 0;
	      }
	      if (newPosX >= this.coor.maxLeft) {
	        newPosX = this.coor.maxLeft;
	      }
	      if (newPosY <= 0) {
	        newPosY = 0;
	      }
	      if (newPosY >= this.coor.maxTop) {
	        newPosY = this.coor.maxTop;
	      }
	      this.el.style.left = newPosX + 'px';
	      this.el.style.top = newPosY + 'px';
	    }
	  }, {
	    key: 'stopMove',
	    value: function stopMove() {
	      this.el = null;
	      if (isMobile) {
	        this.container.removeEventListener('touchmove', this.move.bind(this), false);
	        this.container.removeEventListener('touchend', this.stopMove.bind(this), false);
	        return;
	      }
	      this.container.removeEventListener('mousemove', this.move.bind(this), false);
	      this.container.removeEventListener('mouseup', this.stopMove.bind(this), false);
	    }
	  }]);
	  return Drag;
	}();

	;

	/** a vue plugin for image crop and upload
	*  Github: https://github.com/Vanthink-UED/vue.core.image.upload
	**/

	var GIF_LOADING_SRC = 'data:image/gif;base64,R0lGODlhGAAYAPQAAP///3FxcePj4/v7++3t7dLS0vHx8b+/v+Dg4MfHx+jo6M7Oztvb2/f397Kysru7u9fX16qqqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJBwAAACwAAAAAGAAYAAAFriAgjiQAQWVaDgr5POSgkoTDjFE0NoQ8iw8HQZQTDQjDn4jhSABhAAOhoTqSDg7qSUQwxEaEwwFhXHhHgzOA1xshxAnfTzotGRaHglJqkJcaVEqCgyoCBQkJBQKDDXQGDYaIioyOgYSXA36XIgYMBWRzXZoKBQUMmil0lgalLSIClgBpO0g+s26nUWddXyoEDIsACq5SsTMMDIECwUdJPw0Mzsu0qHYkw72bBmozIQAh+QQJBwAAACwAAAAAGAAYAAAFsCAgjiTAMGVaDgR5HKQwqKNxIKPjjFCk0KNXC6ATKSI7oAhxWIhezwhENTCQEoeGCdWIPEgzESGxEIgGBWstEW4QCGGAIJEoxGmGt5ZkgCRQQHkGd2CESoeIIwoMBQUMP4cNeQQGDYuNj4iSb5WJnmeGng0CDGaBlIQEJziHk3sABidDAHBgagButSKvAAoyuHuUYHgCkAZqebw0AgLBQyyzNKO3byNuoSS8x8OfwIchACH5BAkHAAAALAAAAAAYABgAAAW4ICCOJIAgZVoOBJkkpDKoo5EI43GMjNPSokXCINKJCI4HcCRIQEQvqIOhGhBHhUTDhGo4diOZyFAoKEQDxra2mAEgjghOpCgz3LTBIxJ5kgwMBShACREHZ1V4Kg1rS44pBAgMDAg/Sw0GBAQGDZGTlY+YmpyPpSQDiqYiDQoCliqZBqkGAgKIS5kEjQ21VwCyp76dBHiNvz+MR74AqSOdVwbQuo+abppo10ssjdkAnc0rf8vgl8YqIQAh+QQJBwAAACwAAAAAGAAYAAAFrCAgjiQgCGVaDgZZFCQxqKNRKGOSjMjR0qLXTyciHA7AkaLACMIAiwOC1iAxCrMToHHYjWQiA4NBEA0Q1RpWxHg4cMXxNDk4OBxNUkPAQAEXDgllKgMzQA1pSYopBgonCj9JEA8REQ8QjY+RQJOVl4ugoYssBJuMpYYjDQSliwasiQOwNakALKqsqbWvIohFm7V6rQAGP6+JQLlFg7KDQLKJrLjBKbvAor3IKiEAIfkECQcAAAAsAAAAABgAGAAABbUgII4koChlmhokw5DEoI4NQ4xFMQoJO4uuhignMiQWvxGBIQC+AJBEUyUcIRiyE6CR0CllW4HABxBURTUw4nC4FcWo5CDBRpQaCoF7VjgsyCUDYDMNZ0mHdwYEBAaGMwwHDg4HDA2KjI4qkJKUiJ6faJkiA4qAKQkRB3E0i6YpAw8RERAjA4tnBoMApCMQDhFTuySKoSKMJAq6rD4GzASiJYtgi6PUcs9Kew0xh7rNJMqIhYchACH5BAkHAAAALAAAAAAYABgAAAW0ICCOJEAQZZo2JIKQxqCOjWCMDDMqxT2LAgELkBMZCoXfyCBQiFwiRsGpku0EshNgUNAtrYPT0GQVNRBWwSKBMp98P24iISgNDAS4ipGA6JUpA2WAhDR4eWM/CAkHBwkIDYcGiTOLjY+FmZkNlCN3eUoLDmwlDW+AAwcODl5bYl8wCVYMDw5UWzBtnAANEQ8kBIM0oAAGPgcREIQnVloAChEOqARjzgAQEbczg8YkWJq8nSUhACH5BAkHAAAALAAAAAAYABgAAAWtICCOJGAYZZoOpKKQqDoORDMKwkgwtiwSBBYAJ2owGL5RgxBziQQMgkwoMkhNqAEDARPSaiMDFdDIiRSFQowMXE8Z6RdpYHWnEAWGPVkajPmARVZMPUkCBQkJBQINgwaFPoeJi4GVlQ2Qc3VJBQcLV0ptfAMJBwdcIl+FYjALQgimoGNWIhAQZA4HXSpLMQ8PIgkOSHxAQhERPw7ASTSFyCMMDqBTJL8tf3y2fCEAIfkECQcAAAAsAAAAABgAGAAABa8gII4k0DRlmg6kYZCoOg5EDBDEaAi2jLO3nEkgkMEIL4BLpBAkVy3hCTAQKGAznM0AFNFGBAbj2cA9jQixcGZAGgECBu/9HnTp+FGjjezJFAwFBQwKe2Z+KoCChHmNjVMqA21nKQwJEJRlbnUFCQlFXlpeCWcGBUACCwlrdw8RKGImBwktdyMQEQciB7oACwcIeA4RVwAODiIGvHQKERAjxyMIB5QlVSTLYLZ0sW8hACH5BAkHAAAALAAAAAAYABgAAAW0ICCOJNA0ZZoOpGGQrDoOBCoSxNgQsQzgMZyIlvOJdi+AS2SoyXrK4umWPM5wNiV0UDUIBNkdoepTfMkA7thIECiyRtUAGq8fm2O4jIBgMBA1eAZ6Knx+gHaJR4QwdCMKBxEJRggFDGgQEREPjjAMBQUKIwIRDhBDC2QNDDEKoEkDoiMHDigICGkJBS2dDA6TAAnAEAkCdQ8ORQcHTAkLcQQODLPMIgIJaCWxJMIkPIoAt3EhACH5BAkHAAAALAAAAAAYABgAAAWtICCOJNA0ZZoOpGGQrDoOBCoSxNgQsQzgMZyIlvOJdi+AS2SoyXrK4umWHM5wNiV0UN3xdLiqr+mENcWpM9TIbrsBkEck8oC0DQqBQGGIz+t3eXtob0ZTPgNrIwQJDgtGAgwCWSIMDg4HiiUIDAxFAAoODwxDBWINCEGdSTQkCQcoegADBaQ6MggHjwAFBZUFCm0HB0kJCUy9bAYHCCPGIwqmRq0jySMGmj6yRiEAIfkECQcAAAAsAAAAABgAGAAABbIgII4k0DRlmg6kYZCsOg4EKhLE2BCxDOAxnIiW84l2L4BLZKipBopW8XRLDkeCiAMyMvQAA+uON4JEIo+vqukkKQ6RhLHplVGN+LyKcXA4Dgx5DWwGDXx+gIKENnqNdzIDaiMECwcFRgQCCowiCAcHCZIlCgICVgSfCEMMnA0CXaU2YSQFoQAKUQMMqjoyAglcAAyBAAIMRUYLCUkFlybDeAYJryLNk6xGNCTQXY0juHghACH5BAkHAAAALAAAAAAYABgAAAWzICCOJNA0ZVoOAmkY5KCSSgSNBDE2hDyLjohClBMNij8RJHIQvZwEVOpIekRQJyJs5AMoHA+GMbE1lnm9EcPhOHRnhpwUl3AsknHDm5RN+v8qCAkHBwkIfw1xBAYNgoSGiIqMgJQifZUjBhAJYj95ewIJCQV7KYpzBAkLLQADCHOtOpY5PgNlAAykAEUsQ1wzCgWdCIdeArczBQVbDJ0NAqyeBb64nQAGArBTt8R8mLuyPyEAOwAAAAAAAAAAAA==';

	exports.default = {
	  props: {
	    url: {
	      type: String
	    },
	    text: {
	      type: String,
	      default: 'Upload Image'
	    },
	    class: {
	      type: Array,
	      default: []
	    },
	    extensions: {
	      type: String,
	      default: 'png.jpg,jpeg,gif,svg,webp'
	    },
	    inputOfFile: {
	      type: String,
	      default: 'files'
	    },

	    crop: {
	      type: Boolean,
	      default: false
	    },
	    cropRatio: {
	      type: String,
	      default: '1:1'
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
	      default: 'image/*'
	    }
	  },
	  data: function data() {
	    return {
	      files: [],
	      hasImage: false,
	      options: this.props,
	      uploading: false,
	      formID: (Math.random() * 10000 + '').split('.')[0],
	      image: {
	        src: GIF_LOADING_SRC,
	        width: 24,
	        height: 24
	      }
	    };
	  },


	  methods: {
	    __dispatch: function __dispatch(name, res) {
	      this.$dispatch && this.$dispatch(name, res);
	      this.events && this.events[name] && this.events[name](res);
	    },
	    __find: function __find(str) {
	      var dq = document.querySelector('#vciu-modal-' + this.formID);
	      return dq.querySelector(str);
	    },
	    change: function change(e) {
	      var fileVal = document.querySelector('#g-core-upload-input-' + this.formID).value.replace(/C:\\fakepath\\/i, "");
	      var fileExt = fileVal.substring(fileVal.lastIndexOf(".") + 1);
	      var extensionsArr = this.extensions.split(',');
	      if (extensionsArr.length > 1) {
	        var reg = new RegExp('^[' + extensionsArr.join('|') + ']+$', 'i');
	        if (!reg.test(fileExt)) {
	          return this.__dispatch('errorHandle', 'TYPE ERROR');
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
	        this.errorHandle('FILE IS TOO LARGER MAX FILE IS ' + formatSize);
	        return;
	      }

	      this.files = e.target.files;

	      if (this.crop) {
	        this.__showImage();
	        return;
	      }
	      this.tryAjaxUpload();
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
	        self.__initImage(src);
	      };
	      reader.readAsDataURL(this.files[0]);
	    },


	    // 对图像进行处理
	    __initImage: function __initImage(src) {
	      var pic = new Image();
	      var self = this;
	      pic.src = src;

	      pic.onload = function () {
	        self.image.src = src;
	        self.image.width = pic.naturalWidth;
	        self.image.height = pic.naturalHeight;
	        self.__reseyLayout();
	        self.__initCropBox();
	      };
	    },


	    // init crop area
	    __initCropBox: function __initCropBox() {
	      var dq = document.querySelector('#vciu-modal-' + this.formID);
	      var $selectCropBox = dq.querySelector('.select-recorte');
	      var $wrap = dq.querySelector('.g-crop-image-principal');
	      var imageWidth = parseInt($wrap.style['width']),
	          imageHeight = parseInt($wrap.style['height']);
	      var ratioW = this.cropRatio.split(':')[0],
	          ratioH = this.cropRatio.split(':')[1];
	      var Swidth = imageWidth / 100 * 80;
	      var Sheight = Swidth / ratioW * ratioH;
	      $selectCropBox.style.cssText = 'width:' + Swidth + 'px;height: ' + Sheight + 'px;left:' + (imageWidth - Swidth) / 2 + 'px;top:' + (imageHeight - Sheight) / 2 + 'px;';
	      if (Sheight > imageHeight) {
	        Sheight = imageHeight / 100 * 80;
	        Swidth = Sheight * ratioW / ratioH;
	        $selectCropBox.style.cssText = 'width:' + Swidth + 'px;height:' + Sheight + 'px;left:' + (imageWidth - Swidth) / 2 + 'px;top:' + (imageHeight - Sheight) / 2 + 'px';
	      };
	    },


	    // reset layout 
	    __reseyLayout: function __reseyLayout() {
	      var H = window.innerHeight - 80,
	          W = window.innerWidth - 60,
	          imageWidth = this.image.width,
	          imageHeight = this.image.height;
	      // caculate the image ratio
	      var R = imageWidth / imageHeight;
	      var Rs = W / H;
	      var dq = document.querySelector('#vciu-modal-' + this.formID);
	      var $container = dq.querySelector('.g-crop-image-principal');
	      if (R > Rs) {
	        this.image.width = W;
	        this.image.height = W / R;
	        // I don't hope to use a state to change the container stye
	        $container.style.cssText = 'width:' + W + 'px;height:' + W / R + 'px;margin-top:' + (H - W / R) / 2 + 'px';
	      } else {
	        this.image.width = H * R, this.image.height = H;

	        $container.style.cssText = 'width:' + H * R + 'px;height:' + H + 'px;margin-left:' + (W - H * R) / 2 + 'px;';
	      }
	      this.imgChangeRatio = imageWidth / this.image.width;
	    },

	    doCrop: function doCrop(e) {
	      var btn = e.target;
	      btn.value = btn.value + '...';
	      btn.disabled = true;
	      if ((0, _typeof3.default)(this.data) !== 'object') {
	        this.data = {};
	      }

	      var $selectCrop = this.__find('.select-recorte');
	      this.data["request"] = "crop";

	      this.data["toCropImgX"] = parseInt(window.getComputedStyle($selectCrop).left) * this.imgChangeRatio;
	      this.data["toCropImgY"] = parseInt(window.getComputedStyle($selectCrop).top) * this.imgChangeRatio;
	      this.data["toCropImgW"] = parseInt(window.getComputedStyle($selectCrop).width) * this.imgChangeRatio;
	      this.data["toCropImgH"] = parseInt(window.getComputedStyle($selectCrop).height) * this.imgChangeRatio;
	      this.tryAjaxUpload(function () {
	        btn.value = btn.value.replace('...', '');
	        btn.disabled = false;
	      });
	    },
	    cancel: function cancel() {
	      this.hasImage = false;
	      this.files = '';
	      document.querySelector('#g-core-upload-input-' + this.formID).value = '';
	    },


	    // use ajax upload  IE9+ 
	    tryAjaxUpload: function tryAjaxUpload(callback) {
	      var self = this;
	      var data = new FormData();
	      for (var i = 0; i < this.files.length; i++) {
	        data.append(self.inputOfFile, this.files[i]);
	      }

	      if ((0, _typeof3.default)(this.data) === 'object') {

	        for (var k in this.data) {
	          if (this.data[k] !== undefined) {
	            data.append(k, this.data[k]);
	          }
	        }
	      }
	      this.__dispatch('imageuploading', this.files);
	      xhr('POST', this.url, {}, data, function (res) {
	        if (typeof callback === 'function') {
	          callback();
	        }
	        self.uploading = false;
	        if (self.crop) {
	          self.hasImage = false;
	        }
	        self.__dispatch('imageuploaded', res);
	      });
	    },


	    // resize and drag move
	    resize: function resize(e) {
	      var $el = e.target.parentElement;
	      var $container = this.__find('.g-crop-image-principal');
	      var resizedObj = new Resize($el, $container, this.cropRatio, e);
	    },
	    drag: function drag(e) {
	      var $el = e.target;
	      var $container = this.__find('.g-crop-image-principal');
	      var dragObj = new Drag($el, $container, e);
	    }
	  }

	};

	// </script>

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(7);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(58);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(8), __esModule: true };

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(9);
	__webpack_require__(53);
	module.exports = __webpack_require__(57).f('iterator');

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(10)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(13)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(11)
	  , defined   = __webpack_require__(12);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(14)
	  , $export        = __webpack_require__(15)
	  , redefine       = __webpack_require__(30)
	  , hide           = __webpack_require__(20)
	  , has            = __webpack_require__(31)
	  , Iterators      = __webpack_require__(32)
	  , $iterCreate    = __webpack_require__(33)
	  , setToStringTag = __webpack_require__(49)
	  , getPrototypeOf = __webpack_require__(51)
	  , ITERATOR       = __webpack_require__(50)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(16)
	  , core      = __webpack_require__(17)
	  , ctx       = __webpack_require__(18)
	  , hide      = __webpack_require__(20)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
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
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
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

/***/ },
/* 16 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 17 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(19);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(21)
	  , createDesc = __webpack_require__(29);
	module.exports = __webpack_require__(25) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(22)
	  , IE8_DOM_DEFINE = __webpack_require__(24)
	  , toPrimitive    = __webpack_require__(28)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(25) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(25) && !__webpack_require__(26)(function(){
	  return Object.defineProperty(__webpack_require__(27)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(26)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23)
	  , document = __webpack_require__(16).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(23);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(20);

/***/ },
/* 31 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(34)
	  , descriptor     = __webpack_require__(29)
	  , setToStringTag = __webpack_require__(49)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(20)(IteratorPrototype, __webpack_require__(50)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(22)
	  , dPs         = __webpack_require__(35)
	  , enumBugKeys = __webpack_require__(47)
	  , IE_PROTO    = __webpack_require__(44)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(27)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(48).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(21)
	  , anObject = __webpack_require__(22)
	  , getKeys  = __webpack_require__(36);

	module.exports = __webpack_require__(25) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(37)
	  , enumBugKeys = __webpack_require__(47);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(31)
	  , toIObject    = __webpack_require__(38)
	  , arrayIndexOf = __webpack_require__(41)(false)
	  , IE_PROTO     = __webpack_require__(44)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(39)
	  , defined = __webpack_require__(12);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(40);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(38)
	  , toLength  = __webpack_require__(42)
	  , toIndex   = __webpack_require__(43);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(11)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(11)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(45)('keys')
	  , uid    = __webpack_require__(46);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(16)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16).document && document.documentElement;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(21).f
	  , has = __webpack_require__(31)
	  , TAG = __webpack_require__(50)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(45)('wks')
	  , uid        = __webpack_require__(46)
	  , Symbol     = __webpack_require__(16).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(31)
	  , toObject    = __webpack_require__(52)
	  , IE_PROTO    = __webpack_require__(44)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(12);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(54);
	var global        = __webpack_require__(16)
	  , hide          = __webpack_require__(20)
	  , Iterators     = __webpack_require__(32)
	  , TO_STRING_TAG = __webpack_require__(50)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(55)
	  , step             = __webpack_require__(56)
	  , Iterators        = __webpack_require__(32)
	  , toIObject        = __webpack_require__(38);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(13)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(50);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(59), __esModule: true };

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(60);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(73);
	module.exports = __webpack_require__(17).Symbol;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(16)
	  , has            = __webpack_require__(31)
	  , DESCRIPTORS    = __webpack_require__(25)
	  , $export        = __webpack_require__(15)
	  , redefine       = __webpack_require__(30)
	  , META           = __webpack_require__(61).KEY
	  , $fails         = __webpack_require__(26)
	  , shared         = __webpack_require__(45)
	  , setToStringTag = __webpack_require__(49)
	  , uid            = __webpack_require__(46)
	  , wks            = __webpack_require__(50)
	  , wksExt         = __webpack_require__(57)
	  , wksDefine      = __webpack_require__(62)
	  , keyOf          = __webpack_require__(63)
	  , enumKeys       = __webpack_require__(64)
	  , isArray        = __webpack_require__(67)
	  , anObject       = __webpack_require__(22)
	  , toIObject      = __webpack_require__(38)
	  , toPrimitive    = __webpack_require__(28)
	  , createDesc     = __webpack_require__(29)
	  , _create        = __webpack_require__(34)
	  , gOPNExt        = __webpack_require__(68)
	  , $GOPD          = __webpack_require__(70)
	  , $DP            = __webpack_require__(21)
	  , $keys          = __webpack_require__(36)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(69).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(66).f  = $propertyIsEnumerable;
	  __webpack_require__(65).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(14)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
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
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(20)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(46)('meta')
	  , isObject = __webpack_require__(23)
	  , has      = __webpack_require__(31)
	  , setDesc  = __webpack_require__(21).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(26)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(16)
	  , core           = __webpack_require__(17)
	  , LIBRARY        = __webpack_require__(14)
	  , wksExt         = __webpack_require__(57)
	  , defineProperty = __webpack_require__(21).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(36)
	  , toIObject = __webpack_require__(38);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(36)
	  , gOPS    = __webpack_require__(65)
	  , pIE     = __webpack_require__(66);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 66 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(40);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(38)
	  , gOPN      = __webpack_require__(69).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(37)
	  , hiddenKeys = __webpack_require__(47).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(66)
	  , createDesc     = __webpack_require__(29)
	  , toIObject      = __webpack_require__(38)
	  , toPrimitive    = __webpack_require__(28)
	  , has            = __webpack_require__(31)
	  , IE8_DOM_DEFINE = __webpack_require__(24)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(25) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(62)('asyncIterator');

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(62)('observable');

/***/ },
/* 74 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(76);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(77), __esModule: true };

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(78);
	var $Object = __webpack_require__(17).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(15);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(25), 'Object', {defineProperty: __webpack_require__(21).f});

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"g-core-image-upload-btn\" v-bind:class=\"class\">\n    {{text}}\n    <form class=\"g-core-image-upload-form\" v-show=\"!hasImage\" method=\"post\" enctype=\"multipart/form-data\" action=\"/api2/common_user/cropHeadUrl\" style=\"display: block; cursor: pointer; position: absolute; left: 0px; top: 0px; width: 1242px; height: 61px; opacity: 0; margin: 0px; padding: 0px; overflow: hidden;\">\n      <input v-bind:disabled=\"uploading\" id=\"g-core-upload-input-{{formID}}\" name=\"{{inputOfFile}}\" type=\"file\" accept=\"{{inputAccept}}\" v-on:change=\"change\" style=\"width: 100%; height: 100%;\">\n    </form>\n</div>  \n\n<div class=\"g-core-image-corp-container\" id=\"vciu-modal-{{formID}}\" v-show=\"hasImage\">\n    <div class=\"image-aside\">\n      <div class=\"g-crop-image-box\">\n        <div class=\"g-crop-image-principal\">\n          <img v-bind:src=\"image.src\" v-bind:style=\"{ width:image.width + 'px',height: image.height + 'px' }\">\n          <div class=\"select-recorte\" v-on:touchstart=\"drag\" v-on:mousedown=\"drag\" style=\"width:100px;height:100px;\">\n            <div class=\"g-s-resize\" style=\"z-index: 90;\"></div>\n            <div class=\"g-e-resize\" style=\"z-index: 90;\"></div>\n            <div class=\"g-resize\" v-on:touchstart=\"resize\" v-on:mousedown=\"resize\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"info-aside\">\n      <p class=\"btn-groups\">\n        <button type=\"button\" v-on:click=\"doCrop\" class=\"btn btn-upload\">确定</button>\n        <button type=\"button\" v-on:click=\"cancel()\" class=\"btn btn-cancel\">取消</button>\n      </p>\n    </div>\n</div>\n";

/***/ }
/******/ ])
});
;