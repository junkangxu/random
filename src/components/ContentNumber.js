import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import getRandomInt from '../utils/generateRandom';

import './ContentNumber.css';

export default class ContentNumber extends React.Component {

  constructor(props) {
    super(props);
    this.changeMinValue = this.changeMinValue.bind(this);
    this.changeMaxValue = this.changeMaxValue.bind(this);
    this.getResult = this.getResult.bind(this);
    this.state = {
      min: null,
      max: null,
      result: null
    };
  }

  changeMinValue(event, newValue) {
    console.log(newValue);
    this.setState({min: Number(newValue)});
  }

  changeMaxValue(event, newValue) {
    console.log(newValue);
    this.setState({max: Number(newValue)});
  }

  getResult(event) {
    if (this.state.min != null && this.state.max != null
        && this.state.min <= this.state.max) {
      let newResult = getRandomInt(this.state.min, this.state.max);
      this.setState({result: newResult});
    }

  }

  render() {
    return (
      <div className="contentDiv">
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
            label="Primary"
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
