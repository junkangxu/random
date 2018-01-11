import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import getRandomInt from '../utils/generateRandom';
import { addToLocalStorage } from '../utils/localStorage';

import './ContentNumber.css';

const type = "Number";

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
        <div className="header">
          <h3>数字</h3>
          <Divider />
        </div>
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
        <div className="buttonDiv">
          <RaisedButton
            label="GET"
            primary={true}
            onClick={this.getResult}
          />
        </div>
        <div className="resultDiv">
          <h1>
            {this.state.result}
          </h1>
        </div>
      </div>
    );
  }

}
