import React from 'react';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import { getRandomTime } from '../utils/generateRandom';
import { addToLocalStorage } from '../utils/localStorage';

import './ContentTime.css';

const type = "Time";

export default class ContentTime extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lowerResult: null,
      upperResult: null,
      result: null
    }
  }

  handleChangeLowerTimePicker = (event, time) => this.setState({lowerResult: time});

  handleChangeUpperTimePicker = (event, time) => this.setState({upperResult: time});

  getRandomTime = () => {
    let startTime = this.state.lowerResult;
    let endTime = this.state.upperResult;
    let newResult = getRandomTime(startTime, endTime);
    this.setState({result: newResult});
    addToLocalStorage(type, newResult);
  };

  render() {
    return (
      <div className="contentDiv">
        <div className="header">
          <h3>时间</h3>
          <Divider />
        </div>
        <div className="inputDiv">
          <TimePicker
            format="24hr"
            hintText="Begin"
            value={this.state.lowerResult}
            onChange={this.handleChangeLowerTimePicker}
          />
          <TimePicker
            format="24hr"
            hintText="End"
            value={this.state.upperResult}
            onChange={this.handleChangeUpperTimePicker}
          />
        </div>
        <div className="buttonDiv">
          <RaisedButton
            label="GET"
            primary={true}
            onClick={this.getRandomTime}
          />
        </div>
        <div className="resultDiv">
          <h1>{this.state.result}</h1>
        </div>
      </div>
    );
  }
}
