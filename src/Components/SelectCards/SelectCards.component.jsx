import React, { useState, useLayoutEffect } from "react";
import "./SelectCards.css";

import Card from "../Card/Card.component";

import CardData from "../../Utils/CARD_DATA";

//make an array and give the array to Card comp

function SelectCards(props) {
  const [cards, setCards] = useState([]);
  const [play, setPlay] = useState([]);
  // localStorage.setItem("1", "ballista.mp4");
  // localStorage.setItem("2", "executioner.mp4");
  // localStorage.setItem("3", "chironex.mp4");
  // localStorage.setItem("4", "greatsword.mp4");
  // localStorage.setItem("5", "ihuarraquax.mp4");
  // localStorage.setItem("6", "regis.mp4");

  // function getAllCards() {
  //   const allCards = { ...localStorage };
  //   //const array = Object.values(cards);

  //   setCards(allCards);
  // }
  // window.addEventListener("storage", () => {
  //   console.log(play);
  // });

  function localStorageRefresh() {
    const allCards = { ...localStorage };
    const array = Object.values(allCards);
    setPlay(array);
  }

  useLayoutEffect(() => {
    // getAllCards();
    setCards(CardData);
    localStorageRefresh();
  }, []);

  function RemoveCard(key, card) {
    localStorage.removeItem(key, card);
    console.log("key", key);
    console.log("card", card);
    setPlay(play.filter((card) => card[key + 1] !== key + 1));
    localStorageRefresh();
  }

  const AddCard = (key, card) => {
    localStorage.setItem(key, card);
    setPlay([...play, card]);
    localStorageRefresh();
  };
  console.log("setPlayArray", play);
  return (
    <div>
      <div className="cardSelector">
        <div className="poolCards">
          <h3>Select the cards you want to play with:</h3>
          <div className="allCards">
            {cards.map((card) => (
              <Card
                card={card.name}
                key={card.id}
                keyz={card.id}
                removeFunk={RemoveCard}
                addFunk={AddCard}
              />
            ))}
          </div>
        </div>
      </div>
      <br />
      <div className="myCards">
        <h1>Your Cards to play with</h1>
        <h2>You selected {play.length} out of 6!</h2>
        <div className="myCardsSelected">
          {play.map((p) => (
            <Card card={p} key={play.indexOf(p)} hide={"hide"} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SelectCards;

// {Object.keys(cards).map((key, i) => (
//   <Card card={cards[key]} key={i} keyz={i + 1} />
// ))}

// {Object.keys(cards).map((key, i) => (
//   <Card card={cards[key]} key={i} keyz={i + 1} />
// ))}

//   return (
//     <div>
//       <h1>hello from select</h1>
//       <div className="cardSelector">
//         {cards.map((card) => (
//           <div key={card.id}>
//             <Card card={card.name} key={card.id} keyz={card.id} />

//             <button onClick={() => AddCard(card.id, card.name)}>
//               Add to play
//             </button>
//             <button onClick={() => RemoveCard(card.id, card.name)}>
//               Remove Card
//             </button>
//           </div>
//         ))}
//       </div>
//       <div>Cards in play right now {length}</div>
//       <button onClick={showAllCards}>Show all Cards</button>
//     </div>
//   );
// }

// export default SelectCards;

// // {Object.keys(cards).map((key, i) => (
// //   <Card card={cards[key]} key={i} keyz={i + 1} />
// // ))}
