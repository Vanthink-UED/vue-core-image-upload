
<template>
<div class="g-core-image-upload-btn button button-full">
    {{text}}
    <form class="g-core-image-upload-form" v-show="!hasImage" method="post" enctype="multipart/form-data" action="/api2/common_user/cropHeadUrl" style="display: block; cursor: pointer; position: absolute; left: 0px; top: 0px; width: 1242px; height: 61px; opacity: 0; margin: 0px; padding: 0px; overflow: hidden;">
      <input v-disbaled="uploading" id="g-core-upload-input" name="{{inputOfFile}}" type="file" accept="image/*" v-on:change="change" style="width: 100%; height: 100%;">
    </form>
</div>

<div class="g-core-image-corp-container" v-show="hasImage">
    <div class="image-aside">
      <div class="g-crop-image-box">
        <div class="g-crop-image-principal" style="width: 275px; height: 275px; margin-left: 198px;"><div></div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NzZlNTk0Ny03MGQxLTQ3NjEtYTQ2OC01YTY5ZmMzNGI3MzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjNBRDJGRTY2QjU3MTFFNjhBNTY5MjI3MTJBNjFCNzgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjNBRDJGRTU2QjU3MTFFNjhBNTY5MjI3MTJBNjFCNzgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkN2EzNGRjNS0yYjI2LTQ2NmItYWI0NS04MWNkYjIyZDQxZDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDc2ZTU5NDctNzBkMS00NzYxLWE0NjgtNWE2OWZjMzRiNzMx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" style="width: 275px; height: 275px;">
          <div class="select-recorte ui-resizable ui-draggable ui-draggable-handle" style="width: 220px; height: 220px; left: 27.5px; top: 27.5px;">
            <div class="ui-resizable-handle ui-resizable-e" style="z-index: 90;"></div>
            <div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div>
            <div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="info-aside">
      <p class="btn-groups">
        <button type="button" class="btn btn-upload">确定</button>
        <button type="button" class="btn btn-cancel">取消</button>
      </p>
    </div>
</div>

</template>

<style>
.g-core-image-upload-btn{
    position: relative;
}

.g-core-image-upload-form{
  position: absolute;
  left:0;
  right: 0;
  top:0;
  bottom:0;
  opacity: 0;
}
.g-core-image-upload-container{
    position: absolute;
    background: #111;
    z-index: 900;
}
.g-core-image-upload-modal{
    position: absolute;
    left:0;
    right:0;
    width: 100%;
    height: 100%;
    border:1px solid #ccc;
    z-index: 899;
}
.dropped{
    border:4px solid #ea6153;
}

.g-core-image-corp-container{
    z-index: 1900;
    position:fixed;
    left:0;
    right:0;
    top:0;
    bottom: 0;
    background: rgba(0,0,0,.9);
    color:#f1f1f1;
}
.g-core-image-corp-container .image-aside{
    overflow: hidden;
    position: absolute;
    right: 30px;
    left:30px;
    top:60px;
    bottom:20px;
    text-align: center;
}
.g-core-image-corp-container .image-aside img{
    max-width: 100%;
}
.g-core-image-corp-container .info-aside{
    position: absolute;
    left:0;
    right: 0;
    top:0;
    height: 40px;
    padding-left: 10px;
    padding-right: 10px;
    background: #fefefe;
    color:#777;
}
.g-core-image-corp-container .info-aside .image-corp-preview{
    position: relative;
    overflow: hidden;
    text-align: center;
    border:2px solid #ccc;
}
.g-core-image-corp-container .info-aside .image-corp-preview.circled{
    border-radius: 160px;
}
.g-core-image-corp-container .info-aside .image-corp-preview img{
    width: 100%;
}
.g-core-image-corp-container .info-aside .config-info .image-details{
    width: 100%;
    color:#999;
}

.g-core-image-corp-container .info-aside .config-info .image-details td{
    border:none;
    line-height: 24px;
}
.g-core-image-corp-container .info-aside .config-info .image-details tr td:first-child{
    width:36%;
}
.g-core-image-corp-container .info-aside .config-info .image-details tr td:last-child{
    color:#555;
}
.g-core-image-corp-container .btn-groups{
    text-align: right;
    margin: 5px 0 0;
}
.g-core-image-corp-container .btn{
    display: inline-block;
    padding: 0 15px;
    height: 32px;
    margin-left: 15px;
    background: #fff;
    border:1px solid #ccc;
    border-radius: 2px;
    font-size: 13px;
    color:#222;
    line-height: 32px;
    transition: all .1s ease-in;
}
.g-core-image-corp-container .btn:hover{
    border:1px solid #777;
    box-shadow: 0 1px 3px rgba(0,0,0,.05);
}
.g-core-image-corp-container .btn:active,{
    background: #ddd;
}
.g-core-image-corp-container .btn:disabled{
    background: #eee !important;
    border-color:#ccc;
    cursor: not-allowed;
}
.g-core-image-corp-container .btn-upload{
    background: #27ae60;
    border-color:#27ae60;
    color:#fff;
}
.g-core-image-corp-container .btn-upload:hover{
    background: #2dc26c;
    border-color:#27ae60;
    box-shadow: 0 1px 3px rgba(0,0,0,.05);
}
.g-core-image-corp-container .g-crop-image-box,.g-core-image-corp-container .g-crop-image-box .g-crop-image-principal{
    position: relative;

}
.g-core-image-corp-container .g-crop-image-box .select-recorte{
    position: absolute;
    background: #fff;
    opacity: .5;
    border:2px dashed #555;

}

</style>

<script>
  /**simple ajax handler**/

  let xhr = function (method, url, headers, data, callback,error) {

    var r = new XMLHttpRequest();
    var error = error || function() {
      console.error('AJAX ERROR!')
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
    } else if (data && typeof (data) !== 'string' && !(data instanceof FormData) && !(data instanceof File) && !(data instanceof Blob)) {
        // Loop through and add formData
        var f = new FormData();
        for (x in data)
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

        data = f;
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
      while ((m = reg.exec(s))) {
          r[m[1]] = m[2];
      }

      return r;
    }
  };


  /** a vue plugin for image crop and upload
  *  Github: https://github.com/Vanthink-UED/vue.core.image.upload
  **/



  export default {
    props:{
      url: {
        type: String,
      },
      text: {
        type:String,
        default:  'Upload Image'
      },
      extensions: {
        type: String,
        default:'png.jpg,jpeg,gif,svg,webp'
      },
      uploadedCallback: {
        type: Function,
        default: function() {

        },
      },
      inputOfFile: {
        type: String,
        default: 'file'
      },

      enableCrop: {
        type: Boolean,
        default: false,
      },
      cropRadio: {
        type: String,
        default: '1:1'
      },
      errorHandle:{
        type: Function,
        default: function(error) {
          console.error(error);
        }
      },
      maxFileSize:{
        type: Number,
        default: 1024 * 1024 * 100,
      }
    },
    data() {
      return {
        files: [],
        hasImage: false,
        options: this.props,
        uploading: false,
      }
    },

    methods: {
      change(e) {
        let fileVal = document.querySelector('#g-core-upload-input').value.replace(/C:\\fakepath\\/i, "");
        let fileExt = fileVal.substring(fileVal.lastIndexOf(".") + 1);
        const extensionsArr = this.extensions.split(',');
        if(extensionsArr.length>1) {
            var reg = new RegExp('^[' + extensionsArr.join('|') + ']+$','i');
            if (!reg.test(fileExt)) {
                return options.extensionError();
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

        if(this.enableCrop) {
          this.hasImage = 1;
          return;

        }
        this.tryAjaxUpload();

      },

      // use ajax upload  IE9+
      tryAjaxUpload() {
        let self = this;
        let data = new FormData();
        for(let k in this.files) {
           data.append(self.inputOfFile, this.files.k);
        }

        if (typeof this.data === 'object') {

            for(let k in this.data) {
              data.append(this.data['k']);
            }

        }

        xhr('POST',this.url,{},data,function(res) {
          self.uploading = false;
          if(self.enableCrop) {
              self.hasImage = false;
           }
           self.uploadedCallback(data);
        });
      }


    },

  };

</script>
