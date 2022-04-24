import React, {useEffect, useRef, useState} from 'react';
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
  const [resentChange, setResentChange] = useState(0);
  const changedRef = useRef(0);

  useEffect(() => {
    if (lives === 0) alert("DEAD!");
  }, [lives]);

  useEffect(() => {
    setTimeout(() => {
      if (resentChange === changedRef.current) {
        setResentChange(0);
        changedRef.current = 0;
      }
    }, 1200);
  }, [resentChange]);

  const addLife = () => {
    if (lives < 40) {
      setLives(lives => lives + 1);
      setResentChange(resentChange => resentChange + 1);
      changedRef.current = changedRef.current + 1;
    }
  };

  const removeLife = () => {
    if (lives > 0) {
      setLives(lives => lives - 1);
      setResentChange(resentChange => resentChange - 1);
      changedRef.current = changedRef.current - 1;
    }
  };

  const renderCommanderRows = () => {
    let indents: JSX.Element[] = [];
    players.forEach((p, i) => p !== player &&
      indents.push(<CounterRow text={`${p.name} 🧛`} toNumber={21} addLife={addLife} removeLife={removeLife} key={i} />))
    return indents;
  }

  return (
    <div className={`player color--${useColors && (player.id%4 + 1)}`}>

      <div className="card-top">
        <div className="flex--col" style={{ justifyContent: "space-between", textAlign: "left"}}>
          <p className="no-margin">{player.name}</p>
          <p className="no-margin clickable" onClick={() => setBottomHidden(!bottomHidden)}>Special damage {bottomHidden ? "↓" : "↑"}</p>
        </div>
        <div className="flex--centered-row points-container">
          <div className="flex--col">
            <button className="points-arrow">▲</button>
            <button className="points-arrow">▼</button>
          </div>
          <h1>{lives}</h1>
          <div className="button-top" onClick={addLife} />
          <div className="button-bottom" onClick={removeLife} />

          <div className={`change-of-points ${resentChange === 0 ? "hidden" : ""}`}>
            <p>{resentChange>0 && "+"}{resentChange}</p>
          </div>
        </div>
      </div>

      <div className={`card-bottom ${bottomHidden && 'hidden'}`}>
        <CounterRow text="Poison 💀" toNumber={11} addLife={addLife} removeLife={removeLife}/>
        <p>Commander damage fra ...</p>
        {renderCommanderRows()}
      </div>



    </div>
  );
}

export default Player;
