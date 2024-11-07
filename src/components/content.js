import clouds from "/src/assets/images/clouds.jpg";
import partiallyCloudy from "/src/assets/svgs/weather-partly-cloudy.svg";
import cloudy from "/src/assets/svgs/weather-cloudy.svg";
import sunny from "/src/assets/svgs/weather-sunny.svg";
import rainy from "/src/assets/svgs/weather-rainy.svg";
import snowy from "/src/assets/svgs/weather-snowy.svg";
import { headerController } from "../controllers/headercontroller";

export const createContent = (function() {
    const loadBackImage = () => {
        // set url and size to cover
        document.body.style.backgroundImage = `url(${clouds})`;
        document.body.style.backgroundSize = 'cover';
    }

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

    // load todays forecast
    const loadTodaysForecast = (data) => {
        const centralDiv = document.querySelector(".central-div");
        centralDiv.innerHTML = "";

        // current weather div
        const currentWeatherDiv = document.createElement('div');
        currentWeatherDiv.classList.add('current-weather-div');

        // current location
        const currentLocation = document.createElement('h3');
        currentLocation.classList.add("current-location");
        currentLocation.innerHTML = data.resolvedAddress;
        
        // day forecast DIV
        const currentForecastDiv = document.createElement('div');
        currentForecastDiv.classList.add('current-forecast-div');

        // get current conditions
        const currentCondition = document.createElement('p');
        currentCondition.classList.add("current-condition");
        currentCondition.innerText = data.currentConditions.conditions;

        // icon
        const weatherIcon = document.createElement('img');
        weatherIcon.classList.add("weather-icon");
        weatherIcon.src = getIcon(data.currentConditions.conditions);
        weatherIcon.style.width = '70px';

        // current forecast
        const currentForecast = document.createElement('p');
        currentForecast.classList.add('current-forecast');
        currentForecast.innerHTML = `${data.currentConditions.feelslike}°C`;

        // forecast div
        const forecastDiv = document.createElement('div');
        forecastDiv.classList.add('forecast-div');

        // append
        forecastDiv.append(currentCondition, currentForecast);
        currentForecastDiv.append(weatherIcon, forecastDiv);
        currentWeatherDiv.append(currentLocation, currentForecastDiv);
        centralDiv.append(currentWeatherDiv);
    }

    const getIcon = (condition) => {
        if (condition === "Partially cloudy") {return partiallyCloudy};
        if (condition === "Clear") {return sunny};
        if (condition === "Overcast") {return cloudy};
        if (condition.includes("Rain")) {return rainy};
        if (condition.includes("Snow")) {return snowy};
    }

    const loadSevenDayForecast = (dataArray) => {
        // central div
        const centralDiv = document.querySelector(".central-div");

        // store array
        headerController.biWeeklyArray = dataArray;

        // first 7 days
        const firstWeekArray = headerController.biWeeklyArray.slice(0, 7);

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
        forecastDay.innerText = `${day.feelslike}°C`;

        // datetime
        const dateTime = document.createElement('p');
        dateTime.classList.add('date-time');
        dateTime.innerText = day.datetime;

        // icon
        const weatherIcon = document.createElement('img');
        weatherIcon.classList.add('weather-icon-fourteen');
        weatherIcon.src = getIcon(condition);
        weatherIcon.style.width = '50px';
    

        // append 
        iconForecastDiv.append(weatherIcon, forecastDay);
        dayCont.append(iconForecastDiv, dateTime);

        return dayCont;
    }

    return {loadContent, loadTodaysForecast, loadSevenDayForecast};
})()