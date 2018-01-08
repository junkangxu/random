import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import getRandomInt from '../utils/generateRandom';

import './ContentDice.css';

const style = {
  margin: 12
};

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

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
    if (type == "one") {
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
    return retVal;
  }

  render() {
    return (
      <div>
        <div className="radioDiv">
          <RadioButtonGroup
            name="shipSpeed"
            defaultSelected="one"
            onChange={this.handleRadioChange}
          >
            <RadioButton
              value="one"
              label="one dice"
              style={styles.radioButton}
            />
            <RadioButton
              value="two"
              label="two dices"
              style={styles.radioButton}
            />
          </RadioButtonGroup>
        </div>
        <div className="buttonDiv">
          <RaisedButton
            label="Primary"
            primary={true}
            style={style}
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
