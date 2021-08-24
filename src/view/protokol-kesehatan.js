import { head, footer, navbar, animasiNavbar } from "../functions/template-tag.js";

document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("nav");

    animasiNavbar(nav);
});

head();
navbar();
footer();
