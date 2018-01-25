import React from 'react';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import ContentHeader from './Common/ContentHeader';
import ActionButton from './Common/ActionButton';
import TextResultArea from './Common/TextResultArea';
import RadioSelect from './Common/RadioSelect';
import getRandomInt, { shuffle } from '../utils/generateRandom';
import { addToLocalStorage } from '../utils/localStorage';

import './ContentList.css';

const type = "List";
const title = "列表";
const radioArr = [
  {value: "shuffle", label: "shuffle the list"},
  {value: "pick", label: "pick one from the list"}
];

export default class ChipExampleArray extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chipData: [{key: 0, label: 'Angular'},
                 {key: 1, label: 'Vue'},
                 {key: 2, label: 'ReactJS'},],
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
        retVal += "    ";
      }
      this.setState({result: retVal});
      addToLocalStorage(type, retVal);
    } else {
      let maxNum = this.chipData.length - 1;
      let randomInt = getRandomInt(0, maxNum);
      let retVal = this.chipData[randomInt].label;
      this.setState({result: retVal});
      addToLocalStorage(type, retVal);
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
      <div className="contentDiv">
        <ContentHeader title={title} />
        <div className="inputDiv">
          <TextField
            hintText="Input Field"
            floatingLabelText="Your Input"
            onChange={this.handleInputChange}
          />
        </div>
        <ActionButton func={this.addToList}/>
        <div className="listDiv">
          {this.state.chipData.map(this.renderChip, this)}
        </div>
        <RadioSelect
          default="shuffle"
          func={this.handleRadioChange}
          arr={radioArr}
        />
        <ActionButton func={this.getResult} />
        <TextResultArea result={this.state.result}/>
      </div>
    );
  }
}
