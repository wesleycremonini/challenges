import styled from "styled-components";

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    .container {
        display: flex;
        flex-direction: row;
        gap: 5px;
        .btn {
            margin: 0;
            padding: 0;
            display: flex;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            opacity: 0.5;
            width: 50px;
            height: 50px;
            color: black;
            font-weight: 900;
            user-select: none;

            :hover {
                opacity: 1;
            }
        };

        .light {
            background-color: white;
        };
        .yellow {
            background-color: yellow;
        }
        .number {
            background-color: black;
            color: white;
        }

    }
`;

export const Screen = styled.div`
    width: 218px;
    height: 100px;
    background-color: black;
    color: white;
    border-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


export const Math = styled.div`
    width: 90%;
    height: 50%;
    border-radius: 10px;
    font-size: 1.1em;
    display: flex;
    align-items: center;
    justify-content: right;
    overflow: hidden;
`;


export const Equal = styled.div`
    width: 90%;
    height: 50%;
    border-radius: 10px;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: right;
    overflow: hidden;
`;