import "./styles.css";
import { createHeader } from "./components/header";
import { createContent } from "./components/content";

const loadPage = (function () {
    // load header & content
    createHeader.loadHeader()
    createContent.loadContent();
})();