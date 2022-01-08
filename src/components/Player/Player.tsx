import React, { useState } from 'react';
import './Player.css';
import CounterRow from "../CounterRow/CounterRow";

interface Props {
  noOfPlayers: number;
  /*setNoOfPlayers: React.Dispatch<React.SetStateAction<number>>;*/
  playerNo: number;
  useColors: boolean;
}

const Player: React.FC<Props> = ({ noOfPlayers, playerNo, useColors }) => {
  const [lifes, setLifes] = useState(40);
  const [bottomHidden, setBottomHidden] = useState(true);

  const subtract = () => {
    if (lifes > 1) {
      setLifes(lifes - 1);
    } else if (lifes === 1) {
      setLifes(0);
      alert("DEAD!");
    }
  }

  const renderCommanderRows = () => {
    let indents = [];
    for (let i = 0; i < noOfPlayers; i++) {
      let playerText = "Spiller " + (i + 1) + " 🧛";
      (i+1 !== playerNo) && indents.push(
        <CounterRow text={playerText} toNumber={21} key={i} />
      );
    }
    return indents;
  }

  return (
    <div className={`player color--${useColors && playerNo}`}>

      <div className="card-top">
        <div className="flex--col" style={{ justifyContent: "space-between", textAlign: "left"}}>
          <p className="no-margin">Spiller #{playerNo}</p>
          <p className="no-margin" onClick={() => setBottomHidden(!bottomHidden)}>Special damage {bottomHidden ? "↓" : "↑"}</p>
        </div>
        <div className="flex--centered-row">
          <div className="flex--col">
            <button className="points-arrow" onClick={() => setLifes(lifes + 1)}>▲</button>
            <button className="points-arrow" onClick={subtract}>▼</button>
          </div>

          <h1>{lifes}</h1>
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
