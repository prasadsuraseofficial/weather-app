import React, { useCallback } from 'react'
import "./CityModal.css"

import { FixedSizeList } from 'react-window'
import CityRowContainer from '../../containers/CityRowContainer'

const RenderCities = (props) => {

    const Row = useCallback(({ index, style }) => {

        const city = props.cityList[index] || "";

        return (
            <div style={style}>
                <CityRowContainer key={city} cityName={city} value={1} />
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
                    itemCount={props.cityList.length}
                    className="citymodal__cities"
                >
                    {Row}
                </FixedSizeList>
            }
        </>
    )
}

export default React.memo(RenderCities)