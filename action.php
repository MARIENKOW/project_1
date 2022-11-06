<?php
require 'db.php';
if(isset($_POST['action'])){
   $sql = "SELECT * FROM item WHERE id !=''";
   if(isset($_POST['gender'])){
      $gender = implode(",",$_POST['gender']);
      if($gender == 'female'){
         $sql .="AND female IN('yes')";
      }
      elseif($gender == 'male'){
         $sql .="AND male IN('yes')";
      }else{
         $sql .="";
      }
   }
   if(isset($_POST['kategory'])){
      $kategory = implode("','",$_POST['kategory']);
      $sql .="AND kategory IN('$kategory')";
   }
   if(isset($_POST['size'])){
      $size = implode("','",$_POST['size']);
      $sql .="AND size IN('$size')";
   }
   if(isset($_POST['sort'])){
      $sort = implode("','",$_POST['sort']);
      if ($sort == 'sizeUp'){
         $sql .="order by price ASC";
      }elseif($sort =='sizeDown'){
         $sql .="order by price DESC";
      }
   }
   $result = $connection->query($sql);
   $output='';
   if($result->num_rows>0){
      while($row=$result->fetch_assoc()){
         $output .= '<div data-id="'.$row['id'].'" class="body__item">
         <a href="item.php?id='.$row['id'].'" class="body__padding">
            <div class="body__img">
               <img src="'.$row["img"].'" alt="img">
            </div>
            <div class="body__appellation">'. $row["title"].'</div>
            <div class="body__price">'. $row["price"].'</div>
            <form class="body__basket" action="post">
               <input class="body__checkbox" type="checkbox" name="'. $row['id'].'" id="'.$row['id'] .'">
               <label class="body__basket--label" for="'. $row['id'].'">
                  <svg class="body__basket--svg">
                     <use xlink:href="#basket"></use>
                  </svg>
               </label>
            </form>
         </a>
      </div>';
      }
   }else{
      $output = "<h3>Такого товару не існує</h3>";
   }
   echo $output;
}
?>