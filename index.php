<!DOCTYPE html>
<html lang="ua">
<?php require 'php/head.php'?>
<body>
   <div class="header--up">
      <div class="header--up__title">твій кращий вибір</div>
   </div>
   <?php require 'php/header.php'?>
   <div class="intro">
      <div class="container">
         <div class="intro__inner">
            <a class="intro__btn" href="kategory.php">переглянути<br>всі<br>товари
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
            </a>
            <div class="intro__swipe">
               <div class="intro__swipe--2">
                  <div class="intro__go">далі</div>
                  <svg class="intro__arrow">
                     <use xlink:href="#arrow"></use>
                  </svg>
                  <svg class="intro__arrow intro__arrow--2">
                     <use xlink:href="#arrow"></use>
                  </svg>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="slider--up">
      <div class="slider sliderSl">
      <?php
      $single = get_singles_all();
      foreach ($single as $singles) { 
      ?>
         <div data-id="<?=$singles['id']?>" class="body__item slider__item">
            <a href="item.php?id=<?php
            $idSingles=$singles['id'];
            $kategorySingles=$singles['kategory'];
            echo "$idSingles&kategory=$kategorySingles"; 
            ?>" class="body__padding">
               <div class="body__img">
                  <img src="<?php echo $singles["location"]?>" alt="img">
               </div>
               <div class="body__appellation"><?php echo $singles["title"]?></div>
               <div class="body__price"><?php echo $singles["price"]?></div>
            </a>
         </div>
         <?php
         }
         ?> 
      </div>
   </div>
   <div class="about">
      <div class="container">
         <div class="about__inner">
            <div class="about__right">
               <div class="about__title">Трохи про себе</div>
               <div class="about__text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel facilis dolor, non, sunt enim deleniti odio quo temporibus assumenda ullam, nihil eveniet voluptatem magnam iure eligendi qui cum laboriosam volup
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="map">
      <div class="container">
         <div class="map__inner">
            <div class="map__right">
               <div class="map__title">де нас можна знайти?</div>
               <div class="map__text">Наш магазин знаходиться на 2 поверсі Центрального універмагу за адресою Покровська площа 3</div>
            </div>
            <iframe class="map__geo" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1362.328809594581!2d34.796266994482956!3d50.90680950969917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4129018bddb2dbd3%3A0xdc737b63790a2531!2z0KbQtdC90YLRgNCw0LvRjNC90YvQuSDRg9C90LjQstC10YDQvNCw0LM!5e0!3m2!1sru!2sua!4v1665442053291!5m2!1sru!2sua"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
         </div>
      </div>
   </div>
   <div class="ship" id="ship">
      <div class="container">
         <div class="ship__block">
            <div class="ship__title">
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
   <?php require 'php/basket.php'?>
   <?php require 'php/footer.php'?>
   <script src="jQuery/jquery-3.6.1.min.js"></script>
   <script src="js/slick.min.js"></script>
   <script src="js/app.js"></script>
</body>
</html>