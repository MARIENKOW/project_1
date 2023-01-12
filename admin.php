<!DOCTYPE html>
<html lang="en">
<?php require 'php/head.php'?>
<body>
   <div class="login">
      <div class="choose">
         <div class="container">
            <form class="_ajaxSendNumber" >
               <label class="login__title">Авторизація</label>
               <label class="login__warning">неправильний логін або пароль</label>
               <input class="login__input clientNumber" placeholder="Логін" name="login" type="text">
               <input class="login__input clientNumber" placeholder="Пароль" type="password" name="password">
               <button class="login__btn _ajaxAdminBtn" type="submiit">увійти</button>
            </form>
         </div>
      </div>
   </div>
   <script src="jQuery/jquery-3.6.1.min.js"></script>
   <script src="js/admin.js"></script>
</body>
</html>