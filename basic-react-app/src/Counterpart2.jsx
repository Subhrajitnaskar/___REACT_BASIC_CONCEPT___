import { useEffect, useState } from "react";

export default function Counter() {
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    let incCountx = () => {
        setCountx((currCount) => currCount + 1 );
    };

    let incCounty = () => {
        setCounty((currCount) => currCount + 1 );
    };

    useEffect(function printSomething() {
        console.log("this is a side-effect");
    } [countx] ); // sudhu countx tai side eeffect hisabe dakhabe console window te . [countx] aii aray ta [] arokom khali vabe pas kore akbar rerender hoowoa somoy console print hobe tachara jotobar rerender hok r hobe na . 
    

    return (
        <div>
            <h3>countx = {counxt}</h3>
            <button onClick={incCountx}>+1</button>
            <h3>county = {county}</h3>
            <button onClick={incCounty}>+1</button>
        </div>
    );

}