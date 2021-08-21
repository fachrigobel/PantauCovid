import DataSource from "../data/DataSource.js";

const main = () => {
    DataSource.dataHospital()
    .then(response => {
        // data hospital siap digunakan
        console.log(response);
    })
    .catch(err => console.log(`Error: ${err}`));
}

export default main;