const mobileNavMenu = document.querySelector(".mobile-nav-menu");
const mobileNavButton = document.querySelector(".mobile-nav__button");
const mobuleNavButtonClose = document.querySelector(
  ".mobile-nav-menu__button--close"
);

mobileNavButton.onclick = () => mobileNavMenu.classList.add("active");
mobuleNavButtonClose.onclick = () => mobileNavMenu.classList.remove("active");