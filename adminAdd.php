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
            <div class="add__inner">
            <form method="POST">
                  <div class="add__row mainColorBlock">
                     <div class="add__row">
                        <h3 class="add__title">головне фото</h3>
                        <section class="add__upload add__upload--main mainWrapperRemove _mainPhotoWrapper wrapperToRemove">
                           <input type="file" data-wrapper="._mainPhotoWrapper" name="mainPhoto" onchange="addPreview(this)" style="display:none;" id="mainPhoto">
                           <label class="add__photoBtn" for="mainPhoto">+</label>
                        </section>
                     </div>
                     <div class="add__row">
                        <h3 class="add__title">додаткові фото</h3>
                        <h5 class="add__subtitle">завантажте додаткові фото (мінімум 3)</h5>
                        <section class="add__upload add__photosWrapper wrapperToRemove">
                           <input type="file" data-wrapper=".add__photosWrapper" name="photos" multiple style="display:none;" multiply='true' onchange="addPreview(this)" id="photos">
                           <label class="add__photoBtn" for="photos">+</label>
                        </section>
                     </div>
                     <div class="add__row">
                        <h3 class="add__title">колір товару</h3>
                        <h3 class="add__subtitle">виберіть вже створений колір,або додайте новий</h3>
                        <section class="add__section">
                           <?php
                                 $colors = get_single_by_color();
                           if(mysqli_num_rows($colors)>0){
                           ?>
                           <div class="add__block add__block--old">
                              <h3 class="add__title add__title--color _sliderNoResize colorNoSlider">
                                 <div data-remove=".oldColorsRemove" class="add__inputIn oldValueRemove">
                                    <span class="add__inputIn--textO">вже додані кольори</span> 
                                    <span class="add__inputIn--deletTextO">видалити колір</span>
                                    <span class="add__inputIn--crossO"></span>
                                 </div>
                              </h3>
                              <div class="add__wrapper add__wrapper--color oldChoose">
                              <?php 
                                 foreach($colors as $color){
                                 ?>
                                 <div class="add__choise">
                                    <input class="add__checkbox oldColorsRemove oldColors" data-value="<?= $color['color']; ?>" type="radio" name="colorCheck"
                                    id="<?= $color['color']; ?>">
                                    <label class="add__label add__label--color" style = "background-color:<?php echo $color['color']?>" for="<?= $color['color'] ?>"></label>
                                 </div>
                                 <?php }?>
                              </div>
                           </div>
                           <?php };?>
                           <div class="add__block add__block--new">
                              <input class="add__input add__input--color newValue" data-old=".colorNoSlider" value="#ffffff" id="color" type="color" name="color">
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
                        <textarea class="login__input add__input add__input--textarea" placeholder="опис" name="text"></textarea>
                     </div>
                     <div class="add__row">
                        <input class="login__input add__input add__input--price" placeholder="ціна" type="number" name="price">
                     </div>
                     <div class="add__row">
                        <h3 class="add__title">бренд товару</h3>
                        <h5 class="add__subtitle">виберіть вже доданий бренд,або задайте новий</h5>
                        <section class="add__section">
                           <?php
                           $brands = get_single_by_brand();
                           if(mysqli_num_rows($brands)>0){
                           ?>
                           <div class="add__block add__block--old">
                              <h3 class="add__title add__title--color _sliderNoResize brandNoSlider">
                                 <div data-remove=".oldBrandsRemove" class="add__inputIn oldValueRemove">
                                    <span class="add__inputIn--textO">вже додані бренди</span> 
                                    <span class="add__inputIn--deletTextO">видалити бренд</span>
                                    <span class="add__inputIn--crossO"></span>
                                 </div>
                              </h3>
                              <div class="add__wrapper oldChoose">
                              <?php 
                                 foreach($brands as $brand){
                                 ?>
                                    <input class="add__checkbox oldBrandsRemove oldBrands" data-value="<?= $brand['brand']; ?>" type="radio" name="brandCheck"
                                    id="<?= $brand['brand']; ?>">
                                    <label class="add__label" for="<?= $brand['brand'] ?>"><?= $brand['brand'] ?></label>
                                 <?php }?>
                              </div>
                           </div>
                           <?php };?>
                           <div class="add__block add__block--new">
                              <input class="login__input add__input add__input--color add__input--newBrand newValue" data-old=".brandNoSlider" placeholder="новий бренд" type="text" name="brand">
                              <div class="add__inputIn add__inputIn--newBrand newValueRemove">
                                 <span class="add__inputIn--cross"></span>
                              </div>
                           </div>
                        </section>
                     </div>
                     <div class="add__row">
                        <input class="login__input add__input" placeholder="артикль" type="text" name="article">
                     </div>
                     <div class="add__row">
                        <h3 class="add__title">розмір/розміри товару</h3>
                        <h5 class="add__subtitle">
                           якщо потрібно задати декілько розмірів записуйте їх через ","
                           запис має бути такого формату - "m,l,xl"
                        </h5>
                        <section class="add__section">
                           <div class="add__block add__block--old">
                              <input type="checkbox" data-value="один розмір" id="oneSize" class="add__checkbox oneSizeClick">
                              <label for="oneSize" class="add__title add__title--color add__label--oneSize">немає розміру</label>
                           </div>
                           <div class="add__block add__block--sizes">
                              <input class="login__input add__input newValue add__input--newBrand" placeholder="розмір/розміри" type="text" name="size" id="">
                              <div class="add__inputIn add__inputIn--newBrand newValueRemove">
                                 <span class="add__inputIn--cross"></span>
                              </div>
                           </div>
                        </section>
                     </div>
                     <div class="add__row">
                        <h3 class="add__title">категорія & стать</h3>
                        <h5 class="add__subtitle">
                           виберіть категорію товару та стать
                           (якщо товар "унісекс" виберіть обидва варіанти в полі "стать")
                        </h5>
                        <section class="add__section">
                           <div class="add__block">
                              <div class="add__title add__title--color _sliderNoResize">категорія</div>
                              <div class="add__wrapper add__wrapper--left">
                                 <input class="add__checkbox _kategoryAdmin" type="radio" name="kategory" id="bags">
                                 <label class="add__label" for="bags">сумки</label>
                                 <input class="add__checkbox _kategoryAdmin" type="radio" name="kategory" id="cases">
                                 <label class="add__label" for="cases">кейси</label>
                                 <input class="add__checkbox _kategoryAdmin" type="radio" name="kategory" id="purse">
                                 <label class="add__label" for="purse">портмане</label>
                                 <input class="add__checkbox _kategoryAdmin" type="radio" name="kategory" id="belts">
                                 <label class="add__label" for="belts">ремені</label>
                                 <input class="add__checkbox _kategoryAdmin" type="radio" name="kategory" id="umbrellas">
                                 <label class="add__label" for="umbrellas">парасольки</label>
                              </div>
                           </div>
                           <div class="add__block">
                              <div class="add__title add__title--color _sliderNoResize">стать</div>
                              <div class="add__wrapper add__wrapper--right">
                                 <input class="add__checkbox _genderAdmin" type="checkbox" name="male" id="male">
                                 <label class="add__label" for="male">він</label>
                                 <input class="add__checkbox _genderAdmin" type="checkbox" name="female" id="female">
                                 <label class="add__label" for="female">вона</label>
                              </div>
                           </div>
                        </section>
                     </div>
                  </div>
                  <button class="login__btn add__btn add__btn--newColor _ajaxAdminNewColorBtn">заповнити доп колір</button>
                  <button class="login__btn _ajaxAdminAddBtn add__btn" type="submit">додати</button>
               </form>
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