import React from 'react';

// Styles
import { Title, Code } from './Challenge.styles.js'

// Components
//import Title from '../../components/GoBack'
//import Title from '../../components/PrevChall'
//import Title from '../../components/NetxChall'

function Chall({ ChallTitle, ChallCode }) {
    return (
        <>
            {/*<GoBack/>*/}
            <Title>{ChallTitle}</Title>
            <Code>{ChallCode}</Code>
            {/*<PrevChall/><NextChall/>*/}
        </>
    );
  };

export default Chall;