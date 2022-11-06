$(document).ready(function () {
   $('.sliderSl').slick({
      arrows: true,
      dots: true,
      // adaptiveHeight:true,
      slidesToShow: 6,
      slidesToScroll: 2,
      speed: 500,
      easing: 'ease-in-out',
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      touchTreshold: 5,
      centerMode: false,
      // variableWidth:true,
      // rows:1,
      // slidesPerRow:1,
      // appendArrows:$('.arrows'),
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 2,
            }
         },{
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
            }
         }, {
            breakpoint: 400,
            settings: {
               slidesToShow: 2,
            }
         }
      ]
   });
   $('.sliderTwo').slick({
      arrows: false,
      dots: false,
      // adaptiveHeight:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      easing: 'ease-in-out',
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      touchTreshold: 5,
   });
//! ///---slider---\\\ !\\
      $("._ajaxClick").click(function(event){
         $(".body__loading").show();
         let action = 'data';
         let gender = get_filter_text('body__gender--check');
         let kategory = get_filter_text('body__kategory');
         let size = get_filter_text('body__size');
         let sort = get_filter_text('body__sortAjax');
         console.log(sort);
         $.ajax({
            url:'action.php',
            method:'POST',
            data:{action:action,kategory:kategory,gender:gender,size:size,sort:sort},
            success:function(response){
               $(".body__loading").hide();
               $("#result").html(response);
            }
         });
      });
   function get_filter_text(text_id){
      let filterData = [];
      $('.'+text_id+':checked').each(function(){
         filterData.push(this.id); 
      });
      return filterData;
   }
//! ///---Ajax---\\\ !\\

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
function headerInnerSearch() {
   if (searchSvg && headerInner && !headerInner.classList.contains('_searchActive') && window.innerWidth <= 768) {
      searchSvg.addEventListener('click', function () {
         headerInner.classList.add('_searchActive')
      })
   }
}
//! ///---SEARCH ACTIVE---\\\ !\\
function scrollSearch() {
   x++;
   if (headerInner && headerInner.classList.contains('_searchActive') && x >= 50) {
      headerInner.classList.remove('_searchActive')
   }
}
//! ///---SCROLL SEARCH---\\\ !\\
setInterval(function () {
   let y = window.scrollY;
   if (i === y) {
      x = 0;
   }
   i = y;
}, 500)
//! ///---SCROLL STOP---\\\ !\\
const burgerOpen = () => {
   if (burger) {
      burger.addEventListener('click', function () {
         if (headerInner) {
            headerInner.classList.toggle('_burgerOpen')
            if (headerInner.classList.contains('_burgerOpen')) {
               body.style.overflow = 'hidden';
            } else {
               body.style.overflow = '';
            }
         }
      })
   }
}
//! ///---BURGER OPEN/CLOSE---\\\ !\\
let _slideUpFlex = (target, duration = 500) => {
   if (!target.classList.contains('_a')) {
      target.classList.add('_a');
      target.style.height = '0px';
   }
}
let _slideDownFlex = (target, duration = 500) => {
   if (target.classList.contains('_a')) {
      target.classList.remove('_a');
      let height = target.scrollHeight;
      target.style.height = `${height}px`;
   }
}
let _slideToggleFlex = (target, duration = 500) => {
   if (target.classList.contains('_a')) {
      return _slideDownFlex(target, duration);
   } else {
      return _slideUpFlex(target, duration);
   }
}
let spoilerDot = null
function spoilerFlex() {
   let sliders = document.querySelectorAll('._slider');
   if (window.innerWidth <= 768) {
      for (let i = 0; i < sliders.length; i++) {
         let slider = sliders[i];
         slider.classList.add('_sliderRun')
         slider.nextElementSibling.classList.add('_a');
         slider.nextElementSibling.style.height = '0px';
         slider.parentElement.classList.remove('_sliderOpen');
         if (spoilerDot != 1) {
            slider.addEventListener('click', function copyrightClick() {
               if (slider.classList.contains('_sliderRun')) {
                  slider.parentElement.classList.toggle('_sliderOpen');
                  _slideToggleFlex(slider.nextElementSibling);
               }
            })
         }
      }
      spoilerDot = 1;
   } else {
      for (let i = 0; i < sliders.length; i++) {
         let slider = sliders[i];
         slider.classList.remove('_sliderRun')
         slider.nextElementSibling.classList.remove('_a');
         slider.parentElement.classList.remove('_sliderOpen');
         slider.nextElementSibling.style.height = '';
      }
   }
}
//! ///---SPOILER OPEN/CLOSE---\\\ !\\

const smoothScroll = (element,position,steps)=>{
   let Y
   const step =steps || 10;
   if(element === 0){
      Y = 0;
   }else{
      if(position=='top' || !position){
         Y = element.offsetTop;
      }else if(position=='center'){
         Y = (element.offsetTop+element.offsetHeight/2)-window.innerHeight/2;
      }else if(position=='bottom'){
         Y = (element.offsetTop+element.offsetHeight)-window.innerHeight;
      }
   }
   let x = window.scrollY;
   if(Y>x){
      const scrlBot = ()=>{
         window.scrollTo(0,x);
         x=x+step;
         if(x>=Y){
            clearInterval(interval)
            x=0;
         }
      }
      interval = setInterval(scrlBot,4);
   }else if(Y<x){
      const scrlTop = ()=>{
         window.scrollTo(0,x);
         x=x-step;
         if(x<=Y){
            clearInterval(interval)
            x=0;
         }
      }
      interval = setInterval(scrlTop,4);
   }
}
//! ///---SMOOTH SCROLL---\\\ !\\
const headerFixed = () => {
   if (header) {
      if (window.scrollY >= 20) {
         header.classList.add('_fixed');
      } else {
         header.classList.remove('_fixed');
      }
   }
}
//! ///---HEADER FIXED---\\\ !\\
const swipeHiden = () => {
   if (swipe) {
      const partWindow = (window.innerHeight / 4) * 3
      if (swipe.getBoundingClientRect().top <= partWindow) {
         swipe.classList.add('_hiden')
      } else {
         swipe.classList.remove('_hiden')
      }
   }
}
//! ///---BTN HIDEN/VISIBLE---\\\ !\\
const swipe = document.querySelector('.intro__swipe');
const slider = document.querySelector('.slider--up');
const swipeClick = () => {
   if (swipe && slider) {
      swipe.addEventListener('click', function () {
         smoothScroll(slider,'center');
      })
   }
}
const indexTop = document.querySelectorAll('.index__top')
const headerUp = document.querySelector('.header--up');
const url = window.location.href
if(indexTop.length>0 ){
   for(let top of indexTop){
      top.addEventListener('click',function(){
         
         if(url.indexOf('index')!=-1){
            smoothScroll(0,'top',30);
         }else{
            window.location.href = 'index.php'
         }
      })
   }
}
const about = document.querySelector('.about');
const aboutTop = document.querySelector('.about__top');

if(aboutTop && about){
   aboutTop.addEventListener('click',function(){
      smoothScroll(about,"center",30);
   })
}
//! ///---add SmoothScroll---\\\ !\\

/*! ///---add SmoothScroll---\\\ !*/
swipeClick(); //smoothh scroll
burgerOpen(); //burger open/close
spoilerFlex(); //ADD spoilers
headerInnerSearch() //!--------------
headerFixed();

//! ///---FUNCTIONS CALL---\\\ !\\
window.addEventListener('scroll', function () {
   swipeHiden();
   headerFixed();
   scrollSearch();
})
//! ///---FUNCTIONS CALL ON SCROLL---\\\ !\\
window.addEventListener('resize', function () {
   spoilerFlex();
   if (window.innerWidth <= 768) {
      body.style.overflow = '';
   }
})
//! ///---FUNCTION CALL ON RESIZE---\\\ !\\
const hovers = document.querySelectorAll('._hover');
if(hovers.length>0){
   for(let i = 0;i<hovers.length;i++){
      const hover = hovers[i];
      let timerEnterTime = null;
      let timerLeaveTime = null;
      let timerEnter;
      let timerLeave;
      hover.onmouseenter = function(event){
         timerLeaveTime = null
         clearInterval(timerLeave);
         timerEnter = setInterval(() =>{
            timerEnterTime++
            if(timerEnterTime>=3){hover.classList.add('_show')
            clearInterval(timerEnter);
            timerEnterTime = null
            }  
         },100)
      }
      hover.onmouseleave = function(event){
         timerEnterTime = null
         clearInterval(timerEnter);
         if(hover.classList.contains('_show')){
            timerLeave = setInterval(() =>{
               timerLeaveTime++
               if(timerLeaveTime>=6){hover.classList.remove('_show')
               clearInterval(timerLeave);
               timerLeaveTime=null
               }
            },100)
         }
      
      }
   }
}
//! ///---NAVIGATION HOVER---\\\ !\\

/*! ///---NAVIGATION HOVER---\\\ !*/
const filtrBy = document.querySelectorAll('._filtrByToggle')
const bodyNav = document.querySelector('.body__nav')
const bodyCross = document.querySelector('.body__cross')
if(filtrBy.length>0){
   for(let filtr of filtrBy){
      filtr.addEventListener('click',()=>{
         if(!bodyNav.classList.contains('_open')){
            bodyNav.classList.add('_open')
            body.style.overflow = 'hidden';
            header.classList.add('_hid')
         }else{
            bodyNav.classList.remove('_open')
            body.style.overflow = '';
            header.classList.remove('_hid')
         }
      
      })
   }
}
// let clickBodySort = new Event('click');
// bodyList.dispatchEvent(clickBodySort);
// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = ()=>{
//    console.log('dddd');
//    // if (this.readyState == 4 && this.status == 200){
//    // }
// }
// xhttp.open("POST","http://localhost/kategory.php",true)
// xhttp.setRequestHeader("value=male");
// xhttp.send("jjjjj");
