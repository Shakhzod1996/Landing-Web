// ! Second Page
// ? Clicking to grid and block buttons
let gridBtn = document.querySelector(".grid-btn");
let BlockBtn = document.querySelector(".block-btn");
let ulGrid = document.querySelector(".ul-grid1");

const menuModalBack = document.querySelector(".menu-modal-back");

const toggleMenu = document.querySelector(".toggle-menu");
const nav = document.querySelector(".nav");

BlockBtn.addEventListener("click", () => {
  ulGrid.classList.add("ul-block");
  BlockBtn.classList.add("active-i")
  gridBtn.classList.remove("active-i")

});

gridBtn.addEventListener("click", () => {
  ulGrid.classList.remove("ul-block");
  BlockBtn.classList.remove("active-i")
  gridBtn.classList.add("active-i")
});

// ? ModalBack onclick
menuModalBack.addEventListener("click", () => {
  nav.classList.remove("nav-show")
  menuModalBack.classList.remove("menu-modal-back-show");
  

})

// ? Toggle Menu
toggleMenu.addEventListener("click", () => {
  nav.classList.toggle("nav-show")
  menuModalBack.classList.add("menu-modal-back-show");

})