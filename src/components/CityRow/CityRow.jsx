import "./CityRow.css"
import { FcPlus } from "react-icons/fc"

const CityRow = (props) => {

    return (
        <div className={`cityrow ${props.className}`}
            onClick={() => {
                // if this CityRow component is used in popup
                props.value === 1 && props.addNewCityHandler(props.cityName);

                //if this CityRow component is used in Cities page to display city list 
                props.value === 2 && props.activeCityHandler(props.cityName)
            }}>

            <h3 id="cityrow__title">{props.cityName}</h3>

            {/* show temp only if available */}
            {props.temp ? <p>{props.temp} &#8451;</p> : <FcPlus className="icon" />}

        </div >
    )
}

export default CityRow