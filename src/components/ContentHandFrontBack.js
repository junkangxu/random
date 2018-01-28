import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import ContentHeader from './Common/ContentHeader';
import ActionButton from './Common/ActionButton';
import DropDownSelect from './Common/DropDownSelect';
import getRandomInt from '../utils/generateRandom';
import { addToLocalStorage } from '../utils/localStorage';

const items = [
  <MenuItem key={1} value={1} primaryText="1" />,
  <MenuItem key={2} value={2} primaryText="2" />,
  <MenuItem key={3} value={3} primaryText="3" />,
  <MenuItem key={4} value={4} primaryText="4" />,
  <MenuItem key={5} value={5} primaryText="5" />,
];

const space = '\u00A0\u00A0\u00A0\u00A0\u00A0';
const hands = ["Front", "Back"];
const type = "HandFrontBack";
const title = "Hand Front & Back";
const floatingText = "Number of People";

export default class ContentHandFrontBack extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numOfPeople: 0,
      result: [],
      strResult: ""
    };
  }

  handleChange = (event, index, value) => this.setState({numOfPeople: value});

  getHands = (index) => hands[index - 1];

  generateCircle = (arr) => {
    let length = arr.length;
    let retVal = "";
    let index1 = arr[0], index2 = arr[1], index3 = arr[2], index4 = arr[3], index5 = arr[4];
    switch (length) {
      case 1:
        retVal = this.getHands(index1);
        break;
      case 2:
        retVal = this.getHands(index1) + space + this.getHands(index2);
        break;
      case 3:
        retVal = this.getHands(index1) + space + this.getHands(index2) + "\n" + this.getHands(index3);
        break;
      case 4:
        retVal = this.getHands(index1) + space + this.getHands(index2) + "\n" + this.getHands(index3) + space + this.getHands(index4);
        break;
      case 5:
        retVal = this.getHands(index1) + space + this.getHands(index2) + "\n" + this.getHands(index3) + space + this.getHands(index4) + "\n" + this.getHands(index5);
        break;
      default:
        break;
    }
    return retVal;
  };

  getRandomHand = () => {
    let numOfPeople = this.state.numOfPeople;
    let retVal = [];
    for (let i = 0; i < numOfPeople; i++) {
      let randomInt = getRandomInt(1,2);
      retVal.push(randomInt);
    }
    this.setState({result: retVal});
    this.showResult(retVal);
  }

  showResult = (arr) => {
    let retVal = "";
    let result = arr;
    for (let i = 0; i < result.length; i++) {
      retVal += hands[result[i] - 1];
      retVal += " ";
    }
    if (retVal !== "") {
      addToLocalStorage(type, retVal);
    }
    retVal = this.generateCircle(arr);
    this.setState({strResult: retVal});
  }

  render() {
    return (
      <div className="contentDiv">
        <ContentHeader title={title} />
        <DropDownSelect
          func={this.handleChange}
          text={floatingText}
          items={items}
        />
        <ActionButton func={this.getRandomHand} />
        <div className="resultDiv">
          {this.state.strResult.split("\n").map(i => {
            return <div key={i}><h1>{i}</h1></div>;
          })}
        </div>
      </div>
    );
  }


}
