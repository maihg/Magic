import React, {useEffect, useState} from 'react';
import './Home.css';
import { useNavigate } from "react-router-dom"
import PlayerInput from '../PlayerInput/PlayerInput';

interface Props {
  players: { name: string, id: number }[];
  setPlayers: React.Dispatch<React.SetStateAction<{name: string, id: number }[]>>;
}

const Home: React.FC<Props> = ({ players, setPlayers}) => {
  const navigate = useNavigate();

  const [nextId, setNextId] = useState<number>(players.length);

  useEffect(() => {
    console.log(players);
  }, [players]);

  const addPlayer = () => {
    console.log('addPlayer');
    if (players.length > 3) return;
    setNextId(nextId => nextId + 1);
    setPlayers(players => [...players, { name: '', id: nextId }]);
  };

  const removePlayer = (id: number) => {
    console.log('removePlayer');
    setPlayers(names => names.filter(n => n.id !== id));
  };

  const goToCounter = () => {
    console.log("Antall spillere: " + players.length);
    const namesInPlace = players.filter(player => player.name === '').length;
    if (namesInPlace > 0) {
      alert('Du må fylle inn navn på alle spillerene');
      return;
    }
    navigate('/counter-mobile')
  };



  return (
    <div className="App">
      <header className="App-header">
        <h1>Magic - Are you dead yet?</h1>

        <div>
          <p>Fyll inn navn på spillere <br />(2 - 4 spillere)</p>
          <div>
            {players.length === 0 && <p>Legg til en spiller ...</p>}
            {players.map((player) =>
              <PlayerInput key={player.id} id={player.id} players={players} setPlayers={setPlayers} removePlayer={removePlayer} />)}
            <button className="App-button-secondary" onClick={addPlayer} disabled={players.length > 3}>+ Legg til spiller</button>
          </div>
          <button className="App-button" onClick={goToCounter} disabled={players.length < 2}>Start!</button>
        </div>
      </header>
    </div>
  );
}

export default Home;
