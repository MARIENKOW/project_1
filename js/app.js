const searchSvg = document.querySelector('.header__btn');
const headerInner = document.querySelector('.header__inner');
const body = document.querySelector('body');

if(searchSvg){
   if(headerInner && !headerInner.classList.contains('_searchActive'))
      searchSvg.addEventListener('click',function(){
         headerInner.classList.add('_searchActive')
      })
}
window.addEventListener('scroll',function(){
   if(headerInner && headerInner.classList.contains('_searchActive')){headerInner.classList.remove('_searchActive')}
})
const burger = document.querySelector('.header__burger')

const headerUp = document.querySelector('.header--up');
const header = document.querySelector('.header');
const headerGender = document.querySelector('.header__gender');
const headerUpHeight = headerUp.offsetHeight;
console.log(header.getBoundingClientRect().top);

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
            const headerHeight = header.offsetHeight;
            
            if(header.getBoundingClientRect().top !== 0 ){
               const headerGenderHight = `calc(100vh - (${headerHeight}px+${headerUpHeight}px))`;
               console.log(headerGenderHight);
               headerGender.style.height = headerGenderHight;
            }else{
               const headerGenderHight = `calc(100vh - (${headerHeight}px))`;
               headerGender.style.height = headerGenderHight;
               console.log(headerGenderHight);
            }
         }
      }
   })
}