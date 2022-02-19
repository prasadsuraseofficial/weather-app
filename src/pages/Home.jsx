import React from 'react'
import FavoriteCity from '../components/FavoriteCity/FavoriteCity'
import SideNav from '../components/SideNav/SideNav'

import "./Home.css"

const Home = () => {
    return (
        // <div className="home">

        <div className="home__cities">
            <div className="home__cities__head">
                <h2>My Favorite Cities</h2>
                <button>Add New City</button>
            </div>

            <div className="home__cities__cards">
                <FavoriteCity />
                <FavoriteCity />
                <FavoriteCity />
                <FavoriteCity />
                <FavoriteCity />
                <FavoriteCity />
                <FavoriteCity />
                <FavoriteCity />
                <FavoriteCity />
            </div>
        </div>

        // </div>
    )
}

export default Home