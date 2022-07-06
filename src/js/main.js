const hamburger = document.querySelector(".header__hamburger");
const list = document.querySelector(".header__list");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  list.classList.toggle("active");
});
