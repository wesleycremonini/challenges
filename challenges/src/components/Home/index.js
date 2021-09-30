import React from "react";

import { Link } from "react-router-dom";

//Components
import Challenges from "../ChallengeList/Challenges";

//Styles
import { Links } from './Home.styles.js'

function Home() {
    return (
        <Links>
            {Challenges.map(chall => (
                <Link to={'/challenge/' + chall.id} key={chall.id}>Challenge {chall.id}</Link>
            ))}
        </Links>
    )
}

export default Home;