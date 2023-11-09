import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import Counter from "./components/Counter/Counter";
import { IPlayer } from "./utils/types";
import {getPlayers} from "./utils/storage";

const defaultPlayers = [{name: '', id: 0}, {name: '', id: 1}]

function App() {

  const [players, setPlayers] = useState<IPlayer[]>(getPlayers() ?? defaultPlayers);
  const [noOfLives, setNoOfLives] = useState<number>(40);

  useEffect(() => {
    window.sessionStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  return (
    <Router basename="/Magic">
        <Routes>
          <Route path="/" element={
            <Home setPlayers={setPlayers} players={players} noOfLives={noOfLives} setNoOfLives={setNoOfLives} />
          } />
          <Route path="/counter" element={<Counter players={players} noOfLives={noOfLives} />}/>
        </Routes>
    </Router>
  );
}

export default App;
