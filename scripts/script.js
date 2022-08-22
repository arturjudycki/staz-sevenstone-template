// sidebar menu

const triangleBurger = document.querySelector(".menu__sidebar-triangle-down");
const menu = document.querySelector(".menu__list");

triangleBurger.addEventListener("click", function () {
  triangleBurger.classList.toggle("menu__sidebar-triangle-down--rotateUp");
  menu.classList.toggle("menu__list--display");
});

window.addEventListener("resize", function () {
  if (
    window.innerWidth > 860 &&
    menu.classList.contains("menu__list--display")
  ) {
    triangleBurger.classList.remove("menu__sidebar-triangle-down--rotateUp");
    menu.classList.remove("menu__list--display");
  }
});

//sidebar live rates

const ratesBtn = document.querySelector(".menu__item-text-live");

ratesBtn.addEventListener("click", function () {
  triangleBurger.classList.toggle("menu__sidebar-triangle-down--rotateRight");
});

window.addEventListener("resize", function () {
  if (
    window.innerWidth > 860 &&
    triangleBurger.classList.contains(
      "menu__sidebar-triangle-down--rotateRight"
    )
  ) {
    triangleBurger.classList.remove("menu__sidebar-triangle-down--rotateRight");
  }
});
