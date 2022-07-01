const containerForMove = document.querySelector(".container-for-move");
const imgsForMove = document.querySelectorAll(".imgs-click img");

const minusBtn = document.querySelector(".minus-btn")
const countNum = document.querySelector(".count-num")
const plusBtn = document.querySelector(".plus-btn")

const mainPrice = document.querySelector(".main-price")
const secondPr = document.querySelector(".second-pr")

const ProdBtn = document.querySelector(".inf-button")
const RevBtn = document.querySelector(".rev-button")
const AnotherBtn = document.querySelector(".another-button")

const desc1 = document.querySelector(".desc1")
const desc2 = document.querySelector(".desc2")
const desc3 = document.querySelector(".desc3")






// ? Left Img Slider
imgsForMove.forEach((item, index) => {
  item.addEventListener("click", () => {
    containerForMove.style.transform = `translateX(${-index * 375}px)`;
    imgsForMove.forEach((element) => {
      element.classList.remove("active-img");
    });
    item.classList.add("active-img");
  });
});

// ?Plus and Minus Btn onclick and Plus Counter
plusBtn.addEventListener("click", () => {
  countNum.innerHTML++
  mainPrice.innerHTML = "$" + countNum.innerHTML * 299.43
  secondPr.innerHTML = "$" + countNum.innerHTML * 534.33.toFixed(2)
})

minusBtn.addEventListener("click", () => {
  if (countNum.innerHTML> 1) {
  countNum.innerHTML--
  mainPrice.innerHTML = "$" + countNum.innerHTML * 299.43
  secondPr.innerHTML = "$" + countNum.innerHTML * 534.33.toFixed(2)
  }
  
})


// ?Swiper Js2
new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: true,

  // If we need pagination
  pagination: {
    el: '.pag2',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// ?Product buttons sort
RevBtn.addEventListener("click", () => {
  desc2.classList.remove("de2")
  desc1.classList.add("de2")
  desc3.classList.add("de2")
  RevBtn.classList.add("info-active")
  ProdBtn.classList.remove("info-active")
  AnotherBtn.classList.remove("info-active")

})

AnotherBtn.addEventListener("click", () => {
  desc1.classList.add("de2")
  desc3.classList.remove("de2")
  desc2.classList.add("de2")
  RevBtn.classList.remove("info-active")
  ProdBtn.classList.remove("info-active")
  AnotherBtn.classList.add("info-active")
})

ProdBtn.addEventListener("click", () => {
  desc1.classList.remove("de2")
  desc3.classList.add("de2")
  desc2.classList.add("de2")
  RevBtn.classList.remove("info-active")
  ProdBtn.classList.add("info-active")
  AnotherBtn.classList.remove("info-active")
})




