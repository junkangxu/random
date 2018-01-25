import React from 'react';
import ContentHeader from './Common/ContentHeader';
import ActionButton from './Common/ActionButton';
import TextResultArea from './Common/TextResultArea';
import getRandomInt from '../utils/generateRandom';
import { addToLocalStorage } from '../utils/localStorage';

const type = "Yes/No";
const title = "是否";

export default class ContentYesOrNo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
  }

  getResult = (event) => {
    let randomInt = getRandomInt(1, 2);
    let newResult;
    if (randomInt === 1) {
      newResult = "Yes";
    } else {
      newResult = "No";
    }
    this.setState({result: newResult});
    addToLocalStorage(type, newResult);
  }

  render() {
    return (
      <div className="contentDiv">
        <ContentHeader title={title} />
        <ActionButton func={this.getResult} />
        <TextResultArea result={this.state.result} />
      </div>
    );
  }

}
