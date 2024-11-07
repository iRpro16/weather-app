import "./styles.css";
import { createHeader } from "./components/header";
import { createContent } from "./components/content";
import { headerController } from "./controllers/headercontroller";

const loadPage = (function () {
    // load header & content
    createHeader.loadHeader()
    createContent.loadContent();

    // load event listeners
    headerController.init();
})();