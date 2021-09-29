import React from 'react';

//Challenge Component
import Chall from './components/Challenge'

//Challenges
import Challenges from './components/ChallengeList/Challenges'

// Routing
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom';



function App() {

  return (
    <Router>
      {Challenges.map(chall => (
        <Route exact path={'/challenge/' + chall.id}> <Chall ChallTitle={chall.title} ChallCode={chall.jsx} key={chall.id}/> </Route>
      ))}
    </Router>
  );
}

export default App;
