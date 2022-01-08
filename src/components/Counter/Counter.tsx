import React, { useState } from 'react';
import './Counter.css';
import Player from "../Player/Player";

interface Props {
  noOfPlayers: number;
}

const Counter: React.FC<Props> = ({ noOfPlayers}) => {

  const [useColors, setUseColors] = useState(true);

  const renderPlayers = () => {
    let indents = [];
    for (let i = 0; i < noOfPlayers; i++) {
      indents.push(
        <Player noOfPlayers={noOfPlayers} playerNo={i +1} useColors={useColors} key={i} />
      );
    }
    return indents;
  }

  return (
    <div className="counter">
      <h1>Counter</h1>
      <p>Det er {noOfPlayers} antall spillere</p>

      <div className="player-containers">
        { renderPlayers() }
      </div>


      <button className="counter-button" onClick={() => setUseColors(!useColors)}>{useColors ? "Av med fargene - jeg ser ikke teksten" : "På med fargene!"}</button>
    </div>
  );
}

export default Counter;
