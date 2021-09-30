import React from 'react';

import { Link } from 'react-router-dom';

// Styles
import { Title, Code } from './Challenge.styles.js'

// Components
//import Title from '../../components/GoBack'
//import Title from '../../components/PrevChall'
//import Title from '../../components/NetxChall'

function Chall({ ChallTitle, ChallCode }) {
    return (
        <>
            <Link to='/'>Back to Home</Link>
            <Title>{ChallTitle}</Title>
            <Code>{ChallCode}</Code>
            
        </>
    );
  };

export default Chall;