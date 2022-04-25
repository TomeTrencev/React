import React from "react";

export const Card = (props) => {

  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }


  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.img} className="card--image" />
      <div className="card--stats">
        <img src="https://www.pngall.com/wp-content/uploads/9/Golden-Star-PNG-Image-File.png" className="card--star" width="20" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) * </span>
        <span className="card--title">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p> <span className="card--price">From ${props.price} </span> / person</p>
    </div>
  )
}