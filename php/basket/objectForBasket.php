<?php
require '../db.php';
$result = get_all_by_basket($_POST['id']);
foreach ($result as $row);
$output='{"id":"'.$row['id'].'","title":"'.$row['title'].'","color":"'.$row['color'].'","price":"'.$row['price'].'","img":"'.$row['location'].'","artkl":"'.$row['article'].'"}';
echo $output;

?>