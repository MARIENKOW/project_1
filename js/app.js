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
      arrows: false,
      dots: false,
      slidesToShow: 3,
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

   $("._basketItemClick").click(basketArr);
   $(".basketSize").click(btnSizeClick);
   function basketArr() {
      // ???????????????? ?????????????? ???????????????? ???????????? ?? ???????????? ???? ????
      if ($(".basketSize").length > 1) {
         if ($('.basketSize:checked').length > 0) {
            if(!$("#btnBasket").hasClass("_in")){
               $("#btnBasket").addClass("_loading");
            }
            ObjectByPhp(".main__btnName", localInner);
         } else {
            const alertSize = document.querySelector(".main__size--alert");
            alertSize.classList.add("_alertActive");
         }
      } else {
         if(!$("#btnBasket").hasClass("_in")){
            $("#btnBasket").addClass("_loading");
         }
         ObjectByPhp(".main__btnName", localInner);
      }
   }
   function ObjectByPhp(clas, func) {
      // ?????????????????? ?????????????? ???????????? ?? ?????????????????? ????????????????
      const id = [document.querySelector(clas).id]
      let obj;
      $.ajax({
         url: 'php/basket/objectForBasket.php',
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
      // ???????????????? ???????? ???? ?????????? ?? ?????????????? ?? ?????????????????? ???????????? ?????????? ????????????????????
      function findId(Arr) {
         return Arr.id === item.id && Arr.size === item.size
      }
      let idArr = []
      if (localStorage.getItem('cart')) {
         idArr = JSON.parse(localStorage.getItem('cart'));
         if (idArr.find(findId)) {
            basketBtn()
            $("#btnBasket").removeClass("_loading");
         } else {
            idArr.push(item);
            localStorage.setItem('cart', JSON.stringify(idArr));
            basketBtn()
            $("#btnBasket").removeClass("_loading");
         }
      } else {
         idArr.push(item);
         localStorage.setItem('cart', JSON.stringify(idArr));
         basketBtn()
         $("#btnBasket").removeClass("_loading");
      }
      ajaxBasketGo();
   }
   function ajaxBasketGo(event) {
      if (localStorage.getItem('cart') && $("#resultBasket")) {
         const cart = JSON.parse(localStorage.getItem('cart'));
         const basketResult = document.getElementById('resultBasket')
            if(cart.length>0 && basketResult){
               let sum = 0;
               basketResult.innerHTML = "";
               for (let i = 0; i<cart.length;i++) {
                  const text = `
                     <div class="basket__item">
                        <div class="basket__item--main">
                           <div class="basket__photo">
                              <img src="../${cart[i].img}" alt="basketPhoto">
                           </div>
                           <div class="basket__info">
                              <a href="item.php?id=${cart[i].id}" class="basket__name">${cart[i].title}</a>
                              <section class="basket__about">
                                 <div class="basket__table">
                                    <span>??????????:</span>
                                    <span class="basket__value basket__value--color" style = "background-color:${cart[i].color}"></span>
                                 </div>
                                 <div class="basket__table">
                                    <span>????????????:</span>
                                    <span class="basket__value">${cart[i].size}</span>
                                 </div>
                                 
                                 <div class="basket__table">
                                    <span>??????????????:</span>
                                    <span class="basket__value">${cart[i].artkl}</span>
                                 </div>
                              </section>
                           </div>
                        </div>
                        <div class="basket__item--bottom">
                           <div class="basket__itemLeft">????????????????</div>
                           <div class="basket__itemRight">${cart[i].price}</div>
                        </div>
                        <div id="${i}" class="basket__item--cross _basketRemoveItem"><span></span></div>
                     </div>`;
                  basketResult.insertAdjacentHTML('beforeend', text);
                  sum += Number(cart[i].price);
               }
               $("#basketCount").html(`<div class="header__count--in">${cart.length}</div>`);
               $("#basketCountIn").html(cart.length);
               $("#basketSum").html(sum);
               $("._basketRemoveItem").click(basketRemove);
            }else{
               $(".basket").removeClass("_basketTogle");
               $("#basketCount").html(``);
               $('#resultBasket').html('')
               $("#basketCountIn").html('');
               $("#basketSum").html('');
            }
      }
   }
   function basketBtn() {
      // ???????????????? ???????? ???? ?????????? ?? ?????????????? ?? ?????????????????? ????????????(?????? ???????????????? ???????????????? ?? ?????????????? ???? ???????????? ??????????????)
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
            }else{
               btnChange(".main__btnName",2);
            }
         }
      }
   }
   function btnChange(btn,text){
      const btnDom = document.querySelector(btn);
      if(text === 1){
         btnDom.innerHTML = "????????????";
         $("#btnSvg").html('<use  xlink:href="#pass"></use>')
         $("#btnBasket").addClass("_in");
      }else{
         btnDom.innerHTML = "???? ????????????";
         $("#btnSvg").html('<use  xlink:href="#basket"></use>')
         $("#btnBasket").removeClass("_in");
      }
   }
   function basketRemove(){
      let cart = JSON.parse(localStorage.getItem('cart'));
      cart.splice(this.id,1);
      localStorage.setItem('cart',JSON.stringify(cart));
      ajaxBasketGo();
      basketBtn();
   }
   function btnSizeClick () {
      const alertSize = document.querySelector(".main__size--alert");
      alertSize.classList.remove("_alertActive");
      basketBtn();
   }


   //! ///---basket---\\\ !\\

   $("._ajaxClick").click(ajaxGo);
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
            $("#bodyLink").html("???????????? ???? ????????????????");
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
   //! ///---AJAX in kategory.php---\\\ !\\

   $("._ajaxColorClick").click(ajaxColorGo);
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
               arrows: false,
               dots: false,
               slidesToShow: 3,
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
            $(".body__choise--size").click(btnSizeClick);
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
   //! ///---AJAX in item.php---\\\ !\\

   $("#clientNumberBtn").click(ajaxClientNumber);
   function ajaxClientNumber(event){
      event.preventDefault();
      const ajaxSendNumber = document.querySelector("._ajaxSendNumber")
      let numberInput = document.querySelector(".clientNumber"); 
      let number = numberInput.value; 
      //! --------------------------------------------------------------------------?????????? ????????????????
      if(number.length == 13){
         $.ajax({
            url: 'php/numberSendTelegram.php',
            method: 'POST',
            data: {number:number},
            success: function (response) {
               if((JSON.parse(response)).ok){
                  ajaxSendNumber.classList.add("_responseOk");
                  $("#sendSvg").html('<use xlink:href="#pass"></use>')
               }
            }
         });
      }else{
         ajaxSendNumber.classList.add("_warningActive");
      }
   }
   function keyChange(){
      const ajaxSendNumber = document.querySelector("._ajaxSendNumber")
      let numberInput = document.querySelector(".clientNumber");
      if(ajaxSendNumber && numberInput){
         numberInput.oninput = function(){
            if(ajaxSendNumber.classList.contains("_responseOk")){
               ajaxSendNumber.classList.remove("_responseOk")
               $("#sendSvg").html('<use xlink:href="#send"></use>')
            }
            if(ajaxSendNumber.classList.contains("_warningActive")){
               ajaxSendNumber.classList.remove("_warningActive")
            }
         }
      }
   }
   //! ///---AJAX number send telegram---\\\ !\\

   $("._ajaxAdminBtn").click(login);
   function login(event){
      event.preventDefault();
      const login = $('input[name="login"]').val();
      const password = $('input[name="password"]').val();

      $.ajax({
         url: 'php/admin/login.php',
         method: 'POST',
         data: {login:login,password:password},
         success: function (response) {
            if(Boolean(response)){
               location.href = 'adminChoose.php';
            }else{
               $("._ajaxSendNumber").addClass('_warningActive')
            }
         }
      });

   }

   $("._ajaxAdminAddBtn").click(adminAdd);
   function adminAdd(event){
      event.preventDefault();
      let formData = new FormData();
      const mainColorBlock = document.querySelector(".mainColorBlock");
      if(mainColorBlock){
         const mainPhoto = mainColorBlock.querySelector("._ajaxMainPhoto");
         const photos = mainColorBlock.querySelectorAll("._ajaxPhotos");
         const title = mainColorBlock.querySelector("input[name='title']").value;
         const text = mainColorBlock.querySelector("textarea[name='text']").value;
         const color = get_filter_choose(".oldColors","input[name='color']",mainColorBlock);
         const price = mainColorBlock.querySelector("input[name='price']").value;
         const brand = get_filter_choose(".oldBrands","input[name='brand']",mainColorBlock);
         const article = mainColorBlock.querySelector("input[name='article']").value;
         const kategory = get_filter_radio("_kategoryAdmin");
         const gender = get_filter_text("_genderAdmin");
         const sizes = get_filter_choose(".oneSizeClick","input[name='size']",mainColorBlock);
         // console.log(mainPhoto,photos,title,text,color,price,brand,article,kategory,gender,sizes);
         if(mainPhoto && photos && title && text && color && price && brand && article && kategory && gender && sizes){
            for(let i = 0;i<photos.length;i++){
               formData.append(`photos_${i}`,photos[i].file);
            }
            formData.append('mainPhoto',mainPhoto.file);
            formData.append('title',title);
            formData.append('text',text);
            formData.append('color',color);
            formData.append('price',price);
            formData.append('brand',brand);
            formData.append('article',article);
            formData.append('sizes',sizes.split(","));
            formData.append('kategory',kategory);
            formData.append('gender',gender);

            const newColorBlocks = document.querySelectorAll(".newColorBlock");
            if(newColorBlocks.length>0){
               for(let i = 0; i<newColorBlocks.length;i++){
                  let newColorBlock = newColorBlocks[i];
                  const mainPhoto = newColorBlock.querySelector("._ajaxMainPhoto");
                  const photos = newColorBlock.querySelectorAll("._ajaxPhotos");
                  const title = newColorBlock.querySelector("input[name='title']").value;
                  const color = get_filter_choose(".oldColors","input[name='color']",newColorBlock);
                  const price = newColorBlock.querySelector("input[name='price']").value;
                  const article = newColorBlock.querySelector("input[name='article']").value;
                  const sizes = get_filter_choose(".oneSizeClick","input[name='size']",newColorBlock);

                  if(mainPhoto && photos && title && color && price && article && sizes){
                     for(let j = 0;j<photos.length;j++){
                        formData.append(`${i}photos_${j}`,photos[j].file);
                     }
                     formData.append(`length`,newColorBlocks.length);
                     formData.append(`${i}mainPhoto`,mainPhoto.file);
                     formData.append(`${i}title`,title);
                     formData.append(`${i}color`,color);
                     formData.append(`${i}price`,price);
                     formData.append(`${i}article`,article);
                     formData.append(`${i}sizes`,sizes.split(","));
                  }else{
                     alert("?????????????????? ??????");
                     return;
                  }
               }

            }
            $.ajax({
               url: 'insert.php',
               method: 'POST',
               data:formData,
               processData : false,
               contentType : false, 
               success: function (response) {
                  console.log(response);
               }
            });
         }else{
            alert("?????????????????? ??????")
         }
      }
   }

   $("._ajaxAdminNewColorBtn").click(adminAddNewColor);
   function adminAddNewColor(event){
      event.preventDefault();
      const color = get_filter_choose(".oldColors","input[name='color']");
      const newColorBlock = document.querySelectorAll(".newColorBlock").length;
      if(color){
         $.ajax({
            url: 'php/admin/adminAddNewColor.php',
            method: 'POST',
            data:{color:color,newColorBlock:newColorBlock},
            success: function (response) {
               $("._ajaxAdminNewColorBtn").before(response);
               oneSizeClick();
               newColorActive();
               oldColorActive();
               newValueRemove();
               oldValueRemove();
               spoilerFlex();
               removeInWrapper();
            }
         });
      }else{
         alert("?????????????????? ?????? ????????")
      }
   }
   //! ///---ADMIN---\\\ !\\


   function get_filter_radio(text_id) {
      let checked;
      $('.' + text_id + ':checked').each(function () {
         checked = this.id;
      });
      return checked;
   }
   function get_filter_choose(arr,value,block){
      const Inblock = block || document;
      const radios = Inblock.querySelectorAll(arr);
      const input = Inblock.querySelector(value);
      if(radios.length>0 && input){
         for(let radio of radios){
            if(radio.checked){
               return radio.dataset.value;
            }
         }
         if(input.closest(".add__section").classList.contains("_newColorActive")){
            return input.value;
         }
      }
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
   function get_filter_textPage(text_id) {
      let filterData = [];
      let page = null;
      $('.' + text_id + ':checked').each(function () {
         page = this.id.replaceAll("page", "");
         filterData.push(page);
      });
      return filterData;
   }
   function get_filter_text(text_id) {
      let filterData = [];
      $('.' + text_id + ':checked').each(function () {
         filterData.push(this.id);
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


   ajaxBasketGo();//check localstorage and insert items into basket
   basketBtn();//check if item in localstorage=>change btn
   keyChange();
   //! ///---functionCALL---\\\ !\\

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
   if(sliders.length>0){
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
   }
   let slidersNoResize = document.querySelectorAll('._sliderNoResize');
   for (let i = 0; i < slidersNoResize.length; i++) {
      let slider = slidersNoResize[i];
      if(!slider.classList.contains("_sliderThisActive")){
         slider.classList.add('_sliderRun')
         slider.nextElementSibling.classList.add('_a');
         slider.nextElementSibling.style.height = '0px';
         slider.parentElement.classList.remove('_sliderOpen');
         slider.classList.add("_sliderThisActive");
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
         if (url.indexOf('kategory') != -1 || url.indexOf('item') != -1 || url.indexOf('search') != -1) {
            window.location.href = 'index.php'
         } else {
            smoothScroll(0, 'top', 30);
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
const basketOpen = () => {
   const basketTogle = document.querySelectorAll('._basketTogle');
   const basket = document.querySelector('.basket');
   if (basketTogle.length > 0 && basket) {
      for (let basketTogleItem of basketTogle) {
         basketTogleItem.addEventListener('click', (event) => {
            event.preventDefault();
            if (localStorage.getItem('cart')) {
               cart = JSON.parse(localStorage.getItem('cart'));
               if(cart.length>0){
                  basket.classList.toggle('_basketTogle')
               }
            }
         })
      }
   }
}
//! ///---BASKET OPEN---\\\ !\\
function pagination(parrentClass){
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
//! ///---PAGINATION---\\\ !\\
function imgClick(img, parent){
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
//! ///---IMG FULLSCREEN---\\\ !\\
swipeClick(); //smoothh scroll
burgerOpen(); //burger open/close
spoilerFlex(); //ADD spoilers
headerInnerSearch() //!--------------
headerFixed();
heaederHiden();
navigationHover();
pagination('.body__pagination');
imgClick('._popapClick', '.popap');
basketOpen();

//!-------------------------------

removeInWrapper();

//!-------------------------------

newColorActive();
oldColorActive();
newValueRemove();
oldValueRemove();
oneSizeClick();

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
function addPreview(element){
   let files =  Array.from(event.target.files);
   if(files.length === 0)return;
   
   for(let file  of files){
      if(!file.type.match('image')) return;
      if(element.name.includes("mainPhoto")){
         mainPhotoUpload(element,file);
      }else if(element.name.includes("photos")){
         otherPhotosUpload(element,file);
      }
   }

}
function mainPhotoUpload(element,file){
   const mainPhotosWrapper = document.querySelector(element.dataset.wrapper);
   const img = document.createElement("img");
   const div = document.createElement("div");
   const span = document.createElement("span");
   div.classList.add("add__imgUpload");
   img.classList.add("add__imgIn");
   img.classList.add("_ajaxMainPhoto");
   span.classList.add("_removeImgUpload")
   img.file = file;
   img.alt = file.name;
   mainPhotosWrapper.append(div);
   div.append(img);
   div.append(span);
   const reader = new FileReader();
   reader.onload = event => {
      img.src = event.target.result;
      const labelPhoto = document.querySelector(`label[for='${element.id}']`)
      labelPhoto.style.display = 'none';
   };
   reader.readAsDataURL(file);
}
function otherPhotosUpload(element,file){
   const photosWrapper = document.querySelector(element.dataset.wrapper);
   const img = document.createElement("img");
   const div = document.createElement("div");
   const span = document.createElement("span");
   div.classList.add("add__imgUpload");
   div.classList.add("add__imgUpload--other");
   img.classList.add("add__imgIn");
   img.classList.add("_ajaxPhotos");
   span.classList.add("_removeImgUpload")
   img.file = file;
   img.alt = file.name;
   photosWrapper.insertBefore(div, photosWrapper.querySelector(`label[for="${element.id}"]`));
   div.append(img);
   div.append(span);
   const reader = new FileReader();
   reader.onload = event => {
      img.src = event.target.result;
   };
   reader.readAsDataURL(file);
}
function removeInWrapper(){
   const addWrappers = document.querySelectorAll(".wrapperToRemove");
   if(addWrappers.length>0){
      for(let addWrapper of addWrappers){
         if(!addWrapper.classList.contains("removeInWrapperActive")){
            addWrapper.classList.add("removeInWrapperActive")
            addWrapper.addEventListener("click",event=>{
               if(event.target.classList.contains('_removeImgUpload')){
                  event.target.parentElement.remove();
                  if(addWrapper.classList.contains("mainWrapperRemove")){
                     addWrapper.querySelector('label').style.display='';
                  }
               }
            })
         }
      }
   }
}

//! ///---------------------\\\ !\\
function newColorActive(){
   const newValues = document.querySelectorAll(".newValue");
   if(newValues.length>0){
      for( let newValue of newValues){
         if(!newValue.classList.contains("_newValueActive")){
            newValue.classList.add("_newValueActive")
            newValue.addEventListener("input",()=>{
               if(newValue.value.length>0){
                  newValue.closest(".add__section").classList.add("_newColorActive")
                  if(newValue.dataset.old)document.querySelector(newValue.dataset.old).classList.remove("_sliderRun");
               }else{
                  newValue.closest(".add__section").classList.remove("_newColorActive")
                  if(newValue.dataset.old)document.querySelector(newValue.dataset.old).classList.add("_sliderRun")
               }
            })
         }
      }
   }
}
function oldColorActive(){
   const oldValues = document.querySelectorAll(".oldChoose");
   if(oldValues.length>0){
      for(let oldValue of oldValues){
         if(!oldValue.classList.contains("_oldValueActive")){
            oldValue.classList.add("_oldValueActive");
            oldValue.addEventListener("click",(event)=>{
               if(event.target.classList.contains("add__label")){
                  oldValue.closest(".add__section").classList.add("_oldColorActive");
               }
            })
         }
      }
   }
}
function newValueRemove(){
   const removes = document.querySelectorAll(".newValueRemove");
   if(removes.length>0){
      for(let remove of removes){
         if(!remove.classList.contains("_newValueRemoveActive")){
            remove.classList.add("_newValueRemoveActive");
            remove.addEventListener("click",()=>{
               if(remove.closest('.add__section').classList.contains("_newColorActive")){
                  if(remove.previousElementSibling.name ==="color"){
                     remove.previousElementSibling.value = '#ffffff';
                  }else{
                     remove.previousElementSibling.value = '';
                  }
                  remove.closest('.add__section').classList.remove("_newColorActive")
                  if(remove.previousElementSibling.dataset.old)document.querySelector(remove.previousElementSibling.dataset.old).classList.add("_sliderRun");
               }
            })
         }
      }
   }
}
function oldValueRemove(){
   const removes = document.querySelectorAll(".oldValueRemove");
   if(removes.length>0){
      for(let remove of removes){
         if(!remove.classList.contains("_oldValueRemoveActive")){
            remove.classList.add("_oldValueRemoveActive");
            remove.addEventListener("click",()=>{
               if(remove.closest('.add__section').classList.contains("_oldColorActive")){
                  remove.closest('.add__section').classList.remove("_oldColorActive")
                  for(let item of document.querySelectorAll(remove.dataset.remove)){
                     if(item.checked){
                        item.checked = false;
                     }
                  }
               }
            })
         }
      }
   }
}
function oneSizeClick(){
   const elements = document.querySelectorAll(".oneSizeClick");
   if (elements.length>0){
      for(let element of elements){
         if(!element.classList.contains("_oneSizeClickActive")){
            element.classList.add("_oneSizeClickActive")
            element.addEventListener("click",()=>{
               if(element.checked){
                  element.closest(".add__section").classList.add("_oneSizeActive");
               }
               else{
                  element.closest(".add__section").classList.remove("_oneSizeActive");
               }
            })
         }
      }
   }
}

