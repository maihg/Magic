import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import Counter from "./components/Counter/Counter";

function App() {

  const [noOfPlayers, setNoOfPlayers] = useState(2);

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home setNoOfPlayers={setNoOfPlayers} noOfPlayers={noOfPlayers}/>}/>
          <Route path="/counter" element={<Counter noOfPlayers={noOfPlayers}/>}/>
        </Routes>
    </Router>
  );
}

export default App;
