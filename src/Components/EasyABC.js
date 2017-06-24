import React, { Component } from 'react';
import '../App.css';

class EasyABC extends Component {
  render(){
    return (
      <div className="game">
        <div className="option">
          <div className="fields">
            <div className="field-block">
              A
            </div>
          </div>
          <div className="buttons">
            <a href="#" className="button prev">Previous</a>
            <a href="#" className="button sound">Play Sound Agian</a>
            <a href="#" className="button next">Next</a>
          </div>
      </div>
    </div>
  );
  }
}

export default EasyABC;
