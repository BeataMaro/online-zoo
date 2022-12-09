const body = document.body;
const pagePath = window.location.pathname;
const navigationLinks = document.querySelectorAll(".nav-item");

const mobile = 320;
const tablet = 640;
const smallDesktop = 1000;
const desktop = 1600;

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
  next = document.getElementById("next-pet"),
  cards = document.getElementsByClassName("animal-card");

const shuffleCards = (min, max) => {
  let order = Math.random() * (max - min) + min;
  return Math.floor(order);
};

console.log(shuffleCards(1, cards.length));

let windowWidth = window.innerWidth;
const gap = windowWidth < 640 ? 20 : windowWidth >= 640 ? 30 : 30;
let width = carousel.offsetWidth;
console.log(width);

next.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();

  const animationTablet = () => console.log("Tablet");

  const animationDesktop = () => {
    for (let card of cards) {
      let o = shuffleCards(1, cards.length);
      card.style.order = o;
    }
    carousel.scrollBy(width + gap, 0);
    // console.log(
    //   `Width: ${width}, gap: ${gap}, carousel.scrollLeft: ${carousel.scrollLeft}`
    // );
  };

  if (carousel.scrollWidth !== 0) {
    prev.disabled = false;
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.disabled = true;
  }
  console.log(
    `Width: ${width}, gap: ${gap}, carousel.scrollLeft: ${carousel.scrollLeft}, content.scrollWidth: ${content.scrollWidth}, carousel.scrollWidth: ${carousel.scrollWidth}`
  );

  if (window.matchMedia(`(min-width: ${smallDesktop}px)`).matches) {
    animationDesktop();
  } else {
    animationTablet();
  }
});

prev.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();

  const animationTablet = () => console.log("Tablet");

  const animationDesktop = () => {
    for (let card of cards) {
      let o = shuffleCards(1, cards.length);
      card.style.order = o;
    }
    carousel.scrollBy(-(width + gap), 0);
    console.log(
      `Width: ${width}, gap: ${gap}, carousel.scrollLeft: ${carousel.scrollLeft}`
    );
    if (carousel.scrollLeft - width - gap <= 0) {
      prev.disabled = true;
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.disabled = false;
    }
  };

  if (window.matchMedia(`(min-width: ${smallDesktop}px)`).matches) {
    animationDesktop();
  } else {
    animationTablet();
  }
});

window.addEventListener("resize", (e) => {
  width = carousel.offsetWidth;
  windowWidth = e.target.innerWidth;
});

//*******//

const askReviewerForAPatience = () =>
  alert(
    "Online-zoo JS features (week 4) will be done in 2 days. Thank you for patience :)"
  );

window.onload = askReviewerForAPatience;
