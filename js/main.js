const buttons = document.querySelectorAll("nav button");
const navbar = document.querySelector("nav");
const menuLinks = document.querySelectorAll("nav li a");
if (buttons) {
  Array.from(buttons).forEach((btn) => {
    btn.addEventListener("click", () => {
      navbar.classList.toggle("open");
    });
  });
}

if (menuLinks) {
  Array.from(menuLinks).forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("open");
    });
  });
}
