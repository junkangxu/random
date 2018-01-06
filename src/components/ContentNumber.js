import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import getRandomInt from '../utils/generateRandom';

const style = {
  margin: 12
};

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
      <div>
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
        <RaisedButton
          label="Primary"
          primary={true}
          style={style}
          onClick={this.getResult}
        />
        <div>{this.state.result}</div>
      </div>
    );
  }

}
