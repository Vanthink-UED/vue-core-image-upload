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
            <td>限制裁剪的形状(设置为auto表示不限制裁剪框形状)</td>
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
            <td>compress</td>
            <td align="left">Number</td>
            <td>50</td>
            <td>设置本地图片压缩的质量</td>
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
          <tr>
            <td>data</td>
            <td align="left">Object</td>
            <td>{auth: xxxxx}</td>
            <td>设置附带发送给服务端的数据</td>
          </tr>
        </tbody>
      </table>
    </p>
    <p>后文会对一些重要的属性进行详细的描述，以及一些其他 Demos 你可以参考左边的导航。</p>
    <h4> url </h4>
    <p>url 表示我们指定的服务端配置接口地址，插件会将文件使用 Ajax 的形式上传到到你指定的地址服务，然后你可以通过<code>imageuploaded</code>的回调取得服务器的响应的数据。</p>
    <h4>inputOfFile</h4>
    <p>如果你的服务端端需要指定上传表单file name 的字段，你可以通过<code>inputOfFile</code>设置,只能是字符串如果没有设置，默认发给服务端的字段是<strong>files</strong>。如果你是使用多图片上传的话，字段会变成<strong>files[]</strong>。</p>
    <h4>extensions</h4>
    <p>限制图片的上传类型，你可以传递一组CSV数据进去比如 'png,jpg,gif'，从而只允许png,jpg,gif的类型图片上传到服务器。</p>
    <h4>maxFileSize</h4>
    <p>虽然很多时候服务端限制了图片的大小，但是本地同样可以限制上传图片的大小，你可以设置 <code>maxFileSize</code>的值来实现，它的基本单位为字节比如(10485760B = 10M)。</p>
    <h4>inputAccept</h4>
    <p>赋予上传file的接受类型,它可以帮助你再上传图片选择时，禁用掉不需要的文件，默认值为 image/jpg,image/jpeg,image/png</p>
    <h4>isXhr</h4>
    <p>我们同样接受取消掉默认的上传，你可以设置<code>isXhr</code>为 false ,自行处理我们获取到文件对象。</p>
    <p class="warnning">关于没有涉及到的属性，左边的导航会给出详细说明</p>
  </div>
</template>
