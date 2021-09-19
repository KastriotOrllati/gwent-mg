import React, { useState } from "react";

import "./App.css";
// import CardBoard from "./Components/CardBoard/CardBoard";
// import StaticCard from "./Components/StaticCard/StaticCard.component";
import MemoryBoard from "./Components/MemoryBoard/MemoryBoard.component";
import SelectCards from "./Components/SelectCards/SelectCards.component";
import StaticCard from "./Components/StaticCard/StaticCard.component";

// <CardBoard />
function App() {
  const [cardback, setCardback] = useState("cardback.png");
  const [active, setActive] = useState("homepage");
  // localStorage.setItem("1", "ballista.mp4");
  // localStorage.setItem("2", "executioner.mp4");
  // localStorage.setItem("3", "chironex.mp4");
  // localStorage.setItem("4", "greatsword.mp4");
  // localStorage.setItem("5", "ihuarraquax.mp4");
  // localStorage.setItem("6", "regis.mp4");

  const refresh = (e) => {
    e.preventDefault();
    setActive("selectCards");
  };

  console.log(cardback);
  return (
    <div className="App">
      <nav>
        <div className="navButtons">
          <div className="button-container">
            <div onClick={() => setActive("homepage")} className="buttonText">
              Homepage
            </div>
            <img
              src="https://trendygwentleman.com/static/img/borders/38057.png"
              alt="border"
              className="imgName"
            />
          </div>
        </div>
        <div className="navButtons">
          <div className="button-container">
            <div
              onClick={() => setActive("selectCards")}
              className="buttonText"
            >
              Select Cards
            </div>
            <img
              src="https://trendygwentleman.com/static/img/borders/38057.png"
              alt="border"
              className="imgName"
            />
          </div>
        </div>
        <div className="navButtons">
          <div className="button-container">
            <div onClick={() => setActive("playgame")} className="buttonText">
              Play the game
            </div>
            <img
              src="https://trendygwentleman.com/static/img/borders/38057.png"
              alt="border"
              className="imgName"
            />
          </div>
        </div>
      </nav>
      {active === "homepage" && (
        <div className="homepage">
          <div className="infoDiv">Select Your Cardback</div>
          <div className="cardbacks">
            <div
              className="hoverDiv"
              onClick={(e) => setCardback("cardback.png")}
            >
              <StaticCard cardback={"cardback.png"} styles={"newStyle"} />
            </div>
            <div
              className="hoverDiv"
              onClick={(e) => setCardback("cardback1.png")}
            >
              <StaticCard cardback={"cardback1.png"} styles={"newStyle"} />
            </div>

            <div
              className="hoverDiv"
              onClick={(e) => setCardback("cardback2.png")}
            >
              <StaticCard cardback={"cardback2.png"} styles={"newStyle"} />
            </div>
          </div>
        </div>
      )}
      {active === "playgame" && (
        <MemoryBoard cardback={cardback} refreshFunk={refresh} />
      )}
      {active === "selectCards" && <SelectCards />}
    </div>
  );
}

export default App;
// <MemoryBoard />

// <StaticCard cardback={"cardback.png"} />

//// "homepage":"https://kastriotorllati.github.io/gwent-mg/",
