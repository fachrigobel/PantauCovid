import DataSource from "../data/DataSource.js";




const main = () => {
    DataSource.dataCovidProv()
    .then(response => {
        // data hospital siap digunakan
        console.log(response);
    })
    .catch(err => console.log(`Error: ${err}`));
}

export default main;