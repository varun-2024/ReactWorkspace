import { useState } from "react";

export default function Lottery() {
  function GenerateTicket(n) {
    let Arr = new Array(n);
    for (let i = 0; i < n; i++) {
      Arr[i] = Math.floor(Math.random() * 10);
    }
    return Arr;
  }
  function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  let [ticket, setTicket] = useState(GenerateTicket(3));
  let isWinning = sum(ticket) === 15;
  return (
    <>
      <h1 className="">Lottery Game</h1>
      <>
        {ticket.map((num, index) => (
          <span key={index}>{num}</span>
        ))}
      </>
      <h3 className=""> {isWinning && "Congratulations You Won!!!"}</h3>
      <button className="" onClick={() => setTicket(GenerateTicket(3))}>
        Play
      </button>
    </>
  );
}
