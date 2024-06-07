const navBar = document.getElementById("navbar");
const logo = document.getElementById("logo");
const navBtn = document.getElementById("nav-button");
const header = document.getElementById("header");

let prevScrollPos = window.pageYOffset;

navBtn.addEventListener("click", () => {
  navBar.classList.toggle("hidden");
  logo.classList.toggle("hidden");
});

window.onscroll = () => {
  handleScroll();
};

function handleScroll() {
  const currentScrollPos = window.pageYOffset;
  toggleHeaderVisibility(currentScrollPos > prevScrollPos, currentScrollPos);
  prevScrollPos = currentScrollPos;

  if (window.pageYOffset > 10) {
    header.classList.add("add_border");
  } else {
    header.classList.remove("add_border");
  }
}

function toggleHeaderVisibility(isScrollingDown, currentScrollPos) {
  if (isScrollingDown) {
    header.classList.add("nav-hidden");
  } else {
    header.classList.remove("nav-hidden");
  }
}
