import React from "react";
import "./StaticCard.css";

function StaticCard(props) {
  const cardback = props.cardback;
  const style = props.styles;
  return (
    <img
      src={`img/${cardback}`}
      alt={cardback}
      width="128px"
      height="190px"
      className={style ? style : "back-face"}
    ></img>
  );
}
//   <button onClick={addToLS}>Click to add!</button>

export default StaticCard;
