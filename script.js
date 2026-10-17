const header = document.querySelector(".header");
const footerText = document.querySelector(".footer p");

window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

footerText.textContent =
    "© " + new Date().getFullYear() + " Rishika. Built with HTML, CSS & JavaScript.";