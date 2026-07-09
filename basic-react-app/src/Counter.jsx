import { useEffect, useState } from "react";

export default function Counter() {
    let [count, setCount] = useState(0);

    let incCount = () => {
        setCount((currCount) => currCount + 1 );
    };

    useEffect(function printSomething() {
        console.log("this is a side-effect");
    })

    return (
        <div>
            <h3>count = {count}</h3>
            <button onClick={incCount}>+1</button>
        </div>
    );

}