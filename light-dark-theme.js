class Element {
  constructor(cssNames, lightCss, darkCss) {
    this.cssNames = cssNames; 
    this.elements = []; 
    cssNames.forEach((element) => {
      document.querySelectorAll("." + element).forEach((ele) => {
        this.elements.push(ele);
      });
    });

    this.lightCss = lightCss;
    this.darkCss = darkCss;

    this.elements.forEach((element) => {
      if (!document.body.classList.contains("light-mode")) {
        element.classList.add(darkCss);
      }
    });

    this.toggle = function () {
      this.elements.forEach((element) => {
        if (document.body.classList.contains("light-mode")) {
          element.classList.toggle(lightCss);
          element.style.color = ""; // Change text color to blue in light mode
        } else {
          element.classList.toggle(darkCss);
          element.style.color = ""; // Reset text color in dark mode
        }
      });
    };
  }
}

var icon = document.getElementById("switch");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.className = "ri-moon-line turn-red-hover dark-theme";
  } else {
    icon.className = "ri-sun-line turn-yellow-hover light-theme";
  }
};

let t1 = new Element(["text_1"], "text-slate-50", "text-gray-900");
let t2 = new Element(["text_2"], "text-blue-600", "text-blue-200");
let t3 = new Element(
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
let t4 = new Element(["text_4"], "text-choco", "text-white");
let tContactForm = new Element(
  ["contact-form-text"],
   "contactusform-color-lightmode",
   "contactusform-color-darkmode"
);

let b1 = new Element(
  ["bg-header-offwhite", "main-card", "b_1"],
  "bg-slate-100",
  "bg-amber-900"
);

let b2 = new Element(
  ["bg_2", "meet-heading", "pet-card-flex"],
  "bg-blue-300",
  "bg-yellow-900"
);
let b3 = new Element(["bg_3"], "bg-blue-600", "bg-blue-200");

let mission1 = new Element(["mission-1"], "mission-dark", "mission-light");
let mission2 = new Element(["mission-2"], "mission-dark", "mission-light");

let navbarItem = new Element(
  ["navbar-item"],
  "turn-red-hover",
  "turn-yellow-hover"
);

let toggler = document.querySelector("#theme-toggle");
toggler.addEventListener("click", () => {
  t1.toggle();
  t2.toggle();
  t3.toggle();
  t4.toggle();
  tContactForm.toggle(); 
  b1.toggle();
  b2.toggle();
  b3.toggle();
  navbarItem.toggle();
  mission1.toggle();
  mission2.toggle();
});

