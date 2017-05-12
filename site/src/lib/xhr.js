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
