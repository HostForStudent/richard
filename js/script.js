const menuIcon = document.querySelector(".header__menu-icon");
const menuLink = document.querySelectorAll(".menu__section");
const menu = document.querySelector(".menu");
const body = document.body;

const hiBlock = document.querySelector(".tablet");

const topArrow = document.querySelector("._arrow-top");
window.addEventListener("scroll", function (e) {
   if (hiBlock.getBoundingClientRect().top <= 0) {
      if (!(topArrow.classList.contains("_active-top"))) {
         topArrow.classList.add("_active-top");
      }
   } else {
      console.log(hiBlock.getBoundingClientRect().top);
      topArrow.classList.remove("_active-top");
   }
})
// menu burger
if (innerWidth <= 767) {
   if (menuIcon) {
      menuIcon.addEventListener("click", function (e) {
         menuIcon.classList.toggle("_active");
         menu.classList.toggle("_open");
         body.classList.toggle("_lock");
         linkClickFunc();
      })
   }
}

function linkClickFunc() {
   if (menuIcon.classList.contains("_active")) {
      for (let index = 0; index < menuLink.length; index++) {
         const link = menuLink[index];
         link.addEventListener("click", (e) => {
            menuIcon.classList.remove("_active");
            menu.classList.remove("_open");
            body.classList.remove("_lock");
         })
      }
   }
}
// scrol
scrollLinks = document.querySelectorAll("[data-goto]");
if (scrollLinks.length > 0) {
   for (let index = 0; index < scrollLinks.length; index++) {
      const element = scrollLinks[index];
      element.addEventListener("click", gotoFunc)
   }
}
function gotoFunc(e) {
   const link = e.target;
   if (link.dataset.goto && document.querySelectorAll(link.dataset.goto)) {
      const section = document.querySelector(link.dataset.goto);
      const gotoValue = section.getBoundingClientRect().top + window.pageYOffset - document.querySelector(".header").getBoundingClientRect().bottom;
      window.scrollTo({
         top: gotoValue,
         behavior: "smooth",
      });
   }
   e.preventDefault();
}

// is mobil?
let isMobile = {
   Android: function () { return navigator.userAgent.match(/Android/i); },
   BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
   iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
   Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
   Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
   any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); },
};
if (isMobile.any()) {
   body.classList.add("_touch");
} else {
   body.classList.add("_pc");
}
// swiper
new Swiper('.swiper', {
   //булеты,текушая положения,прогресбар
   pagination: {
      el: ".swiper-pagination",
      //булеты
      clickable: true,
   },
});

//popup
const popupButtons = document.querySelectorAll("[data-popup]");
if (popupButtons.length > 0) {
   for (let index = 0; index < popupButtons.length; index++) {
      const buttonOpen = popupButtons[index];
      buttonOpen.addEventListener("click", function (e) {
         if (buttonOpen.dataset.popup && document.querySelector(buttonOpen.dataset.popup)) {
            addActivePopup(buttonOpen);
         }
         e.preventDefault();
      })
   }
}
function addActivePopup(buttonOpen) {
   const popupBlock = document.querySelector(buttonOpen.dataset.popup);
   popupBlock.classList.add('_active');
   scrolLOck();
   addEventForExitPopup();
}
function addEventForExitPopup() {
   const exitsPopup = document.querySelectorAll('._exit-popup');
   if (exitsPopup.length > 0) {
      exitsPopup.forEach((item, index, array) => {
         const exitBtn = item;
         exitBtn.addEventListener("click", function () {
            const popupBlock = document.querySelector(exitBtn.dataset.exit);
            popupBlock.classList.remove('_active');
            scrolUnLOck()
         })
      })
   }
}

// scroll lock
const paddingLockBlocks = document.querySelectorAll('._padding-lock');
function scrolLOck() {
   const valuePadding = window.innerWidth - document.documentElement.clientWidth + 'px';
   if (paddingLockBlocks.length > 0) {
      for (let index = 0; index < paddingLockBlocks.length; index++) {
         const block = paddingLockBlocks[index];
         block.style.paddingRight = valuePadding;
      }
   }
   console.log(valuePadding);
   body.style.paddingRight = valuePadding;
   body.classList.add("_lock");
}

function scrolUnLOck() {
   setTimeout(() => {
      if (paddingLockBlocks.length > 0) {
         for (let index = 0; index < paddingLockBlocks.length; index++) {
            const block = paddingLockBlocks[index];
            block.style.paddingRight = 0;
         }
      }
      body.style.paddingRight = 0;
      body.classList.remove("_lock");
   }, 800);
}