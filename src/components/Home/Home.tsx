import React, { Dispatch, SetStateAction, useState } from 'react';
import './Home.css';
import { useNavigate } from "react-router-dom"
import PlayerInput from '../PlayerInput/PlayerInput';
import { IPlayer } from "../../utils/types";

interface Props {
  players: IPlayer[];
  setPlayers: Dispatch<SetStateAction<IPlayer[]>>;
  noOfLives: number;
  setNoOfLives: Dispatch<SetStateAction<number>>;
}

const Home: React.FC<Props> = ({ players, setPlayers, noOfLives, setNoOfLives}) => {
  const navigate = useNavigate();

  const [nextId, setNextId] = useState<number>(players.length);

  const addPlayer = () => {
    if (players.length > 3) return;
    setNextId(nextId => nextId + 1);
    setPlayers(players => [...players, { name: '', id: nextId }]);
  };

  const goToCounter = () => {
    const namesInPlace = players.filter(player => player.name === '').length;
    if (namesInPlace > 0) {
      alert('Du må fylle inn navn på alle spillerene');
      return;
    } else if (noOfLives > 40 || noOfLives < 0) {
      alert('Ugyldig antall liv');
      return;
    }
    navigate('/counter')
  };



  return (
    <div className="App">
      <header className="App-header">
        <h1>Magic</h1>
        <h2>A counter for magic the gathering</h2>

        <div>
          <p>Fyll inn navn på spillere <br />(2 - 4 spillere)</p>
          <div>
            {players.length === 0 && <p>Legg til en spiller ...</p>}
            {players.map((player) =>
              <PlayerInput key={player.id} id={player.id} players={players} setPlayers={setPlayers}  />)}
            <button className="App-button-secondary" onClick={addPlayer} disabled={players.length > 3}>+ Legg til spiller</button>
          </div>

          <p><label htmlFor="lives">Antall liv å starte med</label></p>
          <div className="player-input">
            <input
              type="number"
              min={10}
              max={40}
              name="lives"
              className="App-input"
              placeholder="Antall liv"
              value={noOfLives}
              onChange={(e) => setNoOfLives(Number(e.target.value))}
            />
          </div>
          <button className="App-button" onClick={goToCounter} disabled={players.length < 2}>Start!</button>
        </div>
      </header>
    </div>
  );
}

export default Home;
