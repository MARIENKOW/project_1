<?php
require '../db.php';
$result = get_all_by_basket($_POST['id']);
$output='';
if($result->num_rows>0){
   while($row=$result->fetch_assoc()){
      $output .= '<a href="item.php?id='.$row['id'].'" class="basket__item">
      <div class="basket__item--main">
         <div class="basket__photo">
            <img src="../'.$row['location'].'" alt="basketPhoto">
         </div>
         <div class="basket__info">
            <div class="basket__name">'.$row['title'].'</div>
            <section class="basket__about">
               <div class="basket__table">
                  <span>колір:</span>
                  <span class="basket__value basket__value--color" style = "background-color:'.$row['color'].'"></span>
               </div>
               <div class="basket__table">
                  <span>розмір:</span>
                  <span class="basket__value">xs</span>
               </div>
               
               <div class="basket__table">
                  <span>артикул:</span>
                  <span class="basket__value">'.$row['article'].'</span>
               </div>
            </section>
         </div>
      </div>
      <div class="basket__item--bottom">
         <div class="basket__itemLeft">Вартість</div>
         <div class="basket__itemRight">'.$row['price'].'</div>
      </div>
   </a>';
   }
}
echo $output;

?>