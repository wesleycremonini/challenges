import React, { useState } from "react";


function Challenge5() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [sum, setSum] = useState(0);

    function calculateTotal() {
        setSum(parseInt(number1) + parseInt(number2));
      }

    return(
        <>
        <label>Number 1: </label>
        <input type='number' 
            value={number1}
            onChange={e => setNumber1(e.target.value)}
            placeholder='0'
        />
        <br/>
        <label>Number 2: </label>
        <input type='number' 
            value={number2}
            onChange={e => setNumber2(e.target.value)}
            placeholder='0'
        />
        <br/>
        <button onClick={calculateTotal} >SUM!</button> 
        <h2>{sum}</h2>
        </>
    )
};

export default Challenge5;