// ! Second Page
// ? Clicking to grid and block buttons
let gridBtn = document.querySelector(".grid-btn");
let BlockBtn = document.querySelector(".block-btn");
let ulGrid = document.querySelector(".ul-grid1");

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

