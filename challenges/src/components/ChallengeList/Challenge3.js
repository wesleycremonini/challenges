import React, { useState } from "react";


function Challenge3() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    return (
        <>
            <p>Display Name: {name}</p>
            <p>Display Age: {age}</p>
            <label>Name: </label>
            <input
                type="text"
                value={name}
                placeholder="Some Name"
                onChange={event => setName(event.target.value)}
            />
            <br/>
            <label>Age: </label>
            <input
                type="text"
                value={age}
                placeholder="Some Age"
                onChange={event => setAge(event.target.value)}
            />
        </>
    )
};

export default Challenge3;