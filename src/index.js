import "./css/main.scss";

const button = document.querySelector(".mobile-bnt");
const menu = document.querySelector(".menu");

function activate() {
  this.classList.toggle("open");
  menu.classList.toggle("open");
}

button.addEventListener("click", activate);
