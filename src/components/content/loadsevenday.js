import { contentController } from "../../controllers/contentcontroller";
import { headerController } from "../../controllers/headercontroller";
import { loadToday } from "./loadtoday";

export const loadSevenDay = (function() {
    // load first seven days upon loading
    const loadSevenDayForecast = (dataArray) => {
        // central div
        const centralDiv = document.querySelector(".central-div");

        // first 7 days
        const firstWeekArray = dataArray.slice(1, 8);

        // days weather div
        const daysWeatherDiv = document.createElement('div');
        daysWeatherDiv.classList.add('days-weather-div');

        // weekly cont
        const weeklyCont = document.createElement('div');
        weeklyCont.classList.add('weekly-cont');

        // daily heading
        const weekly = document.createElement("h3");
        weekly.classList.add("weekly");
        weekly.innerText = 'Weekly';

        // buttons cont
        const arrowsCont = document.createElement('div');
        arrowsCont.classList.add('arrows-cont');

        // left arrow
        const leftArrow = document.createElement('button');
        leftArrow.classList.add('left-arrow');
        leftArrow.innerText = '<';

        // right arrow
        const rightArrow = document.createElement('button');
        rightArrow.classList.add('right-arrow');
        rightArrow.innerText = '>';

        // 14 day forecast DIV
        const biWeeklyForecastDiv  = document.createElement('div');
        biWeeklyForecastDiv.classList.add('bi-weekly-forecast');

        // append
        firstWeekArray.forEach((day) => {
            let weatherDay = loadDay(day);
            biWeeklyForecastDiv.append(weatherDay);
        })
        arrowsCont.append(leftArrow, rightArrow);
        weeklyCont.append(weekly, arrowsCont);
        daysWeatherDiv.append(weeklyCont, biWeeklyForecastDiv);
        centralDiv.append(daysWeatherDiv);
    }

    // create div for each day
    const loadDay = (day) => {
        // cont to append to and return
        const dayCont = document.createElement('div');
        dayCont.classList.add('day-cont');

        // icon forecast div
        const iconForecastDiv = document.createElement("div");
        iconForecastDiv.classList.add("icon-forecast-div");

        // conditions
        const condition = day.conditions;

        // feels like
        const forecastDay = document.createElement('p');
        forecastDay.classList.add('forecast-day');
        // set inner text to Celsius right away
        forecastDay.innerText = `${day.feelslike}°C`;
        
        // if button returns true
        let convTrue = headerController.getConvBtn();
        if (convTrue) {
            forecastDay.innerText = contentController.switchToFarenheight(forecastDay.innerText);
        } else {
            forecastDay.innerText = `${day.feelslike}°C`;
        }

        // datetime
        const dateTime = document.createElement('p');
        dateTime.classList.add('date-time');
        dateTime.innerText = day.datetime;

        // icon
        const weatherIcon = document.createElement('img');
        weatherIcon.classList.add('weather-icon-fourteen');
        weatherIcon.src = loadToday.getIcon(condition);
        weatherIcon.style.width = '50px';
    

        // append 
        iconForecastDiv.append(weatherIcon, forecastDay);
        dayCont.append(iconForecastDiv, dateTime);

        return dayCont;
    }
    return {loadSevenDayForecast, loadDay};
})();