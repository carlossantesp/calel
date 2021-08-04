const menuBtn = document.querySelector(".menu__btn");
const navbarMenu = document.querySelector(".header__menu");

menuBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});
