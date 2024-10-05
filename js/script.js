// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Parallax Effect

let text1 = document.getElementById("text1");
let scrolldown = document.getElementById("scrolldown");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text1.style.marginTop = value * -1 + "px";
  scrolldown.style.left = value * 0.25 + "px";
});
