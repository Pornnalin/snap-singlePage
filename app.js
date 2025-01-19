const toggle = document.querySelectorAll(".toggle");
const dropdowns = document.querySelectorAll(".dropdowns");
const arrows = document.querySelectorAll(".arrow");
const mobileToggle = document.querySelectorAll(".mobile-toggle");
const mobileDropdown = document.querySelectorAll(".mobile-dropdown");
const menuClose = document.querySelector(".menu-close");
const mobileHamburger = document.querySelector(".mobile-hamburger");
const menuContainer = document.querySelector(".menu-mobile-container");

toggle.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    dropdowns[index].classList.toggle("open");
    let haveImageArrow = dropdowns[index].classList.contains("open");
    if (haveImageArrow) {
      arrows[index].src = "./images/icon-arrow-up.svg";
    } else {
      arrows[index].src = "./images/icon-arrow-down.svg";
    }
  });
});

mobileToggle.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    mobileDropdown[index].classList.toggle("open");
    let haveImageArrow = mobileDropdown[index].classList.contains("open");
    if (haveImageArrow) {
      arrows[index + 2].src = "./images/icon-arrow-up.svg";
    } else {
      arrows[index + 2].src = "./images/icon-arrow-down.svg";
    }
  });
});

mobileHamburger.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
  menuContainer.style.display = "flex";
});
menuClose.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
  menuContainer.style.display = "none";
});
