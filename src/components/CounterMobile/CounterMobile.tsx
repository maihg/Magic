import React, { useState, useEffect } from 'react';
import Player from "../Player/Player";
import './CounterMobile.css';
import Modal from "../Modal/Modal";

interface Props {
  players: { name: string, id: number }[];
}

const CounterMobile: React.FC<Props> = ({ players}) => {

  const [useColors, setUseColors] = useState(true);
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
  }

  const closeMenu = () => {
    setOpen(false);
  }

  const renderPlayers = () => {
    let indents: JSX.Element[] = [];
    players.forEach(player => indents.push(<Player players={players} player={player} useColors={useColors} key={player.id} />));
    return indents;
  }

  return (
    <div className="counter">
      <div className="menu" ><p onClick={openMenu}>⁝</p></div>
      <Modal open={open} setOpen={setOpen} settings={true}>
        <div className="checkbox-wrapper">
          <input type="checkbox" name="colors" checked={useColors} onChange={() => setUseColors(!useColors)}/>
          <label htmlFor="colors">Fargede tellere</label>
        </div>

        <div className="divider"/>

        <button onClick={() => window.location.reload()}>🔄 Nullstill tellerne</button>
      </Modal>

      <div className={`player-containers players-${players && players.length}`}>
        { renderPlayers() }
      </div>
    </div>
  );
}

export default CounterMobile;