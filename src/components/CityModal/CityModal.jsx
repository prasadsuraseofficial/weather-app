import React, { useState, useEffect, Suspense } from "react"
import "./CityModal.css"
import axios from "axios";
import RenderCities from "./RenderCities";
import { API_BASE_URI } from "../../config"

// const RenderCities = React.lazy(() => import("./RenderCities"))

const CityModal = (props) => {

    // city list for popup
    const [cities, setCities] = useState([]);
    const [filteredCities, setfilteredCities] = useState([]);

    useEffect(() => {

        // own api
        axios.get(API_BASE_URI).then(res => {
            setCities(res.data);
            setfilteredCities(res.data);
            console.log(res.data)
        }).catch(err => alert(err));

        // old api (got broke)
        // axios.post(API_BASE_URI, { "country": "india" }).then(res => {
        //     setCities(res.data.data);
        //     setfilteredCities(res.data.data);
        //     console.log(res.data.data)
        // }).catch(err => alert(err));
    }, []);

    return (
        <div className="citymodal">
            <h4>Add New City</h4>

            <hr />

            <input type="text" placeholder="Start Typing..." />

            <hr />

            {/* No need of suspese as I already Implemented React-Window */}
            {/* <Suspense fallback={<h1 style={{ padding: "5rem" }}>Load</h1>}> */}
            {/* {console.log(cities)} */}
            {(filteredCities.length > 0) &&
                <RenderCities cities={filteredCities} setActiveCity={props.setActiveCity} addNewCity={props.addNewCity} />
            }
            {/* </Suspense> */}
        </div >
    )
}

export default CityModal