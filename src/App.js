import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EasyABC from './Components/EasyABC';
import Guessing from './Components/Guessing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Easy spelling Game</h1>
        </div>
       <EasyABC />
       <Guessing />
      </div>
    );
  }
}

export default App;
