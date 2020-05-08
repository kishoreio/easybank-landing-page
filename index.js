//change mobile res icon
const clickMobileRes = document.querySelector("#change-img");
const headerNav = document.getElementById("header-nav");
const headerLinks = document.getElementById("nav-links");
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
  headerNav.style.display = "block";
  headerNav.style.position = "absolute";
  headerNav.style.top = "5rem";
  headerNav.style.width = "100%";
}
function changeToDefaultNav() {
  headerNav.style.display = "none";
}
