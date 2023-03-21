import React from "react";
import "../css/Navbar.css";

export default function Hero () {
    return (
        <nav>
            <img src={require("../images/Airbnb_Logo.svg.png")} alt="Resource not Found." className="nav--logo"></img>
        </nav>
    )
}