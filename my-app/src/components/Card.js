import React from "react";
import Star from "../images/star.PNG";
import Photo from "../images/Hero1.png";
import "../css/Card.css";

export default function Card () {
    return (
        <div className="card">
            <img src={Photo} alt="Resource Not Found" className="card--image"></img>
            <div className="card--stats">
                <img className="star" src={Star} alt="Resource not Found."></img>
                <span>5.0</span>
                <span className="gray">(6)</span>
                <span className="gray">USA</span>
            </div>
            <p className="card--header">Life Lessons with Katie Zaferes</p>
            <p className=""><span className="bold">From $136</span>/ person</p>
        </div>
    )
}