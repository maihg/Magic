import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from "react-router-dom"

interface Props {
  noOfPlayers: number;
  setNoOfPlayers: React.Dispatch<React.SetStateAction<number>>;
}

const Home: React.FC<Props> = ({ noOfPlayers, setNoOfPlayers}) => {
  const navigate = useNavigate();

  function goToCounter() {
    console.log("Antall spillere: " + noOfPlayers);
    navigate('/counter')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Magic - Are you dead yet?</h1>

        <div>
          <p>Velg antall spillere</p>
          <input id="no-of-players" type="number" min="2" max="4" className="App-input" value={noOfPlayers}
                 onChange={(event => setNoOfPlayers(Number(event.target.value)))}/>
          <br />
          <button className="App-button" onClick={goToCounter}>Start!</button>
        </div>
      </header>
    </div>
  );
}

export default Home;
