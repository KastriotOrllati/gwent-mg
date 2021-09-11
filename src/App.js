import React from "react";

import "./App.css";
// import CardBoard from "./Components/CardBoard/CardBoard";
// import StaticCard from "./Components/StaticCard/StaticCard.component";
import MemoryBoard from "./Components/MemoryBoard/MemoryBoard.component";

// <CardBoard />
function App() {
  localStorage.setItem("1", "ballista.mp4");
  localStorage.setItem("2", "executioner.mp4");
  localStorage.setItem("3", "chironex.mp4");
  localStorage.setItem("4", "greatsword.mp4");
  localStorage.setItem("5", "ihuarraquax.mp4");
  localStorage.setItem("6", "regis.mp4");
  return (
    <div className="App">
      <MemoryBoard />
    </div>
  );
}

export default App;

// <StaticCard cardback={"cardback.png"} />
