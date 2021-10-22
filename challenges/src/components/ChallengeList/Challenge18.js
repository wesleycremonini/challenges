import React, { createElement } from "react";


function Challenge18() {

    function createP() {
        const p = document.getElementById('p');
        let quant = document.getElementById('quant').value > 50 ? 50 : document.getElementById('quant').value
        
        p.innerHTML = '';
        for(let i = 0; i < quant; i++){
            p.innerHTML += '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> '
        }
        
    }

    return (
        <>
        <label>Number of paragraphs: (max 50)</label>
        <input min="0" max="50" id='quant' type='number' onChange={createP}/>
        <div id='p'></div>
        </>
    );
};

export default Challenge18;