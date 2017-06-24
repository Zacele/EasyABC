import React, { Component } from 'react';
import '../App.css';

class Guessing extends Component {
  render() {
    return (
      <div className="game">
        <div className="fields">
          <div className="field-block">
            <div className="left-field">A</div>
            <div className="right-field">A</div>
          </div>
        </div>
      </div>
    )
  }
}


export default Guessing;
