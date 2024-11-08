import { headerController } from "./headercontroller";
import { createContent } from "../components/content";

export const contentController = (function() {
    // init
    const init = () => {
        const content = document.querySelector('.content');
        content.addEventListener('click', handleContentClick);
    }

    // handle clicks
    const handleContentClick = (e) => {
        // handles second week
        if (e.target.classList.contains('right-arrow')) {
            // get second week
            const secondWeekArray = headerController.biWeeklyArray.slice(-7);
            createContent.changeSevenDay(secondWeekArray);
        }

        // handles first week
        if (e.target.classList.contains('left-arrow')) {
            // get first week
            const firstWeekArray = headerController.biWeeklyArray.slice(1, 8);
            createContent.changeSevenDay(firstWeekArray);
        }
    }
    
    // function to fetch API
    const fetchWeatherAPI = async(url) => {
        // try / catch
        try {
            // fetch url
            const response = await fetch(url, {mode:'cors'});
            if (response.ok) {
                return response.json();
            }
        // catch error
        } catch (error) {
            console.error('Error fetching data', error);
            return null;
        }
    }

    // function to fetch data 
    const fetchData = async(location) => {
        // get location in url
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=32DPJC49QYH7EAHNB45B5CKBY&contentType=json`;

        // await fetched data
        const data = await fetchWeatherAPI(url);
        return data;
    }

    return {fetchData, init}
})();