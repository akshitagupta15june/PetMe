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

  // Email validation function
  function isValidEmail(email) {
    if (!email || typeof email !== "string") return false;
    if (email.length > 254) return false;

    // Split email into local part and domain
    const parts = email.split("@");
    if (parts.length !== 2) return false;
    const [localPart, domain] = parts;

    // Local part validation
    if (!isValidLocalPart(localPart)) return false;

    // Domain validation
    if (!isValidDomain(domain)) return false;

    return true;
  }

  function isValidLocalPart(localPart) {
    if (!localPart || localPart.length > 64) return false;
    if (localPart.startsWith(".") || localPart.endsWith(".")) return false;
    if (localPart.includes("..")) return false;

    // Allowed characters check
    const validLocalRegex = /^[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~.]+$/;
    return validLocalRegex.test(localPart);
  }

  function isValidDomain(domain) {
    if (!domain || domain.length > 255) return false;
    if (domain.startsWith(".") || domain.endsWith(".")) return false;
    if (domain.includes("..")) return false;

    // Split domain into parts
    const parts = domain.split(".");
    if (parts.length < 2) return false;

    // Check each part
    for (const part of parts) {
      if (!part || part.length > 63) return false;
      if (part.startsWith("-") || part.endsWith("-")) return false;

      const validDomainRegex = /^[a-zA-Z0-9-]+$/;
      if (!validDomainRegex.test(part)) return false;
    }

    // TLD should only contain letters
    const tld = parts[parts.length - 1];
    if (!/^[a-zA-Z]{2,}$/.test(tld)) return false;

    return true;
  }

  // Function to display error message
  function showError(message) {
    if (errorMessage) {
      errorMessage.textContent = message;
      errorMessage.style.display = "block";
      emailInput.classList.add("error");
    } else {
      alert(message);
    }
  }

  function clearError() {
    if (errorMessage) {
      errorMessage.style.display = "none";
      emailInput.classList.remove("error");
    }
  }

  // Real-time validation as user types
  emailInput?.addEventListener("input", function () {
    const email = this.value.trim();
    if (email === "") {
      clearError();
    } else if (!isValidEmail(email)) {
      showError("Please enter a valid email address");
    } else {
      clearError();
    }
  });

  subscribeButton?.addEventListener("click", function (event) {
    event.preventDefault();
    const email = emailInput.value.trim();

    if (email === "") {
      showError("Email address is required.");
      return;
    }

    if (!isValidEmail(email)) {
      showError("Please enter a valid email address.");
      return;
    }

    // If all validation passes, submit the form, for now added these checks
    clearError();
    form.submit();
  });
});

// scroll to top function

// Change to the stored current theme.
changeToCurrTheme();
