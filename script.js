// Initialize JS
const init = () => {
  // When click button, show menu
  const showMenuElement = document.getElementsByClassName("nav-menu-open")[0];
  showMenuElement.addEventListener("click", showMenu);

  // When close button click, hide menu
  const hideMenuElement = document.getElementsByClassName("nav-menu-close")[0];
  hideMenuElement.addEventListener("click", hideMenu);

  // When clicking link, hide menu
  const navLinkElement = document.getElementsByClassName("nav-links")[0];
  navLinkElement.addEventListener("click", function (event) {
    // Avoid hiding menu if a link is not clicked
    if (event.target.tagName !== "UL") {
      hideMenu();
    }
  });

  // When clicking outside menu bar, hide menu
  document.addEventListener("click", function (event) {
    const clickArea = event.target.tagName;

    // Hide menu if the dark area is clicked
    if (clickArea === "NAV") {
      hideMenu();
    }
  });
};

// Hide the menu
function hideMenu() {
  const navLinksEle = document.getElementsByClassName("nav-links")[0];
  navLinksEle.classList.add("move-left");
  const navElem = document.querySelector("nav");
  navElem.classList.remove("dim-bg");
}

// Show the menu
function showMenu() {
  const navLinksEle = document.getElementsByClassName("nav-links")[0];
  navLinksEle.classList.remove("move-left");
  const navElem = document.querySelector("nav");
  navElem.classList.add("dim-bg");
}

// Document ready
if (document.readyState === "complete") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}
