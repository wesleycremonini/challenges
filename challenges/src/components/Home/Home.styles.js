import styled from "styled-components";

export const Links = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 3em;
    max-width: 1280px;
    margin: auto;

    a{
        color: white;
        font-size: 1.5em;
        background-color: black;
        border-radius: 10px;
        text-decoration: none;
        text-align: center;
        padding: 15px;
    }
`;

export const Name = styled.div`
    margin: auto;
    margin-bottom: 30px;
    text-align: center;

`;


export const WrongName = styled.p`
    display: none;
    text-align: center;
    margin: 0;

`;