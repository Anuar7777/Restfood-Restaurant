const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

let burger = document.querySelector(".header__burger");

function openMenu() {
  burger.classList.add("header__burger--opened");
}

function closeMenu() {
  burger.classList.remove("header__burger--opened");
}
