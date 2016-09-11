<?php
    

   $file = $_FILES?$_FILES['files']:null;
   $new_file_name = strtolower($_FILES['files']['tmp_name']);
   header('Content-Type:"text/json"');  
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
            'src' => './images' .$new_file_name,
            'name' => $file['name'],
        ),
        'errmsg' => 'not found your image'
    ));
?>