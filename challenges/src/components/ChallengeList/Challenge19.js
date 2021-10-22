import React, {useEffect, useState} from "react";
import styled from "styled-components";

const Create = styled.div`
    margin: auto;
    padding: 25px;
    width: 70%;
    height: 300px;
    background-color: black;
    border: white 2px solid;
    textarea {
        width: 100%;
        max-width: 100%;
        min-width: 100%;
        height: 80%;
        max-height: 80%;
        min-height: 80%;
    }
            p {
        color: white;
        margin: 0;
        padding: 0;
    }
`;

const Note = styled.div`
    margin: auto;
    padding: 25px;
    width: 70%;
    height: 200px;
    background-color: blue;
    border: black 2px solid;
    textarea {
        width: 100%;
        max-width: 100%;
        min-width: 100%;
        height: 80%;
        max-height: 80%;
        min-height: 80%;
    }
`;




function Challenge19() {
    const [storage, setStorage] = useState(localStorage);

    
    function createNote(){
        const noteTxt = document.getElementById('createNote').value;

        let currentDate = new Date();
        let date = currentDate.getFullYear() + '-' + (currentDate.getMonth()+1) + '-' + currentDate.getDate() +' '+ currentDate.getHours()+':'+ currentDate.getMinutes()+':'+ currentDate.getSeconds();

        localStorage.setItem(date , noteTxt);
        setStorage({ ...localStorage});
        document.getElementById('createNote').value = ''
    }

    function handleClear(){
        localStorage.clear();
        setStorage({});
    }

    function deleteNote(key) {
        localStorage.removeItem(key);
        setStorage({ ...localStorage});
    }

    return (
        <div id='box'>
            

            {Object.entries(storage).map(([key, value]) => {
                return (
                    <Note key={key}>
                        <input readOnly value={key} />
                        <textarea value={value} readOnly />
                        <button onClick={() => deleteNote(key)} >Delete Note!</button>
                    </Note>
                )
            })}

        <Create>
            <textarea name='createNote' id='createNote' />
            <button onClick={() => createNote()} >Create Note!</button>
            <button onClick={() => handleClear()} >Remove all Notes!</button>
        </Create>
        </div>
    );
};

export default Challenge19;