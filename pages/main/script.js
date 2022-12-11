
let fragment = new DocumentFragment();
const body = document.body;
const pagePath = window.location.pathname;
const main = document.querySelector("main");
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

let windowWidth = window.innerWidth;
const gap = windowWidth < 640 ? 20 : windowWidth >= 640 ? 30 : 30;
let width = carousel.offsetWidth;

next.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();

  const animationTablet = () => carousel.scrollBy(width, 0);

  const animationDesktop = async () => {
    for (let card of cards) {
      let o = await shuffleCards(1, cards.length);
      card.style.order = o;
    }
    carousel.scrollBy(width + gap, 0);
  };

  console.log(
    `Width: ${width}, gap: ${gap}, carousel.offsetWidth: ${carousel.offsetWidth} carousel.scrollLeft: ${carousel.scrollLeft}, content.scrollWidth: ${content.scrollWidth}, carousel.scrollWidth: ${carousel.scrollWidth}`
  );

  if (window.matchMedia(`(min-width: ${tablet}px)`).matches) {
    animationDesktop();
  } else {
    animationTablet();
  }
});

prev.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();

  const animationTablet = async () => {
    for (let card of cards) {
      let o = shuffleCards(1, cards.length);
      card.style.order = o;
    }
    let flipped = await carousel.scrollBy(-width, 0);
  };
  const animationDesktop = async () => {
    for (let card of cards) {
      let o = shuffleCards(1, cards.length);
      card.style.order = o;
    }
    let flip = await carousel.scrollBy(-(width + gap), 0);
    console.log(
      `Width: ${width}, gap: ${gap}, carousel.scrollLeft: ${carousel.scrollLeft}`
    );
  };

  if (window.matchMedia(`(min-width: ${tablet}px)`).matches) {
    animationDesktop();
  } else {
    animationTablet();
  }
});

window.addEventListener("resize", (e) => {
  width = carousel.offsetWidth;
  windowWidth = e.target.innerWidth;
});

// Testimonials

//Testimonials carousel

const testimonialsBar = document.getElementById("testimonials-bar");
const testimonialsArticles = document.querySelector(".testimonials-articles");
const testimonialsCards = document.querySelectorAll(".testimonial-card");
let clonedTestimonialsCardsPartOne = [];
let clonedTestimonialsCardsPartTwo = [];
const newFragment = new DocumentFragment();

for (let card of testimonialsCards) {
  clonedTestimonialsCardsPartOne = [...clonedTestimonialsCardsPartOne, card.cloneNode(true)];
  clonedTestimonialsCardsPartTwo = [...clonedTestimonialsCardsPartTwo, card.cloneNode(true)];
}
const cloneTestimonials = () => {
  clonedTestimonialsCardsPartOne.map((card, id) => {
    card.id = `testimonial-${id + 5}`;
    card.classList.add("desktop");
    newFragment.append(card);
  });
};
const cloneMoreTestimonials = () => {
  clonedTestimonialsCardsPartTwo.map((card, id) => {
    card.id = `testimonial-${id + 9}`;
    card.classList.add("desktop");
    newFragment.append(card);
  });
};

cloneTestimonials()
cloneMoreTestimonials()

testimonialsArticles.append(newFragment);

// Range bar
testimonialsBar.addEventListener("change", (e) => console.log(e.target.value));


const testimonialsGap = 15;

const testimonialsCarousel = document.getElementById("testimonials-carousel"),
  testimonialsArt = document.getElementById("testimonials-articles");
  artWidth = windowWidth >= 1600 ? 293 : windowWidth < 1600 ? 266 : 266;

  window.addEventListener("load", () => {
    console.log("scrollBy")
    testimonialsCarousel.scrollBy((artWidth * 2 + testimonialsGap), 0);
  })

testimonialsBar.addEventListener("change", e => {
if (e.target.value >= 3) {
  testimonialsCarousel.scrollBy(artWidth, 0);
  console.log(artWidth + testimonialsGap)
}
});
testimonialsBar.addEventListener("change", e => {
  if (e.target.value <= 3) {
  testimonialsCarousel.scrollBy(-(artWidth), 0);
  }
});

window.addEventListener("resize", e => (artWidth = windowWidth >= 1600 ? 293 : windowWidth < 1600 ? 266 : 266));

//Testimonials popup

const newTestimonials = document.getElementsByClassName("testimonial-card")

const closePopup = () => {
  const popup = document.getElementById("clicked-testimonial");
  const cross = document.getElementById("closeModal");
  popup.remove(main);
  cross.remove(main);
  body.classList.remove("darkened");
};

const cloneTestimonial = (e) => {
  const clickedTestimonial =
    document.getElementById(e.target.parentElement.id) ||
    document.getElementById(e.target.id);
  let testimonialPopup = clickedTestimonial.cloneNode(true);
  const cross = document.createElement("button");
  cross.textContent = "x";
  cross.id = "closeModal";
  cross.className = "close-modal";
  testimonialPopup.id = "clicked-testimonial";
  testimonialPopup.classList.add("clicked-testimonial");
  fragment.appendChild(testimonialPopup);
  fragment.appendChild(cross);
  main.append(fragment);
  body.classList.add("darkened");

  const crossBtn = document.getElementById("closeModal");
  crossBtn.addEventListener("click", closePopup);
  const overlay = document.getElementById("overlay");
  overlay.addEventListener("click", closePopup);
};

if (window.matchMedia(`(max-width: ${tablet}px)`).matches) {
  for (let testimonialcard of newTestimonials) {
    testimonialcard.addEventListener("click", cloneTestimonial);
  }
}

//*******//

const askReviewerForAPatience = () =>
  alert(
    "Online-zoo JS features (week 4) will be done tonight. Thank you for patience :)"
  );

window.onload = askReviewerForAPatience;
