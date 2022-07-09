const hamburger = document.querySelector(".header__hamburger");
const list = document.querySelector(".header__nav");
const logo = document.querySelector(".header__logo");
const line = document.querySelectorAll(".header__hamburger-line");
const img = document.querySelector(".about__left-img");
const link = document.querySelectorAll(".header__list-link");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  list.classList.toggle("active");
});

link.forEach((link) => {
  link.addEventListener("click", function () {
    hamburger.classList.remove("active");
    list.classList.remove("active");
  });
});

window.addEventListener("scroll", function () {
  if (this.scrollY > 700) {
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

const img01 = document.querySelector(".about__right-imgsml01");
const img02 = document.querySelector(".about__right-imgsml02");
const imglar = document.querySelector(".about__right-imglar");
const text01 = document.querySelector(".text01");
const text02 = document.querySelector(".text02");
const text03 = document.querySelector(".text03");
window.addEventListener("scroll", function () {
  if (this.scrollY > 750) {
    img.classList.add("fadein");
    img01.classList.add("fadein");
    img02.classList.add("fadein");
    imglar.classList.add("fadein");
    text01.classList.add("fadein");
    text02.classList.add("fadein");
    text03.classList.add("fadein");
  } else {
    img.classList.remove("fadein");
    img01.classList.remove("fadein");
    img02.classList.remove("fadein");
    imglar.classList.remove("fadein");
    text01.classList.remove("fadein");
    text02.classList.remove("fadein");
    text03.classList.remove("fadein");
  }
});
