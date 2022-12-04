<?php
require '../db.php';
$result = get_sum_by_basket($_POST['id']);
$output = implode("','",$result);
echo $output;

?>