class element {
  constructor(cssNames, lightCss, darkCss) {
    this.cssNames = cssNames; // list with css names
    this.eles = []; // list of elements selected for which dark CSS will apply
    cssNames.forEach((element) => {
      document.querySelectorAll("." + element).forEach((ele) => {
        this.eles.push(ele);
      });
    });

    this.lightCss = lightCss;
    this.darkCss = darkCss;

    this.eles.forEach((element) => {
      element.classList.add(darkCss);
    });

    this.toggle = function () {
      this.eles.forEach((element) => {
        if (element.classList.contains(darkCss)) {
          // The current theme is not dark, remove the darkCss to switch to light theme.
          if (localStorage.getItem("currentTheme") != "dark") {
            element.classList.remove(darkCss);        
          }
        } else {
          // The current theme is not light, use the darkCss to switch to dark theme.
          if (localStorage.getItem("currentTheme") != "light") {
            element.classList.add(darkCss);
          }
        }
      });
    };
  }
}

/**
 * Switch the icon between sun and moon, presenting light and dark theme.
 */
function changeToBW() {
  var icon = document.getElementById("switch");
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.className="ri-moon-line turn-red-hover dark-theme";
    localStorage.setItem("currentTheme", "light")
  } else {
    icon.className="ri-sun-line turn-yellow-hover light-theme";
    localStorage.setItem("currentTheme", "dark")
  }
}

/**
 * Match the moon and sun icon with the current theme.
 */
function matchIcon() {
  var icon = document.getElementById("switch");
  document.body.classList.toggle("dark-theme");
  if (localStorage.getItem("currentTheme") == "light" 
        && document.body.classList.contains("dark-theme")) {
    icon.className="ri-moon-line turn-red-hover dark-theme";
  } else if (localStorage.getItem("currentTheme") == "dark" 
              && document.body.classList.contains("light-theme")){
    icon.className="ri-sun-line turn-yellow-hover light-theme";
  }
}

/**
 * Change site's theme to current theme and match icon.
 */
function changeToCurrTheme() {
  // Toggle the colors of elements.
  t1.toggle();
  t2.toggle();
  t3.toggle();
  t4.toggle();
  b1.toggle();
  b2.toggle();
  b3.toggle();
  navbarItem.toggle();
  mission1.toggle();
  mission2.toggle();

  matchIcon();
}

// Set default theme to dark. 
if (localStorage.getItem("currentTheme") == null) {
  localStorage.setItem("currentTheme", dark);
}

// Initialize text elements that need to be switched.
let t1 = new element(["text_1"], "text-slate-50", "text-gray-900");
let t2 = new element(["text_2"], "text-blue-600", "text-blue-200");
let t3 = new element(
  [
    "text_3",
    "meet-heading",
    "main-body-section-div",
    "turn-white-hover",
    "text-custom-heading",
  ],
  "text-gray-900",
  "text-white"
);
let t4 = new element(["text_4"], "text-choco", "text-white");
// Initialize background elements that need to be switched.
let b1 = new element(
  ["bg-header-offwhite", "main-card", "b_1"],
  "bg-slate-100",
  "bg-amber-900"
);
let b2 = new element(
  ["bg_2", "meet-heading", "pet-card-flex"],
  "bg-blue-300",
  "bg-yellow-900"
);
let b3 = new element(["bg_3"], "bg-blue-600", "bg-blue-200");
// Initialize mission elements that need to be switched.
let mission1 = new element(["mission-1"], "mission-dark", "mission-light");
let mission2 = new element(["mission-2"], "mission-dark", "mission-light");
// Initialize navigation bar element that need to be switched.
let navbarItem = new element(
  ["navbar-item"],
  "turn-red-hover",
  "turn-yellow-hover"
);
// Toggle changes when the theme button is clicked.
let toggler = document.querySelector("#theme-toggle");
toggler.addEventListener("click", () => {
  changeToBW();
  t1.toggle();
  t2.toggle();
  t3.toggle();
  t4.toggle();
  b1.toggle();
  b2.toggle();
  b3.toggle();
  navbarItem.toggle();
  mission1.toggle();
  mission2.toggle();
});

