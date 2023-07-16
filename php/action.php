<?php
require 'db.php';
if(isset($_POST['action'])){
   $result = get_single_by_kategory($_POST['gender'],$_POST['kategory'],$_POST['brand'],$_POST['size'],$_POST['color'],$_POST['sort'],$_POST['page']);
   $output='';
   if($result->num_rows>0){
      while($row=$result->fetch_assoc()){
         $output .= '<div data-id="'.$row['id'].'" class="body__item">
         <a href="item.php?id='.$row['id'].'&kategory='.$row['kategory'].'" class="body__padding">
            <div class="body__img">
               <img src="'.$row["location"].'" alt="img">
            </div>
            <div class="body__appellation">'. $row["title"].'</div>
            <div class="body__price">'. $row["price"].'</div>
         </a>
      </div>';
      }
   }else{
      $output = "<h3>Такого товару не існує</h3>";
   }
   echo $output;
   $bodyLink =  "Товари по фільтру";
}
?>
