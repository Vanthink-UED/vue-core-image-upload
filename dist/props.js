!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueCoreImageUpload=t():e.VueCoreImageUpload=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=37)}({37:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={url:{type:String},text:{type:String,default:"Upload Image"},extensions:{type:String,default:"png,jpg,jpeg,gif,svg,webp"},inputOfFile:{type:String,default:"files"},crop:{type:[String,Boolean],default:""},cropBtn:{type:Object,default:function(){return{ok:"Ok",cancel:"Cancel",preview:"Preview"}}},cropRatio:{type:String,default:"1:1"},resize:{type:[String,Boolean],default:!0},rotate:{type:Boolean,default:!1},ResizeBtn:{type:Object,default:function(){return{ok:"Ok",cancel:"Cancel"}}},maxFileSize:{type:Number,default:104857600},maxWidth:{type:Number},maxHeight:{type:Number},inputAccept:{type:String,default:"image/jpg,image/jpeg,image/png,image/gif"},isXhr:{type:Boolean,default:!0},headers:{type:Object,default:function(){return{}}},data:{type:Object,default:function(){return{}}},multiple:{type:Boolean,default:!1},multipleSize:{type:Number,default:0},minWidth:{type:Number,default:50},compress:{type:[Number,String],default:0},credentials:{type:[String,Boolean],default:!0}}}})});