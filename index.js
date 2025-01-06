// GitHub Contributors List Script
const contributors = document.getElementById("contributors");
const repo = "PetMe";
const owner = "akshitagupta15june";
const apiURL = `https://api.github.com/repos/${owner}/${repo}/contributors`;

async function getContributorsList() {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error(`Error fetching contributors: ${response.statusText}`);
    }
    const contributorsList = await response.json();
    displayContributors(contributorsList);
  } catch (error) {
    console.error("Failed to fetch contributors:", error);
  }
}

function displayContributors(contributorsList) {
  contributorsList.forEach((contributor) => {
    const link = document.createElement("a");
    link.href = contributor.html_url;
    link.target = "_blank";

    const avatar = document.createElement("img");
    avatar.className = "avatar";
    avatar.src = contributor.avatar_url;
    avatar.title = contributor.login;
    avatar.alt = contributor.login;

    link.appendChild(avatar);
    contributors?.appendChild(link);
  });
}

// Smooth Scroll and Back-to-Top Button
function setupBackToTopButton() {
  const bttButton = document.getElementById("bttbutton");

  if (!bttButton) return;

  bttButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    bttButton.style.display = window.scrollY > 15 ? "block" : "none";
  });
}

// Background Image Rotator
const imagesArray = [
  "url('./Assets/Images/main-heading-body-bg.jpg') center",
  "url('./Assets/Images/main-heading-body-bg2.png') center",
  "url('./Assets/Images/main-heading-body-bg3.png') center",
  "url('./Assets/Images/main-heading-body-bg4.png') center",
];
let imageIndex = 0;

function changeBackground() {
  const mainDiv = document.querySelector(".main-body-section-div");
  if (mainDiv) {
    mainDiv.style.background = imagesArray[imageIndex % imagesArray.length];
    imageIndex++;
  }
}

// Subscription Form Validation
function setupSubscriptionForm() {
  const form = document.getElementById("subscription-form");
  const emailInput = document.getElementById("email");

  if (!form || !emailInput) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();

    if (!email) {
      alert("Email address is required.");
    } else if (!isValidEmail(email)) {
      alert("Invalid email address format.");
    } else {
      form.submit();
    }
  });

  function isValidEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  }
}

// Initialize Google Translate Widget
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}

// Initialize Theme (Assuming `changeToCurrTheme` is defined elsewhere)
function initializeTheme() {
  if (typeof changeToCurrTheme === "function") {
    changeToCurrTheme();
  }
}

// Document Ready
document.addEventListener("DOMContentLoaded", () => {
  const mainDiv = document.querySelector(".main-body-section-div");
  if (mainDiv) {
    mainDiv.style.background = imagesArray[0];
    setInterval(changeBackground, 2000);
  }
  setupSubscriptionForm();
  setupBackToTopButton();
  initializeTheme();
});

// Fetch and Display Contributors
getContributorsList();
