<?php

   $file = $_FILES?$_FILES['files']:null;
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
            'name' => $file['name'],
            'post' => $_POST,
        ),
        'errmsg' => ''
    ));
?>