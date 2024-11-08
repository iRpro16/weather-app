import { loadToday } from "../components/content/loadtoday";
import { loadSevenDay } from "../components/content/loadsevenday";
import { contentController } from "./contentcontroller";

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
            const location = document.querySelector(".input-location");

            // get data
            contentController.fetchData(location.value)
            .then((data) => {
                // load the forecasts and info
                loadToday.loadTodaysForecast(data);
                loadSevenDay.loadSevenDayForecast(data.days);
                
                // set array to array of days
                headerController.biWeeklyArray = data.days;
            })

            // clear textbox
            location.value = "";
        }
    }

    return {init, biWeeklyArray};
})();