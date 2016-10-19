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
   $new_file_name = strtolower($_FILES['files']['tmp_name']);
   header('Content-Type:"text/json"');  
   cors();
   if($file['size'] > (1024000)) //can't be larger than 1 MB
		{
			echo json_encode(array(
          'errcode' => 500,
          'data' => $file,
          'errmsg' => '文件太大'
      ));
     return;
		}
		
    $currentdir = getcwd();
    $target = $currentdir .'/images/' . basename($_FILES['files']['name']);
		//move it to where we want it to be
    move_uploaded_file($file['tmp_name'], $target);
		  
    echo json_encode(array(
        'errcode' => 0,
        'data' => array(
            'src' => 'http://' . $_SERVER['HTTP_HOST'] . '/api/images/' . basename($_FILES['files']['name']),
            'name' => $file['name'],
        ),
        'errmsg' => 'not found your image'
    ));
?>