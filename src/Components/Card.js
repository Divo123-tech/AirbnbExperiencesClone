import React from "react";
import star from "../images/star.png";
import "./Card.css";


export default function Card(props) {
  console.log(props.item);
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card-container">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        src={require("../images/" + props.item.coverImg)}
        alt="swimmer"
        width="225px"
      />
      <div className="rating-container">
        <img src={star} alt="star" />
        <p className="card-text">{props.item.stats.rating}</p>
        <p className="card-text grey">({props.item.stats.reviewCount}).</p>
        <p className="card-text grey">{props.item.location}</p>
      </div>
      <div className="desc-container">
        <p className="card-text ">{props.item.title}</p>
        <p className="card-text">
          <strong>From ${props.item.price}</strong> / person
        </p>
      </div>
    </div>
  );
}
