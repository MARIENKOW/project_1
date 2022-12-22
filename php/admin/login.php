<?php 
session_start();
require '../db.php';
$login = $_POST['login'];
$password = $_POST['password'];
$result = '';
$admin =$connection->query("SELECT * FROM `admin` where `login` = '$login'");
if(mysqli_num_rows($admin) > 0){
   $arr = mysqli_fetch_assoc($admin);
   if(password_verify($password,$arr['password'])){
      $result ='true';
      $_SESSION["admin"]=[
         "login"=>$login,
         "password"=>$arr["password"]
      ];
   }

} 
echo $result;
?>