const navBar = document.getElementById("navbar");
const logo = document.getElementById("logo");
const navBtn = document.getElementById("nav-button");

navBtn.addEventListener("click", () => {
  navBar.classList.toggle("hidden");
  logo.classList.toggle("hidden");
});

window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
// var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > 10) {
    header.classList.add("add_border");
  }
  else {  
    header.classList.remove("add_border");
  }
}