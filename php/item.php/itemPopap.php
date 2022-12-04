<?php
require '../db.php';
$idColor = implode("','",$_POST["id"]);
$locations = get_photo_by_id($idColor); 
?>
<div class="popap__inner">
   <div class="popap__btn _popapClick">
      <div class="popap__line"></div>
   </div>
   <div class="popap__photo">
      
      <div class="popap__slider">
         <?php foreach($locations as $location){ ?>
            <div class="popap__item">
               <img class="popap__img" src="<?php echo $location["location"] ?>" alt="sliderPhoto">
            </div>
         <?php }?>
      </div>
   </div>
</div>