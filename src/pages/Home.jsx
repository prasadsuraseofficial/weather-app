import React from 'react'
import "./Home.css"

import Popup from 'reactjs-popup'
import { CityModal } from '../components'
import FavoriteCity from '../components/FavoriteCity/FavoriteCity'
// import FavoriteCityContainer from '../containers/FavoriteCityContainer'

const Home = (props) => {

    return (
        // <div className="home">

        <div className="home__cities">
            <div className="home__cities__head">
                <h2>My Favorite Cities</h2>
                <Popup trigger={<button>Add New City</button>} modal>
                    <CityModal />
                </Popup>
            </div>

            <div className="home__cities__cards">
                {props.favoriteCities.length > 0 &&
                    props.favoriteCities.map((favCity) => {
                        return (
                            <FavoriteCity key={favCity} cityName={favCity} />
                            // <FavoriteCityContainer key={favCity} cityName={favCity} />
                        )
                    })
                }

                {/* fallback if no favorites */}
                {props.favoriteCities.length <= 0 && <h2 className="homecities__fallback">No Favorites Added, Go Ahead and Add One!</h2>}
            </div>
        </div>

        // </div>
    )
}

export default Home