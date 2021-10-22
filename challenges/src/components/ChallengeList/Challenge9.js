import React, { useState } from "react";


function Challenge9() {
    const [decimal, setDecimal] = useState();

    function handleClick() {
        const binary = document.getElementById('binary').value;
        const error = document.getElementById('error');

        for (var i = 0; i < binary.length; i++) {
            
            if (binary[i] != 0 && binary[i] != 1) {
                error.style.display = 'block';
                console.log('macaco')
            }
            else {
                setDecimal(parseInt(binary, 2));
                error.style.display = 'none';
            }
        };
        
    }
    function handleChange() {
        setDecimal();
    }

    return (
        <>
        <label>Binary Number: </label>
        <input maxLength='8' id='binary' type='text' placeholder='Type a Binary Number' onChange={handleChange}></input>
        <button onClick={handleClick}>Convert!</button>
        <span style={{display: 'none'}} id='error'>Type only 0 and 1.</span>
        <h2>{decimal}</h2>
        </>
    );
};

export default Challenge9;