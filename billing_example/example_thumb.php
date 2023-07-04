<?php
error_reporting( E_ALL & ~E_WARNING );

$con = mysqli_connect("localhost", "root", "", "photos" );
?>
<html>
    <body>
        <form method="POST" action="action_thumb.php" enctype="multipart/form-data">
            <input type="file" name="file" value="">
            <input type="number" name="height" value=0>
            <input type="number" name="width" value=0>
            <input type="submit" name="button" value="submit">
        </form>
    </body>
</html>