import "./styles.css";
import { createHeader } from "./components/header";
import { createContent } from "./components/content";
import { headerController } from "./controllers/headercontroller";
import { contentController } from "./controllers/contentcontroller";

const loadPage = (function () {
    // load header & content
    createHeader.loadHeader()
    createContent.loadContent();

    // load event listeners
    headerController.init();
    contentController.init();
})();