import React, { useState } from 'react';
import './Counter.css';
import Player from "../Player/Player";

interface Props {
  players: { name: string, id: number }[];
}

const Counter: React.FC<Props> = ({ players}) => {

  const [useColors, setUseColors] = useState(true);

  const renderPlayers = () => {
    let indents: JSX.Element[] = [];
    players.forEach(player => indents.push(<Player players={players} player={player} useColors={useColors} key={player.id} />));
    return indents;
  }

  return (
    <div className="counter">
      <h1>Counter</h1>
      {/*<p>Det er {players.length} antall spillere</p>*/}

      <div className="player-containers">
        { renderPlayers() }
      </div>


      <button className="counter-button" onClick={() => setUseColors(!useColors)}>{useColors ? "Av med fargene - jeg ser ikke teksten" : "På med fargene!"}</button>
      <button className="counter-button" onClick={() => window.location.reload()}>🔄 Nullstill teller</button>
    </div>
  );
}

export default Counter;
