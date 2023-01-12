<html lang="ua">
<?php require 'php/head.php'?>
<body>
   <div class="header--up">
      <div class="header--up__title">твій кращий вибір</div>
   </div>
   <?php 
   require 'php/header.php';
   $search = get_single_by_search($_GET['search']);
   ?>
   <main class="body">
      <div class="container">
         <div class="body__inner">
            <div class="body__history">
               <a href="index.php" class="body__link">Головна</a>
               <div class="body__arrow">></div>
               <div class="body__link" id="bodyLink">
                  <?php 
                  echo 'Результати пошуку:"'.$_GET['search'].'"'
                  ?>
               </div>
            </div>
            <div class="slider--up">
               <div class="slider sliderTwo">
                  <div class="slider__item">
                     <div class="about">
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
                  <div class="slider__item">
                  <div class="map__inner">
                     <iframe class="map__geo" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1362.328809594581!2d34.796266994482956!3d50.90680950969917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4129018bddb2dbd3%3A0xdc737b63790a2531!2z0KbQtdC90YLRgNCw0LvRjNC90YvQuSDRg9C90LjQstC10YDQvNCw0LM!5e0!3m2!1sru!2sua!4v1665442053291!5m2!1sru!2sua"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                     <div class="map__body">
                        <div class="map__right">
                           <div class="map__title">де нас можна знайти?</div>
                           <div class="map__text">Наш магазин знаходиться на 2 поверсі Центрального універмагу за адресою Покровська площа 3</div>
                        </div>
                     </div>
                  </div>
                  </div>
               </div>
            </div>
            <div class="body__main">
               <div class="body__block">
                  <div class="body__items">
                     <? if(mysqli_num_rows($search)>0){ ?>
                     <div class="body__items--in" id = "result">
                     <?php 
                     foreach ($search as $searchItem){
                     ?>
                     <div data-id="<?=$searchItem['id']?>" class="body__item">
                        <a href="item.php?id=<?php
                        $idCat=$searchItem['id'];
                        $kategoryCat=$searchItem['kategory'];
                        echo "$idCat&kategory=$kategoryCat"; 
                        ?>" 
                        class="body__padding">
                           <div class="body__img">
                              <img src="<?php echo $searchItem["location"]?>" alt="img">
                           </div>
                           <div class="body__appellation"><?php echo $searchItem["title"]?></div>
                           <div class="body__price"><?php echo $searchItem["price"]?></div>
                        </a>
                     </div>
                     <?php };?>
                     </div>
                     <? }else{ echo "такий товар не знайдено";} ?>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </main>
   <?php require 'php/basket.php'?>
   <?php require 'php/footer.php'?>
   <script src="jQuery/jquery-3.6.1.min.js"></script>
   <script src="js/slick.min.js"></script>
   <script src="js/app.js"></script>
</body>
</html>




