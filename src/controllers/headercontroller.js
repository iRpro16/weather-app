import { loadToday } from "../components/content/loadtoday";
import { loadSevenDay } from "../components/content/loadsevenday";
import { contentController } from "./contentcontroller";
import { loadInfo } from "../components/content/loadinfo";

export const headerController = (function() {
    // init
    const init = () => {
        // add event listener
        const header = document.querySelector('.header');
        header.addEventListener('click', handleHeaderClick);
    }

    // const 2 week object array
    let biWeeklyArray = [];

    // if button is toggles
    let convBtnToggled = false;

    // get button
    const getConvBtn = () => convBtnToggled;

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
                loadInfo.loadForecastInfo(data);
                
                // set array to array of days
                headerController.biWeeklyArray = data.days;
            })

            // clear textbox
            location.value = "";
        }

        if (e.target.classList.contains('toggle-temp')) {
            // get queries
            let currentForecast = document.querySelector('.current-forecast');
            let forecastDays = document.querySelectorAll('.forecast-day');

            if (!convBtnToggled) {
                // convert to true
                convBtnToggled = true;

                // switch innerText
                e.target.innerText = '°F';
            
                // convert to °F
                currentForecast.innerText = contentController.switchToFarenheight(currentForecast.innerText);
                forecastDays.forEach(day => {
                    day.innerText = contentController.switchToFarenheight(day.innerText);
                })
            } else if (convBtnToggled) {
                // convert to false
                convBtnToggled = false;

                // switch innerText
                e.target.innerText = '°C';

                // convert to °C
                currentForecast.innerText = contentController.switchToCelsius(currentForecast.innerText);
                forecastDays.forEach(day =>{
                    day.innerText = contentController.switchToCelsius(day.innerText);
                })
            }
        }
    }

    return {init, biWeeklyArray, getConvBtn};
})();