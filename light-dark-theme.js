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
          // element.classList.remove(lightCss);
          element.classList.remove(darkCss);
        } else {
          element.classList.add(darkCss);
          // element.classList.add(lightCss);
        }
      });
    };
  }
}
function changeToBW() {
  let Image = document.getElementById("switch");
  if (Image.getAttribute("src") === "Assets/Images/sun.svg") {
    Image.setAttribute("src", "Assets/Images/moon.svg");
  } else {
    Image.setAttribute("src", "Assets/Images/sun.svg");
  }
}

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

// let b1 = new element("bg_1", "bg-slate-50", "bg-slate-400");
let b1 = new element(
  ["bg-header-offwhite", "main-card", "b_1"],
  "bg-slate-100",
  "bg-amber-900"
);
// bg-header-offwhite
let b2 = new element(
  ["bg_2", "meet-heading", "pet-card-flex"],
  "bg-blue-300",
  "bg-yellow-900"
);
let b3 = new element(["bg_3"], "bg-blue-600", "bg-blue-200");

let mission1 = new element(["mission-1"], "mission-dark", "mission-light");
let mission2 = new element(["mission-2"], "mission-dark", "mission-light");

let navbarItem = new element(
  ["navbar-item"],
  "turn-red-hover",
  "turn-yellow-hover"
);

let toggler = document.querySelector("#theme-toggle");
// let body = document.querySelector("body");
// let heading = document.querySelector("#heading-adopt-me");
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
});
