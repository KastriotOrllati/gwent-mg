import React from "react";
import "./Card.css";

function Card(props) {
  const card = props.card;
  const key = props.keyz;
  console.log("cardComp", card);
  const AddCard = (e) => {
    e.preventDefault();
    localStorage.setItem(key, card);
  };
  const RemoveCard = (e) => {
    e.preventDefault();
    localStorage.removeItem(key, card);
  };
  return (
    <div className="cardBody">
      <div className="artHolder">
        <video
          src={`img/video/${card}`}
          preload="true"
          autoPlay
          loop
          muted
          width="128"
          height="190"
        ></video>
      </div>
      <button onClick={AddCard}>Add to play</button>
      <button onClick={RemoveCard}>Remove </button>
    </div>
  );
}
//   <button onClick={addToLS}>Click to add!</button>

export default Card;
