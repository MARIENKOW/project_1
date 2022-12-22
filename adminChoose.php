<!DOCTYPE html>
<html lang="en">
   
<?php
session_start();
require 'php/head.php'?>
<body>
   <div class="login">
      <?php
      if($_SESSION["admin"]){
      ?>
      <div class="choose">
         <div class="container">
            <div class="choose__inner">
               <a href="adminAdd.php" class="choose__btn choose__btn--add">додати товар</a>
               <a href="adminRemove.php" class="choose__btn choose__btn--remove">видалити товар</a>
            </div>
         </div>
      </div>
      <?php
      }else{
      echo "<script>location.href = 'admin.php'</script>";
      }
      ?>
   </div>
   <script src="jQuery/jquery-3.6.1.min.js"></script>
   <script src="js/slick.min.js"></script>
   <script src="js/app.js"></script>
</body>
</html>