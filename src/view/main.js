import DataSource from "../data/DataSource.js";
import { listTableCovidProv, animasiNavbar } from "../functions/template-tag.js";



const main = () => {
    const tableCovid = document.querySelector(".table tbody");
    const nav = document.querySelector("nav");
    
    DataSource.dataCovidProv()
    .then(response => {
        response.forEach(element => {
            tableCovid.appendChild(listTableCovidProv(element));
        });
    });

    animasiNavbar(nav);
}

export default main;