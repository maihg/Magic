import React, {Dispatch, SetStateAction, useState} from "react";
import { IPlayer } from "../../utils/types";


interface Props {
  id: number;
  players: IPlayer[];
  setPlayers: Dispatch<SetStateAction<IPlayer[]>>;
}

const PlayerInput: React.FC<Props> = ({ id, players, setPlayers }) => {
  const [name, setName] = useState('');

  const removePlayer = (id: number) => {
    setPlayers(names => names.filter(n => n.id !== id));
  };

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    const temp  = [...players];
    let item = players.find(n => n.id === id);
    if (!item) return
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