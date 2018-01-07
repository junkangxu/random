import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import getRandomInt from '../utils/generateRandom';

const style = {
  margin: 12
};

const items = [
  <MenuItem key={1} value={1} primaryText="1" />,
  <MenuItem key={2} value={2} primaryText="2" />,
  <MenuItem key={3} value={3} primaryText="3" />,
  <MenuItem key={4} value={4} primaryText="4" />,
  <MenuItem key={5} value={5} primaryText="5" />,
];

const hands = ["手心", "手背"];

export default class ContentHandFrontBack extends React.Component {

  constructor(props) {
    super(props);
    this.getRandomHand = this.getRandomHand.bind(this);
    this.showResult = this.showResult.bind(this);
    this.state = {
      numOfPeople: 0,
      result: []
    };
  }

  handleChange = (event, index, value) => this.setState({numOfPeople: value});

  getRandomHand() {
    let numOfPeople = this.state.numOfPeople;
    let retVal = [];
    for (let i = 0; i < numOfPeople; i++) {
      let randomInt = getRandomInt(1,2);
      retVal.push(randomInt);
    }
    this.setState({result: retVal});
  }

  showResult() {
    let retVal = "";
    let result = this.state.result;
    for (let i = 0; i < result.length; i++) {
      retVal += hands[result[i] - 1];
      retVal += " ";
    }
    return retVal;
  }

  render() {
    return (
      <div>
        <div>
          <SelectField
            value={this.state.numOfPeople}
            onChange={this.handleChange}
            floatingLabelText="Number of People"
          >
            {items}
          </SelectField>
        </div>
        <RaisedButton
          label="Primary"
          primary={true}
          style={style}
          onClick={this.getRandomHand}
        />
        <div>{this.state.numOfPeople}</div>
        <div>{this.showResult()}</div>
      </div>
    );
  }


}