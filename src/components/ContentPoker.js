import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import getRandomInt from '../utils/generateRandom';
import { addToLocalStorage } from '../utils/localStorage';

import './ContentPoker.css';

const type = "Poker";

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
    let newResultHead;
    switch (randomInt) {
      case 1:
        newResultHead = "黑桃";
        break;
      case 2:
        newResultHead = "红心";
        break;
      case 3:
        newResultHead = "梅花";
        break;
      case 4:
        newResultHead = "方片";
        break;
      default:
        newResultHead = "";
    }
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
      <div>
        <div className="header">
          <h3>扑克牌</h3>
          <Divider />
        </div>
        <div className="buttonDiv">
          <RaisedButton
            label="GET"
            primary={true}
            onClick={this.getResult}
          />
        </div>
        <div className="resultDiv">
          <h1>{this.state.resultHead + "  "}{this.state.resultBody}</h1>
        </div>
      </div>
    );
  }

}
