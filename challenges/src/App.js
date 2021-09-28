
//Styles
import { Body } from './App.styles.js'

//Challenge Component
import Chall from './components/Challenge'

//Challenges
import Challenges from './components/ChallengeList/Challenges'




function App() {
  return (
    <Body>
      {Challenges.map(chall => (
          <Chall ChallTitle={chall.title} ChallCode={chall.jsx} key={chall.id}/>
      ))} 
    </Body>
  );
}

export default App;
