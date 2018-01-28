import React from 'react';
import ActionButton from './Common/ActionButton';
import ContentHeader from './Common/ContentHeader';
import RadioSelect from './Common/RadioSelect';
import PicResultArea from './Common/PicResultArea';
import getRandomInt from '../utils/generateRandom';
import { addToLocalStorage } from '../utils/localStorage';

import Dice1 from '../imgs/dice/Dice1.gif';
import Dice2 from '../imgs/dice/Dice2.gif';
import Dice3 from '../imgs/dice/Dice3.gif';
import Dice4 from '../imgs/dice/Dice4.gif';
import Dice5 from '../imgs/dice/Dice5.gif';
import Dice6 from '../imgs/dice/Dice6.gif';

const type = "Dice";
const title = type;
const dices = ["", Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
const radioArr = [
  {value: "one", label: "one dice at a time"},
  {value: "two", label: "two dices at a time"},
];

export default class ContentDice extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type: "one",
      result: [],
    };
  }

  getDiceImage = (number) => {
    return dices[number];
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
        <ContentHeader title={title}/>
        <RadioSelect
          default="one"
          func={this.handleRadioChange}
          arr={radioArr}
        />
        <ActionButton func={this.getRandomDice} />
        <PicResultArea img={resultPic} />
      </div>
    );
  }
}
