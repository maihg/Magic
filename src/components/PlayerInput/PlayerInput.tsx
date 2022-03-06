import React, {useState} from "react";


interface Props {
  id: number;
  players: {name: string, id: number }[];
  setPlayers: React.Dispatch<React.SetStateAction<{name: string, id: number }[]>>;
  removePlayer: (id: number) => void;
}

const PlayerInput: React.FC<Props> = ({ id, players, setPlayers, removePlayer }) => {
  const [name, setName] = useState('');

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("id: " + id)
    setName(e.target.value);
    const temp  = [...players];
    let item = players.filter(n => n.id === id)[0];
    item.name = e.target.value;
    temp.map(player => player.id === id ? item : player);
    setPlayers(temp);
  };

  return (
    <div className="player-input">
      <label htmlFor="player-name" className="hidden" aria-hidden={true}>Navn på spiller</label>
      <input type="text" name="player-name" className="App-input" placeholder="Navn på spiller" value={name} onChange={updateName} />
      <button className="App-button delete" onClick={() => removePlayer(id)}>X</button>
    </div>
  );
}

export default PlayerInput;