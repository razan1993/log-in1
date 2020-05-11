import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './Home';
import Game from './Game';
import APP from './todo/App';
import ReactCalender from './cal';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/Todo-list" component={APP} />
        <Route path="/Cal1" component={ReactCalender} />
      </Switch>
    </div>
  );
}

export default App;
