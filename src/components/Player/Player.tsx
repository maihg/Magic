import React, {useEffect, useState} from 'react';
import './Player.css';
import CounterRow from "../CounterRow/CounterRow";

interface Props {
  players: { name: string, id: number }[];
  player: { name: string, id: number };
  useColors: boolean;
}

const Player: React.FC<Props> = ({ players, player, useColors }) => {
  const [lives, setLives] = useState(40);
  const [bottomHidden, setBottomHidden] = useState(true);

  useEffect(() => {
    if (lives === 0) alert("DEAD!");
  }, [lives]);

  const subtract = () => {
    setLives(lives => lives - 1);
  }

  const renderCommanderRows = () => {
    let indents: JSX.Element[] = [];
    players.forEach((p, i) => p !== player &&
      indents.push(<CounterRow text={`${p.name} 🧛`} toNumber={21} setLives={setLives} key={i} />))
    return indents;
  }

  return (
    <div className={`player color--${useColors && (player.id%4 + 1)}`}>

      <div className="card-top">
        <div className="flex--col" style={{ justifyContent: "space-between", textAlign: "left"}}>
          <p className="no-margin">{player.name}</p>
          <p className="no-margin clickable" onClick={() => setBottomHidden(!bottomHidden)}>Special damage {bottomHidden ? "↓" : "↑"}</p>
        </div>
        <div className="flex--centered-row">
          <div className="flex--col">
            <button className="points-arrow" onClick={() => setLives(lives + 1)}>▲</button>
            <button className="points-arrow" onClick={subtract}>▼</button>
          </div>

          <h1>{lives}</h1>
        </div>
      </div>

      <div className={`card-bottom ${bottomHidden && 'hidden'}`}>
        <CounterRow text="Poison 💀" toNumber={11} />
        <p>Commander damage fra ...</p>
        {renderCommanderRows()}
      </div>

    </div>
  );
}

export default Player;
