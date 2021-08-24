function head() {
    const headTag = document.querySelector("head");

    return headTag.innerHTML = `
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pantau Covid-19</title>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="./src/img/favicon_io/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="./src/img/favicon_io/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="./src/img/favicon_io/favicon-16x16.png"
    />
    <link rel="manifest" href="./src/img/favicon_io/site.webmanifest" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./src/styles/style.css" />
    <link rel="stylesheet" href="./src/styles/responsive.css" />
    `;
}

function footer() {
    const footerTag = document.querySelector("footer");

    return footerTag.innerHTML = `
    <div class="container-fluid pt-5">
        <div class="items d-flex flex-row justify-content-around">
          <div class="footer-item">
            <h3>Berikan Tanggapan Anda!</h3>
            <form class="text-end">
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Masukkan email"
                />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Masukkan tanggapan anda"
                ></textarea>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-light" id="btn-footer">
                  Kirim Tanggapan Saya
                </button>
              </div>
            </form>
          </div>
          <div class="footer-item d-flex flex-column">
            <h3>More Informations</h3>
            <a href="#">Data Covid-19 dari data.covid19.go.id</a>
            <a href="#">Data Rujukan Rumah Sakit dari<br />dekontaminasi.com</a>
          </div>
          <div class="footer-item d-flex flex-column">
            <h3>Kontak Saya</h3>
            <a href="#">kapistakras@gmail.com</a>
            <a href="#">+62 821 8819 1052</a>
            <a href="#">github/kapistaa</a>
            <a href="#">instagram/kapistaa</a>
            <a href="#">linkedin/fachrigobel</a>
          </div>
        </div>
        <p>
          Handcrafted By FachriGobel<br />
          Copyright 2021 © All Rights Reserved
        </p>
      </div>
    `;
}

function navbar() {
    const navTag = document.querySelector("nav");

    return navTag.innerHTML = `
    <div class="container-fluid ms-5 me-5">
          <a class="navbar-brand d-flex flex-row" href="#">
            <img src="./src/img/logoCovid.png" alt="Logo Covid" width="100" />
            <div id="title-brand" class="d-flex flex-column">
              <span>Pantau Covid-19</span>
              <span>Severe Acute Respiratory Syndrome Coronavirus 2</span>
            </div>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mb-2 mb-lg-0" id="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item ms-5">
                <a class="nav-link" href="#">Covid-19</a>
              </li>
              <li class="nav-item dropdown ms-5">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Informasi
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Berita</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Protokol Kesehatan</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="./src/pages/rs-rujukan.html">Rumah Sakit Rujukan</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item ms-5">
                <a class="nav-link" href="#">Kontak Saya</a>
              </li>
            </ul>
          </div>
        </div>
    `;
}

function listTableCovidProv(data) {
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

export {head, footer, navbar, listTableCovidProv};