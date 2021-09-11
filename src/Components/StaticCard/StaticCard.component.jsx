import React from "react";
import "./StaticCard.css";

function StaticCard(props) {
  const cardback = props.cardback;
  return (
    <img
      src={`img/${cardback}`}
      alt={cardback}
      width="128"
      height="190"
      className="back-face"
    ></img>
  );
}
//   <button onClick={addToLS}>Click to add!</button>

export default StaticCard;
