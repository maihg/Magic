import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import Counter from "./components/Counter/Counter";

function App() {

  const [players, setPlayers] = useState<{name: string, id: number }[]>([ {name: '', id: 0}, {name: '', id: 1}]);

  useEffect(() => {
    let list = window.sessionStorage.getItem("players");
    if (list !== null) setPlayers(JSON.parse(list));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  return (
    <Router basename="/Magic">
        <Routes>
          <Route path="/" element={<Home setPlayers={setPlayers} players={players} />} />
          <Route path="/counter" element={<Counter players={players} />}/>
        </Routes>
    </Router>
  );
}

export default App;
