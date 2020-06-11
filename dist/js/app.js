
// Hamburger menu
const hamburger = document.querySelector(".hamburger"),
  navBarToggle = document.querySelector('#js-menu');
// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  navBarToggle.classList.toggle('active');
});