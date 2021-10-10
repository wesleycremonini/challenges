import React, {useState} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    img {
        max-width: 700px;
        height: auto;
    }
`;

const FlexMid = styled.div`
    display: flex;
    justify-content: center;
`;

const Flex = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;


function Challenge14() {
    const [imgURL, setImgURL] = useState('https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/field/image/rs930_135120665-low.jpg?itok=g5LI5W4C');


    function handleClick(dir, n) {
        const img = document.getElementById('img');
        if (dir === 'x') {
            img.style.transform += `scaleX(${n})`;
        }
        else {
            img.style.transform += `scaleY(${n})`;
        };
    }

    function url() {
        const url = document.getElementById('url').value;

        if (url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) != null) {
            setImgURL(url);

        } else {
            alert('NOT VALID URL');
        }
    }
    
    return (
        <Wrapper>
            <input id='url' type='text' placeholder='Image URL'/>
            <button onClick={url}>Display!</button>
            <br/>
            <br/>

            <Flex>
                <button onClick={() => handleClick('y', -1)}>Flip</button>
                <FlexMid>
                    <button onClick={() => handleClick('x', -1)}>Flip</button>
                    <img id='img' src={imgURL}/>
                    <button onClick={() => handleClick('x', -1)}>Flip</button>
                </FlexMid>
                <button onClick={() => handleClick('y', -1)}>Flip</button>
            </Flex>

        </Wrapper>
    );
};

export default Challenge14;