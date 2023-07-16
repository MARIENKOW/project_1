   <header class="header">
      <div class="container">
         <div class="header__inner">
            <div class="header__gender">
               <div class="header__male _hover">
               <a href="kategory.php?value[]=male" class="header__title _slider">він
                     <img src="img/header/arrow.svg" alt="arrow" class="header__arrow">
                  </a>
                  <div class="header__male--nav">
                     <a href="kategory.php?value[]=male" class="header__link">всі товари</a>
                     <a href="kategory.php?value[]=male&kategory[]=bags" class="header__link">сумки</a>
                     <a href="kategory.php?value[]=male&kategory[]=cases" class="header__link">кейси</a>
                     <a href="kategory.php?value[]=male&kategory[]=purse" class="header__link">портмане</a>
                     <a href="kategory.php?value[]=male&kategory[]=belts" class="header__link">ремені</a>
                     <a href="kategory.php?value[]=male&kategory[]=umbrellas" class="header__link">парасольки</a>
                  </div>
               </div>
               <div class="header__female _hover">
                  <a href="kategory.php?value[]=female" class="header__title _slider">вона
                     <img src="img/header/arrow.svg" alt="arrow" class="header__arrow">
                  </a>
                  <div class="header__female--nav">
                     <a href="kategory.php?value[]=female" class="header__link">всі товари</a>
                     <a href="kategory.php?value[]=female&kategory[]=bags" class="header__link">сумки</a>
                     <a href="kategory.php?value[]=female&kategory[]=cases" class="header__link">кейси</a>
                     <a href="kategory.php?value[]=female&kategory[]=purse" class="header__link">портмане</a>
                     <a href="kategory.php?value[]=female&kategory[]=belts" class="header__link">ремені</a>
                     <a href="kategory.php?value[]=female&kategory[]=umbrellas" class="header__link">парасольки</a>
                  </div>
               </div>
               <a href="kategory.php?kategory[]=bags" class="header__mobile">сумки</a>
               <a href="kategory.php?kategory[]=cases" class="header__mobile">кейси</a>
               <a href="kategory.php?kategory[]=purse" class="header__mobile">портмане</a>
               <a href="kategory.php?kategory[]=belts" class="header__mobile">ремені</a>
               <a href="kategory.php?kategory[]=umbrellas" class="header__mobile">парасольки</a>
            </div>
            <span class="header__logo index__top">
               <img src="img/header/logo5.png" alt="logo">
            </span>
            <div class="header__right">
               <form class="header__form" action="search.php" method="GET">
                  <input class="header__search" placeholder="пошук" type="search" name="search" id="search">
                  <button type="submit" class="searchBtn" style="background:transparent;">
                     <img id="search" class="header__btn" src="img/header/search2.svg" alt="пошук">
                  </button>
               </form>
               <a class="header__basket _basketTogle" href="#">
                  <svg class="header__svg">
                     <use xlink:href="#basket"></use>
                     <div id="basketCount" class="header__count">
                     </div>
                  </svg>
               </a>
               <div class="header__burger">
                  <span></span>
               </div>
            </div>
         </div>
      </div>
   </header>