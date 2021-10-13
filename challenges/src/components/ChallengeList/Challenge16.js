import React, {useEffect, useState} from "react";

function Challenge16(){
    const [ip, setIp] = useState();
    const [hello, setHello] = useState();

    async function getIP() {
        const response = await fetch('http://ip-api.com/json');
        response.json().then(function(info){
            setIp(info.query);
        });
    }

    async function helloFunc() {
        const response = await fetch('https://fourtonfish.com/hellosalut/?ip=' + ip)
        response.json().then(function(info){
            setHello(info.hello);
            console.log(info.hello)
        })
    }

    function createInnerHTML(prop) {
        return {__html: prop};
    }

    async function changeLang() {
        const langInput = document.getElementById('lang').value
        const response = await fetch('https://fourtonfish.com/hellosalut/?lang=' + langInput)
        response.json().then(function(info){
            setHello(info.code !== 'none'?info.hello:'Not Valid Language Code');
        })
    }

    useEffect(() =>{
        getIP();
    }, []);

    useEffect(() =>{
        helloFunc();
    }, [ip]);

    return (
        <>
        <h2>Hello in your language: </h2>
        <span dangerouslySetInnerHTML={createInnerHTML(hello)} />
        <br/>
        <br/>
        <label>Or use your pref lang:(iso country code)</label>
        <input id='lang' type='text'/>
        <button onClick={() => changeLang()}>Confirm!</button>
        </>
    );
};

export default Challenge16;