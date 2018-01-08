import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import getRandomInt from '../utils/generateRandom';

import './ContentSPR.css';

export default class ContentSPR extends React.Component {

  constructor(props) {
    super(props);
    this.getResult = this.getResult.bind(this);
    this.state = {
      result: ""
    };
  }

  getResult(event) {
    let randomInt = getRandomInt(1, 3);
    let newResult;
    switch (randomInt) {
      case 1:
        newResult = "Scissor";
        break;
      case 2:
        newResult = "Paper";
        break;
      case 3:
        newResult = "Rock";
        break;
      default:
        newResult = "";
    }
    this.setState({result: newResult});
  }

  render() {
    return (
      <div>
        <div className="buttonDiv">
          <RaisedButton
            label="Primary"
            primary={true}
            onClick={this.getResult}
          />
        </div>
        <div className="resultDiv">
          <h1>{this.state.result}</h1>
        </div>
      </div>
    );
  }

}
