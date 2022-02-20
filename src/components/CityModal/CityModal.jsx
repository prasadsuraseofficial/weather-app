import React, { useState, useEffect, Suspense } from "react"
import "./CityModal.css"
import axios from "axios";
import { RenderCities } from "../../components"
import { API_BASE_URI } from "../../config"
import cityNotFoundImg from "../../assets/no-city-found.gif"

// const RenderCities = React.lazy(() => import("./RenderCities"))

const CityModal = () => {

    // city list for popup
    const [cities, setCities] = useState([]);

    const [filteredCities, setfilteredCities] = useState([]);

    useEffect(() => {

        // own api
        axios.get(API_BASE_URI).then(res => {
            setCities(res.data);
            setfilteredCities(res.data);
        }).catch(err => alert(err));

        // old api (got broke)
        // axios.post(API_BASE_URI, { "country": "india" }).then(res => {
        //     setCities(res.data.data);
        //     setfilteredCities(res.data.data);
        //     console.log(res.data.data)
        // }).catch(err => alert(err));

    }, []);

    const filterHandler = (e) => {

        setfilteredCities("")
        const val = cities.filter((c) => {
            // if (c.toLowerCase().includes(e.target.value.toLowerCase())) {
            if (c.toLowerCase() === (e.target.value.toLowerCase())) {
                return c;
            }
        }
        )

        setfilteredCities(val);

        // console.log("val", filteredCities)
    }

    return (
        <div className="citymodal">
            <h4>Add New City</h4>

            <hr />

            <input type="text" placeholder="Start Typing..."
                onChange={filterHandler} />

            <hr />

            {/* No need of suspese as I already Implemented React-Window */}
            {/* <Suspense fallback={<h1 style={{ padding: "5rem" }}>Load</h1>}> */}
            {(filteredCities.length > 0) && <RenderCities cityList={filteredCities} />}
            {/* </Suspense> */}

            {(filteredCities.length <= 0) &&
                <div className="citymodal__fallback">
                    <img src={cityNotFoundImg} alt="No City Found" />
                    <p>No Matching City Found On API, Check Spelling or Try Another!</p>
                </div>
            }
        </div>
    )
}

export default CityModal