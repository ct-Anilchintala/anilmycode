<?php 

session_start();

$im = imagecreatetruecolor(100,40);
$black = imagecolorallocate($im, 0,0,0	);
imagefill($im, 0, 0, $black );
$white = imagecolorallocate($im, rand(0,255),rand(0,255),rand(0,255)		);

$str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdeghijklmnopqrstuvwxyz0123456789";

//$captcha = chr( rand(65,92) ).chr( rand(48,57) ).chr( rand(65,92) ).chr( rand(65,92) );

$captcha = substr($str,rand(0,61),1).substr($str,rand(0,61),1).substr($str,rand(0,61),1).substr($str,rand(0,61),1);
$_SESSION['captcha'] = $captcha;

//echo file_exists("C:\\xampp\\htdocs\\arial.ttf");exit;
imagettftext($im, 15, 0, 30, 30, $white, "C:\\xampp\\htdocs\\arial.ttf", $captcha);

header("Content-Type: image/jpeg");
imagejpeg($im);