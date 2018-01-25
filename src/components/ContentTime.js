import React from 'react';
import ContentHeader from './Common/ContentHeader';
import ActionButton from './Common/ActionButton';
import TextResultArea from './Common/TextResultArea';
import TimePickerPair from './Common/TimePickerPair';
import { getRandomTime } from '../utils/generateRandom';
import { addToLocalStorage } from '../utils/localStorage';

const type = "Time";
const title = "时间";

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
        <ContentHeader title={title}/>
        <TimePickerPair
          handleBeginTimeChange={this.handleChangeLowerTimePicker}
          handleEndTimeChange={this.handleChangeUpperTimePicker}
        />
        <ActionButton func={this.getRandomTime} />
        <TextResultArea result={this.state.result} />
      </div>
    );
  }
}
