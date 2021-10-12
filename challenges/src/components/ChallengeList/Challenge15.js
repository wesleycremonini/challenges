import React, {useEffect, useState} from "react";
import styled from 'styled-components'

const Component = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: 40%;
    background-color: white;
    color: black;
    font-weight: 700;
    margin-top: 10px;
    padding: 20px;
    border-radius: 20px;
    border: 2px ${p => p.border} solid;
`;

const Green = styled.div`
    background-color: green;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    display: inline-block;
`;

const Red = styled.div`
    background-color: red;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    display: inline-block;
`;

function Challenge15() {
    const [data, setData] = useState([]);

    function Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
        }

    async function fetchDataAsync() {
        const response = await fetch('https://www.githubstatus.com/history?page=1', {
                headers: {
                    'Accept': 'application/json'
                }
            });
        response.json().then(function(info){
            setData(info.components);
            console.log('a')
        })
    }

    useEffect(() => {
        fetchDataAsync()
    }, []);
 
    return (
        <>
        { data.map( (item) => {
            return item.name.length < 30 ?
            <Component key={item.name} border={item.status === 'operational' ?'green' :'red'} >
                <span>{ item.name }</span> <span>{ item.status === 'operational' ?<Green/> :<Red/> } { Capitalize(item.status) }</span>
            </Component>
            : <></>
        })}
        <button onClick={() => fetchDataAsync()} >Refresh!</button>
        </>
    );
};

export default Challenge15;