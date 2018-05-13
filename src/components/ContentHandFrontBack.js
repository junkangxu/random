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

const hands = ["Front", "Back"];
const type = "HandFrontBack";
const title = "Hand Front & Back";
const floatingText = "Number of People";

export default class ContentHandFrontBack extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numOfPeople: 0,
      result: []
    };
  }

  handleChange = (event, index, value) => this.setState({numOfPeople: value});

  getHands = (index) => hands[index - 1];

  getRandomHand = () => {
    let numOfPeople = this.state.numOfPeople;
    let retVal = [];
    for (let i = 0; i < numOfPeople; i++) {
      let randomInt = getRandomInt(1,2);
      retVal.push(randomInt);
    }
    let textResult = this.getTextResult(retVal);
    addToLocalStorage(type, textResult);
    this.setState({result: textResult});
  }

  getTextResult = (arr) => arr.map(index => this.getHands(index));

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
          {this.state.result.join(' ')}
        </div>
      </div>
    );
  }


}
