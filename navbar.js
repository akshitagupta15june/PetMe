const navBar = document.getElementById("navbar");
const logo = document.getElementById("logo");
const navBtn = document.getElementById("nav-button");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

let prevScrollPos = window.pageYOffset;
let isNavExpanded = false;

navBtn.addEventListener("click", () => {
  isNavExpanded = !isNavExpanded;
  navBar.classList.toggle("hidden");
  logo.classList.toggle("hidden");
  navBtn.setAttribute("aria-expanded", isNavExpanded);

  // Toggle between hamburger and X icons
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

window.onscroll = function () {
  myFunction();
  let currentScrollPos = window.pageYOffset;
  toggleNavBar(currentScrollPos > prevScrollPos, currentScrollPos);
};

var header = document.getElementById("header");

function myFunction() {
  if (window.pageYOffset > 10) {
    header.classList.add("add_border");
  } else {
    header.classList.remove("add_border");
  }
}

function toggleNavBar(scrollDir, currPos) {
  prevScrollPos = currPos;
  if (scrollDir) {
    header.classList.add("nav-hidden");
  } else {
    header.classList.remove("nav-hidden");
  }
}
