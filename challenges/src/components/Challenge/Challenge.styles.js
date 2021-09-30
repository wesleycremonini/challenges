import styled from 'styled-components';


export const Title = styled.h1`
    text-align: center;
    font-size: 2em;
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin: auto;

    animation: fade 1s;

    @keyframes fade {
        from {
            opacity: 0;
        };
        to {
            opacity: 1;
        }
    }
`;

export const Code = styled.div`
    border-radius: 15px;
    background-color: grey;
    padding: 25px;
    margin: auto;
    max-width: 1280px;
    margin-top: 40px;

    animation: fade 1s;

    @keyframes fade {
        from {
            opacity: 0;
        };
        to {
            opacity: 1;
        }
    }

`;


export const Nav = styled.div`
    display: flex;
    gap: 10px;


    a{
        color: black;
        text-decoration: none;
        background-color: white;
        border-radius: 10px;
        padding: 10px;
    }

`;