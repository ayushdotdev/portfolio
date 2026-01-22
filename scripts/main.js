const navbar = document.getElementById("navbar");
const logo = document.getElementsByClassName("logo")[0];

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

logo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
