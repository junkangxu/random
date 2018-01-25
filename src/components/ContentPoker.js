import React from 'react';
import ContentHeader from './Common/ContentHeader';
import ActionButton from './Common/ActionButton';
import TextResultArea from './Common/TextResultArea';
import getRandomInt from '../utils/generateRandom';
import { addToLocalStorage } from '../utils/localStorage';

const type = "Poker";
const title = "扑克";
const caste = ["", "黑桃", "红心", "梅花", "方片"];

export default class ContentPoker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      resultHead: "",
      resultBody: ""
    };
  }

  getResultHead = () => {
    let randomInt = getRandomInt(1, 4);
    let newResultHead = caste[randomInt];
    this.setState({resultHead: newResultHead});
    return newResultHead;
  }

  getResultBody = () => {
    let randomInt = getRandomInt(1, 13);
    let newResultBody;
    if (randomInt <= 10) {
      newResultBody = randomInt;
    } else if (randomInt === 11) {
      newResultBody = "J";
    } else if (randomInt === 12) {
      newResultBody = "Q";
    } else {
      newResultBody = "K";
    }
    this.setState({resultBody: newResultBody});
    return newResultBody;
  }

  getResult = (event) => {
    let head = this.getResultHead();
    let body = this.getResultBody();
    addToLocalStorage(type, head + " " + body);
  }

  render() {
    return (
      <div className="contentDiv">
        <ContentHeader title={title} />
        <ActionButton func={this.getResult} />
        <TextResultArea result={this.state.resultHead + "  " + this.state.resultBody} />
      </div>
    );
  }

}
