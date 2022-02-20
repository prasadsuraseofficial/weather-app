import axios from "axios"

import {ADD_NEW_CITY, UPDATE_ACTIVE_CITY, ADD_FAVORITE_CITY, GET_WEATHER_DATA, GET_WEATHER_DATA_ARRAY} from "../constants"
import { WEATHER_API_BASE_URI, WEATHER_API_KEY } from "../../config"

// runs when CityRow is clicked from CityModal component
export const addNewCity = (data) => {
    return({
        type: ADD_NEW_CITY,
        data: data
    })
}

// runs when CityRow is clicked from Cities page
export const activeCity = (data) => {
    return({
        type: UPDATE_ACTIVE_CITY,
        data: data
    })
}

export const addFavoriteCity = (data) => {
    return({
        type: ADD_FAVORITE_CITY,
        data: data
    })
}

// get weatherData for city page 
export const getWeatherInfo = (data) => {
    return ({
            type: GET_WEATHER_DATA,
            data: data
    });
}

// // get weather info for home page cards
// export const getWeatherInfoArray = (data) => {
//     return ({
//             type: GET_WEATHER_DATA_ARRAY,
//             data: data
//     });
// }

// ----------------------------

// get weather data
const fetchWeatherData = (city) => {
    return new Promise((resolve, reject) => {
        axios.get(`${WEATHER_API_BASE_URI}/?q=${city}&units=metric&appid=${WEATHER_API_KEY}`)
        .then(res => {
            resolve({
               weatherData: res.data.weather[0],
               temp: res.data.main,
               isError: false,
               error: ""
           });
        })
        .catch(err => {
            reject({
                weatherData: {},
                temp: {},
                isError: true,
                error: err
            })
        })
})
}

// thunk is used as a middleware
export const getWeatherData = (city) => {

    return async (dispatch) => {

        const weatherData = await fetchWeatherData(city);

        dispatch(getWeatherInfo(weatherData));
    };
}

// // to get the array of weathers
// export const getWeatherDataArray = (city) => {

//     return async (dispatch) => {

//         const weatherData = await fetchWeatherData(city);

//         dispatch(getWeatherInfoArray(weatherData));
//     };
// }