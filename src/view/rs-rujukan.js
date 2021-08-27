import { head, footer, navbar, listTableRS, animasiNavbar, mediaStop } from "../functions/template-tag.js";
import DataSource from "../data/DataSource.js";


document.addEventListener("DOMContentLoaded", function() {
    const tableRS = document.querySelector(".table tbody");
    const nav = document.querySelector("nav");
    
    head();
    navbar();
    footer();

    DataSource.dataHospital()
    .then(response => {
        response.forEach(element => {
            tableRS.appendChild(listTableRS(element));
        });
    })
    
    animasiNavbar(nav);
    setInterval(function() {
        mediaStop();
    }, 1000);
});

