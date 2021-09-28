import React from "react";
import styled from "styled-components";

//Components
import Info from "./Challenge1.component";

const user = {
    name: "Chris Sev",
    location: "Las Vegas",
    foodType: "Everything",
    age: 32,
    likes: "Coding into the wee hours of the morning",
    twitterUsername: "chris__sev",
    avatar:
      "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png"
  };

const Photo = styled.img`
    width: auto;
    border-radius: 20px;
    @media screen and (max-width: 520px) {
        width: 100%;
    }
`;


function Challenge1() {
    return (
    <>
    <Photo src={user.avatar} alt='Chris Sev Photo'/>
    <h1 >Chris on Code</h1>
    <Info Title='Location' Infor={user.location}/>
    <Info Title='Eats' Infor={user.foodType}/>
    <Info Title='Age' Infor={user.age}/>
    <Info Title='Likes' Infor={user.likes}/>
    <Info Title='Twitter' Infor={<a href={`https://twitter.com/@${user.twitterUsername}`}>@{user.twitterUsername}</a>}/>
    </>
    )
};

export default Challenge1;