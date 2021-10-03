import React, { createContext, useState } from 'react';

//Components
import Home from './components/Home'
import Chall from './components/Challenge'

//Challenges
import Challenges from './components/ChallengeList/Challenges'

// Routing
import { BrowserRouter as Router, Route } from 'react-router-dom';

export const UserContext = createContext();

function App() {
  const [name, setName] = useState('Name');

  return (
    <Router>
      <UserContext.Provider value={{name, setName}}>
        <Route exact path='/'> <Home/> </Route>
        {Challenges.map(chall => (
          <Route exact path={`/challenge/${chall.id}`}> 
            <Chall ChallTitle={chall.title} ChallCode={chall.jsx} key={chall.id} ChallID={chall.id}/> 
          </Route>
        ))}
      </UserContext.Provider>
    </Router>
  );
}

export default App;
