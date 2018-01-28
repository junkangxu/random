import React from 'react';
import TextField from 'material-ui/TextField';
import ContentHeader from './Common/ContentHeader';
import ActionButton from './Common/ActionButton';
import TextResultArea from './Common/TextResultArea';
import getRandomInt from '../utils/generateRandom';
import { addToLocalStorage } from '../utils/localStorage';
import { requiredInputError } from '../utils/common';

import './ContentNumber.css';

const type = "Number";
const title = type;

export default class ContentNumber extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      minValueError: "",
      maxValueError: "",
      min: null,
      max: null,
      result: null
    };
  }

  changeMinValue = (event, newValue) => {
    if (newValue === "") {
      this.setState({minValueError: requiredInputError});
    } else {
      this.setState({minValueError: ""});
    }
    this.setState({min: Number(newValue)});
  }

  changeMaxValue = (event, newValue) => {
    if (newValue === "") {
      this.setState({maxValueError: requiredInputError});
    } else {
      this.setState({maxValueError: ""});
    }
    this.setState({max: Number(newValue)});
  }

  getResult = (event) => {
    if (this.state.min != null && this.state.max != null
        && this.state.min <= this.state.max) {
      let newResult = getRandomInt(this.state.min, this.state.max);
      this.setState({result: newResult});
      addToLocalStorage(type, newResult);
    } else {
      if (this.state.min === null || this.state.min === "") {
        this.setState({minValueError: requiredInputError});
      }

      if (this.state.max === null || this.state.max === "") {
        this.setState({maxValueError: requiredInputError});
      }
    }

  }

  render() {
    return (
      <div className="contentDiv">
        <ContentHeader title={title} />
        <div className="inputDiv">
          <TextField
            hintText="minValueField"
            errorText={this.state.minValueError}
            floatingLabelText="minValue"
            onChange={this.changeMinValue}
          />
          <TextField
            hintText="maxValueField"
            errorText={this.state.maxValueError}
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
