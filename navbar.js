const navBar = document.getElementById("navbar");
const logo = document.getElementById("logo");
const navBtn = document.getElementById("nav-button");

navBtn.addEventListener("click", () => {
  navBar.classList.toggle("hidden");
  logo.classList.toggle("hidden");
});
