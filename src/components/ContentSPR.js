import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import getRandomInt from '../utils/generateRandom';
import { addToLocalStorage } from '../utils/localStorage';

import './ContentSPR.css';

import Paper from '../imgs/SPR/paper.png';
import Scissor from '../imgs/SPR/scissor.png';
import Rock from '../imgs/SPR/rock.png';

const type = "Paper Scissor Rock";

export default class ContentSPR extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
  }

  getResult = (event) => {
    let randomInt = getRandomInt(1, 3);
    let newResult;
    switch (randomInt) {
      case 1:
        newResult = "Scissor";
        break;
      case 2:
        newResult = "Paper";
        break;
      case 3:
        newResult = "Rock";
        break;
      default:
        newResult = "";
    }
    this.setState({result: newResult});
    addToLocalStorage(type, newResult);
  }

  render() {

    let result = this.state.result;
    let picSource = "";

    if (result === "Scissor") {
      picSource = Scissor;
    } else if (result === "Paper") {
      picSource = Paper;
    } else if (result === "Rock") {
      picSource = Rock;
    }

    let resultPic = (<div><img src={picSource} alt="" height="180" width="165" /></div>)

    return (
      <div className="contentDiv">
        <div className="header">
          <h3>剪刀石头布</h3>
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
          <div>{resultPic}</div>
        </div>
      </div>
    );
  }

}
