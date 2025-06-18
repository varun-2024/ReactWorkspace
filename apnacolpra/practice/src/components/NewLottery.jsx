import { useState } from "react";
import Ticket from "./Ticket.jsx";
import { genTicket } from "./helper.jsx";
import Button from "./Button.jsx";
export default function NewLottery({ n = 3, winCondition }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = winCondition(ticket);
  let buyTicket = () => {
    setTicket(genTicket(n));
  };
  return (
    <>
      <h1>New Lottery</h1>
      <Ticket ticket={ticket} />
      <Button action={buyTicket} />
      <h3 className="" style={{ color: isWinning ? "green" : "red" }}>
        {isWinning ? "Winning Ticket!" : "Try Again!"}
      </h3>
    </>
  );
}
