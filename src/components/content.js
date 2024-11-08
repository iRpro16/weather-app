import clouds from "/src/assets/images/clouds.jpg";
import { loadSevenDay } from "./content/loadsevenday";

export const createContent = (function() {
    // load background image
    const loadBackImage = () => {
        // set url and size to cover
        document.body.style.backgroundImage = `url(${clouds})`;
        document.body.style.backgroundSize = 'cover';
    }

    // load the content
    const loadContent = () => {
        // get content
        const content = document.querySelector(".content");

        // load background image
        loadBackImage();

        // create central div
        const centralDiv = document.createElement('div');
        centralDiv.classList.add('central-div');
        content.append(centralDiv);
    }

    // change weekly forecast
    const changeSevenDay = (weeklyArray) => {
        // get cont to change
        const biWeeklyForecastDiv = document.querySelector(".bi-weekly-forecast");
        biWeeklyForecastDiv.innerHTML = '';

        weeklyArray.forEach((day) => {
            let weatherDay = loadSevenDay.loadDay(day);
            biWeeklyForecastDiv.append(weatherDay);
        })

    }

    return {loadContent, changeSevenDay};
})()