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
        <div className="fields">
          <div className="field-block">
            <div className="left-field">
                <div className="placeholder-span hide">Click Next to view Image</div>
                <img src={this.state.alphabets[this.state.currentPosition].image}

                 Alt={this.state.alphabets[this.state.currentPosition].word} />
            </div>
            <div className="right-field">
              <div className="placeholder-span">
                <div className="word">
                  {this.state.alphabets[this.state.currentPosition].word.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Guessing;
