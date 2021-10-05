import React, {useState} from 'react';
import styled from 'styled-components';

const Box = styled.div`
    background-color: orange;
    width: 100px;
    height: 100px;
    border-radius: ${props => props['topL']} ${props => props['topR']} ${props => props['bottomR']} ${props => props['bottomL']};
    margin: 50px;

    ~h3 span{
        background-color: white;
        padding: 10px;
        border-radius: 10px;
    }
`;


function Challenge10() {
    const [topL, setTopL] = useState();
    const [topR, setTopR] = useState();
    const [bottomL, setBottomL] = useState();
    const [bottomR, setBottomR] = useState();

    function handleClick() {
        const copy = document.getElementById('copy').innerText
        navigator.clipboard.writeText(copy)
    };

    return (
        <>
            <Box topL={topL} topR={topR} bottomL={bottomL} bottomR={bottomR}/>
            <label>Border radius: (any units)</label>
            <br/>
            <input onChange={e => setTopL(e.target.value)} className='border' type='text' placeholder='top-left'></input>
            <input onChange={e => setTopR(e.target.value)} className='border' type='text' placeholder='top-right'></input>
            <br/>
            <input onChange={e => setBottomL(e.target.value)} className='border' type='text' placeholder='bottom-left'></input>
            <input onChange={e => setBottomR(e.target.value)} className='border' type='text' placeholder='bottom-right'></input>
            <br/>
            <h3><span id='copy'>border-radius: {topR} {topL} {bottomR} {bottomL};</span></h3>
            <button onClick={handleClick}>COPY!</button>
        </>
    );
}   

export default Challenge10;