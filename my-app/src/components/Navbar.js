import React from "react";
import "../css/Navbar.css";
import logo from "../images/Airbnb_Logo.svg.png";

export default function Hero () {
    return (
        <nav>
            <img src={logo} alt="Resource not Found." className="nav--logo"></img>
        </nav>
    )
}