import React from 'react';
import TextField from 'material-ui/TextField';
import ContentHeader from './Common/ContentHeader';
import ActionButton from './Common/ActionButton';
import TextResultArea from './Common/TextResultArea';
import getRandomInt from '../utils/generateRandom';
import { addToLocalStorage } from '../utils/localStorage';

import './ContentNumber.css';

const type = "Number";
const title = "数字";

export default class ContentNumber extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      min: null,
      max: null,
      result: null
    };
  }

  changeMinValue = (event, newValue) => {
    console.log(newValue);
    this.setState({min: Number(newValue)});
  }

  changeMaxValue = (event, newValue) => {
    console.log(newValue);
    this.setState({max: Number(newValue)});
  }

  getResult = (event) => {
    if (this.state.min != null && this.state.max != null
        && this.state.min <= this.state.max) {
      let newResult = getRandomInt(this.state.min, this.state.max);
      this.setState({result: newResult});
      addToLocalStorage(type, newResult);
    }

  }

  render() {
    return (
      <div className="contentDiv">
        <ContentHeader title={title} />
        <div className="inputDiv">
          <TextField
            hintText="minValueField"
            floatingLabelText="minValue"
            onChange={this.changeMinValue}
          />
          <TextField
            hintText="maxValueField"
            floatingLabelText="maxValue"
            onChange={this.changeMaxValue}
          />
        </div>
        <ActionButton func={this.getResult} />
        <TextResultArea result={this.state.result} />
      </div>
    );
  }

}
