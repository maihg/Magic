import React, {Dispatch, SetStateAction, useState} from "react";
import { IPlayer } from "../../utils/types";


interface Props {
  id: number;
  name: string;
  players: IPlayer[];
  setPlayers: Dispatch<SetStateAction<IPlayer[]>>;
}

const PlayerInput: React.FC<Props> = ({ id, name, players, setPlayers }) => {
  const [newName, setNewName] = useState(name);

  const removePlayer = (id: number) => {
    setPlayers(names => names.filter(n => n.id !== id));
  };

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
    const temp  = [...players];
    let item = players.find(n => n.id === id);
    if (!item) return
    item.name = e.target.value;
    temp.map(player => player.id === id ? item : player);
    setPlayers(temp);
  };

  return (
    <div className="player-input">
      <label htmlFor={`player-name-${id}`} className="hidden" aria-hidden={true}>Navn på spiller</label>
      <input type="text" id={`player-name-${id}`} className="App-input" placeholder="Navn på spiller" value={newName} onChange={updateName} />
      <button className="App-button delete" onClick={() => removePlayer(id)}>X</button>
    </div>
  );
}

export default PlayerInput;