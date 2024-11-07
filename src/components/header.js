export {createHeader};
import magnifyIcon from "/src/assets/svgs/magnify.svg";


const createHeader = (function () {
    // load header
    const loadHeader = () => {
        // get header cont
        const header = document.querySelector('.header');

        // title
        const headerTitle = document.createElement('h1');
        headerTitle.classList.add('header-title');
        headerTitle.innerText = 'WEATHER';

        // text form
        const form = document.createElement('form');
        // text input
        const inputLocation = document.createElement('input');
        inputLocation.type = 'text';
        inputLocation.placeholder = 'Search for a city...';
        inputLocation.classList.add('input-location');
        // search
        const label = document.createElement('label');
        const submit = document.createElement('input');
        submit.type = 'submit';
        // svg
        const magnifySvg = document.createElement('img');
        magnifySvg.src = magnifyIcon;
        magnifySvg.classList.add('magnify-icon');
        magnifySvg.style.width = "25px";

        // append
        label.append(submit, magnifySvg);
        form.append(inputLocation, label);

        // toggle C/F
        const toggleTemp = document.createElement('button');
        toggleTemp.classList.add('toggle-temp');
        toggleTemp.innerHTML = 'toggle';
        header.append(headerTitle, form, toggleTemp);
    }
    return {loadHeader};
})();

