import styled from "styled-components";

export const Box = styled.div`
    width: 100px;
    height: 100px;
    background-color: red;
    position: absolute;
    top: ${p => p['top']}px;
    left: ${p => p['left']}px;
`;

export const Buttons = styled.div`
    display: flex;
    gap: 10px;
    button {
        padding: 20px;
        background-color: black;
        border: none;
        border-radius: 10px;
        color: white;
        opacity: 0.8;


        :hover {
            opacity: 1;
        }
    }
`;