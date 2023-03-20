import React from "react";
import "../css/Card.css";

export default function Card () {
    return (
        <div className="card">
            <img src="" alt="Resource Not Found" className="card--image"></img>
            <div className="card--stats">
                <img src=""></img>
                <span>5.0</span>
                <span>(6)</span>
                <span>USA</span>
            </div>
            <p className="card--header">Life Lessons with Katie Zaferes</p>
            <p className=""><span className="">From $136</span>/ person</p>
        </div>
    )
}