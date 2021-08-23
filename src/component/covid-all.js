import DataSource from "../data/DataSource.js";

class CovidAll extends HTMLElement {

    connectedCallback() {
        DataSource.dataCovidAll()
        .then(response => {
            this.render(response);
        })
    }

    render(response) {
        const data = response.update;
        return this.innerHTML = `
        <section class="d-flex align-items-center flex-column" id="covid-all">
            <h2>Data Covid-19 Di Indonesia</h2>
            <div
            class="d-flex flex-row text-center justify-content-around"
            id="data-covid-all"
            >
                <div>
                    <h4>Jumlah Dirawat</h4>
                    <p>${data.total.jumlah_dirawat}</p>
                </div>
                <div>
                    <h4>Jumlah Positif</h4>
                    <p>${data.total.jumlah_positif}</p>
                </div>
                <div>
                    <h4>Jumlah Sembuh</h4>
                    <p>${data.total.jumlah_sembuh}</p>
                </div>
                <div>
                    <h4>Jumlah Meninggal</h4>
                    <p>${data.total.jumlah_meninggal}</p>
                </div>
            </div>
            <p>Update Terakhir ${data.penambahan.created}</p>
    </section>
        `;
    }
}

customElements.define("covid-all", CovidAll);