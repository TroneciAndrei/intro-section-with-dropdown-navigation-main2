const btnOpen = document.querySelector("#btn-open");
const btnClose = document.querySelector("#btn-close");
const nav = document.querySelector("#nav");
const body = document.body;
const dropdownMenu = document.querySelectorAll(".dropdown-menu");
const navBar = document.querySelector(".navbar");

btnOpen.addEventListener("click", () => {
  nav.classList.toggle("hidden");
  body.style.backgroundColor = "rgba(0,0,0,0.5)";
});

btnClose.addEventListener("click", () => {
  nav.classList.toggle("hidden");
  body.style.backgroundColor = "";
});

body.addEventListener("click", (event) => {
  if (!nav.contains(event.target) && !btnOpen.contains(event.target)) {
    nav.classList.add("hidden");
    body.style.backgroundColor = "initial";
  }
});

// btnClose.addEventListener("click", () => {
//   nav.classList.add("hidden");
//   body.style.backgroundColor = "";
// });

navBar.addEventListener("click", (event) => {
  const target = event.target.closest(".nav-link");
  if (!target) return;

  const child = target.nextElementSibling;

  dropdownMenu.forEach((menu) => {
    if (menu !== child && !menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
    }

    if (menu === child && child.classList.contains("hidden")) {
    }
  });
  child.classList.toggle("hidden");
});
