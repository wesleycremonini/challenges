import React, { useState } from "react";

function Challenge20() {
    const [timer, setTimer] = useState('');
    const [workRest, setWorkRest] = useState('work');
    let minutes = 0;
    let seconds = 0;

    function startTimer() {
        document.getElementById('start').style.display = 'none';
        minutes = document.getElementById('work').value - 1;
        seconds = 59;
        setInterval(reduceSeconds, 1000);
    };

    function reduceSeconds() {
        
        if (seconds < 10) {
            setTimer(minutes + ':' + '0' + seconds);
        }
        else {
            setTimer(minutes + ':' + seconds);
        }

        seconds -= 1;

        if (seconds < 1 && minutes > 0) {
            seconds = 59;
            minutes -= 1;
        }
        else if (seconds < 1 && minutes == 0){
            setWorkRest(workRest == 'work' ? 'rest' : 'work');
            minutes = document.getElementById(workRest == 'work' ? 'work' : 'rest').value;
        }
    };

    return (
        <>  
            <label>Work Minutes:</label>
            <input id='work' type='number' max='60'/>
            <br/>
            <label>Rest Minutes:</label>
            <input id='rest' type='number' max='60'/>
            <br/>
            <br/>
            <span id='timer'>{workRest} -&gt; {timer}</span>
            <button id='start' onClick={() => startTimer()}>Start!</button>
        </>
    );
};

export default Challenge20;