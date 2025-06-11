import { useState } from "react";
import Ticketnumber from "./Ticketnumber";
export default function Ticket({ ticket }) {
  return (
    <>
      <div className="ticket">
        <h2>Ticket</h2>
        {ticket.map((num, idx) => (
          <Ticketnumber key={idx} num={num} />
        ))}
      </div>
    </>
  );
}
