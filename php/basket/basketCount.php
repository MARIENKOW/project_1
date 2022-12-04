<?php
require '../db.php';
$result = get_count_by_basket($_POST['id']);
// $output = '<div class="header__count--in">'.implode("','",$result).'</div>';
$output = implode("','",$result);
echo $output;

?>