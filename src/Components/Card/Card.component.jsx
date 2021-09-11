import React from "react";
import "./Card.css";

function Card(props) {
  const product = props.product;
  const key = props.keyz;
  const AddCard = (e) => {
    e.preventDefault();
    localStorage.setItem(key, product);
  };
  const RemoveCard = (e) => {
    e.preventDefault();
    localStorage.removeItem(key, product);
  };
  return (
    <div className="cardBody">
      <div className="artHolder">
        <video
          src={`img/video/${product}`}
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
