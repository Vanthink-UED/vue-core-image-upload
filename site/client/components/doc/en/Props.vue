<template>
  <div class="components">
    <h3>Props</h3>
    <p>Vue-core-image-upload supports many props to meet developers'needs.</p>
    <p>Code Example</p>
    <pre v-highlightjs><code class="html">&lt;vue-core-image-upload
  class="btn btn-primary"
  :crop="false"
  @imageuploaded="imageuploaded"
  :data="data"
  :max-file-size="5242880"
  url="http://101.198.151.190/api/upload.php" &gt;
&lt;/vue-core-image-upload&gt;</code></pre>
    <p>'class', 'url' and 'max-file-size' are different props. And the table below simply introduces how it work.</p>
    <p>
      <table class="m-table bordered">
        <thead>
          <tr>
            <th>Props</th>
            <th align="left">Data Type</th>
            <th>Example</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>url</td>
            <td align="left">String</td>
            <td>'/crop.php'</td>
            <td>Your server api</td>
          </tr>
          <tr>
            <td>text</td>
            <td align="left">String</td>
            <td>'Upload Image'</td>
            <td>The text of your uploading button</td>
          </tr>
          <tr>
            <td>inputOfFile</td>
            <td align="left">String &nbsp; &nbsp;</td>
            <td>&nbsp; 'file'</td>
            <td>Yout input[file] name</td>
          </tr>
          <tr>
            <td>extensions</td>
            <td align="left">String</td>
            <td>'png,jpg,gif'</td>
            <td>Limit the image type</td>
          </tr>
          <tr>
            <td>crop</td>
            <td align="left">Boolean</td>
            <td>'server'</td>
            <td>Crop image option</td>
          </tr>
          <tr>
            <td>cropRatio</td>
            <td align="left">String</td>
            <td>'1:1'</td>
            <td>The cropped image shape(set 'auto' not limit the crop shape)</td>
          </tr>
          <tr>
            <td>cropBtn</td>
            <td align="left">Object</td>
            <td>{ok:'Save','cancel':'Give Up'}</td>
            <td>The Text of cropping button text</td>
          </tr>
          <tr>
            <td>maxFileSize</td>
            <td align="left">Number</td>
            <td>10485760(10M)</td>
            <td>Limit the size of the file</td>
          </tr>
          <tr>
            <td>maxWidth</td>
            <td align="left">Number</td>
            <td>150</td>
            <td>The maximum width of cropped image </td>
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
            <td>the input[file] accept</td>
          </tr>
          <tr>
            <td>compress</td>
            <td align="left">Number</td>
            <td>50</td>
            <td>Set the quality of compressed image</td>
          </tr>
          <tr>
            <td>isXhr</td>
            <td align="left">Boolean</td>
            <td>true</td>
            <td>IF cancel ajax uploading</td>
          </tr>
          <tr>
            <td>headers</td>
            <td align="left">Object</td>
            <td>{auth: xxxxx}</td>
            <td>Set customed header when ajax uploading</td>
          </tr>
          <tr>
            <td>data</td>
            <td align="left">Object</td>
            <td>{auth: xxxxx}</td>
            <td>Set customed data when ajax posting server</td>
          </tr>
        </tbody>
      </table>
    </p>
    <h4> url </h4>
    <p><code>url</code> means a http url that ajax will send，and you need bind a function on <code>@imageuploaded</code> to handle the server response</p>
    <h4>inputOfFile</h4>
    <p>You can set input[file] name which the server must use via <code>inputOfFile</code>. The default value is <strong>files</strong>。
      If you upload multiple images the name will be <strong>files[]</strong>。</p>
    <h4>extensions</h4>
    <p>If you want only one or two image types to upload to server, <code>extensions</code> is the right way when you pass an CSV string to it.</p>
    <h4>maxFileSize</h4>
    <p>Even though the server would check the file size , you cloud also limit the file size locally for thrifting the traffic of network.</p>
    <h4>isXhr</h4>
    <p>Set <code>isXhr</code> equal <code>false</code>, the uploading will be canceld and you can do something by yourself.</p>
    <p class="warnning">The naviagtion will show other props documents and demos</p>
  </div>
</template>
