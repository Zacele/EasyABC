import React, { Component } from 'react';
import alphabets from '../Json/alphabets.json';
import '../App.css';

class Guessing extends Component {
  constructor(props){
    super(props);
    this.state= {
      alphabets: alphabets,
      currentPosition: 0
    };
  }

  render() {
    return (
      <div className="game">

      </div>
    )
  }
}


export default Guessing;
