import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import getRandomInt from '../utils/generateRandom';
import { addToLocalStorage } from '../utils/localStorage';

import './ContentCoin.css';

const type = "Coin";

export default class ContentCoin extends React.Component {

  constructor(props) {
    super(props);
    this.getResult = this.getResult.bind(this);
    this.state = {
      result: ""
    }
  }

  getResult(event) {
    let randomInt = getRandomInt(1, 2);
    let newResult;
    if (randomInt === 1) {
      newResult = "Head";
    } else {
      newResult = "Tail";
    }
    this.setState({result: newResult});
    addToLocalStorage(type, newResult);
  }

  render() {
    return (
      <div>
        <div className="header">
          <h3>硬币</h3>
          <Divider />
        </div>
        <div className="buttonDiv">
          <RaisedButton
            label="GET"
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
