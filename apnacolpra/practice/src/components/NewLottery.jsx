import { useState } from "react";
import Ticket from "./Ticket.jsx";
export default function NewLottery({ n = 3, winningSum = 15 }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = sum(ticket) === winningSum;
  function sum(arr) {
    return arr.reduce((curr, next) => curr + next);
  }
  let buyTicket = () => {
    setTicket(genTicket(n));
  };
  function genTicket(n) {
    let newTicket = [];
    for (let i = 0; i < n; i++) {
      newTicket.push(Math.floor(Math.random() * 10));
    }
    return newTicket;
  }
  return (
    <>
      <h1>New Lottery</h1>
      <Ticket ticket={ticket} />
      <button className="" onClick={buyTicket}>
        Buy Ticket
      </button>
      <h3 className="" style={{ color: isWinning ? "green" : "red" }}>
        {isWinning ? "Winning Ticket!" : "Try Again!"}
      </h3>
    </>
  );
}
