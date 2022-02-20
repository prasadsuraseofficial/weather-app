import "./Cities.css"
import { AiOutlineStar, AiOutlinePlusSquare as PlusButton } from "react-icons/ai"
import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css';

// import Wrapper from "../components/Wrapper/Wrapper"
// import CityModal from "../components/CityModal/CityModal";
import WeatherInfo from "../components/WeatherInfo/WeatherInfo";

import { Wrapper, CityModal } from "../components"
import CityRowContainer from "../containers/CityRowContainer";
import WeatherInfoContainer from "../containers/WeatherInfoContainer";

const Cities = (props) => {

    return (
        <div className="cities">

            {/* left side section - cities list */}
            <Wrapper className="citylist__wrapper">
                <div className="cities__head">
                    <h3>Cities</h3>
                    <Popup trigger={<button style={{ backgroundColor: "white", border: "none", outline: "none" }}><PlusButton className="icon" color="#022C51" /></button>} modal>
                        <CityModal />
                    </Popup>
                </div>

                <div className="cities__rows">
                    {
                        props.cities.length > 0 && props.cities.map((city) => {
                            return (
                                city === props.activeCity ?
                                    <CityRowContainer key={city} cityName={city} temp={45} value={2} className="cityrow__active" />
                                    : <CityRowContainer key={city} cityName={city} temp={45} value={2} />
                            )
                        })
                    }
                </div>
            </Wrapper>

            {/* right side section - wether info */}
            <Wrapper className="wetherinfo__wrapper">
                <div className="cities__head">
                    <h3>{props.activeCity}</h3>
                    <AiOutlineStar className="icon" color="orange" onClick={() => props.addFavoriteCityHandler(props.activeCity)} />
                </div>

                {/* {<WeatherInfoContainer activeCity={props.activeCity} />} */}
                <WeatherInfo activeCity={props.activeCity} />
            </Wrapper>
        </div>
    )
}

export default Cities