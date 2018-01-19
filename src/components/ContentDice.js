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
    this.state = {
      type: "one",
      result: [],
      strResult: ""
    };
  }

  handleRadioChange = (event, value) => this.setState({type: value});

  getRandomDice = () => {
    if (this.state.type === "one") {
      let retVal = [];
      retVal.push(getRandomInt(1,6));
      this.setState({result: retVal});
      this.showResult(retVal);
    } else {
      let retVal = [];
      for (let i = 0; i < 2; i++) {
        retVal.push(getRandomInt(1,6));
      }
      this.setState({result: retVal});
      this.showResult(retVal);
    }
  };

  showResult = (arr) => {
    let retVal = "";
    let result = arr;
    for (let i = 0; i < result.length; i++) {
      retVal += result[i];
      retVal += " ";
    }
    if (retVal !== "") {
      addToLocalStorage(type, retVal);
      this.setState({strResult: retVal});
    }
  };

  render() {
    return (
      <div className="contentDiv">
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
          <h1>{this.state.strResult}</h1>
        </div>
      </div>
    );
  }
}
