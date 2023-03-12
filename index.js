// Script for to get Github contributors list
const contributors = document.getElementById("contributors");
const repo = "PetMe";
const owner = "akshitagupta15june";
const apiURL = `https://api.github.com/repos/${owner}/${repo}/contributors`;


function displayContributors(contributorsList) {
  contributorsList.forEach((contributor) => {
    // create anchor tag and set relevant attributes
    const link = document.createElement("a");
    link.setAttribute("href", contributor.html_url);
    link.setAttribute("target", "_blank");

    // create image element and set relevant attributes
    const avatar = document.createElement("img");
    avatar.setAttribute("class", "avatar");
    avatar.setAttribute("src", contributor.avatar_url);
    avatar.setAttribute("title", contributor.login);
    avatar.setAttribute("alt", contributor.login);

    link.appendChild(avatar);
    contributors.appendChild(link);
  });
}

function hideBackToTopButton() {
  const bttButton = document.getElementById("bttbutton");

  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 0) {
      bttButton.style.opacity = "1";
      bttButton.style.transform = 'translateY(0px)';
    } else {
      bttButton.style.opacity = "0";
      bttButton.style.transform = 'translateY(500px)';
    }
  });
}

// get contributors list  from github API
async function getContributorsList() {
  try {
    const response = await fetch(apiURL);
    const contributors = await response.json();
    displayContributors(contributors);
  } catch (error) {
    console.log(error);
  }
}

hideBackToTopButton()
getContributorsList();


// Display pet img big 


const bigImg = Array.from(document.getElementsByClassName("big"));
const pets = Array.from(document.getElementsByClassName("main-img"));
const petis = bigImg.slice(1,9); // utilizo este metodo para acomodar la array.. se me estaba corriendo el foreach cogiendo los elementos
const closen = document.getElementById("iccon-close");

 petis.forEach(function(img, idx) {

  pets[idx].onclick = function() {
    img.style.display = "block";
    closen.style.display = "block";
    document.getElementById("black").style.display = "block";
    document.getElementById("imgbigs").style.display = "block"
  }
}); // foreach para que por acada elemento de pets al que le doy click... me muestre uno de petis

closen.addEventListener("click", function() {
    closen.style.display = "none"; 
    document.getElementById("black").style.display = "none";
    petis.forEach(function(img) {
        img.style.display = "none";
      })
    })  
  
    
// End display pet img big 
