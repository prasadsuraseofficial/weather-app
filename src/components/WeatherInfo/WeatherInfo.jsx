import { useState, useEffect } from "react"
import axios from "axios"
import "./WeatherInfo.css"
import { WEATHER_API_BASE_URI, WEATHER_API_KEY, WEATHER_ICON_BASE_URI } from "../../config"

const WeatherInfo = ({ activeCity }) => {

    const [weatherData, setWeatherData] = useState([]);
    const [error, setError] = useState("");
    const [temp, setTemp] = useState("");

    useEffect(() => {
        if (activeCity !== "Select City") {
            axios.get(`${WEATHER_API_BASE_URI}/?q=${activeCity}&units=metric&appid=${WEATHER_API_KEY}`)
                .then(res => {
                    setWeatherData(res.data.weather[0]);
                    setTemp(res.data.main);
                    console.log(res.data);
                    setError("");
                })
                .catch(err => {
                    // console.error(err);
                    setError(`No Data Available for ${activeCity} City!`);
                })
        }
    }, [activeCity]);

    return (
        <div className="weatherinfo">

            {activeCity !== "Select City" ? <h2>{activeCity} [{temp.temp}&#8451;]</h2> : <p className="weatherinfo__error">No City Selected, Click On The Plus Icon To Add Your First City!</p>}

            {error && <p className="weatherinfo__error">{error}</p>}

            {
                (!error && activeCity !== "Select City") && (
                    <div className="weatherinfo__body">
                        <img src={`${WEATHER_ICON_BASE_URI}/${weatherData.icon}@4x.png`} alt="icon" />

                        <h3>{weatherData.main} ({weatherData.description})</h3>

                        <h4>Pressure: {temp.pressure} | Humidity: {temp.humidity} | Min Temp: {temp.temp_min} | Max Temp: {temp.temp_max}</h4>

                        {/* <p>{JSON.stringify(weatherData)}</p> */}
                    </div>
                )
            }
        </div >
    )
}

export default WeatherInfo