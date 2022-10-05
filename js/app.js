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

if(burger){
   burger.addEventListener('click',function(){
      if(headerInner){
         headerInner.classList.toggle('_burgerOpen')
         if(headerInner.classList.contains('_burgerOpen')){
            body.style.overflow = 'hidden';
         }else{
            body.style.overflow = '';
         }
      }
   })
}
let sliders = document.querySelectorAll('._slider');
let _slideUpFlex = (target,duration = 500) => {
   if (!target.classList.contains('_a')){
      target.classList.add('_a');
      target.style.height = '0px';
   }
}
let _slideDownFlex = (target,duration = 500) => {
   if (target.classList.contains('_a')){
      target.classList.remove('_a');
      let height = target.scrollHeight;
      target.style.height = `${height}px`;
}
}
let _slideToggleFlex = (target,duration = 500) => {
   if (target.classList.contains('_a')){
      return _slideDownFlex(target,duration);
   } else {
      return _slideUpFlex(target,duration);
   }
}
function spoilerFlex(){
   for(let i=0;i<sliders.length;i++){
      let slider = sliders[i];
      slider.nextElementSibling.classList.add('_a');
      slider.nextElementSibling.style.height = '0px';
      slider.addEventListener('click',function copyrightClick(){
            slider.classList.toggle('_sliderOpen');
            _slideToggleFlex(slider.nextElementSibling);
      })
   }
}
if (window.innerWidth<=768){
   const headerHeight = header.offsetHeight;
   let headerTop = header.getBoundingClientRect().top
   window.addEventListener('scroll',function(){
      if(headerInner && headerInner.classList.contains('_searchActive')){headerInner.classList.remove('_searchActive')}
      
   })
   if(header != 0 ){
      const headerGenderHight = headerHeight+headerUpHeight;
      headerGender.style.height = `calc(100vh - ${headerGenderHight}px)`;
   }else{
      headerGender.style.height = `calc(100vh - (${headerHeight}px))`;
   }
   spoilerFlex();
}