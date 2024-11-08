import { contentController } from "./contentcontroller";
import { createContent } from "../components/content";

export const headerController = (function() {
    // init
    const init = () => {
        // add event listener
        const header = document.querySelector('.header');
        header.addEventListener('click', handleHeaderClick);
    }

    // const 2 week object array
    let biWeeklyArray = [];

    // handle clicks
    const handleHeaderClick = (e) => {
        if (e.target.classList.contains("magnify-icon")) {
            // prevent default
            e.preventDefault();

            // get location
            const location = document.querySelector(".input-location").value;

            // get data
            contentController.fetchData(location)
            .then((data) => {
                createContent.loadTodaysForecast(data);
                createContent.loadSevenDayForecast(data.days);
                // set array to array of days
                headerController.biWeeklyArray = data.days;
            })
        }
    }

    return {init, biWeeklyArray};
})();