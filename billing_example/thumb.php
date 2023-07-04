<img src="../billing_example/Balayya/Balayya.jpg">
<br>
<img src="phpThumb-master/phpThumb.php/?src=/vuejs_examples/billing_example/Balayya/Balayya.jpg&w=50&h=150&q=90">

<?php
require_once('phpThumb-master/phpThumb.config.php');
echo '<img src="'.htmlspecialchars(phpThumbURL('src=/vuejs_examples/billing_example/Balayya/Balayya.jpg&w=150&h=150&q=90', '/vuejs_examples/billing_example/phpThumb-master/phpThumb.php')).'">';
?>