const navBar = document.getElementById("navbar");
const logo = document.getElementById("logo");
const navBtn = document.getElementById("nav-button");


let prevScrollPos =  window.pageYOffset

navBtn.addEventListener("click", () => {
  navBar.classList.toggle("hidden");
  logo.classList.toggle("hidden");
});

document.getElementById('search-form').addEventListener('submit', function(event) {
	event.preventDefault(); // Prevents form submission
	
	const searchQuery = document.getElementById('search-input').value;
	const pageText = document.body.innerText;
	
	if (pageText.includes(searchQuery)) {
	  // Navigate to the search results
	  window.find(searchQuery);
	} else {
	  // Text not found
	  alert('Text not found!');
	}
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
