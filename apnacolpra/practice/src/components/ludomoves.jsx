import { useState } from "react";

export default function Ludoboard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
  let updateBlue = () => {
    console.log("Moves = ", moves);
    setMoves((prevMoves) => {
      console.log("Previous Moves:", prevMoves);
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });
  };
  let updateYellow = () => {
    console.log("Moves = ", moves);
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  };
  let updateGreen = () => {
    console.log("Moves = ", moves);
    setMoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 };
    });
  };
  let updateRed = () => {
    console.log("Moves = ", moves);
    setMoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
  };
  return (
    <>
      <p>Game Begins</p>
      <div className="board">
        <p>Blue Moves={moves.blue}</p>
        <button style={{ background: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Yellow Moves={moves.yellow}</p>
        <button
          style={{ background: "yellow", color: "black" }}
          onClick={updateYellow}
        >
          +1
        </button>
        <p>Green Moves={moves.green}</p>
        <button style={{ background: "green" }} onClick={updateGreen}>
          +1
        </button>
        <p>Red Moves={moves.red}</p>
        <button style={{ background: "red" }} onClick={updateRed}>
          +1
        </button>
      </div>
    </>
  );
}
