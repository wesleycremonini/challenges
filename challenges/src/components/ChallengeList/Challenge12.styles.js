import styled from "styled-components";


export const Circle = styled.div`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background-color: yellow;
    background-color: ${p => p.color};
    margin: 5px;
    position: relative;
    display: inline-block;

    input {
        position: absolute;
        top: 25px;
        left: 55px;
        opacity: 0;
    }

    animation-name: ${p => p.ani};
    animation-duration: 3s;
    animation-iteration-count: infinite;

    :nth-child(1) {animation-delay: ${props => props.delay * 0.5}s;}
    :nth-child(2) {animation-delay: ${props => props.delay * 0.7}s;}
    :nth-child(3) {animation-delay: ${props => props.delay * 0.9}s;}
    :nth-child(4) {animation-delay: ${props => props.delay * 1.1}s;}
    :nth-child(5) {animation-delay: ${props => props.delay * 1.2}s;}

    @keyframes pulse {
        50% {
            opacity: 0;
        };
    };


`;