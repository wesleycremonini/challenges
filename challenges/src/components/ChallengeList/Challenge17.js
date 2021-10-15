import React, {useState} from "react";


function Challenge17() {
    const [key, setKey] = useState();
    const [binary, setBinary] = useState();
    const [alt, setAlt] = useState();
    const [ctrl, setCtrl] = useState();
    const [meta, setMeta] = useState();
    const [shift, setShift] = useState();
    document.addEventListener('keydown', logKey);

    function logKey(e) {
        console.log(e)
        setKey(e.key);
        setBinary(e.key.charCodeAt().toString(2));
        setAlt(e.altKey.toString());
        setCtrl(e.ctrlKey.toString());
        setMeta(e.metaKey.toString());
        setShift(e.shiftKey.toString());

    }

    return (
        <>
        <span>Key: {key}</span><br/>
        <span>Binary: {binary}</span><br/>
        <span>Alt: {alt}</span><br/>
        <span>Ctrl: {ctrl}</span><br/>
        <span>Meta: {meta}</span><br/>
        <span>Shift: {shift}</span><br/>
        </>
    );
}

export default Challenge17;