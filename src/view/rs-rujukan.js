import { head, footer, navbar } from "../functions/template-tag.js";
import DataSource from "../data/DataSource.js";
import { listTableRS } from "../functions/template-tag.js";


document.addEventListener("DOMContentLoaded", function() {
    const tableRS = document.querySelector(".table tbody");

    DataSource.dataHospital()
    .then(response => {
        response.forEach(element => {
            tableRS.appendChild(listTableRS(element));
        });
    })
});

head();
navbar();
footer();
