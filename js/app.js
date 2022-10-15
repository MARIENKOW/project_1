$(document).ready(function(){
   $('.slider').slick({
      arrows:true,
      dots:true,
      // adaptiveHeight:true,
      slidesToShow:5,
      slidesToScroll:2,
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
               slidesToScroll:2,
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
//! ///---jQuery---\\\ !\\

/*! ///---jQuery---\\\ !*/
const searchSvg = document.querySelector('.header__btn');
const headerInner = document.querySelector('.header__inner');
const body = document.querySelector('body');
const burger = document.querySelector('.header__burger')
const header = document.querySelector('.header');
const headerGender = document.querySelector('.header__gender');
const intro = document.querySelector('.intro__inner');
let i = null;
let x = 0;
function headerInnerSearch(){
   if(searchSvg && headerInner && !headerInner.classList.contains('_searchActive') && window.innerWidth<=768){
         searchSvg.addEventListener('click',function(){
            headerInner.classList.add('_searchActive')
         })
   }
}
//! ///---SEARCH ACTIVE---\\\ !\\
function scrollSearch(){
   x++;
   if(headerInner && headerInner.classList.contains('_searchActive') && x >= 50){headerInner.classList.remove('_searchActive')}
}
//! ///---SCROLL SEARCH---\\\ !\\
setInterval(function(){ 
   let y = window.scrollY;
   if(i === y){
      x = 0;
   }
   i = y;
},500)
//! ///---SCROLL STOP---\\\ !\\
const burgerOpen = () =>{
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
}
//! ///---BURGER OPEN/CLOSE---\\\ !\\
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
let spoilerDot = null
function spoilerFlex(){
   let sliders = document.querySelectorAll('._slider');
   if(window.innerWidth<=768){
      for(let i=0;i<sliders.length;i++){
         let slider = sliders[i];
         slider.classList.add('_sliderRun')
         slider.nextElementSibling.classList.add('_a');
         slider.nextElementSibling.style.height = '0px';
         slider.parentElement.classList.remove('_sliderOpen');
         if(spoilerDot!=1){
            slider.addEventListener('click',function copyrightClick(){
                  if(slider.classList.contains('_slider') && slider.classList.contains('_sliderRun')){
                     slider.parentElement.classList.toggle('_sliderOpen');
                  _slideToggleFlex(slider.nextElementSibling);
                  }
            })
         }
      }
      spoilerDot = 1;
   }else{
      for(let i=0;i<sliders.length;i++){
         let slider = sliders[i];
         slider.classList.remove('_sliderRun')
         slider.nextElementSibling.classList.remove('_a');
         // slider.parentElement.classList.remove('_sliderOpen');
         slider.nextElementSibling.style.height = '';
      }
   }
}
//! ///---SPOILER OPEN/CLOSE---\\\ !\\
const swipe = document.querySelector('.intro__swipe');
const slider = document.querySelector('.slider--up');
const swipeClick = () =>{
   if (swipe && slider){
      swipe.addEventListener('click',function(){
         slider.scrollIntoView({
            behavior: 'smooth',
            block: "start",
            inline: "nearest"
         });
      })
   }
}
//! ///---SMOOTH SCROLL---\\\ !\\
const headerFixed = () =>{
   if(header){
      if(window.scrollY>=20){
         header.classList.add('_fixed');
      }else{
         header.classList.remove('_fixed');
      }
   }
}
//! ///---HEADER FIXED---\\\ !\\
const swipeHiden = () =>{
   if(swipe){
      const partWindow = (window.innerHeight/4)*3
      if(swipe.getBoundingClientRect().top<= partWindow){
         swipe.classList.add('_hiden')
      }else{
         swipe.classList.remove('_hiden')
      }
   }
}
//! ///---BTN HIDEN/VISIBLE---\\\ !\\
swipeClick(); //smoothh scroll
burgerOpen(); //burger open/close
spoilerFlex(); //ADD spoilers
headerInnerSearch()
//! ///---FUNCTIONS CALL---\\\ !\\
window.addEventListener('scroll',function(){
   swipeHiden();
   headerFixed();
   scrollSearch();
})
//! ///---FUNCTIONS CALL ON SCROLL---\\\ !\\
window.addEventListener('resize',function(){
   spoilerFlex();
   if(window.innerWidth<=768){
      body.style.overflow = '';
   }
})
//! ///---FUNCTION CALL ON RESIZE---\\\ !\\
