import React, { useState, useEffect } from "react";

import { Circle } from './Challenge12.styles'

function Challenge12() {
    const [color1, setColor1] = useState('');
    const [color2, setColor2] = useState('');
    const [color3, setColor3] = useState('');
    const [color4, setColor4] = useState('');
    const [color5, setColor5] = useState('');
    const [delay, setDelay] = useState(0);
    const [ani, setAni] = useState('pulse');

    function openColor(c) {
        const color = document.querySelector(c)
        color.click()
    }

    useEffect(() => {
        setAni('a')
        setInterval(() => {
            setAni('pulse')
        }, 1000);
    }, [delay]);

    return (
        <>
        <h2>Click to change color</h2>
        <Circle ani={ani} delay={delay} onClick={() => openColor('#color1')} color={color1}>
            <input id='color1' onChange={(e) => setColor1(e.target.value)} type='color'/>
        </Circle>

        <Circle ani={ani} delay={delay} onClick={() => openColor('#color2')} color={color2}>
            <input id='color2' onChange={(e) => setColor2(e.target.value)} type='color'/>
        </Circle>

        <Circle ani={ani} delay={delay} onClick={() => openColor('#color3')} color={color3}>
            <input id='color3' onChange={(e) => setColor3(e.target.value)} type='color'/>
        </Circle>

        <Circle ani={ani} delay={delay} onClick={() => openColor('#color4')} color={color4}>
            <input id='color4' onChange={(e) => setColor4(e.target.value)} type='color'/>
        </Circle>

        <Circle ani={ani} delay={delay} onClick={() => openColor('#color5')} color={color5}>
            <input id='color5' onChange={(e) => setColor5(e.target.value)} type='color'/>
        </Circle>

        <label>Delay:</label>
        <input type='number' onChange={(e) => setDelay(e.target.value)}/>
        </>
    );
};

export default Challenge12;