import partiallyCloudy from "/src/assets/svgs/weather-partly-cloudy.svg";
import cloudy from "/src/assets/svgs/weather-cloudy.svg";
import sunny from "/src/assets/svgs/weather-sunny.svg";
import rainy from "/src/assets/svgs/weather-rainy.svg";
import snowy from "/src/assets/svgs/weather-snowy.svg";
import { headerController } from "../../controllers/headercontroller";
import { contentController } from "../../controllers/contentcontroller";

export const loadToday = (function() {
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
        // set inner text to Celsius right away
        currentForecast.innerHTML = `${data.currentConditions.feelslike}°C`;

        // get button
        let convTrue = headerController.getConvBtn();
        if (convTrue) {
            currentForecast.innerText = contentController.switchToFarenheight(currentForecast.innerText);
        } else {
            currentForecast.innerText = `${data.currentConditions.feelslike}°C`;
        }

        // forecast div
        const forecastDiv = document.createElement('div');
        forecastDiv.classList.add('forecast-div');

        // append
        forecastDiv.append(currentCondition, currentForecast);
        currentForecastDiv.append(weatherIcon, forecastDiv);
        currentWeatherDiv.append(currentLocation, currentForecastDiv);
        centralDiv.append(currentWeatherDiv);
    }

    // get icon based on condition
    const getIcon = (condition) => {
        if (condition === "Partially cloudy") return partiallyCloudy;
        if (condition === "Clear") return sunny;
        if (condition === "Overcast") return cloudy;
        if (condition.includes("Rain")) return rainy;
        if (condition.includes("Snow")) return snowy;
    }
    return {loadTodaysForecast, getIcon};
})();