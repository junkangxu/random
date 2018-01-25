import React from 'react';
import TimePicker from 'material-ui/TimePicker';

export default class TimePickerPair extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beginTime: null,
      endTime: null
    };
  }

  handleBeginTimeChange = (event, time) => {
    this.props.handleBeginTimeChange(event, time);
    this.setState({beginTime: time})
  };

  handleEndTimeChange = (event, time) => {
    this.props.handleEndTimeChange(event, time);
    this.setState({endTime: time})
  };

  render() {
    return (
      <div className="datePickerPair">
        <TimePicker
          hintText="Begin Time"
          format="24hr"
          value={this.state.beginTime}
          onChange={this.handleBeginTimeChange}
        />
        <TimePicker
          hintText="End Time"
          format="24hr"
          value={this.state.endTime}
          onChange={this.handleEndTimeChange}
        />
      </div>
    );
  }
}
