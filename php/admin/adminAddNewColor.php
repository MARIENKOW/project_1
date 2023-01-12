<?php 
require '../db.php';
$colorFirst = $_POST["color"];
$newColorBlock = $_POST['newColorBlock'];
?>
<div class="add__row newColorBlock">
   <div class="add__row">
      <h3 class="add__title">головне фото</h3>
      <section class="add__upload wrapperToRemove add__upload--main mainWrapperRemove _mainPhotoWrapper<?php echo$newColorBlock; ?>">
         <input type="file" data-wrapper="._mainPhotoWrapper<?php echo$newColorBlock; ?>" name="mainPhoto<?php echo"[$newColorBlock]"; ?>" onchange="addPreview(this)" style="display:none;" id="mainPhoto<?php echo"[$newColorBlock]"; ?>">
         <label class="add__photoBtn" for="mainPhoto<?php echo"[$newColorBlock]"; ?>">+</label>
      </section>
   </div>
   <div class="add__row">
      <h3 class="add__title">додаткові фото</h3>
      <h5 class="add__subtitle">завантажте додаткові фото (мінімум 3)</h5>
      <section class="add__upload wrapperToRemove add__photosWrapper<?php echo$newColorBlock; ?>">
         <input type="file" data-wrapper=".add__photosWrapper<?php echo$newColorBlock; ?>" name="photos<?php echo"[$newColorBlock]"; ?>" multiple style="display:none;" multiply='true' onchange="addPreview(this)" id="photos<?php echo"[$newColorBlock]"; ?>">
         <label class="add__photoBtn" for="photos<?php echo"[$newColorBlock]"; ?>">+</label>
      </section>
   </div>
   <div class="add__row">
      <h3 class="add__title">колір товару</h3>
      <section class="add__section">
         <?php
               $colors = get_single_by_color();
         if(mysqli_num_rows($colors)>0){
         ?>
         <div class="add__block add__block--old">
            <h3 class="add__title add__title--color _sliderNoResize colorNoSlider<?php echo$newColorBlock; ?>">
               <div data-remove=".oldColorsRemove<?php echo$newColorBlock; ?>" class="add__inputIn oldValueRemove">
                  <span class="add__inputIn--textO">вже додані кольори</span> 
                  <span class="add__inputIn--deletTextO">видалити колір</span>
                  <span class="add__inputIn--crossO"></span>
               </div>
            </h3>
            <div class="add__wrapper add__wrapper--color oldChoose">
            <?php 
               foreach($colors as $color){
               ?>
               <div class="add__choise <?php if($color['color'] === $colorFirst){ echo "_disabledColor";} ?>">
                  <input class="add__checkbox oldColorsRemove<?php echo$newColorBlock; ?> oldColors" data-value="<?php echo $color['color']?>" type="radio" name="colorCheck<?php echo"[$newColorBlock]"; ?>"
                  id="<?php echo''.$color['color'].'['.$newColorBlock.']'; ?>">
                  <label class="add__label add__label--color" style = "background-color:<?php echo $color['color']?>" for="<?php echo''.$color['color'].'['.$newColorBlock.']'; ?>"></label>
               </div>
               <?php }?>
            </div>
         </div>
         <?php };?>
         <div class="add__block add__block--new">
            <input class="add__input add__input--color newValue" data-old=".colorNoSlider<?php echo$newColorBlock; ?>" value="#ffffff" id="color" type="color" name="color">
            <div class="add__inputIn newValueRemove">
               <span class="add__inputIn--text">новий колір</span>
               <span class="add__inputIn--deletText">видалити колір</span>
               <span class="add__inputIn--cross"></span>
            </div>
         </div>
      </section>
   </div>
   <div class="add__row">
      <input class="login__input add__input" placeholder="назва товару" type="text" name="title">
   </div>
   <div class="add__row">
      <input class="login__input add__input add__input--price" placeholder="ціна" type="number" name="price">
   </div>
   <div class="add__row">
      <input class="login__input add__input" placeholder="артикул" type="text" name="article">
   </div>
   <div class="add__row">
      <section class="add__section">
         <div class="add__block add__block--old">
            <input type="checkbox" data-value="один розмір" id="oneSize<?php echo"[$newColorBlock]"; ?>" class="add__checkbox oneSizeClick">
            <label for="oneSize<?php echo"[$newColorBlock]"; ?>" class="add__title add__title--color add__label--oneSize">немає розміру</label>
         </div>
         <div class="add__block add__block--sizes">
            <input class="login__input add__input newValue add__input--newBrand" placeholder="розмір/розміри" type="text" name="size" id="">
            <div class="add__inputIn add__inputIn--newBrand newValueRemove">
               <span class="add__inputIn--cross"></span>
            </div>
         </div>
      </section>
   </div>
</div>