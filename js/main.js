// Menu Open Close
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
};

// Swiper
var swiper = new Swiper(".services-content", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 50000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

var swiper2 = new Swiper(".services-content2", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 50000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
      },
    });

// Header
let header = document.querySelector('header');

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

// Loader
onload = () => {
  const load = document.getElementById("loader");
  setTimeout(() => {
    load.style.display = 'none';
  }, 2500);
};