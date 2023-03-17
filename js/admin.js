$(document).ready(function () {

   $("._ajaxAdminBtn").click(login);
   function login(event) {
      event.preventDefault();
      const login = $('input[name="login"]').val();
      const password = $('input[name="password"]').val();

      $.ajax({
         url: 'php/admin/login.php',
         method: 'POST',
         data: { login: login, password: password },
         success: function (response) {
            if (Boolean(response)) {
               location.href = 'adminChoose.php';
            } else {
               $("._ajaxSendNumber").addClass('_warningActive')
            }
         }
      });

   }

   $("._ajaxAdminAddBtn").click(adminAdd);
   function adminAdd(event) {
      event.preventDefault();
      if(!$("._ajaxAdminAddBtn").hasClass("ajaxAdminAddBtnActive")){
         $("._ajaxAdminAddBtn").addClass("ajaxAdminAddBtnActive");
         let formData = new FormData();
         const mainColorBlock = document.querySelector(".mainColorBlock");
         if (mainColorBlock) {
            const mainPhoto = mainColorBlock.querySelector("._ajaxMainPhoto");
            const photos = mainColorBlock.querySelectorAll("._ajaxPhotos");
            const title = mainColorBlock.querySelector("input[name='title']").value;
            const text = mainColorBlock.querySelector("textarea[name='text']").value;
            const color = get_filter_choose(".oldColors", "input[name='color']", mainColorBlock);
            const price = mainColorBlock.querySelector("input[name='price']").value;
            const brand = get_filter_choose(".oldBrands", "input[name='brand']", mainColorBlock);
            const article = mainColorBlock.querySelector("input[name='article']").value;
            const kategory = get_filter_radio("_kategoryAdmin");
            const gender = get_filter_text("_genderAdmin");
            const sizes = get_filter_choose(".oneSizeClick", "input[name='size']", mainColorBlock);
            if (mainPhoto && photos.length > 2 && title && text && color && price && brand && article && kategory && gender && sizes) {
               for (let i = 0; i < photos.length; i++) {
                  formData.append(`photos_${i}`, photos[i].file);
               }
               formData.append('mainPhoto', mainPhoto.file);
               formData.append('title', title);
               formData.append('text', text);
               formData.append('color', color);
               formData.append('price', price);
               formData.append('brand', brand);
               formData.append('article', article);
               formData.append('sizes', sizes.split(","));
               formData.append('kategory', kategory);
               formData.append('gender', gender);
   
               const newColorBlocks = document.querySelectorAll(".newColorBlock");
               if (newColorBlocks.length > 0) {
                  for (let i = 0; i < newColorBlocks.length; i++) {
                     let newColorBlock = newColorBlocks[i];
                     const mainPhoto = newColorBlock.querySelector("._ajaxMainPhoto");
                     const photos = newColorBlock.querySelectorAll("._ajaxPhotos");
                     const title = newColorBlock.querySelector("input[name='title']").value;
                     const color = get_filter_choose(".oldColors", "input[name='color']", newColorBlock);
                     const price = newColorBlock.querySelector("input[name='price']").value;
                     const article = newColorBlock.querySelector("input[name='article']").value;
                     const sizes = get_filter_choose(".oneSizeClick", "input[name='size']", newColorBlock);
   
                     if (mainPhoto && photos.length > 2 && title && color && price && article && sizes) {
                        for (let j = 0; j < photos.length; j++) {
                           formData.append(`${i}photos_${j}`, photos[j].file);
                        }
                        formData.append(`length`, newColorBlocks.length);
                        formData.append(`${i}mainPhoto`, mainPhoto.file);
                        formData.append(`${i}title`, title);
                        formData.append(`${i}color`, color);
                        formData.append(`${i}price`, price);
                        formData.append(`${i}article`, article);
                        formData.append(`${i}sizes`, sizes.split(","));
                     } else {
                        alert("заповніть все");
                        $("._ajaxAdminAddBtn").removeClass("ajaxAdminAddBtnActive");
                        return;
                     }
                  }
   
               }
               $("._ajaxAdminAddBtn").html(". . .");
               $.ajax({
                  url: 'insert.php',
                  method: 'POST',
                  data: formData,
                  processData: false,
                  contentType: false,
                  success: function (response) {
                     if (response === "true") {
                        $("._ajaxAdminAddBtn").html("додано");
                        $(".add__popap").show();
                     } else {
                        console.log(response);
                        alert("щось пішло не так");
                        $("._ajaxAdminAddBtn").removeClass("ajaxAdminAddBtnActive");
                     }
                  }
               });
            } else {
               alert("заповніть все")
               $("._ajaxAdminAddBtn").removeClass("ajaxAdminAddBtnActive");
            }
         }
      }
   }

   $("._ajaxAdminNewColorBtn").click(adminAddNewColor);
   function adminAddNewColor(event) {
      event.preventDefault();
      if(!$("._ajaxAdminNewColorBtn").hasClass("ajaxAdminNewColorBtnActive")){
         $("._ajaxAdminNewColorBtn").addClass("ajaxAdminNewColorBtnActive");
         const color = get_filter_chooseColor(".oldColors", "input[name='color']");
         const newColorBlock = document.querySelectorAll(".newColorBlock").length;
         if (color) {
            $.ajax({
               url: 'php/admin/adminAddNewColor.php',
               method: 'POST',
               data: { color: color, newColorBlock: newColorBlock },
               success: function (response) {
                  $("._ajaxAdminNewColorBtn").before(response);
                  oneSizeClick();
                  newColorActive();
                  oldColorActive();
                  newValueRemove();
                  oldValueRemove();
                  spoilerFlex();
                  removeInWrapper();
                  $("._ajaxAdminNewColorBtn").removeClass("ajaxAdminNewColorBtnActive");
               }
            });
         } else {
            alert("заповніть всі поля")
            $("._ajaxAdminNewColorBtn").removeClass("ajaxAdminNewColorBtnActive");
         }
      }
   }

   $("._ajaxAdminRemoveBtn").click(adminRemove);
   function adminRemove(event) {
      event.preventDefault();
      if($("._ajaxAdminRemoveBtn").closest(".toChoosePage").length){
         window.location.pathname = "/adminChoose.php"
      }else{
         $("._ajaxAdminRemoveBtn").html(". . .")
         const choose = Array.from(document.querySelectorAll(".remove__checkbox")).filter(element => {
            return element.checked === true;
         });
         const id = choose.map(element => {
            return element.id;
         });
         $.ajax({
            url: 'remove.php',
            method: 'POST',
            data: { id: id },
            success: function (response) {
               if (response === "true") {
                  const popapTitle = document.querySelector(".popapTitle");
                  popapTitle.innerHTML=`товар видалено!`;
                  $(".add__popap").addClass("toChoosePage");
                  $("._ajaxAdminRemoveBtn").html("до сторінки вибору");
               } else {
                  console.log(response);
                  alert("щось пішло не так")
                  $("._ajaxAdminRemoveBtn").html("повторити")
               }
            }
         });
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
   function get_filter_choose(arr, value, block) {
      const Inblock = block || document;
      const radios = Inblock.querySelectorAll(arr);
      const input = Inblock.querySelector(value);
      if (radios.length > 0 && input) {
         for (let radio of radios) {
            if (radio.checked) {
               return radio.dataset.value;
            }
         }
         if (input.closest(".add__section").classList.contains("_newColorActive")) {
            return input.value;
         }
      }
   }
   function get_filter_chooseColor(arr, value, block) {
      const array = []
      const Inblock = block || document;
      const radios = Inblock.querySelectorAll(arr);
      const input = Inblock.querySelectorAll(value);
      if (radios.length > 0 && input) {
         for (let radio of radios) {
            if (radio.checked) {
               array.push(radio.dataset.value);
            }
         }
         for(let inp of input){
            if (inp.closest("._newColorActive")) {
               array.push(inp.value);
            }
         }
      }
      return array;
   }
   function get_filter_text(text_id) {
      let filterData = [];
      $('.' + text_id + ':checked').each(function () {
         filterData.push(this.id);
      });
      return filterData;
   }
});



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
   if (sliders.length > 0) {
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
      if (!slider.classList.contains("_sliderThisActive")) {
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



function addPreview(element) {
   let files = Array.from(event.target.files);
   if (files.length === 0) return;

   for (let file of files) {
      if (!file.type.match('image')) return;
      if (element.name.includes("mainPhoto")) {
         mainPhotoUpload(element, file);
      } else if (element.name.includes("photos")) {
         otherPhotosUpload(element, file);
      }
   }

}
function mainPhotoUpload(element, file) {
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
function otherPhotosUpload(element, file) {
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
function removeInWrapper() {
   const addWrappers = document.querySelectorAll(".wrapperToRemove");
   if (addWrappers.length > 0) {
      for (let addWrapper of addWrappers) {
         if (!addWrapper.classList.contains("removeInWrapperActive")) {
            addWrapper.classList.add("removeInWrapperActive")
            addWrapper.addEventListener("click", event => {
               if (event.target.classList.contains('_removeImgUpload')) {
                  event.target.parentElement.remove();
                  if (addWrapper.classList.contains("mainWrapperRemove")) {
                     addWrapper.querySelector('label').style.display = '';
                  }
               }
            })
         }
      }
   }
}

//! ///---------------------\\\ !\\
document.addEventListener("click", event => {
   const popap = document.querySelector(".add__popap");
   if (popap && popap.style.display === "") {
      if (!event.target.closest(".add__popap") && !event.target.classList.contains("warningBtn")) {
         if(popap.classList.contains("toChoosePage")){
            window.location.pathname = "adminRemove.php"
         }else{
            popap.style.display = "none";
            const body = document.querySelector("body");
            const form = document.querySelector("form");
            body.style.overflow='';
            form.style.pointerEvents='';
         }
      }
   }
})
function newColorActive() {
   const newValues = document.querySelectorAll(".newValue");
   if (newValues.length > 0) {
      for (let newValue of newValues) {
         if (!newValue.classList.contains("_newValueActive")) {
            newValue.classList.add("_newValueActive")
            newValue.addEventListener("input", () => {
               if (newValue.value.length > 0) {
                  newValue.closest(".add__section").classList.add("_newColorActive")
                  if (newValue.dataset.old) document.querySelector(newValue.dataset.old).classList.remove("_sliderRun");
               } else {
                  newValue.closest(".add__section").classList.remove("_newColorActive")
                  if (newValue.dataset.old) document.querySelector(newValue.dataset.old).classList.add("_sliderRun")
               }
            })
         }
      }
   }
}
function oldColorActive() {
   const oldValues = document.querySelectorAll(".oldChoose");
   if (oldValues.length > 0) {
      for (let oldValue of oldValues) {
         if (!oldValue.classList.contains("_oldValueActive")) {
            oldValue.classList.add("_oldValueActive");
            oldValue.addEventListener("click", (event) => {
               if (event.target.classList.contains("add__label")) {
                  oldValue.closest(".add__section").classList.add("_oldColorActive");
               }
            })
         }
      }
   }
}
function newValueRemove() {
   const removes = document.querySelectorAll(".newValueRemove");
   if (removes.length > 0) {
      for (let remove of removes) {
         if (!remove.classList.contains("_newValueRemoveActive")) {
            remove.classList.add("_newValueRemoveActive");
            remove.addEventListener("click", () => {
               if (remove.closest('.add__section').classList.contains("_newColorActive")) {
                  if (remove.previousElementSibling.name === "color") {
                     remove.previousElementSibling.value = '#ffffff';
                  } else {
                     remove.previousElementSibling.value = '';
                  }
                  remove.closest('.add__section').classList.remove("_newColorActive")
                  if (remove.previousElementSibling.dataset.old) document.querySelector(remove.previousElementSibling.dataset.old).classList.add("_sliderRun");
               }
            })
         }
      }
   }
}
function oldValueRemove() {
   const removes = document.querySelectorAll(".oldValueRemove");
   if (removes.length > 0) {
      for (let remove of removes) {
         if (!remove.classList.contains("_oldValueRemoveActive")) {
            remove.classList.add("_oldValueRemoveActive");
            remove.addEventListener("click", () => {
               if (remove.closest('.add__section').classList.contains("_oldColorActive")) {
                  remove.closest('.add__section').classList.remove("_oldColorActive")
                  for (let item of document.querySelectorAll(remove.dataset.remove)) {
                     if (item.checked) {
                        item.checked = false;
                     }
                  }
               }
            })
         }
      }
   }
}
function oneSizeClick() {
   const elements = document.querySelectorAll(".oneSizeClick");
   if (elements.length > 0) {
      for (let element of elements) {
         if (!element.classList.contains("_oneSizeClickActive")) {
            element.classList.add("_oneSizeClickActive")
            element.addEventListener("click", () => {
               if (element.checked) {
                  element.closest(".add__section").classList.add("_oneSizeActive");
               }
               else {
                  element.closest(".add__section").classList.remove("_oneSizeActive");
               }
            })
         }
      }
   }
}

function popapClickAdminAdd() {
   if (event.target.classList.contains("popapNew")) {
      window.location.pathname = "/adminAdd.php";
   } else if (event.target.classList.contains("popapChoose")) {
      window.location.pathname = "/adminChoose.php";
   }
}
function chooseCheckboxClick() {
   if (event.target.classList.contains("remove__checkbox")) return;
   const parrent = event.target.closest(".remove__row");
   if (parrent) {
      const parrentInput = parrent.querySelector("input[type='checkbox']");
      if (parrentInput.checked === true) parrentInput.checked = false;
      else if (parrentInput.checked === false) parrentInput.checked = true;
   }
}
function warningShowRemove() {
   event.preventDefault();
   const choose = Array.from(document.querySelectorAll(".remove__checkbox")).filter(element => {
      return element.checked === true;
   });
   if (choose.length > 0) {
      const popap = document.querySelector(".add__popap");
      const popapTitle = popap.querySelector(".popapTitle");
      popapTitle.innerHTML=`видалити (${choose.length}) товари`;
      popap.style.display = "";
      const body = document.querySelector("body");
      const form = document.querySelector("form");
      body.style.overflow='hidden';
      form.style.pointerEvents='none';
   } else {
      return alert("виберіть товар")
   }
}
function popapRemoveAdmin(){
   const popap = document.querySelector(".add__popap");
   if(popap.classList.contains("toChoosePage")){
      window.location.pathname="adminRemove.php"
   }else{
      popap.style.display = "none";
      const body = document.querySelector("body");
      const form = document.querySelector("form");
      body.style.overflow='';
      form.style.pointerEvents='';
   }
}
spoilerFlex();
removeInWrapper();
newColorActive();
oldColorActive();
newValueRemove();
oldValueRemove();
oneSizeClick();
