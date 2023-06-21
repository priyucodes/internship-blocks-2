import { useState } from "react";
import "./App.css";

function App() {
  const [boxPos, setBoxPos] = useState({
    x: 0,
    y: 0,
  });
  const handleBoxPos = posType => {
    if (posType === "up") {
      if (boxPos.y === 0) return;
      setBoxPos({
        ...boxPos,
        y: boxPos.y - 50,
      });
    } else if (posType === "right") {
      if (boxPos.x === 500) return;
      setBoxPos({
        ...boxPos,
        x: boxPos.x + 50,
      });
    } else if (posType === "left") {
      if (boxPos.x === 0) return;

      setBoxPos({
        ...boxPos,
        x: boxPos.x - 50,
      });
    } else if (posType === "bottom") {
      if (boxPos.y === 500) return;

      setBoxPos({
        ...boxPos,
        y: boxPos.y + 50,
      });
    }
  };
  return (
    <div className="mainContainer">
      <button
        disabled={boxPos.y === 0}
        onClick={() => handleBoxPos("up")}
        className="up"
      >
        Up
      </button>
      <div className="mainContainer__container">
        <button
          disabled={boxPos.x === 0}
          onClick={() => handleBoxPos("left")}
          className="left vertical"
        >
          Left
        </button>
        <main className="main">
          <div
            disabled={boxPos.y === 0}
            className="box"
            style={{ left: boxPos.x, top: boxPos.y }}
          ></div>
        </main>
        <button
          disabled={boxPos.x >= 450}
          onClick={() => handleBoxPos("right")}
          className="right vertical"
        >
          Right
        </button>
      </div>
      <button
        disabled={boxPos.y >= 450}
        onClick={() => handleBoxPos("bottom")}
        className="bottom"
      >
        Bottom
      </button>
    </div>
  );
}

export default App;
