import React, { useLayoutEffect, useState } from "react";

import FindCard from "../FindCard/FindCard.component";
import StaticCard from "../StaticCard/StaticCard.component";
import "./MemoryBoard.css";

function MemoryBoard(props) {
  let cardback = props.cardback;
  let refresh = props.refreshFunk;

  const [startGame, setStartGame] = useState([]);
  let [score, setScore] = useState(0);
  const [randomNr, setRandomNr] = useState([]);
  const [victory, setVictory] = useState(false);

  function getAllCards() {
    const cards = { ...localStorage };

    const array = Object.values(cards);

    setStartGame(array);
  }

  useLayoutEffect(() => {
    getAllCards();

    const random = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 6)
    );

    setRandomNr(random);
  }, []);

  let lockBoard = false;
  let firstCard, secondCard;
  let hasFlippedCard = false;
  // var count = 0;

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

    checkForMatch();
  }

  setTimeout(() => {
    const cardsTotal = document.querySelectorAll(".memory-card");

    cardsTotal.forEach((card) => card.addEventListener("click", flipCard));
  }, 1000);

  function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    if (isMatch === true) {
      disableCards();
      setScore(score + 1);
      let match = new Audio("audios/match.mp3");
      match.volume = 0.1;
      match.play();

      if (score + 1 === startGame.length) {
        console.log("you won!");
        const victory = new Audio("audios/victory.mp3");
        victory.volume = 0.2;
        victory.play();
        setVictory(true);
      }
    } else unflipCards();
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
    }, 1000);
  }
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  return (
    <div className="memoryBoard" key={randomNr}>
      <div id="scoreHolder">
        Your Score: {score}
        <button className="resetButton" onClick={refresh}>
          Start a new game with new cards! &#128260;
        </button>
        {victory ? <div className="winning">You won!!!</div> : null}
      </div>
      {startGame.length === 0 ? (
        <div className="hint">Add some cards first!</div>
      ) : (
        <div className="memory-game">
          {startGame?.map((card) => (
            <React.Fragment key={card}>
              <div
                className={
                  "memory-card order-" + randomNr[startGame.indexOf(card)]
                }
                data-framework={card}
              >
                <FindCard art={card} key={card} />
                <StaticCard cardback={cardback} />
              </div>
            </React.Fragment>
          ))}
          {startGame.map((card) => (
            <React.Fragment key={card}>
              <div
                className={
                  "memory-card order-" + randomNr[startGame.indexOf(card) / 2]
                }
                data-framework={card}
              >
                <FindCard art={card} key={card} />
                <StaticCard cardback={cardback} />
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

export default MemoryBoard;
