import React from 'react';

//Components
import Home from './components/Home'
import Chall from './components/Challenge'

//Challenges
import Challenges from './components/ChallengeList/Challenges'

// Routing
import { BrowserRouter as Router, Route } from 'react-router-dom';



function App() {

  return (
    <Router>
      <Route exact path='/'> <Home/> </Route>
      {Challenges.map(chall => (
        <Route exact path={'/challenge/' + chall.id}> 
          <Chall ChallTitle={chall.title} ChallCode={chall.jsx} key={chall.id}/> 
        </Route>
      ))}
    </Router>
  );
}

export default App;
