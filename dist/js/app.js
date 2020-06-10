window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
    document.querySelector("nav").style.backgroundColor = "#f8f9fade";
    // document.querySelector("nav").style.borderBottom = "solid 3px #752243"
  } else {
    document.querySelector("nav").style.backgroundColor = "transparent";
    document.querySelector("nav").style.border = "none"
  }
}


// Mobile Navbar
// let mainNav = document.querySelector('#js-menu'),
//   navBarToggle = document.querySelector('#js-navbar-toggle');

// navBarToggle.addEventListener('click', function () {
//   mainNav.classList.toggle('active');
// })


// Hamburger menu
const hamburger = document.querySelector(".hamburger"),
  navBarToggle = document.querySelector('#js-menu');
// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  navBarToggle.classList.toggle('active');
});