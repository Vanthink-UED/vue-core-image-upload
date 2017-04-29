/**
* compress image
* @param src
**/

export default {
  compress (src, quality, callback) {
    const reader = new FileReader();
    const self = this;
    reader.onload = function(event) {
      let image = new Image();
      image.src = event.target.result;
      image.onload = function() {
        const outputType = getImageType(src.type);
        let mimeType = 'image/jpeg';
        if (typeof outputType !== 'undefined' && outputType === 'png'){
          mimeType = 'image/png';
        }
        const cvs = self._getCanvas(image.naturalWidth, image.naturalHeight);
        const ctx = cvs.getContext("2d").drawImage(image, 0, 0);
        const newImageData = cvs.toDataURL(mimeType, quality/100);
        const targetImage = new Image();
        targetImage.src = newImageData;
        return targetImage;
      }
    };
    reader.readAsDataURL(src);
  },
  /**
  * crop image via canvas and generate data
  **/
  crop(image, options, callback) {
    // check crop options
    if(Number.isNumber(options.toCropImgX)&& Number.isNumber(options.toCropImgY) && options.toCropImgW > 0 && options.toCropImgH > 0) {
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
      const ctx = cvs.drawImage(image, options.toCropImgX, options.toCropImgY, options.toCropImgW, options.toCropImgH, 0 , 0, w, h);
      const data = cvs.toDataURL(options.mimeType, options.compress/100);
      const targetImage = new Image();
      targetImage.src = data;
      return targetImage;
    } else {
      callback();
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
