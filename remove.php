<?php
require 'php/db.php';
if(isset($_POST["id"])){
   $id = implode("','",$_POST["id"]);
   $home = $_SERVER['DOCUMENT_ROOT']."/";
   for($i=0;$i < count($_POST["id"]);$i++){
      foreach(glob(dirname(__FILE__).'/img/sql/'.$_POST["id"][$i].'/*') as $img){
         unlink($img);
      }
      if(is_dir($home.'img/sql/'.$_POST["id"][$i])){
         rmdir($home.'img/sql/'.$_POST["id"][$i]);
      }
   }
   $connection->query("DELETE FROM `item` WHERE `item`.`id` in('$id')");
   echo "true";
}
?>