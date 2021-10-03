import React, { useContext, useEffect } from "react";

import { Link } from "react-router-dom";

//Components
import Challenges from "../ChallengeList/Challenges";

//Styles
import { Links, Name } from './Home.styles.js'

//Context
import { UserContext } from '../../App'

function Home() {
    const user = useContext(UserContext);

    function userName() {
        const nameInput = document.getElementById('nameInput').value
        user.setName(nameInput)
    };

    return (
        <>
            <Links>
                {Challenges.map(chall => (
                    <Link to={'/challenge/' + chall.id} key={chall.id}>Challenge {chall.id}</Link>
                ))}
            </Links>
            <Name>
                <label>Your name:</label>
                <input id='nameInput' placeholder='Your Name' type='text'/>
                <button onClick={userName}>Comfirm Name</button>
            </Name>
        </>
    )
}

export default Home;