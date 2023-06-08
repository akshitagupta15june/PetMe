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

function googleTranslateElementInit() {  
  new google.translate.TranslateElement(  
      {pageLanguage: 'en'},  
      'google_translate_element'  
  );  
}


// Javascript for Testimonial Section

let swiperRef = null;
let scrollInterval = null;

function initializeSwiper() {
  swiperRef = new Swiper('.mySwiper', {
    slidesPerView: getSlidesPerView(),
    spaceBetween: 30,
    slidesPerGroup: getSlidesPerGroup(),
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
}

function getSlidesPerView() {
  return window.innerWidth < 800 ? 1 : 3;
}

function getSlidesPerGroup() {
  return window.innerWidth < 800 ? 1 : 3;
}

function handleResize() {
  if (swiperRef) {
    swiperRef.params.slidesPerView = getSlidesPerView();
    swiperRef.params.slidesPerGroup = getSlidesPerGroup();
    swiperRef.update();
  }
}

initializeSwiper();


function cleanup() {
  window.removeEventListener('resize', handleResize);
  clearInterval(scrollInterval);
}

document.addEventListener('DOMContentLoaded', () => {
  initialize();
});

window.addEventListener('beforeunload', () => {
  cleanup();
});
