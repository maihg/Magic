import React, { useState } from 'react';
import './CounterRow.css';

interface Props {
  text: string;
  fromNumber?: number;
  toNumber: number;
  setLives?: React.Dispatch<React.SetStateAction<number>>;
}

const CounterRow: React.FC<Props> = ({ text, fromNumber, toNumber, setLives }) => {
  const [currentNumber, setCurrentNumber] = useState(fromNumber || 0);

  const add = () => {
    if (!text.includes("Poison") && setLives) {
      setLives(lives => lives - 1);
    }

    if (currentNumber < toNumber - 1) {
      setCurrentNumber(currentNumber + 1);
    } else if (currentNumber === toNumber - 1) {
      setCurrentNumber(currentNumber + 1);
      alert("DEAD!");
    }
  }

  const subtract = () => {
    if (currentNumber >= 1) {
      setCurrentNumber(currentNumber - 1);
      if (!text.includes("Poison") && setLives) {
        setLives(lives => lives + 1);
      }
    }
  }

  return (
    <div className="flex--spaced-row">
      <p><span>{text} :</span><span>&nbsp;{currentNumber} / {toNumber}</span></p>
      <div className="flex--centered-row">
        <button className="counter-row-button" onClick={subtract}>-</button>
        <button className="counter-row-button" onClick={add}>+</button>
      </div>
    </div>
  );
}

export default CounterRow;
