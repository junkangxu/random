import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Divider from 'material-ui/Divider';
import getRandomInt from '../utils/generateRandom';
import { addToLocalStorage } from '../utils/localStorage';

import './ContentDice.css';

import Dice1 from '../imgs/dice/Dice1.gif';
import Dice2 from '../imgs/dice/Dice2.gif';
import Dice3 from '../imgs/dice/Dice3.gif';
import Dice4 from '../imgs/dice/Dice4.gif';
import Dice5 from '../imgs/dice/Dice5.gif';
import Dice6 from '../imgs/dice/Dice6.gif';

const type = "Dice";

export default class ContentDice extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type: "one",
      result: [],
    };
  }

  getDiceImage = (number) => {
    switch (number) {
      case 1:
        return Dice1;
      case 2:
        return Dice2;
      case 3:
        return Dice3;
      case 4:
        return Dice4;
      case 5:
        return Dice5;
      case 6:
        return Dice6;
      default:
        return "";
    }
  };

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
    }
  };

  render() {

    let result = this.state.result;
    let resultPic = "";

    if (result.length === 1) {
      resultPic = (<div><img src={this.getDiceImage(result[0])} alt="" height="120" width="120"/></div>);
    } else if (result.length === 2) {
      resultPic = (<div><img src={this.getDiceImage(result[0])} alt="" height="120" width="120" />
       &nbsp;&nbsp;
      <img src={this.getDiceImage(result[1])} alt="" height="120" width="120" /></div>);
    }

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
        <div className="resultPicDiv">
          <div>{resultPic}</div>
        </div>
      </div>
    );
  }
}
