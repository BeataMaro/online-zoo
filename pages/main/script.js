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




//*******//

const askReviewerForAPatience = () => alert("Online-zoo JS features (week 4) will be done in 5 days. Thank you for patience :)")

window.onload = askReviewerForAPatience;