const navBar = document.getElementById("navbar");
const logo = document.getElementById("logo");
const navBtn = document.getElementById("nav-button");

// Get the nav-button and the span element
const menuSpan = navBtn.querySelector('.material-symbols-outlined');

// Add an event listener to the nav-button
navBtn.addEventListener('click', () => {
  // Check the current text content of the span element
  if (menuSpan.textContent === 'close') {
    // Change the text content to 'close'
    menuSpan.textContent = 'menu';
  } else {
    // Change the text content back to 'menu'
    menuSpan.textContent = 'close';
  }
});

let prevScrollPos =  window.pageYOffset

navBtn.addEventListener("click", () => {
  navBar.classList.toggle("hidden");
  logo.classList.toggle("hidden");
});

window.onscroll = function() {
	myFunction()
	let currentScrollPos =  window.pageYOffset
	toggleNavBar(currentScrollPos > prevScrollPos, currentScrollPos)
};

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
function toggleNavBar(scrollDir, currPos){
	prevScrollPos=currPos
	if(scrollDir){
		header.classList.add('nav-hidden')
	}
	else{
		header.classList.remove('nav-hidden')
	}
}
