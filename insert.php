<?php
require 'php/db.php';
$title=$_POST['title'];
$text=$_POST['text'];
$price=$_POST['price'];
$kategory=$_POST['kategory'];
$brand=$_POST['brand'];
$color=$_POST['color'];
$article=$_POST['article'];
$gender = $_POST['gender'];
$home = $_SERVER['DOCUMENT_ROOT']."/";
$connection->query("INSERT INTO `item` (`id`, `title`, `text`, `price`, `male`, `female`, `kategory`, `brand`, `color`, `article`, `colorGroup`) VALUES (NULL, '', '', '', '', '', '', '', '', '', '')");

$last_id = $connection->insert_id;

if($gender){

   $sqlgender='';

   if($gender =='male'){
      $sqlgender = "`male` = 'yes',`female` = ''";
   }elseif($gender =='female'){
      $sqlgender = "`male` = '',`female` = 'yes'";
   }else{
      $sqlgender = "`male` = 'yes',`female` = 'yes'";
   }

   $connection->query("UPDATE `item` SET `title` = '$title',`text` = '$text',`price` = '$price',$sqlgender,`kategory` = '$kategory',`brand` = '$brand',`color` = '$color',`article`='$article',`colorGroup`='$last_id' WHERE `item`.`id` = $last_id");
}

if($_POST["sizes"]){
   $sizes=explode(",",$_POST['sizes']);
   if(count($sizes)>0){
      $sqlSize ="VALUES (NULL, '$sizes[0]', '$last_id')";
      for($i=1;$i<count($sizes);$i++){
         $sqlSize .=",(NULL, '$sizes[$i]', '$last_id')";
      }
      $connection->query("INSERT INTO `size` (`id`, `name`, `id_item`) $sqlSize");
   }
}

if(isset($_FILES)){
   $sqlPhoto = '';
   if (isset($_FILES['mainPhoto'])) {
      $fileName = $_FILES['mainPhoto']['name'];
      mkdir( $home.'img/sql/'.$last_id, 0777 );
      move_uploaded_file($_FILES['mainPhoto']['tmp_name'],$home.'img/sql/'.$last_id."/".$fileName);
      $sqlPhoto .="INSERT INTO `photo` (`id`, `location`, `main`, `id_item`) VALUES (NULL, 'img/sql/$last_id/$fileName', 'yes', '$last_id')";
   }
   if(isset($_FILES['photos_0'])){
      for($i=0;$_FILES["photos_$i"];$i++){
         $fileName=$_FILES["photos_$i"]['name'];
         $sqlPhoto .=", (NULL, 'img/sql/$last_id/$fileName', '', '$last_id')";
         move_uploaded_file($_FILES["photos_$i"]['tmp_name'],$home.'img/sql/'.$last_id."/".$fileName);
      }
   }
   $connection->query($sqlPhoto);
}
if($_POST['length']){
   for($j=0;$j<$_POST['length'];$j++){
      $title = $_POST[$j."title"];
      $price = $_POST[$j."price"];
      $color = $_POST[$j."color"];
      $article = $_POST[$j."article"];
      $connection->query("INSERT INTO `item` (`id`, `title`, `text`, `price`, `male`, `female`, `kategory`, `brand`, `color`, `article`, `colorGroup`) VALUES (NULL, '', '', '', '', '', '', '', '', '', '')");

      $last_id_newColor = $connection->insert_id;

      if($gender){

         $sqlgender='';

         if($gender =='male'){
            $sqlgender = "`male` = 'yes',`female` = ''";
         }elseif($gender =='female'){
            $sqlgender = "`male` = '',`female` = 'yes'";
         }else{
            $sqlgender = "`male` = 'yes',`female` = 'yes'";
         }

         $connection->query("UPDATE `item` SET `title` = '$title',`text` = '$text',`price` = '$price',$sqlgender,`kategory` = '$kategory',`brand` = '$brand',`color` = '$color',`article`='$article',`colorGroup`='$last_id' WHERE `item`.`id` = $last_id_newColor");
      }

      if($_POST[$j."sizes"]){
         $sizes=explode(",",$_POST[$j."sizes"]);
         if(count($sizes)>0){
            $sqlSize ="VALUES (NULL, '$sizes[0]', '$last_id_newColor')";
            for($i=1;$i<count($sizes);$i++){
               $sqlSize .=",(NULL, '$sizes[$i]', '$last_id_newColor')";
            }
            $connection->query("INSERT INTO `size` (`id`, `name`, `id_item`) $sqlSize");
         }
      }

      if(isset($_FILES)){
         $sqlPhoto = '';
         if (isset($_FILES[$j."mainPhoto"])) {
            $fileName = $_FILES[$j."mainPhoto"]['name'];
            mkdir( $home.'img/sql/'.$last_id_newColor, 0777 );
            move_uploaded_file($_FILES[$j."mainPhoto"]['tmp_name'],$home.'img/sql/'.$last_id_newColor."/".$fileName);
            $sqlPhoto .="INSERT INTO `photo` (`id`, `location`, `main`, `id_item`) VALUES (NULL, 'img/sql/$last_id_newColor/$fileName', 'yes', '$last_id_newColor')";
         }
         if(isset($_FILES[$j."photos_0"])){
            for($i=0;$_FILES[$j."photos_$i"];$i++){
               $fileName=$_FILES[$j."photos_$i"]['name'];
               $sqlPhoto .=", (NULL, 'img/sql/$last_id_newColor/$fileName', '', '$last_id_newColor')";
               move_uploaded_file($_FILES[$j."photos_$i"]['tmp_name'],$home.'img/sql/'.$last_id_newColor."/".$fileName);
            }
         }
         $connection->query($sqlPhoto);
      }
   }
}
echo "true";




















?>