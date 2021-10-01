import React, { useState } from "react";

import { Box, Buttons } from './Challenge6.styles'


function Challenge6() {
    const [top, setTop] = useState(400);
    const [left, setLeft] = useState(500);


    return (
        <>
            <Buttons>
                <button onClick={() => setTop(top - 30)}>Move the box Up</button>
                <button onClick={() => setTop(top + 30)}>Move the box Down</button>
                <button onClick={() => setLeft(left - 30)}>Move the box Left</button>
                <button onClick={() => setLeft(left + 30)}>Move the box Right</button>
            </Buttons>
            <Box top={top}  left={left}/>
        </>
    )
};

export default Challenge6;