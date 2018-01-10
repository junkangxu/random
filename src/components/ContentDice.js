import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Divider from 'material-ui/Divider';

import getRandomInt from '../utils/generateRandom';
import { addToLocalStorage } from '../utils/localStorage';

import './ContentDice.css';

const type = "Dice";

export default class ContentDice extends React.Component {

  constructor(props) {
    super(props);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.getRandomDice = this.getRandomDice.bind(this);
    this.showResult = this.showResult.bind(this);
    this.state = {
      type: "one",
      result: []
    };
  }

  handleRadioChange(event, value) {
    this.setState({type: value});
  }

  getRandomDice() {
    let type = this.state.type;
    if (type === "one") {
      let retVal = [];
      let randomInt = getRandomInt(1, 6);
      retVal.push(randomInt);
      this.setState({result: retVal});
    } else {
      let retVal = [];
      for (let i = 0; i < 2; i++) {
        let randomInt = getRandomInt(1, 6);
        retVal.push(randomInt);
      }
      this.setState({result: retVal});
    }
  }

  showResult() {
    let retVal = "";
    let result = this.state.result;
    for (let i = 0; i < result.length; i++) {
      retVal += result[i];
      retVal += " ";
    }
    if (retVal !== "") {
      addToLocalStorage(type, retVal);
    }
    return retVal;
  }

  render() {
    return (
      <div>
        <div className="header">
          <h3>骰子</h3>
          <Divider />
        </div>
        <div className="radioDiv">
          <RadioButtonGroup
            name="shipSpeed"
            defaultSelected="one"
            onChange={this.handleRadioChange}
          >
            <RadioButton
              className="radio"
              value="one"
              label="one dice at a time"
            />
            <RadioButton
              className="radio"
              value="two"
              label="two dices at a time"
            />
          </RadioButtonGroup>
        </div>
        <div className="buttonDiv">
          <RaisedButton
            label="GET"
            primary={true}
            onClick={this.getRandomDice}
          />
        </div>
        <div className="resultDiv">
          <h1>{this.showResult()}</h1>
        </div>
      </div>
    );
  }
}
