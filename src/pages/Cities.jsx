import { useState, useEffect } from "react"
// import axios from "axios";
import "./Cities.css"
import { AiOutlineStar, AiOutlinePlusSquare as PlusButton } from "react-icons/ai"
import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css';

import Wrapper from "../components/Wrapper/Wrapper"
import CityRow from "../components/CityRow/CityRow"
import CityModal from "../components/CityModal/CityModal";
import WeatherInfo from "../components/WeatherInfo/WeatherInfo";

const Cities = () => {

    const [activeCity, setActiveCity] = useState("Select City");
    const [savedCities, setSavedCities] = useState([]);

    // adds new city to the panel
    const addNewCity = (cityName) => {
        setSavedCities(prevSavedCities => [...prevSavedCities, cityName]);
    }

    return (
        <div className="cities">

            {/* left side section - cities list */}
            <Wrapper className="citylist__wrapper">
                <div className="cities__head">
                    <h3>Cities</h3>
                    <Popup trigger={<button style={{ backgroundColor: "white", border: "none", outline: "none" }}><PlusButton className="icon" color="#022C51" /></button>} modal>
                        <CityModal setActiveCity={setActiveCity} addNewCity={addNewCity} />
                    </Popup>
                </div>

                <div className="cities__rows">
                    {
                        savedCities.length > 0 && savedCities.map((city) => {
                            return (
                                <CityRow key={city} cityName={city} temp={45}
                                    onClick={() => setActiveCity(city)} />
                            )
                        })
                    }
                </div>
            </Wrapper>

            {/* right side section - wether info */}
            <Wrapper className="wetherinfo__wrapper">
                <div className="cities__head">
                    <h3>{activeCity}</h3>
                    <AiOutlineStar className="icon" color="orange" />
                </div>

                <WeatherInfo activeCity={activeCity} />
            </Wrapper>
        </div>
    )
}

export default Cities