import { useState, useEffect } from "react"
import "./WeatherInfo.css"
import axios from "axios"
import { WEATHER_API_BASE_URI, WEATHER_API_KEY, WEATHER_ICON_BASE_URI } from "../../config"

const WeatherInfo = (props) => {

    const [weatherData, setWeatherData] = useState([]);
    const [temp, setTemp] = useState("");
    const [error, setError] = useState("");

    // const [humidity, setHumidity] = useState("");
    // const [pressure, setPressure] = useState("");
    // const [temp, setTemp] = useState("");
    // const [tempMin, setTempMin] = useState("");
    // const [tempMax, setTempMax] = useState("");
    // const [icon, setIcon] = useState("");
    // const [error, setError] = useState("");
    // const [mainText, setMainText] = useState("");
    // const [description, setDescription] = useState("");

    useEffect(() => {

        if (props.activeCity !== "Select City") {

            // get wether data through redux 
            // [having a bug while adding first city]
            // props.getWeatherDataHandler(props.activeCity);

            axios.get(`${WEATHER_API_BASE_URI}/?q=${props.activeCity}&units=metric&appid=${WEATHER_API_KEY}`)
                .then(res => {
                    // console.log(res.data)
                    setWeatherData(res.data.weather[0]);
                    setTemp(res.data.main);
                    setError("");
                })
                .catch(err => {
                    setError(`No Data Available for ${props.activeCity} City! ${err}`);
                })

            // // having bug
            // setHumidity(props.weatherInfo.temp.humidity);
            // setPressure(props.weatherInfo.temp.pressure);
            // setTempMin(props.weatherInfo.temp.temp_min);
            // setTempMin(props.weatherInfo.temp.temp_min);
            // setTemp(props.weatherInfo.temp.temp);
            // setDescription(props.weatherInfo.weatherData.description);
            // setIcon(props.weatherInfo.weatherData.icon);
            // setMainText(props.weatherInfo.weatherData.main);
            // setError(props.weatherInfo.error);
        }
    }, [props.activeCity]);



    return (
        <div className="weatherinfo">
            {
                props.activeCity !== "Select City" ? <h2>{props.activeCity} [{temp.temp}&#8451;]</h2>
                    : <h2 className="weatherinfo__fallback">Please Select a City to View Weather Info!</h2>
            }

            {error && <p className="weatherinfo__fallback">{error}</p>}

            {
                (!error && props.activeCity !== "Select City") && (
                    <div className="weatherinfo__body">
                        <img src={`${WEATHER_ICON_BASE_URI}/${weatherData.icon}@4x.png`} alt="icon" />

                        <h3>{weatherData.main} ({weatherData.description})</h3>

                        <h4>Pressure: {temp.pressure} | Humidity: {temp.humidity} | Min Temp: {temp.tempMin} | Max Temp: {temp.tempMax}</h4>

                    </div>
                )
            }
        </div >
    )
}

export default WeatherInfo