import React from 'react';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import getRandomInt, { shuffle } from '../utils/generateRandom';

const style = {
  margin: 12
};

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginTop: 16,
    marginBottom: 16,
  },
};

export default class ChipExampleArray extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chipData: [{key: 0, label: 'Angular'},
                 {key: 1, label: 'JQuery'},
                 {key: 2, label: 'Polymer'},
                 {key: 3, label: 'ReactJS'},],
      input: "",
      type: "shuffle",
      result: ""
    };
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
  }

  reorderList = (list) => {
    let listLen = list.length;
    for (let i = 0; i < listLen; i++) {
      list[i].key = i;
    }
  };

  handleInputChange = (event, newValue) => {
    this.setState({input: newValue});
  };

  handleRadioChange = (event, value) => {
    this.setState({type: value})
  };

  addToList = () => {
    this.chipData = this.state.chipData;
    let newKey = this.chipData.length;
    let newData = {key: newKey, label: this.state.input};
    this.chipData.push(newData);
    this.setState({chipData: this.chipData});
  };

  handleRequestDelete = (key) => {
    this.chipData = this.state.chipData;
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
  };

  getResult = () => {
    this.type = this.state.type;
    this.chipData = this.state.chipData;
    if (this.type === "shuffle") {
      let tmpList = [];
      for (let i = 0; i < this.chipData.length; i++) {
        tmpList.push(this.chipData[i].label);
      }
      tmpList = shuffle(tmpList);
      let retVal = "";
      for (let j = 0; j < tmpList.length; j++) {
        retVal += tmpList[j];
        retVal += "  ";
      }
      this.setState({result: retVal});
    } else {
      let maxNum = this.chipData.length - 1;
      let randomInt = getRandomInt(0, maxNum);
      let retVal = this.chipData[randomInt].label;
      this.setState({result: retVal});
    }
  };

  renderChip(data) {
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.handleRequestDelete(data.key)}
        style={this.styles.chip}
      >
        {data.label}
      </Chip>
    );
  }

  render() {
    return (
      <div>
        <div>
          <TextField
            hintText="Hint Text"
            floatingLabelText="Floating Label Text"
            onChange={this.handleInputChange}
          />
          <RaisedButton
            label="Primary"
            primary={true}
            style={style}
            onClick={this.addToList}
          />
          {this.state.input}
        </div>
        <div style={this.styles.wrapper}>
          {this.state.chipData.map(this.renderChip, this)}
        </div>
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
        <RaisedButton
          label="Primary"
          primary={true}
          style={style}
          onClick={this.getResult}
        />
        </div>
        <div>{this.state.result}</div>
      </div>
    );
  }
}
