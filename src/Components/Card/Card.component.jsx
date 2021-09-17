import React from "react";
import "./Card.css";

function Card(props) {
  const card = props.card;
  const key = props.keyz;
  const removeCard = props.removeFunk;
  const addCard = props.addFunk;
  const hide = props.hide;

  return (
    <div className="cardBody">
      <div className="artHolder">
        <video
          src={`img/video/${card}`}
          preload="true"
          autoPlay
          loop
          muted
          width="126"
          height="189"
        ></video>
      </div>
      <div className={`showButtons` + hide}>
        <button onClick={() => addCard(key, card)}>Add to play</button>
        <button onClick={() => removeCard(key, card)}>Remove </button>
      </div>
    </div>
  );
}
//   <button onClick={addToLS}>Click to add!</button>

export default Card;
