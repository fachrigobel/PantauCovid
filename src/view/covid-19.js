import { head, footer, navbar, animasiNavbar, mediaStop } from "../functions/template-tag.js";

document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("nav");

    head();
    navbar();
    footer();
    animasiNavbar(nav);
    setInterval(function() {
        mediaStop();
    }, 1000);
});

