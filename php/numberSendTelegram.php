<?php
   const TOKEN = '5961574191:AAEh7ELA8ja-2Vi6EOEGeC8MU69Vl_c8yvg';
   const CHATID = '-1001611584440';
   $post = $_POST["number"];
   $txt = strip_tags(urlencode("+38$post"));
   $textSendStatus = @file_get_contents('https://api.telegram.org/bot'. TOKEN .'/sendMessage?chat_id=' . CHATID . '&parse_mode=html&text=' . $txt);
   echo $textSendStatus;
?>