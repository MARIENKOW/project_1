const pagination = (parrentClass) => {
   const parrent = document.querySelector(parrentClass);
   if (parrent) {
      let checkedElement
      const paginationParrentLength = parrent.children.length;
      for (let i = 0; i < paginationParrentLength; i++) {
         if (parrent.children[i].firstElementChild.checked) {
            checkedElement = i;
         }
      }
      for (let i = paginationParrentLength - 1; i >= 0; i--) {

         if (checkedElement < paginationParrentLength - 4 && i < paginationParrentLength - 1 && i > checkedElement + 1 || checkedElement > 3 && i != 0 && i < checkedElement - 1) {
            parrent.children[i].remove();
         }
      }
      if (checkedElement < paginationParrentLength - 4) {
         parrent.lastElementChild.before('...');
      }
      if (checkedElement > 3) {
         parrent.firstElementChild.after('...');
      }
   }
}
const imgClick = (img, parent) => {
   const popapClick = document.querySelectorAll(img);
   const popap = document.querySelector(parent);
   if (popapClick.length > 0) {
      for (let popapClickItem of popapClick) {
         popapClickItem.addEventListener('click', () => {
            if (popap) {
               if (!popap.classList.contains('_popapActive')) {
                  popap.classList.add('_popapActive');
                  body.style.overflow = 'hidden';
               } else {
                  popap.classList.remove('_popapActive');
                  body.style.overflow = '';
               }
            }
         })
      }
   }
}

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
         }, {
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
   $('.main__slider').slick({
      arrows: true,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      easing: 'ease-in-out',
      infinite: false,
      autoplay: false,
      autoplaySpeed: 5000,
      touchTreshold: 5,
      asNavFor: ".main__sliderFor",
   });
   $('.main__sliderFor').slick({
      arrows: true,
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500,
      easing: 'ease-in-out',
      infinite: false,
      autoplay: false,
      autoplaySpeed: 5000,
      touchTreshold: 5,
      focusOnSelect: true,
      asNavFor: ".main__slider",
      vertical: true,
      verticalSwiping: true,
      responsive: [
         {
            breakpoint: 1360,
            settings: {
               slidesToShow: 3,
            }
         }, {
            breakpoint: 1160,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 2,
            }
         }, {
            breakpoint: 960,
            settings: {
               slidesToShow: 3,
            }
         }
      ]
   });
   $('.main__sliderByKategory').slick({
      arrows: true,
      dots: true,
      slidesToShow: 5,
      slidesToScroll: 2,
      speed: 500,
      easing: 'ease-in-out',
      infinite: false,
      autoplaySpeed: 4000,
      touchTreshold: 5,
      centerMode: false,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 2,
            }
         }, {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         }
      ]
   });
   $('.popap__slider').slick({
      arrows: true,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      easing: 'ease-in-out',
      infinite: false,
      autoplay: false,
      autoplaySpeed: 5000,
      touchTreshold: 5,
   });
   //! ///---sliders---\\\ !\\
   $("._ajaxClick").click(ajaxGo);
   $("._ajaxColorClick").click(ajaxColorGo);
   $("._basketItemClick").click(basketArr);
   $(".basketSize").click(removeAlert);

   function basketArr() {
      if ($(".basketSize").length > 1) {
         if ($('.basketSize:checked').length > 0) {
            ObjectByPhp(".main__btnName", localInner);
         } else {
            const alertSize = document.querySelector(".main__size--alert");
            alertSize.classList.add("_alertActive");
         }
      } else {
         ObjectByPhp(".main__btnName", localInner);
      }
   }
   function ObjectByPhp(clas, func) {
      const id = [document.querySelector(clas).id]
      let obj;
      $.ajax({
         url: 'php/basket/bbt.php',
         method: 'POST',
         data: { id: id },
         success: function (response) {
            obj = JSON.parse(response);
            obj.size = get_size_for_basket("basketSize");
            func(obj)
         }
      });
   }
   function localInner(item) {
      function findId(Arr) {
         return Arr.id === item.id && Arr.size === item.size
      }
      let idArr = []
      if (localStorage.getItem('cart')) {
         idArr = JSON.parse(localStorage.getItem('cart'));
         if (idArr.find(findId)) {
            btnChange(".main__btnName",1);
         } else {
            idArr.push(item);
            localStorage.setItem('cart', JSON.stringify(idArr));
            btnChange(".main__btnName",1);
         }
      } else {
         idArr.push(item);
         localStorage.setItem('cart', JSON.stringify(idArr));
         btnChange(".main__btnName",1);
      }
      ajaxBasketGo();
   }
   function ajaxBasketGo(event) {
      if (localStorage.getItem('cart')) {
         const cart = JSON.parse(localStorage.getItem('cart'));
         const basketResult = document.getElementById('resultBasket')
         let sum = 0;
         basketResult.innerHTML = "";
         for (cartItem of cart) {
            const text = `
               <a href="item.php?id=${cartItem.id}" class="basket__item">
                  <div class="basket__item--main">
                     <div class="basket__photo">
                        <img src="../${cartItem.img}" alt="basketPhoto">
                     </div>
                     <div class="basket__info">
                        <div class="basket__name">${cartItem.title}</div>
                        <section class="basket__about">
                           <div class="basket__table">
                              <span>колір:</span>
                              <span class="basket__value basket__value--color" style = "background-color:${cartItem.color}"></span>
                           </div>
                           <div class="basket__table">
                              <span>розмір:</span>
                              <span class="basket__value">${cartItem.size}</span>
                           </div>
                           
                           <div class="basket__table">
                              <span>артикул:</span>
                              <span class="basket__value">${cartItem.artkl}</span>
                           </div>
                        </section>
                     </div>
                  </div>
                  <div class="basket__item--bottom">
                     <div class="basket__itemLeft">Вартість</div>
                     <div class="basket__itemRight">${cartItem.price}</div>
                  </div>
               </a>`;
            basketResult.insertAdjacentHTML('beforeend', text);
            sum += Number(cartItem.price);
         }
         $("#basketCount").html(`<div class="header__count--in">${cart.length}</div>`);
         $("#basketCountIn").html(cart.length);
         $("#basketSum").html(sum);
      }
   }
   function basketBtn() {

      if (localStorage.getItem('cart') && $("._basketItemClick").length>0) {
         const itemId = document.querySelector('.main__btnName');
         function findId(Arr) {
            return Arr.id === itemId.id && Arr.size === get_size_for_basket("basketSize");
         }
         if ($(".basketSize").length > 1) {
            if ($('.basketSize:checked').length > 0) {
               let Arr = JSON.parse(localStorage.getItem('cart'));
               if (Arr.find(findId)) {
                  btnChange(".main__btnName",1);
               }else{
                  btnChange(".main__btnName",2);
               }
            }
         } else {
            let Arr = JSON.parse(localStorage.getItem('cart'));
            if (Arr.find(findId)) {
               btnChange(".main__btnName",1);
            }
         }
      }
   }
   function btnChange(btn,text){
      const btnDom = document.querySelector(btn);
      if(text === 1){
         btnDom.innerHTML = "додано";
         $("#btnSvg").html('<use  xlink:href="#pass"></use>')
      }else{
         btnDom.innerHTML = "до кошика";
         $("#btnSvg").html('<use  xlink:href="#basket"></use>')
      }
   }
   function ajaxGo(event) {
      if (this.classList.contains('body__checkboxBtn')) {
         $("._ajaxClick").prop('checked', false);
      }
      $(".body__loading").show();
      let action = 'data';
      let gender = get_filter_text('body__gender--check');
      let kategory = get_filter_text('body__kategory');
      let brand = get_filter_text('body__brand');
      let size = get_filter_text('body__size');
      let color = get_filter_textColor('body__color');
      let sort = get_filter_text('body__sortAjax');
      let page;
      if (this.classList.contains('body__numberCheck')) {
         page = get_filter_textPage('body__numberCheck');
      } else {
         page = [1];
      }
      let newHistory = '?';
      if (gender.length > 0) {
         newHistory += `&value[]=${gender.join('&value[]=')}`;
      }
      if (kategory.length > 0) {
         newHistory += `&kategory[]=${kategory.join('&kategory[]=')}`;
      }
      if (brand.length > 0) {
         newHistory += `&brand[]=${brand.join('&brand[]=')}`;
      }
      if (size.length > 0) {
         newHistory += `&size[]=${size.join('&size[]=')}`;
      }
      if (color.length > 0) {
         newHistory += `&color[]=${color.join('&color[]=')}`;
      }
      if (sort.length > 0) {
         newHistory += `&sort[]=${sort.join('&sort[]=')}`;
      }
      if (page.length > 0) {
         newHistory += `&page[]=${page.join('&page[]=')}`;
      } else {
         newHistory += `&page[]=1`;
      }
      $.ajax({
         url: 'php/action.php',
         method: 'POST',
         data: { action: action, kategory: kategory, gender: gender, brand: brand, size: size, color: color, sort: sort, page: page },
         success: function (response) {
            $(".body__loading").hide();
            $("#result").html(response);
            $("#bodyLink").html("Товари за фільтром");
            history.pushState(null, null, location.origin + location.pathname + newHistory);
         }
      });
      $.ajax({
         url: 'php/pagination.php',
         method: 'POST',
         data: { action: action, kategory: kategory, gender: gender, brand: brand, size: size, color: color, sort: sort, page: page },
         success: function (response) {
            $("#result2").html(response);
            $(".body__numberCheck").click(ajaxGo);
            pagination('.body__pagination');
         }
      });
   }
   function ajaxColorGo(event) {
      let id = get_filter_text('body__color');
      let newHistory = `?id=${id}`;
      $.ajax({
         url: 'php/item.php/itemAction.php',
         method: 'POST',
         data: { id: id },
         success: function (response) {
            $("#result3").html(response);
            $('.main__slider').slick({
               arrows: true,
               dots: false,
               slidesToShow: 1,
               slidesToScroll: 1,
               speed: 500,
               easing: 'ease-in-out',
               infinite: false,
               autoplay: false,
               autoplaySpeed: 5000,
               touchTreshold: 5,
               asNavFor: ".main__sliderFor",
            });
            $('.main__sliderFor').slick({
               arrows: true,
               dots: false,
               slidesToShow: 4,
               slidesToScroll: 1,
               speed: 500,
               easing: 'ease-in-out',
               infinite: false,
               autoplay: false,
               autoplaySpeed: 5000,
               touchTreshold: 5,
               focusOnSelect: true,
               asNavFor: ".main__slider",
               vertical: true,
               verticalSwiping: true,
               responsive: [
                  {
                     breakpoint: 1360,
                     settings: {
                        slidesToShow: 3,
                     }
                  }, {
                     breakpoint: 1160,
                     settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                     }
                  }, {
                     breakpoint: 960,
                     settings: {
                        slidesToShow: 3,
                     }
                  }
               ]
            });
            history.pushState(null, null, location.origin + location.pathname + newHistory);
            $("._ajaxColorClick").click(ajaxColorGo);
            $("._basketItemClick").click(basketArr);
            $(".body__choise--size").click(removeAlert);
            basketBtn();
            $.ajax({
               url: 'php/item.php/itemPopap.php',
               method: 'POST',
               data: { id: id },
               success: function (response2) {
                  $("#result4").html(response2);
                  $('.popap__slider').slick({
                     arrows: true,
                     dots: false,
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     speed: 500,
                     easing: 'ease-in-out',
                     infinite: false,
                     autoplay: false,
                     autoplaySpeed: 5000,
                     touchTreshold: 5,
                  });
                  imgClick('._popapClick', '.popap');
               }
            });
         }
      });

   }
   function get_filter_text(text_id) {
      let filterData = [];
      $('.' + text_id + ':checked').each(function () {
         filterData.push(this.id);
      });
      return filterData;
   }
   function get_filter_textColor(text_id) {
      let filterData = [];
      let color = null;
      $('.' + text_id + ':checked').each(function () {
         color = this.id.replaceAll("#", "");
         filterData.push(color);
      });
      return filterData;
   }
   function get_size_for_basket(text_class) {
      let size = null;
      if ($('.' + text_class).length > 1) {
         $('.' + text_class + ':checked').each(function () {
            size = this.id;
         });
      } else {
         $('.' + text_class).each(function () {
            size = this.id;
         });
      }

      return size;
   }
   function get_filter_textPage(text_id) {
      let filterData = [];
      let page = null;
      $('.' + text_id + ':checked').each(function () {
         page = this.id.replaceAll("page", "");
         filterData.push(page);
      });
      return filterData;
   }
   function removeAlert () {
      const alertSize = document.querySelector(".main__size--alert");
      alertSize.classList.remove("_alertActive");
      basketBtn();
   }
   
   // function basketArr (){
   //    let idArr=[] 
   //    if(localStorage.getItem('cart')){
   //       idArr = JSON.parse(localStorage.getItem('cart'));
   //       if(idArr.includes(get_filter_id("main__btnName"))){
   //          //элемент уже в корзине
   //       }else{
   //          idArr.push(get_filter_id("main__btnName"));
   //          localStorage.setItem('cart',JSON.stringify(idArr));
   //       }
   //    }else{
   //       idArr.push(get_filter_id("main__btnName"));
   //       localStorage.setItem('cart',JSON.stringify(idArr));
   //    }
   //    ajaxBasketGo();
   // }
   // function ajaxBasketGo(event){
   //    if(localStorage.getItem('cart')){
   //       const id = JSON.parse(localStorage.getItem('cart'));
   //       console.log(id);
   //       $.ajax({
   //          url:'php/basket/basketAction.php',
   //          method:'POST',
   //          data:{id:id},
   //          success:function(response){
   //             $("#resultBasket").html(response);
   //          }
   //       });
   //       $.ajax({
   //          url:'php/basket/basketCount.php',
   //          method:'POST',
   //          data:{id:id},
   //          success:function(response){
   //             $("#basketCount").html(`<div class="header__count--in">${response}</div>`);
   //             $("#basketCountIn").html(response);
   //          }
   //       });
   //       $.ajax({
   //          url:'php/basket/basketSum.php',
   //          method:'POST',
   //          data:{id:id},
   //          success:function(response){
   //             $("#basketSum").html(response);
   //          }
   //       });
   //    }
   // }
   // function get_filter_id(text_id){
   // let id;
   //    $('.'+text_id).each(function(){
   //       id=this.id; 
   //    });
   //    return id;
   // }
   //! ///---Ajax---\\\ !\\
   ajaxBasketGo();
   basketBtn();
});
//! ///---jQuery---\\\ !\\
/*! ///---jQuery---\\\ !*/
const searchBtn = document.querySelector('.searchBtn');
const headerInner = document.querySelector('.header__inner');
const body = document.querySelector('body');
const burger = document.querySelector('.header__burger')
const header = document.querySelector('.header');
const headerGender = document.querySelector('.header__gender');
const intro = document.querySelector('.intro__inner');
let x = 0;
function headerInnerSearch() {
   if (searchBtn && headerInner && window.innerWidth <= 768) {
      searchBtn.addEventListener('click', function (e) {
         if (!headerInner.classList.contains('_searchActive')) {
            e.preventDefault();
            headerInner.classList.add('_searchActive')
         }
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
let i = null;
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
let spoilerDot = null;
let spoilerDotNoResize = null;

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
            slider.addEventListener('click', function copyrightClick(e) {
               e.preventDefault();
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
   if (spoilerDotNoResize != 1) {
      spoilerDotNoResize = 1;
      let sliders = document.querySelectorAll('._sliderNoResize');
      for (let i = 0; i < sliders.length; i++) {
         let slider = sliders[i];
         slider.classList.add('_sliderRun')
         slider.nextElementSibling.classList.add('_a');
         slider.nextElementSibling.style.height = '0px';
         slider.parentElement.classList.remove('_sliderOpen');
         slider.addEventListener('click', function copyrightClick(e) {
            e.preventDefault();
            if (slider.classList.contains('_sliderRun')) {
               slider.parentElement.classList.toggle('_sliderOpen');
               _slideToggleFlex(slider.nextElementSibling);
            }
         })
      }
   }
}
//! ///---SPOILER OPEN/CLOSE---\\\ !\\

const smoothScroll = (element, position, steps) => {
   let Y
   const step = steps || 10;
   if (element === 0) {
      Y = 0;
   } else {
      if (position == 'top' || !position) {
         Y = element.offsetTop;
      } else if (position == 'center') {
         Y = (element.offsetTop + element.offsetHeight / 2) - window.innerHeight / 2;
      } else if (position == 'bottom') {
         Y = (element.offsetTop + element.offsetHeight) - window.innerHeight;
      }
   }
   let x = window.scrollY;
   if (Y > x) {
      const scrlBot = () => {
         window.scrollTo(0, x);
         x = x + step;
         if (x >= Y) {
            clearInterval(interval)
            x = 0;
         }
      }
      interval = setInterval(scrlBot, 4);
   } else if (Y < x) {
      const scrlTop = () => {
         window.scrollTo(0, x);
         x = x - step;
         if (x <= Y) {
            clearInterval(interval)
            x = 0;
         }
      }
      interval = setInterval(scrlTop, 4);
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
         smoothScroll(slider, 'top');
      })
   }
}
const indexTop = document.querySelectorAll('.index__top')
const headerUp = document.querySelector('.header--up');
const url = window.location.href
if (indexTop.length > 0) {
   for (let top of indexTop) {
      top.addEventListener('click', function () {

         if (url.indexOf('index') != -1) {
            smoothScroll(0, 'top', 30);
         } else {
            window.location.href = 'index.php'
         }
      })
   }
}
const about = document.querySelector('.about');
const aboutTop = document.querySelector('.about__top');

if (aboutTop && about) {
   aboutTop.addEventListener('click', function () {
      smoothScroll(about, "center", 30);
   })
}
//! ///---add SmoothScroll---\\\ !\\
const heaederHiden = () => {
   const filtrBy = document.querySelectorAll('._filtrByToggle')
   const bodyNav = document.querySelector('.body__nav')
   const bodyCross = document.querySelector('.body__cross')
   if (filtrBy.length > 0) {
      for (let filtr of filtrBy) {
         filtr.addEventListener('click', () => {
            if (!bodyNav.classList.contains('_open')) {
               bodyNav.classList.add('_open')
               body.style.overflow = 'hidden';
               header.classList.add('_hid')
               header.style.transition = '.3s';
            } else {
               bodyNav.classList.remove('_open')
               body.style.overflow = '';
               header.classList.remove('_hid')
               setTimeout(() => {
                  header.style.transition = '';
               }, 500);
            }

         })
      }
   }
}
//! ///---header hiden---\\\ !\\
const navigationHover = () => {
   const hovers = document.querySelectorAll('._hover');
   if (hovers.length > 0) {
      for (let i = 0; i < hovers.length; i++) {
         const hover = hovers[i];
         let timerEnterTime = null;
         let timerLeaveTime = null;
         let timerEnter;
         let timerLeave;
         hover.onmouseenter = function (event) {
            timerLeaveTime = null
            clearInterval(timerLeave);
            timerEnter = setInterval(() => {
               timerEnterTime++
               if (timerEnterTime >= 3) {
                  hover.classList.add('_show')
                  clearInterval(timerEnter);
                  timerEnterTime = null
               }
            }, 100)
         }
         hover.onmouseleave = function (event) {
            timerEnterTime = null
            clearInterval(timerEnter);
            if (hover.classList.contains('_show')) {
               timerLeave = setInterval(() => {
                  timerLeaveTime++
                  if (timerLeaveTime >= 6) {
                     hover.classList.remove('_show')
                     clearInterval(timerLeave);
                     timerLeaveTime = null
                  }
               }, 100)
            }
         }
      }
   }
}
//! ///---NAVIGATION HOVER---\\\ !\\
swipeClick(); //smoothh scroll
burgerOpen(); //burger open/close
spoilerFlex(); //ADD spoilers
headerInnerSearch() //!--------------
headerFixed();
heaederHiden();
navigationHover();
pagination('.body__pagination');
imgClick('._popapClick', '.popap');
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
const basketOpen = () => {
   const basketTogle = document.querySelectorAll('._basketTogle');
   const basket = document.querySelector('.basket');
   if (basketTogle.length > 0 && basket) {
      for (let basketTogleItem of basketTogle) {
         basketTogleItem.addEventListener('click', (event) => {
            event.preventDefault();
            if (localStorage.getItem('cart')) {
               basket.classList.toggle('_basketTogle')
            }
         })
      }
   }
}
basketOpen();
