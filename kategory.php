<!DOCTYPE html>
<html lang="ua">
<?php require 'php/head.php'?>
<body>
<?php $cats = get_single_by_kategory($_GET['value'],$_GET['kategory'],$_GET['brand'],$_GET['size'],$_GET['color'],$_GET['sort'],$_GET['page']); ?>
   <div class="header--up">
      <div class="header--up__title">твій кращий вибір</div>
   </div>
   <?php require 'php/header.php'?>
   <main class="body">
      <div class="container">
         <div class="body__inner">
            <div class="body__history">
               <a href="index.php" class="body__link">Головна</a>
               <div class="body__arrow">></div>
               <div class="body__link" id="bodyLink">
                  <?php 
                  if($_GET['kategory']){
                     $kategoryName = implode("','",$_GET['kategory']);
                  }
                  if($_GET['value']){
                     $valueName = implode("','",$_GET['value']);
                  }
                  if($_GET['sort'] || $_GET['size']){
                     echo'Товари за фільтром';
                  }else{
                     if ($valueName=='male'){
                        if(!$kategoryName){echo'Чоловічі товари';}
                        elseif($kategoryName=='cases'){echo'Чоловічі Кейси';}
                        elseif($kategoryName=='bags'){echo'Чоловічі Сумки';}
                        elseif($kategoryName=='purse'){echo'Чоловічі Портмане';}
                        elseif($kategoryName=='belts'){echo'Чоловічі Ремені';}
                        elseif($kategoryName=='umbrellas'){echo'Чоловічі Парасольки';}
                        else{echo 'Товари за фільтром';}
                     }elseif($valueName=='female'){
                        if(!$kategoryName){echo'Жіночі товари';}
                        elseif($kategoryName=='cases'){echo'Жіночі Кейси';}
                        elseif($kategoryName=='bags'){echo'Жіночі Сумки';}
                        elseif($kategoryName=='purse'){echo'Жіночі Портмане';}
                        elseif($kategoryName=='belts'){echo'Жіночі Ремені';}
                        elseif($kategoryName=='umbrellas'){echo'Жіночі Парасольки';}
                        else{echo 'Товари за фільтром';}
                     }elseif(!$valueName){
                        if(!$kategoryName){echo'Всі товари';}
                        elseif($kategoryName=='cases'){echo'Кейси';}
                        elseif($kategoryName=='bags'){echo'Сумки';}
                        elseif($kategoryName=='purse'){echo'Портмане';}
                        elseif($kategoryName=='belts'){echo'Ремені';}
                        elseif($kategoryName=='umbrellas'){echo'Парасольки';}
                        else{echo 'Товари за фільтром';}
                     }else{
                        echo'Товари за фільтром';
                     }
                  }
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
               <div class="body__nav">
                  <div class="body__crossTitle">
                     <div class="body__title body__title--nav body__filtrBy _filtrByToggle">Фільтр/Сортування</div>
                     <div class="body__cross _filtrByToggle"></div>
                  </div>
                  <div class="body__menu">
                     <div class="body__filtr">
                        <div class="body__name body__name--no">Сортувати за</div>
                        <div class="body__blind">
                           <div class="body__wrapper">
                              <div class="body__choise">
                                 <input class="body__checkbox _ajaxClick body__sortAjax" <?php if($_GET['sort']){foreach($_GET['sort'] as $sort){ if($sort=='sizeDown'){echo'checked="yes"';}}} ?> type="radio" name="size" id="sizeDown">
                                 <label class="body__label" for="sizeDown">Ціною за зменшенням</label>
                              </div>
                              <div class="body__choise">
                                 <input class="body__checkbox _ajaxClick body__sortAjax" <?php if($_GET['sort']){foreach($_GET['sort'] as $sort){ if($sort=='sizeUp'){echo'checked="yes"';}}} ?> type="radio" name="size" id="sizeUp">
                                 <label class="body__label" for="sizeUp">Ціною за збільшенням</label>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="body__filtr">
                        <div class="body__name _sliderNoResize">категорія</div>
                        <div class="body__blind">
                           <div class="body__wrapper">
                              <div class="body__choise">
                                 <input class="body__checkbox _ajaxClick body__kategory" <?php if($_GET['kategory']){foreach($_GET['kategory'] as $kategory){ if($kategory=='bags'){echo'checked="yes"';}}}?> type="checkbox" name="bags" id="bags">
                                 <label class="body__label" for="bags">сумки</label>
                              </div>
                              <div class="body__choise">
                                 <input class="body__checkbox _ajaxClick body__kategory"  <?php if($_GET['kategory']){foreach($_GET['kategory'] as $kategory){ if($kategory=='cases'){echo'checked="yes"';}}}?>  type="checkbox" name="cases" id="cases">
                                 <label class="body__label" for="cases">кейси</label>
                              </div>
                              <div class="body__choise">
                                 <input class="body__checkbox _ajaxClick body__kategory"  <?php if($_GET['kategory']){foreach($_GET['kategory'] as $kategory){ if($kategory=='purse'){echo'checked="yes"';}}}?>  type="checkbox" name="purse" id="purse">
                                 <label class="body__label" for="purse">портмане</label>
                              </div>
                              <div class="body__choise">
                                 <input class="body__checkbox _ajaxClick body__kategory"  <?php if($_GET['kategory']){foreach($_GET['kategory'] as $kategory){ if($kategory=='belts'){echo'checked="yes"';}}}?>  type="checkbox" name="belts" id="belts">
                                 <label class="body__label" for="belts">ремені</label>
                              </div>
                              <div class="body__choise">
                                 <input class="body__checkbox _ajaxClick body__kategory"  <?php if($_GET['kategory']){foreach($_GET['kategory'] as $kategory){ if($kategory=='umbrellas'){echo'checked="yes"';}}}?> type="checkbox" name="umbrellas" id="umbrellas">
                                 <label class="body__label" for="umbrellas">парасольки</label>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="body__filtr">
                        <div class="body__name _sliderNoResize">стать</div>
                        <div class="body__blind">
                           <div class="body__wrapper">
                              <div class="body__choise">
                                 <input class="body__checkbox _ajaxClick body__gender--check"  <?php if($_GET['value']){foreach($_GET['value'] as $value){ if($value=='male'){echo'checked="yes"';}}}?> type="radio" name="gender" id="male">
                                 <label class="body__label body__label--gender" for="male">він
                                    <svg class="body__svg body__svg--male">
                                       <use xlink:href="#maleSvg"></use>
                                    </svg>
                                 </label>
                              </div>
                              <div class="body__choise">
                                 <input class="body__checkbox _ajaxClick body__gender--check" <?php if($_GET['value']){foreach($_GET['value'] as $value){ if($value=='female'){echo'checked="yes"';}}}?> type="radio" name="gender" id="female">
                                 <label class="body__label body__label--gender" for="female">вона
                                    <svg class="body__svg">
                                       <use xlink:href="#femaleSvg"></use>
                                    </svg>
                                 </label>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="body__filtr">
                        <div class="body__name _sliderNoResize">бренд</div>
                        <div class="body__blind">
                           <div class="body__wrapper">
                              <?php 
                                 $brands = get_single_by_brand();
                                 foreach($brands as $brand){
                              ?>
                              <div class="body__choise">
                                 <input class="body__checkbox _ajaxClick body__brand" <?php if($_GET['brand']){foreach($_GET['brand'] as $brandC){ if($brandC==$brand['brand']){echo'checked="yes"';}}}?> type="checkbox" name="<?= $brand['brand'] ?>" id="<?= $brand['brand'] ?>">
                                 <label class="body__label" for="<?= $brand['brand'] ?>"><?= $brand['brand'] ?></label>
                              </div>
                              <?php }?>
                           </div>
                        </div>
                     </div>
                     <div class="body__filtr">
                        <div class="body__name _sliderNoResize">розмір</div>
                        <div class="body__blind">
                           <div class="body__wrapper body__wrapper--size">
                              <?php 
                                 $sizes = get_single_by_size();
                                 foreach($sizes as $size){
                              ?>
                              <div class="body__choise body__choise--size">
                                 <input class="body__checkbox _ajaxClick body__size" <?php if($_GET['size']){foreach($_GET['size'] as $sizeC){ if($sizeC==$size['name']){echo'checked="yes"';}}}?> type="checkbox" name="<?= $size['name'] ?>" id="<?= $size['name'] ?>">
                                 <label class="body__label body__label--size" for="<?= $size['name'] ?>"><?= $size['name'] ?></label>
                              </div>
                              <?php }?>
                           </div>
                        </div>
                     </div>
                     <div class="body__filtr">
                        <div class="body__name body__name--no">Колір</div>
                        <div class="body__blind">
                           <div class="body__wrapper body__wrapper--size body__wrapper--color">
                              <?php 
                                 $colors = get_single_by_color();
                                 foreach($colors as $color){
                              ?>
                              <div class="body__choise body__choise--color">
                                 <input class="body__checkbox _ajaxClick body__color" <?php if($_GET['color']){foreach($_GET['color'] as $colorC){$colorC ="#$colorC"; if($colorC==$color['color']){echo'checked="yes"';}}}?> type="checkbox" name="<?= $color['color'] ?>"
                                 id="<?= $color['color'] ?>">
                                 <label class="body__label body__label--color" style = "background-color:<?php echo $color['color']?>" for="<?= $color['color'] ?>"></label>
                              </div>
                              <?php }?>
                           </div>
                        </div>
                     </div>
                     <div class="_ajaxClick body__checkboxBtn">скинути все</div>
                  </div>
               </div>
               <div class="body__block">
                  <div class="body__sort">
                     <div class="body__title body__filtrBy _filtrByToggle">Фільтр/Сортування</div>
                  </div>
                  <div class="body__items">
                     <div class="body__loading" style="display:none;">
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
                     <div class="body__items--in" id = "result">
                        <?php 
                        foreach ($cats as $cat): 
                        ?>
                        <div class="body__item">
                           <a href="item.php?id=<?php echo $cat['id'];?>" 
                           class="body__padding">
                              <div class="body__img">
                                 <img src="<?php echo $cat["location"]?>" alt="img">
                              </div>
                              <div class="body__appellation"><?php echo $cat["title"]?></div>
                              <div class="body__price"><?php echo $cat["price"]?></div>
                           </a>
                        </div>
                        <?php endforeach;?>
                     </div>
                  </div>
                  <div id="result2" class="body__pagination">
                     <?php
                     $paginationArr = get_single_by_kategory($_GET['value'],$_GET['kategory'],$_GET['brand'],$_GET['size'],$_GET['color'],$_GET['sort'],'all');
                     if(mysqli_num_rows($paginationArr)>0){
                        $allItems = mysqli_num_rows($paginationArr);
                        $pages = ceil($allItems / $itemsOnPage);
                        if($pages>1){
                           for($i=1;$i<=$pages;$i++){
                              ?>
                              <div class="body__number ajaxPaginationClick">
                                 <input class="body__checkbox _ajaxClick  body__numberCheck" <?php if($_GET['page']){if($_GET['page']==[$i]){echo'checked="yes"';}}else{if([$i]==[1]){echo'checked="yes"';}}?>  type="radio" name="pages" id="<?php echo "page$i"; ?>">
                                 <label class="body__label pagination__label" for="<?php echo "page$i"; ?>"><?php echo $i; ?></label>
                              </div>
                              <?php
                           }
                        }
                     };
                     ?>
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