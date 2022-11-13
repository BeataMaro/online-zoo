const pagePath = window.location.pathname;
const navigationLinks = document.querySelectorAll(".nav-item");

navigationLinks.forEach((link) => {
  if (link.href.includes(`${pagePath}`)) {
    link.classList.add("active");
  }
});

