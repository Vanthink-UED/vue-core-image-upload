<template>
  <div class="components">
    <h3>基本属性</h3>
    <p>Vue-core-image-upload 提供了很多可配置的选项，从而希望尽可能的满足开发者的需求。</p>
    <p>Code Example</p>
    <pre v-highlightjs><code class="html">&lt;vue-core-image-upload 
  :class="['btn', 'btn-primary']" 
  :crop="false" 
  @imageuploaded="imageuploaded" 
  :data="data" 
  :max-file-size="5242880" 
  url="http://101.198.151.190/api/upload.php" &gt;
&lt;/vue-core-image-upload&gt;</code></pre>
    <p>其中 class、url、max-file-size均是插件支持的属性，你可以具体查看这张表格:</p>
    <p>
      <table class="m-table bordered">
        <thead>
          <tr>
            <th>属性</th>
            <th align="left">数据类型</th>
            <th>示例</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>url</td>
            <td align="left">String</td>
            <td>'/crop.php'</td>
            <td>服务端上传的地址</td>
          </tr>
          <tr>
            <td>text</td>
            <td align="left">String</td>
            <td>'Upload Image'</td>
            <td>你需要显示按钮的文本</td>
          </tr>
          <tr>
            <td>inputOfFile</td>
            <td align="left">String &nbsp; &nbsp;</td>
            <td>&nbsp; 'file'</td>
            <td>上传服务端对应表单 name</td>
          </tr>
          <tr>
            <td>extensions</td>
            <td align="left">String</td>
            <td>'png,jpg,gif'</td>
            <td>限制的图片类型</td>
          </tr>
          <tr>
            <td>crop</td>
            <td align="left">Boolean</td>
            <td>true</td>
            <td>是否需要裁剪</td>
          </tr>
          <tr>
            <td>cropRatio</td>
            <td align="left">String</td>
            <td>'1:1'</td>
            <td>限制裁剪的形状</td>
          </tr>
          <tr>
            <td>cropBtn</td>
            <td align="left">Object</td>
            <td>{ok:'Save','cancel':'Give Up'}</td>
            <td>按钮文本</td>
          </tr>
          <tr>
            <td>maxFileSize</td>
            <td align="left">Number</td>
            <td>10485760(10M)</td>
            <td>文件大小限制</td>
          </tr>
          <tr>
            <td>maxWidth</td>
            <td align="left">Number</td>
            <td>150</td>
            <td>限制图片的最大宽度</td>
          </tr>
          <tr>
            <td>maxheight</td>
            <td align="left">Number</td>
            <td>150</td>
            <td>限制图片的最大高度</td>
          </tr>
          <tr>
            <td>inputAccept</td>
            <td align="left">string</td>
            <td>'image/*' / 'image/jpg,image/jpeg,image/png'</td>
            <td>赋予上传file的接受类型</td>
          </tr>
          <tr>
            <td>isXhr</td>
            <td align="left">Boolean</td>
            <td>true</td>
            <td>是否需要调用系统内自己的上传功能</td>
          </tr>
          <tr>
            <td>headers</td>
            <td align="left">Object</td>
            <td>{auth: xxxxx}</td>
            <td>设置xhr上传 的header</td>
          </tr>
        </tbody>
      </table>
    </p>
    <p>后文会对一些重要的属性进行详细的描述，以及一些其他 Demos 你可以参考左边的导航。</p>
    <h4> url </h4>
    <p>url 表示我们指定的服务端配置接口地址，插件会将文件使用 Ajax 的形式上传到到你指定的地址服务，然后你可以通过<code>imageuploaded</code>的回调取得服务器的响应的数据。</p>
    <a href="">具体使用可以看这里</a>
    <p></p>
  </div>
</template>