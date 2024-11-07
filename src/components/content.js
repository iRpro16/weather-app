export {createContent};
import clouds from "/src/assets/images/clouds.jpg";

const createContent = (function() {
    const loadBackImage = () => {
        document.body.style.backgroundImage = `url(${clouds})`;
        document.body.style.backgroundSize = 'cover';
    }

    const loadContent = () => {
        // load background image
        loadBackImage();
    }

    return {loadContent};
})()