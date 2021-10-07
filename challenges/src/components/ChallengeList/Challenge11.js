import React, { useState, useEffect } from "react";

import { Buttons, Math, Equal, Screen } from './Challenge11.styles'

function Challenge11() {
    const [math, setMath] = useState('');
    const [result, setResult] = useState('');

    function add(n) {
        if (math === '' && n === '0') {return};
        for (let i of ".+-/*"){
            if (math.endsWith(i) && n === '0') {return};
        };
        setMath(math + n);
    }

    function symbol(s) {
        for (let i of ".+-/*"){
            if (math.endsWith(i)){
                return setMath(math.slice(0, -1) + s);
            };
        };
        if (math === '') {
            return
        }

        return setMath(math + s);
    };

    function remove() {
        setMath(math.slice(0, -1));
    };

    function equalsto() {
        if (math === '') return
        setMath(String(result));
    };

    useEffect(() => {
        for (let i of ".+-/*"){
            if (math.endsWith(i)){
                return setResult(eval(math.slice(0, -1)));
            };
        };

        if (math === '') {
            return setResult('')
        }
        else {
            return setResult(parseInt(eval(math)).toFixed(1));
        }
    }, [math]);

    return (
        <>
        <Screen>
            <Math>{math}</Math>
            <Equal>{result}</Equal>
        </Screen>
        <Buttons>
            <div className='container'>
                <button onClick={() => setMath('')} className='btn light' >AC</button>
                <button className='btn light' ></button>
                <button onClick={() => symbol('/')} className='btn light' >/</button>
                <button onClick={remove} className='btn yellow' >&lt;-</button>
            </div>
            <div className='container'>
                <button onClick={() => add('7')} className='btn light number' >7</button>
                <button onClick={() => add('8')} className='btn light number' >8</button>
                <button onClick={() => add('9')} className='btn light number' >9</button>
                <button onClick={() => symbol('*')} className='btn yellow' >x</button>
            </div>
            <div className='container'>
                <button onClick={() => add('4')} className='btn light number' >4</button>
                <button onClick={() => add('5')} className='btn light number' >5</button>
                <button onClick={() => add('6')} className='btn light number' >6</button>
                <button onClick={() => symbol('-')} className='btn yellow' >-</button>
            </div>
            <div className='container'>
                <button onClick={() => add('1')} className='btn light number' >1</button>
                <button onClick={() => add('2')} className='btn light number' >2</button>
                <button onClick={() => add('3')} className='btn light number' >3</button>
                <button onClick={() => symbol('+')} className='btn yellow' >+</button>
            </div>
            <div className='container'>
                <button onClick={() => add('0')} className='btn light number' >0</button>
                <button onClick={() => symbol('.')} className='btn light' >.</button>
                <button className='btn light' ></button>
                <button onClick={equalsto} className='btn yellow' >=</button>
            </div>
        </Buttons>
        </>
    );
};

export default Challenge11;