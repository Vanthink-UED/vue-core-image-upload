/**
* compress image
* reference https://github.com/brunobar79/J-I-C
**/

export default {
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
      let image = new Image();
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
    if(checkNumber(options.toCropImgX) && checkNumber(options.toCropImgY) && options.toCropImgW > 0 && options.toCropImgH > 0) {
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
    console.log(src);
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
    if(checkNumber(options.toCropImgX) && checkNumber(options.toCropImgY) && options.toCropImgW > 0 && options.toCropImgH > 0) {
      let w = options.toCropImgW  * options.imgChangeRatio;
      let h = options.toCropImgH * options.imgChangeRatio;
      const cvs = this._getCanvas(w, h);
      const ctx = cvs.getContext('2d').drawImage(image, 0, 0, options.toCropImgW, options.toCropImgH, 0 , 0, w , h);
      const mimeType = this._getImageType(image.src);
      const data = cvs.toDataURL(mimeType, options.compress/100);
      callback(data);
    }
  },

  _loadImage(data, callback) {
    const image = new Image();
    image.src = data;
    image.onload = function () {
      callback(image);
    }
    image.onerror = function() {
      console.log('Error: image error!');
    }
  },

  _getCanvas(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  },

};
