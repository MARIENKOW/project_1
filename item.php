<!DOCTYPE html>
<html lang="ua">
<?php require 'php/head.php'?>
<body>
<?php
   $locations = get_photo_by_id($_GET["id"]); 
   $singles = get_single_by_id($_GET['id']);
   ?>
   <div class="header--up">
      <div class="header--up__title">твій кращий вибір</div>
   </div>
   <?php require 'php/header.php'?>
   <main class="main">
      <div class="container">
         <div class="main__inner">
            <div class="body__history main__history">
               <a href="index.php" class="body__link main__hidden">Головна </a>
               <div class="body__arrow main__hidden">></div>
               <a href="kategory.php?value[]=<?php if($singles['male'] == 'yes'){echo 'male';}else{echo 'female';}?>" class="body__link main__hidden"><?php if($singles['male'] == 'yes'){echo 'Чоловічі товари';}else{echo 'Жіночі товари';}?></a>
               <div class="body__arrow main__hidden">></div>
               <a href="kategory.php?value[]=<?php 
               if($singles['male'] == 'yes'){
                  echo 'male';
               }else{
                  echo 'female';
               }
               ?>" class="body__link">
                  <?php 
                     if($singles['kategory']=='cases'){echo'Кейси';}
                     elseif($singles['kategory']=='bags'){echo'Сумки';}
                     elseif($singles['kategory']=='purse'){echo'Портмане';}
                     elseif($singles['kategory']=='belts'){echo'Ремені';}
                     elseif($singles['kategory']=='umbrellas'){echo'Парасольки';}
                  ?>
               </a>
               <div class="body__arrow">></div>
               <div class="body__link" id="bodyLink"><?php echo $singles['title']; ?></div>
            </div>
            <div class="main__body">
               <div id="loadngItem" class="main__loading">
                  <div class="body__loading--in">
                     <div class="intro__animation">
                        <div class="intro__animation--twist">
                           <img src="img/intro/pngwing.com (2).png" alt="1" class="intro__img">
                           <img src="img/intro/pngwing.com (4).png" alt="1" class="intro__img intro__img--1">
                           <img src="img/intro/pngwing.com (6).png" alt="1" class="intro__img intro__img--2">
                           <img src="img/intro/pngwing.com (7).png" alt="1" class="intro__img intro__img--3">
                           <img src="img/intro/pngwing.com (8).png" alt="1" class="intro__img intro__img--4">
                           <img src="img/intro/pngwing.com (10).png" alt="1" class="intro__img intro__img--5">
                        </div>
                     </div>
                  </div>
               </div>
               <div id="result3" class="main__row">
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
                              <img class="main__photo basketImage" src="<?php echo $location["location"] ?>" alt="sliderPhoto">
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
                        $sizes = get_size_by_id($_GET['id']);
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
                           $colors = get_color_by_id($_GET['id']);
                           if(mysqli_num_rows($colors)>1){
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
                              <?php 
                              }
                           }else{
                              foreach($colors as $color){
                                 ?>
                                    <div class="body__choise body__choise--color main__wrapper">
                                       <div class="body__label body__label--color body__label--noPointer" style = "cursor:auto;background-color:<?php echo $color['color']?>"></div>
                                    </div>
                                 <?php 
                              }
                           };
                           ?>
                           </div>
                        </div>
                        <div id="btnBasket" class="main__btn btn _basketItemClick">
                           <svg id="btnSvg" class="main__svg">
                              <use  xlink:href="#basket"></use>
                           </svg>
                           <div id='<?php echo $singles['id']?>' class="main__btnName">до кошика</div>
                           <div class="main__loading">...</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="ship__line"></div>
               <div class="main__column">
                  <div class="main__text">
                     <div class="main__name main__name--center">Про товар</div>
                     <div class="main__about"><?php echo $singles['text'];?></div>
                     
                  </div>
                  <div class="main__interesting">
                     <div class="ship__line"></div>
                     <div class="main__name main__name--center">ВАМ ТАКОЖ СПОДОБАЄТЬСЯ</div>
                     <div class="main__sliderByKategory">
                        <?php
                        if($singles['male'] == 'yes'){
                           $interesting = get_all_by_interesting('male',$_GET['id']);
                        }elseif($singles['female'] == 'yes'){
                           $interesting = get_all_by_interesting('female',$_GET['id']);
                        };
                        foreach ($interesting as $interestings) { 
                        ?>
                        <div data-id="<?=$interestings['id']?>" class="body__item slider__item">
                           <a href="item.php?id=<?php
                           $idSingles=$interestings['id'];
                           $kategorySingles=$interestings['kategory'];
                           echo "$idSingles&kategory=$kategorySingles"; 
                           ?>" class="body__padding">
                              <div class="body__img">
                                 <img src="<?php echo $interestings["location"]?>" alt="img">
                              </div>
                              <div class="body__appellation"><?php echo $interestings["title"]?></div>
                              <div class="body__price"><?php echo $interestings["price"]?></div>
                           </a>
                        </div>
                        <?php
                        }
                        ?> 
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </main>
   <div class="ship" id="ship">
      <div class="container">
         <div class="ship__block">
            <div class="ship__title main__name">
               ОПЛАТА ТА ДОСТАВКА
            </div>
            <div class="ship__line"></div>
            <div class="ship__1">
               <div class="ship__btn _slider">
                  <img class="ship__1--img" src="img/ship/icon4.png" alt="icon2">
                  <div class="ship__1--title">
                     Обробка замовлень
                  </div>
               </div>
               
               <ul class="tab">
                  <li>
                     Замовлення опрацьовуються в робочий час в понеділок - п'ятницю з 10.00 до 16.00.
                  </li>
                  <li>
                     Замовлення на суму до 300 гривень відвантажуються тільки за попередньою оплатою.
                  </li>
                  <li>
                     Замовлення, що надходять в неробочий час (в тому числі у вихідні та святкові дні), опрацьовуються в найближчий робочий день до 11.00.
                  </li>
                  <li>
                     Після опрацювання наш менеджер зв'язується з клієнтом за вказаним телефоном для уточнення і підтвердження замовлення.
                  </li>
                  <li>
                     Підтверджене замовлення готується до відправки замовнику.
                  </li>
               </ul>
            </div>
            <div class="ship__2">
               <div class="ship__btn _slider">
                  <img class="ship__1--img" src="img/ship/icon1.png" alt="icon2">
                  <div class="ship__1--title">
                     Оплата
                  </div>
               </div>
               <ul class="tab">
                  <li>
                     Оплата здійснюється виключно у національній валюті України.
                  </li>
                  <li>
                     Спосіб оплати обов'язково узгоджується з менеджером.
                  </li>
                  <li>
                     Оплатити вартість товару можна переказом на картку ПриватБанку
                  </li>
                  <li>
                     Готівкою при отриманні товару в транспортній компанії
                  </li>
                  <li>
                     Безготівковим платежем на підставі рахунку-фактури.
                  </li>
               </ul>
            </div>
            <div class="ship__2">
               <div class="ship__btn _slider">
                  <img class="ship__1--img" src="img/ship/icon2.png" alt="icon3">
                  <div class="ship__1--title">
                     Доставка
                  </div>
               </div>
               
               <ul class="tab">
                  <li>
                     Доставка здійснюється компанією "Нова Пошта" або іншим перевізником.
                  </li>
                  <li>
                     Строк доставки товару згідно умов перевізника.
                  </li>
                  <li>
                     № декларації пересилається клієнту смс або електроним листом.
                  </li>
                  <li>
                     Послугу доставки оплачує отримувач.
                  </li>
                  <li>
                     Відправка замовлень відбувається з адреси магазину Покровська 3
                  </li>
               </ul>
            </div>
            <div class="ship__1">
               <div class="ship__btn _slider">
                  <img class="ship__1--img" src="img/ship/icon3.png" alt="icon2">
                  <div class="ship__1--title">
                     Обмін і повернення товару
                  </div>
               </div>
               
               <div class="ship__psevdo">
                  <p>
                     Повернути товар належної якості або обміняти його на інший можна, якщо дотримані наступні умови (Закон України Про захист прав споживачів розд.2, ст.9):
                  </p>
                  <ul class="tab">
                     <li>
                        він відсутній у переліку товарів, що не підлягають обміну та поверненню (Постанова КМУ від 19 березня 1994 р. № 172);
                     </li>
                     <li>
                        якщо зазначений товар не використовувався, збережено його товарний вид, упаковка, споживчі властивості, пломби, фабричні ярлики;
                     </li>
                     <li>
                        минуло менш ніж 14 днів з моменту придбання товару.
                     </li>
                  </ul>
                  <p>
                     Якщо на момент обміну аналогічного товару немає, Ви можете придбати будь-які інші товари з наявного асортименту з відповідним перерахуванням вартості, або отримати гроші у розмірі вартості поверненого товару.
                  </p>
               </div>
            </div>
            <div class="ship__1">
               <p class="ship__info"> 
                  <img class="target" src="img/ship/5.png" alt="">
                  <span>Увага!</span>
                  При поверненні або обміні товару всі витрати, пов'язані з пересилкою товару (послуги перевізника) та відправкою грошей (всі банківські операції) бере на себе покупець.
               </p>
                  <div class="ship__1--title">
                     Процедура повернення:
                  </div>
               <ul class="tab">
                  <li>зателефонуйте і повідомте про намір повернути куплений товар;</li>
                  <li>відправте нам товар перевізником, оплативши його послуги;</li>
                  <li>повідомте № декларації відправленої посилки і № банківської картки (інший варіант) для повернення вартості товару;</li>
                  <li>після отримання, перевірки вмісту посилки та належної якості товару, ми повертаємо Вам гроші за домовленістю.</li>
               </ul>
            </div>
         </div>
      </div>
   </div>
   <div id='result4' class="popap">
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
   </div>
   <?php require 'php/basket.php'?>
   <?php require 'php/footer.php'?>
   <script src="jQuery/jquery-3.6.1.min.js"></script>
   <script src="js/slick.min.js"></script>
   <script src="js/app.js"></script>
</body>
</html>