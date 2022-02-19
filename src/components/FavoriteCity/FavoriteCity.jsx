import "./FavoriteCity.css"
import { AiOutlineStar, AiFillStar } from "react-icons/ai"

const FavoriteCity = () => {

    return (
        <div className="favoritecity">
            <div className="favoritecity__head">
                <h3>Pune</h3>
                {/* <AiOutlineStar className="icon" /> */}
                <AiFillStar className="icon" color="orange" />
            </div>

            <div>
                <h4>temp : 45deg</h4>
                <h4>temp : 45deg</h4>
                <h4>temp : 45deg</h4>
                <h4>temp : 45deg</h4>
                <h4>temp : 45deg</h4>
            </div>
        </div>
    )
}

export default FavoriteCity