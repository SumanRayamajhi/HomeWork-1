const backToTopButton = document.querySelector("#arrow-btn");
window.addEventListener("scroll", scrollFunction);
function scrollFunction() {
  if (window.pageYOffset > 300) {
    // Show backToTopButton
    backToTopButton.style.display = "block";
  } else {
    // Hide backToTopButton
   backToTopButton.style.display = "none";
  }
}
