<?php
error_reporting( E_ALL & ~E_WARNING );

session_start();

if( $_GET['action'] == "logout" ){
	session_destroy();
	//echo "<P>You have successfully logout</p>";
	header("Location: ?event=Logout");
	exit;
}

if( $_POST['action'] == "Login" ){
	if( $_SESSION['captcha'] != $_POST['captcha'] ){
		header("Location: ?event=error2");
		exit;
	}else if( $_POST['user'] == "test" && $_POST['pass'] == "test" ){
		$_SESSION['login'] = true;
		header("Location: ?event=Login");
		exit;
	}else{
		header("Location: ?event=error");
		//echo "<P>Incorrect login</p>";
		exit;
	}
}

?>

<html>
<body>

<?php if( $_SESSION['login'] ){ ?>

		<P><a href="?action=logout" >Logout</a></P>
		<form method="POST" action="album.php" enctype="multipart/form-data" >
		<input type="file" name="file" value="" >
		<input type="submit" name="btn" value="submit" >
		</form>		
			
	<?php 

	$files = dir("Photo/");
	while( $fn = $files->read() ){if( $fn != "." && $fn != ".." ){
		echo "<div style='margin:5px; width:200px; padding:5px; border:1px solid black;'>
		<img style='width:100%;' src='Photo/" . $fn . "' >
		<div>" . $fn . "</div>
		</div>";
	}
	}

    }else{ ?>
		<form method="post" >
			<div>User:<input type="text" name="user" ></div>
			<div>Password: <input type="password" name="pass" ></div>
			<div><img src="captcha.php" ></div>
			<div>Code: <input type="text" name="captcha" ></div>
			<div><input type="submit" value="Login" ></div>
			<input type="hidden" name="action" value="Login" >
		</form>
		<?php if( $_GET['event'] == "error" ){
			echo "<p style='color:red;' >Username or password wrong</p>";
		}else if( $_GET['event'] == "error2" ){
			echo "<p style='color:red;' >Incorrect Captcha entered.</p>";
		} ?>


<?php }

print_r( $_SESSION );
 ?>
</body>
</html>