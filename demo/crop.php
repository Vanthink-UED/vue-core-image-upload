<?php

    function cors() {

        // Allow from any origin
        if (isset($_SERVER['HTTP_ORIGIN'])) {
            // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
            // you want to allow, and if so:
            header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Max-Age: 86400');    // cache for 1 day
        }

        // Access-Control headers are received during OPTIONS requests
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
                header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
                header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        }

   }
   
   $file = $_FILES?$_FILES['files']:null;
   header('Content-Type:"text/json"');
   cors();
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