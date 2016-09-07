$(function() {

    // upload without other settings
    $(".js-btn-upload").coreImageUpload ({
        url: "./upload.php",
        inputOfFile: 'image',
        uploadedCallback: function (result) {
            alert(result);
        }
    });
    
    
    $(".js-btn-crop").coreImageUpload ({
        url: "./crop.php",
        inputOfFile: 'image',
        enableCrop: true,
        cropRatio: '1:1',
        uploadedCallback: function (result) {
            alert( '裁剪成功! 图片宽高:' + result.data['toCropImgW'] + result.data['toCropImgH']);
        }
    });
    
    
    
})