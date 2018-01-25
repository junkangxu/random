import React from 'react';
import ContentHeader from './Common/ContentHeader';
import ActionButton from './Common/ActionButton';
import DatePickerPair from './Common/DatePickerPair';
import TextResultArea from './Common/TextResultArea';
import { getRandomDate } from '../utils/generateRandom';
import { addToLocalStorage } from '../utils/localStorage';

const type = "Date";
const title = "日期";

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
        <ContentHeader title={title} />
        <DatePickerPair
          handleBeginDateChange={this.handleBeginDateChange}
          handleEndDateChange={this.handleEndDateChange}
        />
        <ActionButton func={this.getRandomDate} />
        <TextResultArea result={this.state.result}/>
      </div>
    );
  }
}
