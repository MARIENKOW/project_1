$(document).ready(function(){
   $('.slider').slick({
      arrows:true,
      dots:true,
      // adaptiveHeight:true,
      slidesToShow:5,
      slidesToScroll:3,
      speed:500,
      easing:'ease-in-out',
      infinite:true,
      autoplay:true,
      autoplaySpeed:4000,
      touchTreshold:5, 
      centerMode:false,
      // variableWidth:true,
      // rows:1,
      // slidesPerRow:1,
      // appendArrows:$('.arrows'),
      responsive:[
         {
            breakpoint:768,
            settings:{
               slidesToShow :2,
               slidesToScroll:1,
            }
         },{
            breakpoint:400,
            settings:{
               slidesToShow :2,
            }
         }
      ]
   });
});
const searchSvg = document.querySelector('.header__btn');
const headerInner = document.querySelector('.header__inner');
const body = document.querySelector('body');
const burger = document.querySelector('.header__burger')
const headerUp = document.querySelector('.header--up');
const header = document.querySelector('.header');
const headerGender = document.querySelector('.header__gender');
const headerUpHeight = headerUp.offsetHeight;
const intro = document.querySelector('.intro__inner');
let sliders = document.querySelectorAll('._slider');
let on = null;
let i = null;
let x = 0;
function headerInnerSearch(){
   if(searchSvg){
      if(headerInner && !headerInner.classList.contains('_searchActive'))
         searchSvg.addEventListener('click',function(){
            headerInner.classList.add('_searchActive')
         })
   }
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

setInterval(function(){ 
   let y = window.scrollY;
   if(i === y){
      x = 0;
   }
   i = y;
},500)
function genderHight(){
   if(window.innerWidth<=768){
      const headerHeight = header.offsetHeight;
      const headerTop = header.getBoundingClientRect().top
      if(headerTop != 0 ){
         const headerGenderHight = headerHeight+headerUpHeight;
         headerGender.style.height = `calc(100vh - ${headerGenderHight}px)`;
      }else{
         headerGender.style.height = `calc(100vh - (${headerHeight}px))`;
      }
   }else{
      headerGender.style.height = ``;
   }
}
function windowWidth(){
   if (window.innerWidth<=768){
      if (on != 1){
         on = 1;
         headerInnerSearch();
         spoilerFlex();
         window.addEventListener('scroll',function scrollSearch(){
            genderHight();
            console.log('ff')
            x++;
            if(headerInner && headerInner.classList.contains('_searchActive') && x >= 50){headerInner.classList.remove('_searchActive')}
         })
      }
   }else{
   }
}
genderHight();
windowWidth();
window.addEventListener('resize',function(){
   windowWidth();
   genderHight();
})