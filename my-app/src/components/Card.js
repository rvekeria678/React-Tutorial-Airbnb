import React from "react";
import "../css/Card.css";

export default function Card (props) {
    console.log(props)
    return (
        <div className="card">
            <img src={require("../images/Hero1.png")} alt="Resource Not Found!" className="card--image"></img>
            <div className="card--stats">
                <img className="star" src={require("../images/star.PNG")} alt="Resource not Found."></img>
                <span>5.0</span>
                <span className="gray">(6)</span>
                <span className="gray">USA</span>
            </div>
            <p className="card--header">Life Lessons with Katie Zaferes</p>
            <p className=""><span className="bold">From ${props.price}</span>/ person</p>
        </div>
    )
}