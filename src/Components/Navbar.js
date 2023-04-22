import React from "react";
import logo from "../images/airbnb-logo.png"
import "./Navbar.css"

export default function Navbar(){
    return(
        <div className="navbar">
            <img src={logo} alt="logo" width="120px" />
        </div>
    )
}