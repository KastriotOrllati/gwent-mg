import React, { useState, useLayoutEffect } from "react";
import "./SelectCards.css";

import Card from "../Card/Card.component";

function SelectCards(props) {
  const [cards, setCards] = useState({});

  function getAllCards() {
    const allCards = { ...localStorage };
    //const array = Object.values(cards);

    setCards(allCards);
  }
  console.log(cards);
  useLayoutEffect(() => {
    getAllCards();
  }, []);
  return (
    <div>
      <h1>hello from select</h1>
      <div className="cardSelector">
        {Object.keys(cards).map((key, i) => (
          <Card card={cards[key]} key={i} keyz={i + 1} />
        ))}
      </div>
    </div>
  );
}

export default SelectCards;
