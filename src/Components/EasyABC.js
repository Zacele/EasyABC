import React, { Component } from 'react';
import alphabets from '../Json/alphabets.json';
import '../App.css';

class EasyABC extends Component {
  constructor(props){
    super(props);
    this.state= {
      alphabets: alphabets,
      currentPosition: 0
    };
  }

  render(){
    return (
      <div className="game">
        <div className="option">
          <div className="fields">
            <div className="field-block">
              {this.state.alphabets[this.state.currentPosition].letter}
            </div>
          </div>
          <div className="buttons">
            <a className="button prev">Previous</a>
            <a className="button sound">Play Sound Agian</a>
            <a className="button next">Next</a>
          </div>
      </div>
    </div>
  );
  }
}

export default EasyABC;
