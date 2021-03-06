import axios from 'axios'

const API_KEY = "f2674758cea1806f53ee7f8e3f70d69f";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('request: ',request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
};