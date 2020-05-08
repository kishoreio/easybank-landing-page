//change mobile res icon
const clickMobileRes = document.querySelector("#change-img");
const headerNav = document.getElementById("header-nav");
const headerLinks = document.getElementById("nav-links");
const mobileHide = document.querySelector(".mobile-hide");
var mediaNavDisplay = window.matchMedia("(max-width: 480px)");
let isToggle = true;
clickMobileRes.addEventListener("click", function () {
  if (isToggle) {
    clickMobileRes.setAttribute("src", "./images/icon-close.svg");
    isToggle = false;
    changeNavStyle();
  } else {
    clickMobileRes.setAttribute("src", "./images/icon-hamburger.svg");
    isToggle = true;
    changeToDefaultNav();
  }
});
function changeNavStyle() {
  //header links
  headerNav.style.display = "flex";
  headerNav.style.justifyContent = "center";
  headerNav.style.position = "absolute";
  headerNav.style.top = "5rem";
  headerNav.style.width = "100%";
  //nav Links
  headerLinks.style.flexDirection = "column";
  headerLinks.style.alignItems = "center";
  headerLinks.style.background = "rgb(255,255,255)";
  headerLinks.style.color = "hsl(233, 26%, 24%)";
  headerLinks.style.width = "80%";
  headerLinks.style.padding = "2rem 0";
  headerLinks.style.borderRadius = "8px";
  headerLinks.style.minHeight = "15rem";
}
function changeToDefaultNav() {
  if (mediaNavDisplay.matches) {
    headerNav.style.display = "none";
  }
}
