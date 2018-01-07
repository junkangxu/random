import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import getRandomInt from '../utils/generateRandom';

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

export default class ContentList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type: "shuffle",
      list: null,
      result: null
    };
  }

  handleRadioChange(event, value) {
    this.setState({type: value});
  }

  getRandomItem() {

  }

  render() {
    return (
      <div>
        <div>
          <RadioButtonGroup
            name="shipSpeed"
            defaultSelected="shuffle"
            onChange={this.handleRadioChange}
          >
            <RadioButton
              value="shuffle"
              label="Shuffle the list"
              style={styles.radioButton}
            />
            <RadioButton
              value="pick"
              label="Pick one from the list"
              style={styles.radioButton}
            />
          </RadioButtonGroup>
        </div>
        <div>
          <RaisedButton
            label="Primary"
            primary={true}
            style={style}
            //onClick={this.getResult}
          />
        </div>
      </div>
    );
  }
}
