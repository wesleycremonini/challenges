import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "../Spinner";

const QuestionContainer = styled.div`
    text-align: center;
    font-size: 3em;
    color: white;
    background-color: blue;
`;

const Answer = styled.ul`
    list-style: none;
    color: black;

    li{
        padding: 10px;
        background-color: white;
        margin-top: 20px;
    }

    .correct {
        background-color: green;
    };

    .incorrect {
        background-color: red;
    }
`;


function Challenge21() {
    const [question, setQuestion] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [counter, setCounter] = useState(0);
    const [answerCounter, setAnswerCounter] = useState(0);
    const [result, setResult] = useState(0);
    const [tryAgain, setTryAgain] = useState(true);
    const [storage, setStorage] = useState(localStorage);



    useEffect(() => {
        setCounter(0)
    }, [])

    async function getQuestions(x) {
        setLoading(true);
        const response = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple');
        response.json().then(function(info){
            setData(info.results);
            setQuestion(info.results[0]);
            setIncorrect(info.results[0]['incorrect_answers']);
        });
        setLoading(false);
    };

    useEffect(() => {
        getQuestions(0)
    }, []);

    function Confirm() {
        var classes = document.getElementsByClassName("correct");
        var classes2 = document.getElementsByClassName("incorrect");
        while (classes.length) {
            classes[0].classList.remove("correct");
        };
        while (classes2.length) {
            classes2[0].classList.remove("incorrect");
        };

        setAnswerCounter(0);

        let currentDate = new Date();
        let date = currentDate.getFullYear() + '-' + (currentDate.getMonth()+1) + '-' + currentDate.getDate() +' '+ currentDate.getHours()+':'+ currentDate.getMinutes()+':'+ currentDate.getSeconds();

        if (counter + 1 > 10) {
            localStorage.setItem('q' + date, `acertou ${result} questoes`);
            setStorage({ ...localStorage});
            setTryAgain(false);
            return
        }
        setCounter(counter + 1);
        console.log(data);
        setQuestion(data[counter]);
        setIncorrect(data[counter]['incorrect_answers']);
        console.log(counter)

        var ul = document.querySelector('#lister');
        for (var i = ul.children.length; i >= 0; i--) {
            ul.appendChild(ul.children[Math.random() * i | 0]);
        }
    };


    function checkAnswer(e) {
        if (answerCounter == 0) {
            if (e.target.innerHTML == question['correct_answer']) {
                e.target.classList.add("correct");
                setAnswerCounter(answerCounter + 1);
                setResult(result + 1);
            }
            else {
                e.target.classList.add("incorrect");
                setAnswerCounter(answerCounter + 1);
            };
        };
    };

    function tryAg() {
        setCounter(0);
        setResult(0);
        setTryAgain(true);
    };


    return(
        <>
            {tryAgain ? 
                <QuestionContainer>
                    {loading ? <Spinner/> : 
                    <>
                    <div>
                        <p>{question['question']}</p>
                    </div>
                    <Answer id='lister'>
                        <li onClick={(e) => checkAnswer(e)} >{incorrect[0]}</li>
                        <li onClick={(e) => checkAnswer(e)} >{question['correct_answer']}</li>
                        <li onClick={(e) => checkAnswer(e)} >{incorrect[1]}</li>
                        <li onClick={(e) => checkAnswer(e)} >{incorrect[2]}</li>
                    </Answer>
                    <button onClick={() => Confirm()}>Confirm!</button>
                    </>
                    }
                </QuestionContainer>
                :
                <>
                    <p>voce acertou {result} questoes</p>
                    <button onClick={() => tryAg()}>Try Again?</button>
                    <div>
                        <h2>dashboard: </h2>
                    {Object.entries(storage).map(([key, value]) => {
                        if (key[0] == 'q') {
                            return (
                                <p>{value}</p>
                            )
                        };                 
                    })}
                    </div>
                </>
            }
        </>
    );
};

export default Challenge21;