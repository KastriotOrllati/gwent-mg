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

  console.log(cardback);
  return (
    <div className="App">
      <h1>Hello</h1>
      <nav>
        <button onClick={() => setActive("homepage")}>Homepage</button>
        <button onClick={() => setActive("selectCards")}>Select Cards</button>
        <button onClick={() => setActive("playgame")}>Play the game</button>
      </nav>
      {active === "homepage" && (
        <div className="cardbacks">
          <button onClick={(e) => setCardback("cardback.png")}>
            <StaticCard cardback={"cardback.png"} styles={"newStyle"} />
          </button>
          <button onClick={(e) => setCardback("cardback1.png")}>
            <StaticCard cardback={"cardback1.png"} styles={"newStyle"} />
          </button>

          <button onClick={(e) => setCardback("cardback2.png")}>
            <StaticCard cardback={"cardback2.png"} styles={"newStyle"} />
          </button>
        </div>
      )}
      {active === "playgame" && <MemoryBoard cardback={cardback} />}
      {active === "selectCards" && <SelectCards />}
    </div>
  );
}

export default App;
// <MemoryBoard />

// <StaticCard cardback={"cardback.png"} />

//// "homepage":"https://kastriotorllati.github.io/gwent-mg/",
