const hamburger = document.querySelector(".header__hamburger");
const list = document.querySelector(".header__list");
const logo = document.querySelector(".header__logo");
const line = document.querySelectorAll(".header__hamburger-line");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  list.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  if (this.scrollY > 600) {
    logo.classList.add("scroll");
    line.forEach((line) => {
      line.classList.add("scroll");
    });
  } else {
    logo.classList.remove("scroll");
    line.forEach((line) => {
      line.classList.remove("scroll");
    });
  }
});
