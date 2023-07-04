<?php 

$im = imagecreatetruecolor(500,500);
$color = imagecolorallocate($im, 255,255,255);
imagefill($im, 0,0, $color);
$red =  imagecolorallocate($im, 255,0,0);

$im1 = imagecreatefromjpeg("Balayya.jpg");
$im2 = imagecreatefromjpeg("Balayya2.jpg");
$im3 = imagecreatefromjpeg("Balayya3.jpg");

$img=[$im1,$im2,$im3];
$p=50;
$q=50;
for($i=0;$i<3;$i++){
    for($j=0;$j<3;$j++){
        $image=$img[$j];
        $sw = imagesx($image);
        $sh = imagesy($image);
        imagerectangle($im, $p-1, $q-1, $p+100,$q+100, $red);
        imagecopyresampled($im, $image, $p, $q, 0, 0, 100, 100, $sw, $sh);
        $p+=150;
    }
    $p=50;
    $q+=150;
}

// imagecopyresampled($im, $im2, 150, 250, 0, 0, 300, 300, $sw, $sh);

header("Content-Type: image/jpeg");
imagejpeg($im);