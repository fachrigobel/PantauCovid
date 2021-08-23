import DataSource from "../data/DataSource.js";



const main = () => {
    const tableCovid = document.querySelector(".table tbody");
    const nav = document.querySelector("nav");
    const navbarNav = document.querySelector("#navbar-nav");
    
    DataSource.dataCovidProv()
    .then(response => {
        response.forEach(element => {
            tableCovid.appendChild(listTable(element));
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


function listTable(data) {
    const tr = document.createElement("tr");    
    tr.innerHTML = `
        <th class="scope">${data.key}</th class="row">
        <td>${data.jumlah_dirawat}</td>
        <td>${data.jumlah_kasus}</td>
        <td>${data.jumlah_sembuh}</td>
        <td>${data.jumlah_meninggal}</td>
        `;


    return tr;
}

export default main;