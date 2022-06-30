const rate = document.querySelector(".rate");
const moreRate = document.querySelector(".more-rate");

const langChange = document.querySelector(".language-flex");
const moreLanguage = document.querySelector(".more-lang");

const menuBtn = document.querySelector(".menu");
const menuA = document.querySelector(".menu a");
const menuModal = document.querySelector(".menu-modal-grid");

const menuModalBack = document.querySelector(".menu-modal-back");

const toggleMenu = document.querySelector(".toggle-menu");
const nav = document.querySelector(".nav");


// ?Swiper Js
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
});

// ?Language onclick
langChange.addEventListener("click", () => {
  moreLanguage.classList.toggle("more-lang-open");
  menuModalBack.classList.add("menu-modal-back-show");
});

// ?Rate onclick
rate.addEventListener("click", () => {
  moreRate.classList.toggle("more-rate-show");
  menuModalBack.classList.add("menu-modal-back-show");
});

// ?Menu onclick
menuBtn.addEventListener("click", () => {
  menuA.classList.toggle("active");
  menuModal.classList.toggle("menu-modal-grid-show");
  menuModalBack.classList.add("menu-modal-back-show");
});

// ? ModalBack onclick
menuModalBack.addEventListener("click", () => {
  moreLanguage.classList.remove("more-lang-open");
  moreRate.classList.remove("more-rate-show");
  menuModalBack.classList.remove("menu-modal-back-show");
  menuModal.classList.remove("menu-modal-grid-show");
  menuA.classList.remove("active");
  nav.classList.remove("nav-show")

});


// ? Filter Buttons
const filterContainer = document.querySelector(".seller-btns-filter"),
  filterBtns = filterContainer.children,
  totalFilterBtn = filterBtns.length;

(portfolioItems = document.querySelectorAll(".ul-grid li")),
  (totalPortfolioItem = portfolioItems.length);

for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener("click", function () {
    filterContainer.querySelector(".active1").classList.remove("active1");
    this.classList.add("active1");

    const filterValue = this.getAttribute("date-filter");
    for (let k = 0; k < totalPortfolioItem; k++) {
      if (filterValue === portfolioItems[k].getAttribute("data-category")) {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      } else {
        portfolioItems[k].classList.remove("show");
        portfolioItems[k].classList.add("hide");
      }
      if (filterValue === "all") {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      }
    }
  });
}

// ? Toggle Menu
toggleMenu.addEventListener("click", () => {
  nav.classList.toggle("nav-show")
  menuModalBack.classList.add("menu-modal-back-show");

})





