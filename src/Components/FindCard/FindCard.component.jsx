import React from "react";
import "./FindCard.css";

function FindCard(props) {
  const art = props.art;
  console.log("art", art);
  return (
    <video
      className="front-face"
      src={`img/video/${art}`}
      preload="true"
      autoPlay
      loop
      muted
      width="128"
      height="190"
    ></video>
  );
}
//   <button onClick={addToLS}>Click to add!</button>

export default FindCard;
