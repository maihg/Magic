import React, { useState } from 'react';
import './CounterRow.css';

interface Props {
  text: string;
  fromNumber?: number;
  toNumber: number;
}

const CounterRow: React.FC<Props> = ({ text, fromNumber, toNumber }) => {
  const [currentNumber, setCurrentNumber] = useState(fromNumber || 0);

  const add = () => {
    if (currentNumber < toNumber - 1) {
      setCurrentNumber(currentNumber + 1);
    } else if (currentNumber === toNumber - 1) {
      setCurrentNumber(currentNumber + 1);
      alert("DEAD!");
    }
  }

  return (
    <div className="flex--spaced-row">
      <p>{text} : {currentNumber} / {toNumber}</p>
      <div className="flex--centered-row">
        <button className="counter-row-button" onClick={() => currentNumber > 0 && setCurrentNumber(currentNumber - 1)}>-</button>
        <button className="counter-row-button" onClick={add}>+</button>
      </div>
    </div>
  );
}

export default CounterRow;
