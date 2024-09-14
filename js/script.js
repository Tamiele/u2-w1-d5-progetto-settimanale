let header = document.querySelector("header");
let button = document.querySelector("button");

window.addEventListener("scroll", function () {
  if (window.scrollY > 240) {
    header.classList.add("cheangeColorHeader");
    button.classList.add("cheangeColorButton");
  } else {
    header.classList.remove("cheangeColorHeader");
    button.classList.remove("cheangeColorButton");
  }
});

// let allGroups = document.querySelectorAll("svg g");

// const prova = function () {
//   allGroups.forEach((group, index) => {
//     let opacityValue = group.getAttribute("opacity");

//     if (opacityValue === "0") {
//       setInterval(() => {
//         group.setAttribute("opacity", "1");
//       }, index * 1);
//     } else {
//       group.setAttribute("opacity", "1");
//     }
//   });
// };

// setInterval(prova());
// window.onload = function () {};
