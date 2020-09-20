import React from 'react'
import "./Header.css"
import Logo from "../img/Logo2.png"
import { Link } from "react-router-dom"
function Header() {
    return (
        <nav className="header">
            {/*Logo */}
            <Link to="/login">
                <img src={Logo} alt="amazon-logo" className="header__logo" />
            </Link>
            {/*search box */}
            
            {/*3 links */}
            {/*basket */}
        </nav>
    )
}

export default Header
