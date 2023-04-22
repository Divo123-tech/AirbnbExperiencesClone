import React from "react";
import collage from "../images/photo-grid.png";
import "./Hero.css"


export default function Hero() {
  return (
    <div>
      <div className="photo-container">
        <img src={collage} alt="collage" className="image"/>
      </div>
      <div className="text-container">
        <h1 className="hero-text title">Online Experiences</h1>
        <p className="hero-text caption">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
