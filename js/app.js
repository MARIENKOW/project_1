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
function genderHight(){
   const headerHeight = header.offsetHeight;
   const headerTop = header.getBoundingClientRect().top
   if(headerTop != 0 ){
      const headerGenderHight = headerHeight+headerUpHeight;
      headerGender.style.height = `calc(100vh - ${headerGenderHight}px)`;
   }else{
      headerGender.style.height = `calc(100vh - (${headerHeight}px))`;
   }
}
let i = null;
let x = 0;
setInterval(function(){
   let y = window.scrollY;
   if(i === y){
      x = 0;
      console.log('стоим')
   }
   i = y;
},500)

function windowWidth(){
   if (window.innerWidth<=768){
      window.addEventListener('scroll',function(){
         genderHight();
         x++;
         console.log(x)
         if(headerInner && headerInner.classList.contains('_searchActive') && x >= 50){headerInner.classList.remove('_searchActive')}
      })
      genderHight();
      spoilerFlex();
   }
}
windowWidth();
const intro = document.querySelector('.intro__inner');
function introHeight(){
      const headerHeight = header.offsetHeight;
      const headerGenderHight = headerHeight+headerUpHeight;
      intro.style.height = `calc(100vh - ${headerGenderHight}px)`;
}
introHeight()
window.addEventListener('resize',function(){
   introHeight();
})