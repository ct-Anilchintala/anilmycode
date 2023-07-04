<?php

error_reporting( E_ALL & ~E_WARNING );

$con = mysqli_connect("localhost", "root", "", "practice" );

error_reporting( E_ALL & ~E_WARNING );

session_start();

if( $_GET['action'] == "load_albums" ){
	$query = "select * from albums order by id";
	$res = mysqli_query($con, $query);
	$albums = [];
	while( $row = mysqli_fetch_assoc($res) ){
		$albums[] = $row;
	}
	if( mysqli_error($con) ){
		echo json_encode([
			"status"=>"fail",
			"error"=> mysqli_error($con)
		],  JSON_PRETTY_PRINT );
	}else{
		echo json_encode([
		"status"=>"success",
		"albums"=> $albums
		]);
	}
	exit;
}
if( $_GET['action'] == "delete_album" ){
	$query = "delete from albums where id = " . $_GET['id'];
	$res = mysqli_query($con, $query);
	echo json_encode([
			"status"=>"success",
		]);
	exit;
}
if( isset($_GET['action'] ) ){
    if( $_GET['action'] == "read_album" ){
	$query = "select * from albums where id=". $_GET['id'];
	$res = mysqli_query($con, $query);
	$albums= mysqli_fetch_assoc($res);

    $query2 = "select * from album_images where album_id=". $_GET['id'];
	$res2 = mysqli_query($con, $query2);
    $files=[];
    while($row=mysqli_fetch_assoc($res2)){
        $files[]=$row;
    }

	echo json_encode([
			"status"=>"success",
			"albums"=> $albums,
            "files"=> $files
		]);
	exit;
    }
}


if( $_SERVER['CONTENT_TYPE'] == "application/json" ){
	$data = file_get_contents("php://input");
	//echo $data;	
	$_POST = json_decode($data,true);
}else{

}

if( $_POST ){
//print_r( $_FILES );
    if( !preg_match("/\.(jpg|jpeg|png|gif|webp)$/i", $_FILES['file']['name']) ){
        echo "Rejected file";exit;
    }
    $dest = $_POST['name']."/".$_FILES['file']['name'];
    if (!is_dir($_POST['name'])) {
        mkdir($_POST['name'], 0777, true);
        echo "New Album Created!";
        if( move_uploaded_file($_FILES['file']['tmp_name'], $dest ) ){

            echo "success";

            $filename= $_FILES['file']['name'];

            $res=mysqli_query($con,"insert into albums set name='".$_POST['name']."'");

            $res2=mysqli_query($con,"select id from albums where name='".$_POST['name']."'");

            $row=mysqli_fetch_assoc($res2);

            $res3=mysqli_query($con,"insert into album_images set album_id='".$row['id']."', filename='".$filename."'");

            if( mysqli_error($con) ){
                echo json_encode([
                    "status"=>"fail",
                    "error"=> mysqli_error($con)
                ],  JSON_PRETTY_PRINT );
            }

        }else{
            echo "failed";
        }

    } else {
        echo "Album Already Exists !";
        if( move_uploaded_file($_FILES['file']['tmp_name'], $dest ) ){

            echo "success";

            $filename= $_FILES['file']['name'];

            $res2=mysqli_query($con,"select id from albums where name='".$_POST['name']."'");

            $row=mysqli_fetch_assoc($res2);

            $res3=mysqli_query($con,"insert into album_images set album_id='".$row['id']."', filename='".$filename."'");

            if( mysqli_error($con) ){
                echo json_encode([
                    "status"=>"fail",
                    "error"=> mysqli_error($con)
                ],  JSON_PRETTY_PRINT );
            }

        }else{
            echo "failed";
        }
    }

}

?>


<p>hiii</p>