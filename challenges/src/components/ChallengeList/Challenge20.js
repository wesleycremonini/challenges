import React, { useEffect, useState } from "react";


function Challenge20() {
    const [timer, setTimer] = useState('');
    let workTime = 0;
    let restTime = 0;
    let minutes = 1;
    let seconds = 0;
    const [workRest, setWorkRest] = useState('work');

    function confirmMinutes() {
        const work = document.getElementById('work').value;
        const rest = document.getElementById('rest').value;

        workTime = work;
        restTime = rest;
    };

    function startTimer() {
        document.getElementById('start').style.display = 'none';
        seconds = 59;
        minutes -= 1;
        let secInterval = setInterval(reduceSeconds, 1000);
    }

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
        else if (seconds < 1  && minutes == 0 && workRest == 'work'){
            setWorkRest('rest');
            minutes = document.getElementById('rest').value;
            console.log('wrong')
        }
        else if (seconds < 1  && minutes == 0 && workRest == 'rest'){
            setWorkRest('work');
            minutes = document.getElementById('work').value;
            console.log('right')

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