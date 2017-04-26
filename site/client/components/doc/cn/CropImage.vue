<template>
  <div class="components">
    <h3>裁剪图片</h3>
    <p>插件支持图片的裁剪，你可以指定图片裁剪的宽高，图片的的最大宽度和高度这些。</p>
    <p>图片裁剪完成后你有两者选择，选择<strong>本地裁剪</strong>或者<strong>服务端裁剪</strong>。</p>
    <h4>本地裁剪</h4>
    <h4>服务端裁剪</h4>
    <p>服务端裁剪是指将原图片和裁剪的参数一起发给后端，方便服务端保存原图，以及对原图的其他操作，而服务端能够接收到post的参数如下:</p>
    <img src="http://img1.vued.vanthink.cn/vueda26e41f79edd6208ec92f6ce915e558a.png" />
    <p>每个字段具体说明如下:</p>
    <ul>
      <li><code>toCropImgX</code>: 裁剪的区域距离图片的左边缘的距离</li>
      <li><code>toCropImgY</code>: 裁剪的区域距离图片的上边缘的距离</li>
      <li><code>toCropImgW</code>: 裁剪的区域的宽度</li>
      <li><code>toCropImgH</code>: 裁剪的区域的高度</li>
      <li><code>maxWidth</code>: 你期望裁剪的图片的最大宽度</li>
      <li><code>maxHeight</code>: 你期望裁剪的图片的最大高度</li>
    </ul>
   <p>裁剪区域的样式，你可以自行复写样式。</p> 
    
  </div>
</template>