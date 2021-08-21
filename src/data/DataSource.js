class DataSource {
    static dataCovidAll() {
        return fetch(`https://data.covid19.go.id/public/api/update.json`)
        .then(response => response.json())
        .then(responseJson => Promise.resolve(responseJson));
    }

    static dataCovidProv() {
        return fetch(`https://data.covid19.go.id/public/api/prov.json`)
        .then(response => response.json())
        .then(responseJson => Promise.resolve(responseJson));
    }

    static dataHospital() {
        return fetch(`https://dekontaminasi.com/api/id/covid19/hospitals`)
        .then(response => response.json())
        .then(responseJson => Promise.resolve(responseJson));
    }
}

export default DataSource;