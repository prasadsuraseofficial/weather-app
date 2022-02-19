import React, { useCallback, useState } from 'react'
import "./CityModal.css"

import { FixedSizeList } from 'react-window'
import CityRow from '../CityRow/CityRow'

const RenderCities = (props) => {

    console.log(props.cities)

    const Row = useCallback(({ index, style }) => {

        const city = props.cities[index] || "";
        // const city = filteredCities[index] || "";

        return (
            <div style={style}>
                <CityRow key={city} cityName={city} onClick={() => {
                    props.addNewCity(city);
                    props.setActiveCity(city);
                }} />
            </div>
        )
    }, []);

    return (
        <>
            {
                <FixedSizeList
                    height={300}
                    width={600}
                    itemSize={55}
                    itemCount={props.cities.length}
                    // itemCount={filteredCities.length}
                    className="citymodal__cities"
                >
                    {Row}
                </FixedSizeList>
            }
        </>
    )
}

export default React.memo(RenderCities)