export {createContent};
import clouds from "/src/assets/images/clouds.jpg";

const createContent = (function() {
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

    const loadWeatherInfo = (location) => {

    }

    return {loadContent};
})()