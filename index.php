<!DOCTYPE html>
<html lang="ua">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width,initial-scale=1.0">
   <title>Document</title>
   <link rel="stylesheet" href="css/style.css">
   <link href="https://fonts.googleapis.com/css?family=Bad+Script:regular" rel="stylesheet" />
   <link href="https://fonts.googleapis.com/css?family=Amatic+SC:regular,700" rel="stylesheet" />
   <link href="https://fonts.googleapis.com/css?family=Alumni+Sans:100,200,300,regular,500,600,700,800,900" rel="stylesheet" />
   <svg style="display:none">
      <symbol id="arrow" viewBox="0 0 330.002 330.002">
         <g>
            <path d="M327.001,99.751c-4.971-6.628-14.374-7.971-21-3l-140.997,105.75L24.001,96.751
	c-6.628-4.971-16.029-3.626-21,3c-4.971,6.627-3.627,16.03,3,21l150.004,112.5c2.667,2,5.833,3,9,3c3.166,0,6.333-1,9-3
	l149.996-112.5C330.628,115.781,331.972,106.379,327.001,99.751z"/>
         </g>
      </symbol>
      <symbol id="basket" viewBox="0 0 24 24">
         <g>
            <path d="M5.457 5H3a1 1 0 1 1 0-2h3.273a1 1 0 0 1 .98.8L7.907 7H21a1 1 0 0 1 .982 1.191l-1.311 6.72a2.623 2.623 0 0 1-2.616 2.09L10.12 17c-1.272.024-2.384-.852-2.635-2.087L6.12 8.24a.995.995 0 0 1-.016-.078L5.457 5zm2.86 4l1.128 5.513c.058.283.324.493.657.487h7.971c.314.006.58-.204.636-.48L19.786 9H8.317zM10 19h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2z"></path>
         </g>
      </symbol>
      <symbol id="about" viewBox="0 0 96 96">
         <g>
            <path d="M66,84H54V42a5.9966,5.9966,0,0,0-6-6H36a6,6,0,0,0,0,12h6V84H30a6,6,0,0,0,0,12H66a6,6,0,0,0,0-12Z"/><path d="M48,24A12,12,0,1,0,36,12,12.0119,12.0119,0,0,0,48,24Z"/>
         </g>
      </symbol>
      <symbol id="home" viewBox="0 0 26.39 26.39">
         <g>
            <path d="M3.588,24.297c0,0-0.024,0.59,0.553,0.59c0.718,0,6.652-0.008,6.652-0.008l0.01-5.451c0,0-0.094-0.898,0.777-0.898h2.761
			c1.031,0,0.968,0.898,0.968,0.898l-0.012,5.434c0,0,5.628,0,6.512,0c0.732,0,0.699-0.734,0.699-0.734V14.076L13.33,5.913
			l-9.742,8.164C3.588,14.077,3.588,24.297,3.588,24.297z"/>
		<path d="M0,13.317c0,0,0.826,1.524,2.631,0l10.781-9.121l10.107,9.064c2.088,1.506,2.871,0,2.871,0L13.412,1.504L0,13.317z"/>
		<polygon points="23.273,4.175 20.674,4.175 20.685,7.328 23.273,9.525 		"/>
         </g>
      </symbol>
      <symbol id="geo" viewBox="0 0 32 32">
         <g>
            <path d="M16,24l-6.09-8.6A8.14,8.14,0,0,1,16,2a8.08,8.08,0,0,1,8,8.13,8.2,8.2,0,0,1-1.8,5.13ZM16,4a6.07,6.07,0,0,0-6,6.13,6.19,6.19,0,0,0,1.49,4L16,20.52,20.63,14A6.24,6.24,0,0,0,22,10.13,6.07,6.07,0,0,0,16,4Z" transform="translate(0 0)"/><circle cx="16" cy="9" r="2"/><path d="M28,12H26v2h2V28H4V14H6V12H4a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V14A2,2,0,0,0,28,12Z"/>
         </g>
      </symbol>
      <symbol id="phone" viewBox="0 0 20 20">
         <g>
            <path d="M17.256 12.253c-.096-.667-.611-1.187-1.274-1.342-2.577-.604-3.223-2.088-3.332-3.734C12.193 7.092 11.38 7 10 7s-2.193.092-2.65.177c-.109 1.646-.755 3.13-3.332 3.734-.663.156-1.178.675-1.274 1.342l-.497 3.442C2.072 16.907 2.962 18 4.2 18h11.6c1.237 0 2.128-1.093 1.953-2.305l-.497-3.442zM10 15.492c-1.395 0-2.526-1.12-2.526-2.5s1.131-2.5 2.526-2.5 2.526 1.12 2.526 2.5-1.132 2.5-2.526 2.5zM19.95 6c-.024-1.5-3.842-3.999-9.95-4C3.891 2.001.073 4.5.05 6s.021 3.452 2.535 3.127c2.941-.381 2.76-1.408 2.76-2.876C5.345 5.227 7.737 4.98 10 4.98s4.654.247 4.655 1.271c0 1.468-.181 2.495 2.76 2.876C19.928 9.452 19.973 7.5 19.95 6z"/>
         </g>
      </symbol>
   </svg>
   <?php require 'php/db.php'; ?>
</head>
<body>
   <div class="header--up">
      <div class="header--up__title">твій кращий вибір</div>
   </div>
   <?php require 'php/header.php'?>
   <div class="click"></div>
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