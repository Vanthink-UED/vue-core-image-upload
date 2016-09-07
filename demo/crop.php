<?php
    

    $file = $_FILES?$_FILES['image']:null;

    
   header('Content-Type:"text/json"');
   if(!isset($file)) {
        echo json_encode(array(
            'errcode' => 500,
            'data' => '',
            'errmsg' => 'not found your image'
        ));
        return;
    }
    echo json_encode(array(
        'errcode' => 0,
        'data' => array(
            'filename' => $file['name'],
            'toCropImgW' => $_POST['toCropImgW'],
            'toCropImgH' => $_POST['toCropImgH'],
        ),
        'errmsg' => ''
    ));
?>