export default {
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
    default: function() {
      return {
        ok: 'Ok',
        cancel: 'Cancel',
      }
    }
  },
  cropRatio: {
    type: String,
    default: '1:1'
  },
  resize: {
    type: [String, Boolean],
    default: false,
  },
  ResizeBtn: {
    type: Object,
    default: function() {
      return {
        ok: 'Ok',
        cancel: 'Cancel'
      }
    }
  },
  maxFileSize:{
    type: Number,
    default: 1024 * 1024 * 100,
  },
  maxWidth:{
    type: Number,
  },
  maxHeight:{
    type: Number,
  },
  inputAccept:{
    type: String,
    default: 'image/jpg,image/jpeg,image/png'
  },
  isXhr: {
    type: Boolean,
    default: true
  },
  headers: {
    type: Object,
    default: function() {
      return {};
    }
  },
  data: {
    type: Object,
    default: function() {
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
    default: 50,
  },
  compress: {
    type: [Number, String],
    default: 0,
  }
}
