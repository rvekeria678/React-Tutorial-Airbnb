import React from 'react';
import Hero_Image from '../images/Hero_Gallery.PNG'
import "../css/Hero.css";

export default function Hero() {
    return (
        <section className="Hero">
            <img src={Hero_Image} alt="Resource not found" className="hero--photo"></img>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all
                without leaving home.</p>
        </section>
    )
}