import React from 'react';

import { Link } from 'react-router-dom';

// Styles
import { Title, Code, Nav } from './Challenge.styles.js'

// Components
import Challenges from "../ChallengeList/Challenges"

function Chall({ ChallTitle, ChallCode, ChallID }) {
    return (
        <>  
            <Nav>
                <Link to='/'>HOME</Link>
                
                <Link style={ (parseInt(ChallID) - parseInt(1)) < 1 ?{  display: 'none' }:{  display: 'inline-block' } } 
                    to={`/challenge/${parseInt(ChallID) - parseInt(1)}`}>PREV CHALL</Link>
                
                <Link style={ (parseInt(ChallID) + parseInt(1)) > Challenges.length ?{  display: 'none' }:{  display: 'inline-block' } } 
                    to={`/challenge/${parseInt(ChallID) + parseInt(1)}`}>NEXT CHALL</Link>
            </Nav>
            
            <Title>{ChallTitle}</Title>
            <Code>{ChallCode}</Code>
        </>
    );
  };

export default Chall;