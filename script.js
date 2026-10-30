
// NAVBAR SCROLL EFFECT

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// MOBILE MENU

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// CLOSE MENU AFTER CLICKING A LINK

const links = document.querySelectorAll(".nav-link");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("show");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// CONTACT FORM

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("form-status").textContent =
        "Thank you, " + name + "! Your demo message was received.";

    contactForm.reset();

});
