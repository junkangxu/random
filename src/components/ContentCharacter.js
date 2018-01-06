import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { getRandomCharacter } from '../utils/generateRandom';

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

export default class ContentCharacter extends React.Component {

  constructor(props) {
    super(props);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.getRandomCharacter = this.getRandomCharacter.bind(this);
    this.state = {
      type: "Both",
      result: ""
    };
  }

  handleRadioChange(event, value) {
    this.setState({type: value});
  }

  getRandomCharacter() {
    let newResult = getRandomCharacter(this.state.type);
    this.setState({result: newResult});
  }

  render() {
    return (
      <div>
        <RadioButtonGroup
          name="shipSpeed"
          defaultSelected="Both"
          onChange={this.handleRadioChange}
        >
          <RadioButton
            value="onlyLower"
            label="lower characters only"
            style={styles.radioButton}
          />
          <RadioButton
            value="onlyUpper"
            label="upper characters only"
            style={styles.radioButton}
          />
          <RadioButton
            value="Both"
            label="Both upper and lower characters"
            style={styles.radioButton}
          />
        </RadioButtonGroup>
        <RaisedButton
          label="Primary"
          primary={true}
          style={style}
          onClick={this.getRandomCharacter}
        />
        <div>
          {this.state.result}
        </div>
      </div>
    );
  }
}
