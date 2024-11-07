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
    const biWeeklyArray = [];

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
                console.log(data);
                createContent.loadTodaysForecast(data);
                createContent.loadSevenDayForecast(data.days);
            })
        }
    }

    return {init, biWeeklyArray};
})();