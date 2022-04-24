import React, { useState } from 'react';
import './CounterRow.css';

interface Props {
  text: string;
  fromNumber?: number;
  toNumber: number;
  addLife: () => void;
  removeLife: () => void;
}

const CounterRow: React.FC<Props> = ({ text, fromNumber, toNumber, addLife, removeLife }) => {
  const [currentNumber, setCurrentNumber] = useState(fromNumber || 0);

  const add = () => {
    if (!text.includes("Poison")) {
      removeLife();
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
      if (!text.includes("Poison")) {
        addLife();
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
