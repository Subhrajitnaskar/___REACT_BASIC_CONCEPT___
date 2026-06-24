import { useState } from "react";
// import "./Lottery.css";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({ n=3, winningSum }) {
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    }

    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            {/* <button onClick={buyTicket}>Buy New Ticket</button> */}
            <Button action={buyTicket} />
            <h3>{isWinning && "congratulation, you won!"}</h3>
        </div>
    );
}