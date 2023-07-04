<?php

error_reporting( E_ALL & ~E_WARNING );
if( $_POST ){

    $x=(int)($_POST['width']);
    $y=(int)($_POST['height']);
    if( !preg_match("/\.(jpg|jpeg|png|gif|webp)$/i", $_FILES['file']['name']) ){
        echo "Rejected file";exit;
    }
    
    $dest = "Balayya/".$_FILES['file']['name'];
    if( move_uploaded_file($_FILES['file']['tmp_name'], $dest ) ){
        echo "success";
        echo `<br>`;
    }
    else {
        echo "fail";
    }

    echo "<br><br><img src='phpThumb-master/phpThumb.php?src=/vuejs_examples/billing_example/".$dest."&w=".$x."&h=".$y."&q=100&hash'>";
        
}


?>
