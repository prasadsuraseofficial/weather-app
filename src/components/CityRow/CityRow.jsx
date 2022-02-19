import "./CityRow.css"
import { FcPlus } from "react-icons/fc"

const CityRow = (props) => {
    return (
        // <div className={`cityrow ${props.className}`} onClick={props.onClick}>
        <div className={`cityrow ${props.className}`} onClick={() => props.addNewCity}>

            <h3 id="cityrow__title">{props.cityName}</h3>

            {props.temp ? <p>{props.temp} &#8451;</p> : <FcPlus className="icon" />}

        </div>
    )
}

export default CityRow