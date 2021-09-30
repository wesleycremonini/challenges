import React, { useState } from "react";


function Challenge4() {
    const [word, setWord] = useState("");

    if(word === 'word'){
        setTimeout(()=>{
            alert('correct'); 
        }, 100)
    };

    return (
        <>
            <label>Try to discover the secret word: </label>
            <input
                id='input_pass'
                value={word}
                type="text"
                placeholder="word"
                onChange={event => setWord(event.target.value)}
            />
        </>
    )
};

export default Challenge4;