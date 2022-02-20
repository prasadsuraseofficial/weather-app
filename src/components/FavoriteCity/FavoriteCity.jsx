import React, { useState, useEffect } from "react"
import "./FavoriteCity.css"
import axios from "axios"
import { AiFillStar } from "react-icons/ai"
import { BiNavigation } from "react-icons/bi"
import { WEATHER_API_BASE_URI, WEATHER_API_KEY, MAPS_BASE_URI } from "../../config"

const FavoriteCity = (props) => {

    // const { isError, error, temp } = props.weatherInfoArray;

    const [temp, setTemp] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {

        // get weather data for passed city through redux
        // props.getWeatherDataArrayHandler(props.cityName);

        axios.get(`${WEATHER_API_BASE_URI}/?q=${props.cityName}&units=metric&appid=${WEATHER_API_KEY}`)
            .then(res => {
                setTemp(res.data.main);
                setError("");
            })
            .catch(err => {
                setError(`No Data Available for ${props.cityName} City!`);
            })
    }, []);

    return (
        <div className="favoritecity">
            {
                !error &&
                <>
                    <div className="favoritecity__head">
                        <h2>{props.cityName}</h2>
                        <AiFillStar className="icon" color="orange" />
                    </div>

                    <div className="favoritecity__body">
                        <div className="favoritecity__body--row">
                            <h1>
                                {temp.temp}
                                <sup>&#8451;</sup>
                            </h1>

                            <a href={`${MAPS_BASE_URI}/?api=1&destination=${props.cityName}`}
                                target="_blank" className="favoritecity__body--mapslink" >
                                <BiNavigation className="icon" />
                                <p>{props.cityName}</p>
                            </a>
                        </div>

                        <div className="favoritecity__body--row">
                            <p>Pressure: {temp.pressure}</p>

                            <p>Humidity: {temp.humidity}</p>
                        </div>
                    </div>
                </>
            }

            {error && <p>{error}</p>}

        </div>
    )
}

export default FavoriteCity