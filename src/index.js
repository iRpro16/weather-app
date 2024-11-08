import "./styles.css";
import { createHeader } from "./components/header";
import { createContent } from "./components/content";
import { headerController } from "./controllers/headercontroller";
import { contentController } from "./controllers/contentcontroller";

const loadPage = (function () {
    // load page
    const load = () => {
        // load header & content
        createHeader.loadHeader()
        createContent.loadContent();

        // load default city
        contentController.fetchData("Montreal")
        .then((data) => {
            createContent.loadTodaysForecast(data)
            createContent.loadSevenDayForecast(data.days);
            // set array to data.days
            headerController.biWeeklyArray = data.days;
        });
    }

    // add event listeners
    const eventListeners = () => {
        headerController.init();
        contentController.init();
    }

    return {load, eventListeners};
})();

// load the initial page
loadPage.load()
loadPage.eventListeners();