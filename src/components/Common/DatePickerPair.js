import React from 'react';
import DatePicker from 'material-ui/DatePicker';

import './DatePickerPair.css';

export default class DatePickerPair extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beginDate: null,
      endDate: null
    };
  }

  handleBeginDateChange = (event, date) => {
    this.props.handleBeginDateChange(event, date);
    this.setState({beginDate: date});
  }

  handleEndDateChange = (event, date) => {
    this.props.handleEndDateChange(event, date);
    this.setState({endDate: date});
  }

  render() {
    return (
      <div className="datePickerPair">
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
    );
  }
}
