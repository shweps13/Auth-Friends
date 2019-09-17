import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Friends from './components/Friends'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Friends App
        </h1>
      </header>
      <Login />
      <Friends />
    </div>
  );
}

export default App;
