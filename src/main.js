"use strict";

const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

const home = document.querySelector(".home");
const homeHeight = home.offsetHeight;
const arrow_up = document.querySelector(".arrow-up");

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;

  if (window.scrollY > homeHeight / 2) {
    arrow_up.style.opacity = 1;
    arrow_up.classList.remove("arrow_stop");
  } else {
    arrow_up.style.opacity = 0;
    arrow_up.classList.add("arrow_stop");
  }
});

const NavbarMenu = document.querySelector(".header__menu");
const navbarToggle = document.querySelector(".Mobile_menu_toggle");

navbarToggle.addEventListener("click", () => {
  NavbarMenu.classList.toggle("open");
});
NavbarMenu.addEventListener("click", () => {
  NavbarMenu.classList.toggle("open");
});
