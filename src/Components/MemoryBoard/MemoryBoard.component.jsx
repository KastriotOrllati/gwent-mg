import React, { useEffect, useLayoutEffect } from "react";
import { useState } from "react/cjs/react.development";

import FindCard from "../FindCard/FindCard.component";
import StaticCard from "../StaticCard/StaticCard.component";
import "./MemoryBoard.css";

function MemoryBoard(props) {
  const [startGame, setStartGame] = useState({});
  //const [score, setScore] = useState(0);
  // const [flip, setFlip] = useState(false);

  function getAllCards() {
    const cards = { ...localStorage };

    setStartGame(cards);
  }

  let lockBoard = false;
  let firstCard, secondCard;
  let hasFlippedCard = false;
  let count = 0;

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;

    // if (checkForMatch()) {
    //   count++;
    // }
    if (checkForMatch()) {
      console.log("checkingformatch");
      // setScore(score + 1);
      count++;
    }
    console.log("countINSIDE", count);
  }
  console.log("countOutside", count);
  setTimeout(() => {
    const cardsTotal = document.querySelectorAll(".memory-card");

    // console.log(cardsTotal);
    cardsTotal.forEach((card) => card.addEventListener("click", flipCard));
  }, 3000);
  useLayoutEffect(() => {
    getAllCards();
  }, []);

  function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();

    if (isMatch == true) return true;
    else return false;
  }

  function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
  }

  function unflipCards() {
    if (firstCard && secondCard) {
      lockBoard = true;
    }

    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      resetBoard();
    }, 1500);
  }
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  function randomNr() {
    let random = Math.floor(Math.random() * 4);
    return random;
  }
  function randomNr2() {
    let random = Math.floor(Math.random() * 2 + 2);
    return random;
  }
  return (
    <div className="memory-game">
      {Object.keys(startGame).map((key, i) => (
        <React.Fragment key={i}>
          <div
            className={"memory-card order-" + randomNr()}
            data-framework={startGame[key]}
          >
            <FindCard art={startGame[key]} keyz={i} key={i} />
            <StaticCard cardback={"cardback.png"} />
          </div>
        </React.Fragment>
      ))}
      {Object.keys(startGame).map((key, i) => (
        <React.Fragment key={i}>
          <div
            className={"memory-card order-" + randomNr2()}
            data-framework={startGame[key]}
          >
            <FindCard art={startGame[key]} keyz={i} key={i} />
            <StaticCard cardback={"cardback.png"} />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default MemoryBoard;

// <button onClick={getAllCards}>Start Game</button>

//  for (const key in cards) {

// console.log(`${key} : ${cards[key]}`);
// }

// Object.keys(startGame).forEach((key, i) => {
//   let randomPos = Math.floor(Math.random() * 8);
//   startGame[key].style.order = randomPos;
// });

// cardsTotal.forEach((card) => {
//   let randomPos = Math.floor(Math.random() * 4);
//   // card.style.order = randomPos;
//   //
//   // card.className = ` .order${randomPos}`;
//   // console.log(newName);
//   // card.style.backgroundColor = "red";
//   setClassNames(randomPos);
//   console.log(classNames);
// });

// function shuffle() {
//   let randomPos = Math.floor(Math.random() * 4);
//   cardsTotal.forEach((card) => {
//     card.classList.add("order-" + `${randomPos}`);
//   });
//   console.log(cardsTotal);
// }
// shuffle();

// const cardsTotal = document.querySelectorAll(".memory-card");
