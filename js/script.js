const menuIcon = document.querySelector(".header__menu-icon");
const menuLink = document.querySelectorAll(".menu__section");
const menu = document.querySelector(".menu");
const body = document.body;

const hiBlock = document.querySelector(".tablet");

const topArrow = document.querySelector(".top-arr");
window.addEventListener("scroll", function (e) {
   if (hiBlock.getBoundingClientRect().top <= 0)  {
      console.log(hiBlock.getBoundingClientRect().top);
      if(!(topArrow.classList.contains("_active-top"))) {
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
