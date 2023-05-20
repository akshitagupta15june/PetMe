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

    this.eles.forEach((element) => {
      element.classList.add(lightCss);
    });

    this.toggle = function () {
      this.eles.forEach((element) => {
        if (element.classList.contains(lightCss)) {
          element.classList.remove(lightCss);
          element.classList.add(darkCss);
        } else {
          element.classList.remove(darkCss);
          element.classList.add(lightCss);
        }
      });
    };
  }
}

function changeToBW() {
  let image = document.getElementById("switch");
  if (image.getAttribute("src") === "Assets/Images/sun.svg") {
    image.setAttribute("src", "Assets/Images/moon.svg");
  } else {
    image.setAttribute("src", "Assets/Images/sun.svg");
  }
}

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
let t4 = new Element(["text_4"], "text-slate-800", "text-white");

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
  b1.toggle();
  b2.toggle();
  b3.toggle();
  navbarItem.toggle();
  mission1.toggle();
  mission2.toggle();
  changeToBW();

  // Toggle navbar background
  let navbar = document.querySelector(".navbar");
  navbar.classList.toggle("navbar-dark");
});
