import React from 'react'
import "./Home.css"
import Product from "./Product";

function Home() {
    return (

        <div className="home">

            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" className="home__image" />
            <div className="home__row">
                <Product className=""
                    title="Falwedi 12 in 1 Triple Display Only for MacBook Air Pro, USB C Hub with 2 HDMI & VGA, PD3.0, Ethernet, SD TF Card Reader, 4 USB Port, Mic/Audio, Type C Adapter Docking Station for More MAC System"
                    image="https://m.media-amazon.com/images/I/51M+PV8YIwL._AC_SL260_.jpg"
                    price={44.99}
                    rating={3} />
                <Product className=""
                    title="
                    Multi-Device Keyboard for Mac OS/ iOS/ iPad OS, Jelly Comb Bluetooth Keyboard for MacBook Pro/Air, iMac, iPhone, iPad Pro/ Air/ Mini, New iPad| Connect Up To 3 Devices (Space Gray, Rechargeable)"
                    image="https://m.media-amazon.com/images/I/416tTEKpzlL._AC_SR250,230_.jpg"
                    price={12}
                    rating={3} />
                             <Product className=""
                    title="
                    Multi-Device Keyboard for Mac OS/ iOS/ iPad OS, Jelly Comb Bluetooth Keyboard for MacBook Pro/Air, iMac, iPhone, iPad Pro/ Air/ Mini, New iPad| Connect Up To 3 Devices (Space Gray, Rechargeable)"
                    image="https://m.media-amazon.com/images/I/416tTEKpzlL._AC_SR250,230_.jpg"
                    price={12}
                    rating={3} />
                             <Product className=""
                    title="
                    Multi-Device Keyboard for Mac OS/ iOS/ iPad OS, Jelly Comb Bluetooth Keyboard for MacBook Pro/Air, iMac, iPhone, iPad Pro/ Air/ Mini, New iPad| Connect Up To 3 Devices (Space Gray, Rechargeable)"
                    image="https://m.media-amazon.com/images/I/416tTEKpzlL._AC_SR250,230_.jpg"
                    price={12}
                    rating={3} />
                    
            </div>
            <div className="home__row">
            <Product className=""
                    title="Rechargeable 2.4GHz Wireless Bluetooth Mouse, Jelly Comb Slim Noiseless Optical Wireless Mouse with Bluetooth, USB or Type C Connection,Easy-Switch up to 3 Device MS04"
                    image="https://images-na.ssl-images-amazon.com/images/I/615lnzu9qgL._AC_SX679_.jpg"
                    price={12}
                    rating={4} />
                <Product className=""
                    title="Rechargeable 2.4GHz Wireless Bluetooth Mouse, Jelly Comb Slim Noiseless Optical Wireless Mouse with Bluetooth, USB or Type C Connection,Easy-Switch up to 3 Device MS04"
                    image="https://images-na.ssl-images-amazon.com/images/I/615lnzu9qgL._AC_SX679_.jpg"
                    price={12}
                    rating={4} />
                <Product className=""
                    title="
Roll over image to zoom in
Travel Laptop Backpack, Business Anti Theft Slim Durable Laptops Backpack with USB Charging Port, Water Resistant College School Computer Bag Gifts for Men & Women Fits 15.6 Inch Notebook, Grey"
                    image="https://images-na.ssl-images-amazon.com/images/I/81PE-Og4DlL._AC_SX679_.jpg"
                    price={100}
                    rating={5} />
            </div>
            <div className="home__row nakomichi">

                <Product 
                    title="Nakamichi NQ711B Bluetooth Car Digital Media MP3 Player Stereo Receiver with Built-in Bluetooth Hands-Free Calling Music Streaming USB AUX Inputs with Detachable Front Panel"
                    image="https://images-na.ssl-images-amazon.com/images/I/71wQZfr7EcL._AC_SX679_.jpg"
                    price={79.9}
                    rating={4} />

            </div>

        </div>


    )
}

export default Home
