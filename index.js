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
    contributors?.appendChild(link);
  });
}

function hideBackToTopButton() {
  const bttButton = document.getElementById("bttbutton");

  bttButton.addEventListener("click", (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", (e) => {
    bttButton.style.display = window.scrollY > 15 ? "block" : "none";
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

hideBackToTopButton();
getContributorsList();

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}

var imageIndex = 0;
var imagesArray = [
  "url('./Assets/Images/main-heading-body-bg.jpg') center",
  "url('./Assets/Images/main-heading-body-bg2.png') center",
  "url('./Assets/Images/main-heading-body-bg3.png') center",
  "url('./Assets/Images/main-heading-body-bg4.png') center",
];

function changeBackground() {
  var index = imageIndex++ % imagesArray.length;
  document.querySelector(".main-body-section-div").style.background =
    imagesArray[index];
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".main-body-section-div").style.background =
    imagesArray[0];
  setInterval(changeBackground, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscription-form");
  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("error-message");
  const subscribeButton = document.getElementById("subscribe-button");

  subscribeButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (emailInput.value.trim() === "") {
      alert("Email address is required.");
    } else if (!isValidEmail(emailInput.value)) {
      alert("Invalid email address format.");
    } else {
      form.submit();
    }
  });

  function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  }
});

// scroll to top function

// Change to the stored current theme.
changeToCurrTheme();
