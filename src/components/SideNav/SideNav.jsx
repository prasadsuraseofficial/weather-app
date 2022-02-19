import React from 'react'
import "./SideNav.css"
import { FaHome, FaCity } from "react-icons/fa"
import { Link, NavLink } from 'react-router-dom'

const SideNav = () => {
    return (
        <div className="sidenav">
            <NavLink to="/" className="sidenav__item">
                <FaHome className="sidenav__item--icon icon" />
                <h4>Home</h4>
            </NavLink>

            <NavLink to="/cities" className="sidenav__item">
                <FaCity className="sidenav__item--icon icon" />
                <h4>Cities</h4>
            </NavLink>
        </div>
    )
}

export default SideNav