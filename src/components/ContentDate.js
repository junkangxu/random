import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import { getRandomDate } from '../utils/generateRandom';
import { addToLocalStorage } from '../utils/localStorage';

import './ContentDate.css';

const type = "Date";

export default class ContentDate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beginDate: null,
      endDate: null,
      result: null
    };
  }

  handleBeginDateChange = (event, date) => {
    this.setState({beginDate: date});
  };

  handleEndDateChange = (event, date) => {
    this.setState({endDate: date});
  };

  getRandomDate = () => {
    let beginDate = this.state.beginDate;
    let endDate = this.state.endDate;
    let newResult = getRandomDate(beginDate, endDate);
    this.setState({result: newResult});
    addToLocalStorage(type, newResult);
  };

  render() {
    return (
      <div className="contentDiv">
        <div className="header">
          <h3>日期</h3>
          <Divider />
        </div>
        <div className="inputDiv">
          <DatePicker
            hintText="Begin Date"
            value={this.state.beginDate}
            onChange={this.handleBeginDateChange}
          />
          <DatePicker
            hintText="End Date"
            value={this.state.endDate}
            onChange={this.handleEndDateChange}
          />
        </div>
        <div className="buttonDiv">
          <RaisedButton
            label="GET"
            primary={true}
            onClick={this.getRandomDate}
          />
        </div>
        <div className="resultDiv">
          <h1>{this.state.result}</h1>
        </div>
      </div>
    );
  }
}
