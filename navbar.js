var navBar = document.getElementById("navbar");
const logo = document.getElementById("logo");
const navBtn = document.getElementById("nav-button");

let prevScrollPos =  window.pageYOffset

navBtn.addEventListener("click", () => {
  navBar.classList.toggle("hidden");
  logo.classList.toggle("hidden");
});

window.onscroll = function() {
	myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) { 
    navbar.classList.add("sticky");
  }
  else {  
    header.classList.remove("sticky");
  }
}
function toggleNavBar(scrollDir, currPos){
	prevScrollPos=currPos
	if(scrollDir){
		header.classList.add('nav-hidden')
	}
	else{
		header.classList.remove('nav-hidden')
	}
}
