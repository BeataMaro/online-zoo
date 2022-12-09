const body = document.body;
const pagePath = window.location.pathname;
const navigationLinks = document.querySelectorAll(".nav-item");

navigationLinks.forEach((link) => {
  if (link.href.includes(`${pagePath}`)) {
    link.classList.add("active");
  }
});

const openMenu = () => body.classList.toggle("open");

const hamburgerMenu = document.getElementById("hamburger-menu");

hamburgerMenu.addEventListener("click", openMenu);

window.addEventListener("click", (e) => {
  if (document.getElementById("navigation").contains(e.target)) {
    return;
  } else {
    body.classList.remove("open");
  }
});
//Carousel Pets

const carousel = document.getElementById("pets-content"),
  content = document.getElementById("corousel-pets-wrapper"),
  prev = document.getElementById("prev-pet"),
  next = document.getElementById("next-pet");
const gap = 30;
let width = carousel.offsetWidth;

next.addEventListener("click", (e) => {
  carousel.scrollBy(width + gap, 0);

  if (carousel.scrollWidth !== 0) {
    prev.disabled = false;
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.disabled = true;
  }
});
prev.addEventListener("click", (e) => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.disabled = true;
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.disabled = false;
  }
});

window.addEventListener("resize", (e) => (width = carousel.offsetWidth));

//*******//

const askReviewerForAPatience = () =>
  alert(
    "Online-zoo JS features (week 4) will be done in 2 days. Thank you for patience :)"
  );

window.onload = askReviewerForAPatience;
