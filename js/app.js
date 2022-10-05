const searchSvg = document.querySelector('.header__btn');
const headerInner = document.querySelector('.header__inner');
const body = document.querySelector('body');
const burger = document.querySelector('.header__burger')
const headerUp = document.querySelector('.header--up');
const header = document.querySelector('.header');
const headerGender = document.querySelector('.header__gender');
const headerUpHeight = headerUp.offsetHeight;
if(searchSvg){
   if(headerInner && !headerInner.classList.contains('_searchActive'))
      searchSvg.addEventListener('click',function(){
         headerInner.classList.add('_searchActive')
      })
}
window.addEventListener('scroll',function(){
   if(headerInner && headerInner.classList.contains('_searchActive')){headerInner.classList.remove('_searchActive')}
})
if(burger){
   burger.addEventListener('click',function(){
      if(headerInner){
         headerInner.classList.toggle('_burgerOpen')
         if(headerInner.classList.contains('_burgerOpen')){
            body.style.overflow = 'hidden';
         }else{
            body.style.overflow = '';
         }
         if(headerGender && headerInner.classList.contains('_burgerOpen')){
            // const headerHeight = header.offsetHeight;
            // if(header.getBoundingClientRect().top != 0 ){
            //    const headerGenderHight = headerHeight+headerUpHeight;
            //    headerGender.style.height = `calc(100vh - ${headerGenderHight}px)`;
            // }else{
            //    headerGender.style.height = `calc(100vh - (${headerHeight}px))`;
            // }
         }
      }
   })
}
const headerHeight = header.offsetHeight;
if(header.getBoundingClientRect().top != 0 ){
   const headerGenderHight = headerHeight+headerUpHeight;
   headerGender.style.height = `calc(100vh - ${headerGenderHight}px)`;
}else{
   headerGender.style.height = `calc(100vh - (${headerHeight}px))`;
}