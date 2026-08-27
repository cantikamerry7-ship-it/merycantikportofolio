// =========================
// MENU HAMBURGER
// =========================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


// =========================
// TUTUP MENU SETELAH KLIK
// =========================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// =========================
// EFEK SCROLL
// =========================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 20px rgba(20, 50, 90, 0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});
