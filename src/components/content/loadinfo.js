import sunrise from "/src/assets/svgs/weather-sunset-up.svg";
import sunset from "/src/assets/svgs/weather-sunset-down.svg";
import windy from "/src/assets/svgs/weather-windy.svg";
import drop from "/src/assets/svgs/water-outline.svg";

export const loadInfo  = (function() {
    const loadForecastInfo = (data) => {
        // get central div
        const centralDiv = document.querySelector('.central-div');

        // observations
        const observationsHeading = document.createElement('h3');
        observationsHeading.classList.add('observations-heading');
        observationsHeading.innerText = 'Observations';

        // info container
        const infoCont = document.createElement('div');
        infoCont.classList.add('info-cont');

        // inner info cont for centering
        const innerInfoCont = document.createElement('div');
        innerInfoCont.classList.add('inner-info-cont');

        // create info
        const sunriseDiv = createInfo('Sunrise', data.currentConditions.sunrise);
        const sunsetDiv = createInfo('Sunset', data.currentConditions.sunset);
        const humidityDiv = createInfo("Humidity", data.currentConditions.humidity);
        const windSpeedDiv = createInfo("Windspeed", data.currentConditions.windspeed);

        // append
        innerInfoCont.append(sunriseDiv, sunsetDiv, humidityDiv, windSpeedDiv);
        infoCont.append(observationsHeading, innerInfoCont);
        centralDiv.append(infoCont);
    }

    // create info div
    const createInfo = (header, data) => {
        // create info div
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info-div');

        // header
        const infoHeader = document.createElement('h3');
        infoHeader.innerText = header;

        // info
        const displayInfo = document.createElement('div');
        if (header === 'Humidity') {
            displayInfo.innerText = `${data} %`;
        } else if (header === 'Windspeed') {
            displayInfo.innerText = `${data} km/h`;
        } else {
            displayInfo.innerText = data;
        }

        // svg
        const displaySVG = document.createElement('img');
        displaySVG.classList.add('info-svg');
        displaySVG.src = getIcon(header);
        displaySVG.style.width = "50px";

        // append
        infoDiv.append(infoHeader, displayInfo, displaySVG);

        return infoDiv;
    }

    // get icon
    const getIcon = (header) => {
        if (header === 'Sunrise') return sunrise;
        if (header === 'Sunset') return sunset;
        if (header === 'Windspeed') return windy;
        if (header === 'Humidity') return drop;
    }

    return {loadForecastInfo};
})();