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
/******/ 	return __webpack_require__(__webpack_require__.s = 109);
/******/ })
/************************************************************************/
/******/ ({

/***/ 109:
/***/ (function(module, exports) {

/**
 * simple ajax handler
 **/

 //ADD sendAsBinary compatibilty to older browsers
 if (XMLHttpRequest.prototype.sendAsBinary === undefined) {
   XMLHttpRequest.prototype.sendAsBinary = function(string) {
     var bytes = Array.prototype.map.call(string, function(c) {
         return c.charCodeAt(0) & 0xff;
     });
     this.send(new Uint8Array(bytes).buffer);
   };
 }

module.exports = function (method, url, headers, data, callback, err, isBinary) {

  const r = new XMLHttpRequest();
  const error = err || function () {
    console.error('AJAX ERROR!');
  };
  const boundary = 'vuecodeimageupload';
  // Binary?
  let binary = false;
  if (method === 'blob') {
    binary = method;
    method = 'GET';
  }
  console.log(data);
  method = method.toUpperCase();
  // Xhr.responseType 'json' is not supported in any of the vendors yet.
  r.onload = function () {
    let json = r.response;
    try {
      json = JSON.parse(r.responseText);
    } catch (_e) {
      if (r.status === 401) {
        json = error('access_denied', r.statusText);
      }
    }
    let headers = headersToJSON(r.getAllResponseHeaders());
    headers.statusCode = r.status;
    callback(json || (method === 'GET' ? error('empty_response', 'Could not get resource') : {}), headers);
  };
  r.onerror = function () {
    let json = r.responseText;
    try {
      json = JSON.parse(r.responseText);
    } catch (_e) {
      console.error(_e);
    }
    callback(json || error('access_denied', 'Could not get resource'));
  };
  let x;
  // Should we add the query to the URL?
  if (method === 'GET' || method === 'DELETE') {
    data = null;
  } else if (isBinary) {
    const keyData = data;
    const code = data.base64Code.replace('data:' + data.type + ';base64,', '');
    data = ['--' + boundary, 'Content-Disposition: form-data; name="' + data.filed + '"; filename="' + data.filename + '"', 'Content-Type: ' + data.type, '', window.atob(code), ''].join('\r\n');
    const keyArr = Object.keys(keyData);
    if (keyArr.length > 4) {
      for (const k of keyArr) {
        if (['filed', 'filename', 'type', 'base64Code'].indexOf(k) == -1) {
          data += ['--' + boundary, 'Content-Disposition: form-data; name="' + k + '";', '', ''].join('\r\n');
          data += [typeof keyData[k] === 'object' ? JSON.stringify(keyData[k]) : keyData[k], ''].join('\r\n');
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
    }
    else {
      r.overrideMimeType('text/plain; charset=x-user-defined');
    }
  }
  // Set any bespoke headers
  if (headers) {
    for (x in headers) {
      r.setRequestHeader(x, headers[x]);
    }
    if (isBinary) {
      r.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
    }
  }
  if (isBinary) {
    return r.sendAsBinary(data);
  }
  r.withCredentials = true;
  r.send(data);
  return r;
  // Headers are returned as a string
  function headersToJSON(s) {
    const o = {};
    const reg = /([a-z\-]+):\s?(.*);?/gi;
    let m;
    while (m = reg.exec(s)) {
      o[m[1]] = m[2];
    }
    return o;
  }
};


/***/ })

/******/ });
});