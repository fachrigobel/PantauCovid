import main from "./src/view/main.js";
import "./src/component/covid-all.js";
import "./src/component/media-stop.js";
import { head, footer, navbar } from "./src/functions/template-tag.js";

document.addEventListener("DOMContentLoaded", main);
head();
navbar();
footer();
