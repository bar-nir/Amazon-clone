import React from 'react'
import "./Header.css"
import Logo from "../img/Logo2.png"
import { Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Header() {
    return (
        <nav className="header">
            {/*Logo */}
            <Link to="/login">
                <img src={Logo} alt="amazon-logo" className="header__logo" />
            </Link>
            {/*search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            {/*3 links */}
            <div className="header__nav">
                <Link className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello bar</span>
                        <span className="header__optionLineTwo">Sign in</span>
                    </div>
                </Link>
                <Link className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne" >Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne" >Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

            </div>
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon></ShoppingBasketIcon>
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header
