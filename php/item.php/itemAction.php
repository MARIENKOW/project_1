<?php
require '../db.php';
$idColor = implode("','",$_POST["id"]);
$locations = get_photo_by_id($idColor); 
$singles = get_single_by_id($idColor);
?>
<div class="main__mobile">
   <div class="main__title"><?php echo $singles['title']; ?></div>
   <div class="main__price"><?php echo $singles['price'] ?></div>
</div>

<div class="main__left">
   <div class="main__sliderFor">
      <?php foreach($locations as $location){ ?>
         <div class="main__sliderItem">
            <img class="main__photo" src="<?php echo $location["location"] ?>" alt="sliderPhoto">
         </div>
      <?php }?>
   </div>
   <div class="main__slider">
      <?php foreach($locations as $location){ ?>
         <div class="main__sliderItem _popapClick">
            <img class="main__photo" src="<?php echo $location["location"] ?>" alt="sliderPhoto">
         </div>
      <?php }?>
   </div>
</div>
<div class="main__info">
   <div class="main__block">
      <div class="main__title main__hidden"><?php echo $singles['title']; ?></div>
      <div class="main__price main__hidden"><?php echo $singles['price'] ?></div>
      <div class="main__brand">
         <div class="main__brandTitle">Бренд:</div>
         <span class="main__brandName"><?php echo $singles['brand'] ?></span>
      </div>
      <div class="main__brand">
         <div class="main__brandTitle">Артикль:</div>
         <span class="main__brandName"><?php echo $singles['article'] ?></span>
      </div>
      <?php 
      $sizes = get_size_by_id($idColor);
      if(mysqli_num_rows($sizes)>0){
      ?>
      <div class="main__size">
         <div class="main__sizeTitle">Розміри в наяності:</div>
         <div class="main__sizeName">
         <?php
            if(mysqli_num_rows($sizes)>1){
               foreach($sizes as $size){
               ?>
               <div class="body__choise body__choise--size main__wrapper">
                  <input class="body__checkbox basketSize" type="radio" name="size" id="<?= $size['name'] ?>">
                  <label class="body__label body__label--size" for="<?= $size['name'] ?>" ><?php echo $size['name'];?></label>
               </div>
               <?php
               }
            }else{
               foreach($sizes as $size){
               ?>
               <div class="body__choise body__choise--size main__wrapper">
                  <label class="body__label body__label--size basketSize body__label--noHover" id="<?= $size['name'] ?>" style="cursor:auto;"><?php echo $size['name'];?></label>
               </div>
               <?php
               }
            }
            ?>
         </div>
         <div class="main__size--alert">Виберіть розмір товару</div>
      </div>
      <?php } ?>
      <div class="main__color">
         <div class="main__sizeTitle">Кольори в наяності:</div>
         <div class="main__sizeName main__colorName">
         <?php 
               $colors = get_color_by_id($idColor);
               foreach($colors as $color){
            ?>
            <div class="body__choise body__choise--color main__wrapper">
            <?php 
            if($singles['color']==$color['color']){
            ?>
               <input class="body__checkbox body__color" checked="yes" type="radio" name="colorGroup"
               id="<?= $color['id'] ?>">
               <label class="body__label body__label--color" style = "cursor:auto;background-color:<?php echo $color['color'];?>" for="<?= $color['id'] ?>"></label>
            <?php
            }else{
            ?>
               <input class="body__checkbox _ajaxColorClick body__color" type="radio" name="colorGroup"
               id="<?= $color['id'] ?>">
               <label class="body__label body__label--color" style = "background-color:<?php echo $color['color'];?>" for="<?= $color['id'] ?>"></label>
            <?php
            }?>
            </div>
            <?php }?>
         </div>
      </div>
      <div class="main__btn btn _basketItemClick">
         <svg id="btnSvg" class="main__svg">
            <use xlink:href="#basket"></use>
         </svg>
         <div id='<?php echo $singles['id']?>' class="main__btnName">до кошика</div>
      </div>
   </div>
</div>

