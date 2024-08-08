import React, { useState } from 'react';
import StartPage from './components/StartPage';
import GamePlay from './components/GamePlay';

function App() {

  const [isGameStarted, setIsGameStared] = useState(false);

  const toggleGamePlay=() =>{
    setIsGameStared((prev)=>!prev)
  }
  return (
    <div>
     {isGameStarted ? <GamePlay /> : <StartPage toggle={toggleGamePlay}/>}
    </div>
  );
}

export default App;
