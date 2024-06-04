class Element {
  constructor(cssNames, lightCss, darkCss) {
    this.cssNames = cssNames;
    this.eles = [];
    cssNames.forEach((element) => {
      document.querySelectorAll("." + element).forEach((ele) => {
        this.eles.push(ele);
      });
    });

    this.lightCss = lightCss;
    this.darkCss = darkCss;
    this.applyTheme();
  }

  applyTheme() {
    const isDarkMode = document.body.classList.contains("dark-theme");
    this.eles.forEach((element) => {
      if (isDarkMode) {
        element.classList.add(this.darkCss);
        element.classList.remove(this.lightCss);
      } else {
        element.classList.add(this.lightCss);
        element.classList.remove(this.darkCss);
      }
    });
  }

  toggle() {
    this.eles.forEach((element) => {
      element.classList.toggle(this.lightCss);
      element.classList.toggle(this.darkCss);
    });
  }
}

const icon = document.getElementById("switch");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.className = "ri-moon-line turn-red-hover dark-theme";
    localStorage.setItem("theme", "dark");
  } else {
    icon.className = "ri-sun-line turn-yellow-hover light-theme";
    localStorage.setItem("theme", "light");
  }
  toggleThemeForAllElements();
};

const elements = [
  new Element(["text_1"], "text-slate-50", "text-gray-900"),
  new Element(["text_2"], "text-blue-600", "text-blue-200"),
  new Element(
    [
      "text_3",
      "meet-heading",
      "main-body-section-div",
      "turn-white-hover",
      "text-custom-heading",
      "text-center"
    ],
    "text-gray-900",
    "text-white"
  ),
  new Element(["text_4"], "text-choco", "text-white"),
  new Element(
    ["bg-header-offwhite", "main-card", "b_1"],
    "bg-slate-100",
    "bg-amber-900"
  ),
  new Element(
    ["bg_2", "meet-heading", "pet-card-flex"],
    "bg-blue-300",
    "bg-yellow-900"
  ),
  new Element(["bg_3"], "bg-blue-600", "bg-blue-200"),
  new Element(["bg-blog"], "bg-white-200", "bg-amber-700"),
  new Element(["mission-1"], "mission-dark", "mission-light"),
  new Element(["mission-2"], "mission-dark", "mission-light"),
  new Element(["navbar-item"], "turn-red-hover", "turn-yellow-hover"),
];

function toggleThemeForAllElements() {
  elements.forEach((element) => element.toggle());
}

// Function to load theme preference on page load
function loadThemePreference() {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
    icon.className = "ri-moon-line turn-red-hover dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
    icon.className = "ri-sun-line turn-yellow-hover light-theme";
  }
  // Apply the correct theme to all elements
  elements.forEach((element) => element.applyTheme());
}

// Load theme preference on page load
document.addEventListener("DOMContentLoaded", loadThemePreference);
