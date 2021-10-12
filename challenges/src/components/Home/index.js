import React, { useContext } from "react";

import { Link } from "react-router-dom";

//Components
import Challenges from "../ChallengeList/Challenges";

//Styles
import { Links, Name, WrongName } from './Home.styles.js'

//Context
import { UserContext } from '../../App'

function Home() {
    const user = useContext(UserContext);

    function userName() {
        const nameInput = document.getElementById('nameInput').value
        const wrongName = document.getElementById('WrongName')
        
        if(nameInput !== '' && nameInput !== ' ') {
            user.setName(nameInput);
            wrongName.style.display = 'none';
        } else {wrongName.style.display = 'block'}
    };

    return (
        <>
            <Name>
                <label>Say your name for Global State Example: </label>
                <input id='nameInput' placeholder='Your Name' type='text'/>
                <button onClick={userName}>Confirm Name</button>
                <WrongName id='WrongName'>Fill the name input</WrongName>
            </Name>
            <Links>
                {Challenges.map(chall => (
                    <Link to={'/challenge/' + chall.id} key={chall.id}>{chall.title}</Link>
                ))}
            </Links>
            
        </>
    )
}

export default Home;