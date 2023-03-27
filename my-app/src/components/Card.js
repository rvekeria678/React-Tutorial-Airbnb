import React from "react";
import "../css/Card.css";

export default function Card (props) {
    console.log("IMAGE PATH -> ",props.img);
    const img_link = props.img;
    return (
        <div className="card">
            <img src={img_link} alt="Resource Not Found!" className="card--image"></img>
            <div className="card--stats">
                <img className="star" src={require("../images/star.PNG")} alt="Resource not Found."></img>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount})</span>
                <span claddddddddssName="gray">{props.country}</span>
            </div>
            <p className="card--header">{props.title}</p>
            <p className=""><span className="bold">From ${props.price}</span>/ person</p>
        </div>
    )
}