import DataSource from "../data/DataSource.js";
import { listTableCovidProv } from "../functions/template-tag.js";



const main = () => {
    const tableCovid = document.querySelector(".table tbody");
    const nav = document.querySelector("nav");
    
    DataSource.dataCovidProv()
    .then(response => {
        response.forEach(element => {
            tableCovid.appendChild(listTableCovidProv(element));
        });
    });

    window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        nav.classList.add("bg-nav");
    } else {
        nav.classList.remove("bg-nav");
  }
}
    
}

export default main;