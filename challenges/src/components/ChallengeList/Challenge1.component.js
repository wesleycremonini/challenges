import React from "react";
import styled from "styled-components";

const TitleInfo = styled.h2`
    margin: 20px 0 5px 0;
    font-size: 0.8em;
    color: #DFD2D6;
`;

const Information = styled.p`
    margin: 0;
    font-size: 1.1em;
    color: black;
`;


function Info({ Title, Infor }) {
    
    return (
    <>
        <TitleInfo>{Title}</TitleInfo>
        <Information>{Infor}</Information>
    </>
    )
    
}

export default Info;