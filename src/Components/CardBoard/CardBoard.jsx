import React from "react";
import Card from "../Card/Card.component";
import "./CardBoard.css";

function CardBoard(props) {
  return (
    <div className="selectBoard">
      <Card product={"ballista.mp4"} keyz={1} />

      <Card product={"executioner.mp4"} keyz={2} />
      <Card product={"chironex.mp4"} keyz={3} />
      <Card product={"greatsword.mp4"} keyz={4} />
      <Card product={"ihuarraquax.mp4"} keyz={5} />
      <Card product={"regis.mp4"} keyz={6} />
    </div>
  );
}

export default CardBoard;

//  <button onClick={getAllCards}>Get all cards</button>
