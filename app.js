import main from "./src/view/main.js";
import "./src/component/covid-all.js";
import { head, footer, navbar, mediaStop } from "./src/functions/template-tag.js";



document.addEventListener("DOMContentLoaded", () => {
    head();
    navbar();
    footer();
    main();
    setInterval(function() {
        mediaStop();
    }, 1000);

});

