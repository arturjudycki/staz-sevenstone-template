const triangleBurger = document.querySelector(".menu__sidebar-triangle-down");
const menu = document.querySelector(".menu__list");

const ratesBtn = document.querySelector(".menu__item-text-live");
const ratesSection = document.querySelector(".interest-rates--menu");
const ratesBackBtn = document.querySelector(".interest-rates__btn");
// sidebar menu

triangleBurger.addEventListener("click", function () {
  if (
    !triangleBurger.classList.contains(
      "menu__sidebar-triangle-down--rotateRight"
    )
  ) {
    triangleBurger.classList.toggle("menu__sidebar-triangle-down--rotateUp");
    menu.classList.toggle("menu__list--display");
  }
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

ratesBtn.addEventListener("click", function () {
  triangleBurger.classList.toggle("menu__sidebar-triangle-down--rotateRight");
  menu.classList.remove("menu__list--display");
  ratesSection.classList.toggle("interest-rates--displayFlex");
});

ratesBackBtn.addEventListener("click", function () {
  triangleBurger.classList.remove("menu__sidebar-triangle-down--rotateRight");
  menu.classList.add("menu__list--display");
  ratesSection.classList.toggle("interest-rates--displayFlex");
});

window.addEventListener("resize", function () {
  if (
    window.innerWidth > 860 &&
    triangleBurger.classList.contains(
      "menu__sidebar-triangle-down--rotateRight"
    )
  ) {
    triangleBurger.classList.remove("menu__sidebar-triangle-down--rotateRight");
    triangleBurger.classList.remove("menu__sidebar-triangle-down--rotateUp");
    ratesSection.classList.remove("interest-rates--displayFlex");
  }
});

//open drop down - leadership page

//filter open - transactions page

//animation on scroll
