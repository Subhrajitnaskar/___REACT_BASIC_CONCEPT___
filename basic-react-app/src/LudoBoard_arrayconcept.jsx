import {useState} from "react";

export default function LudoBoard () {
    let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });   
    // let [count, setCount] = useState(0);
    let [arr, SetArr] = useState(["no moves"]);

    let updateBlue = () => {
        // moves.blue += 1;
        // console.log(`moves.blue = ${moves.blue}`);
        // setMoves({ ...moves, blue: moves.blue + 1});  // object ta spreate hocche akhane.
        // setMoves ((prevMoves) => {
        //     return { ...prevMoves, blue: prevMoves.blue + 1};
        // });
        // arr.push("blue moves");// jokhonoiu blue update hobe tokhon array te push hobe.
        // SetArr([...arr, "blue moves"]); old method.
        SetArr((prevArr) => {
            return [...prevArr, "blue moves"]; // use same thing as callback.
        });
        console.log(arr);
    };

    let updateYellow = () => {
        // moves.blue += 1;
        // console.log(`moves.blue = ${moves.blue}`);
        // setMoves({ ...moves, blue: moves.blue + 1});  // object ta spreate hocche akhane
        setMoves ((prevMoves) => {
            return { ...prevMoves, yellow: prevMoves.yellow + 1};
        });
    };

    return (<div>
        <p>Game begins!</p>
        <p>{arr}</p>
        <div className="board">
            <p>blue moves = {moves.blue}</p>
            <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
            <p>yellow moves = {moves.yellow}</p>
            <button style={{backgroundColor: "yellow" , color: "black"}} onClick={updateYellow}>+1</button>
            <p>Green moves = {moves.green}</p>
            <button style={{backgroundColor: "green"}}>+1</button>
            <p>red moves = {moves.red}</p>
            <button style={{backgroundColor: "red"}}>+1</button>
        </div>
    </div>);
}