import React,{ useContext } from 'react';

//Context
import { UserContext } from '../../App'

function Challenge8() {
    const user = useContext(UserContext);

    return (
        <p>Your name is: {user.name}</p>
    );
};

export default Challenge8;

