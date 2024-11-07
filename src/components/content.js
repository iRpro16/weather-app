import clouds from "/src/assets/images/clouds.jpg";
import partiallyCloudy from "/src/assets/svgs/weather-partly-cloudy.svg";

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

    const loadWeatherInfo = (data) => {
        const content = document.querySelector(".content");
        content.innerHTML = "";

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
        currentForecast.innerHTML = `${data.currentConditions.feelslike}°C`;

        // forecast div
        const forecastDiv = document.createElement('div');
        forecastDiv.classList.add('forecast-div');

        // append
        forecastDiv.append(currentCondition, currentForecast);
        currentForecastDiv.append(weatherIcon, forecastDiv);
        currentWeatherDiv.append(currentLocation, currentForecastDiv);
        content.append(currentWeatherDiv);
    }

    const getIcon = (condition) => {
        if (condition === "Partially cloudy") {return partiallyCloudy};
    }

    return {loadContent, loadWeatherInfo};
})()