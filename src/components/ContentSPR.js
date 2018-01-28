import React from 'react';
import ContentHeader from './Common/ContentHeader';
import ActionButton from './Common/ActionButton';
import PicResultArea from './Common/PicResultArea';
import getRandomInt from '../utils/generateRandom';
import { addToLocalStorage } from '../utils/localStorage';

import Paper from '../imgs/SPR/paper.png';
import Scissor from '../imgs/SPR/scissor.png';
import Rock from '../imgs/SPR/rock.png';

const type = "Paper Scissor Rock";
const title = type;

const picMap = {
  "Paper": Paper,
  "Scissor": Scissor,
  "Rock": Rock,
};

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
    let picSource = picMap[result];

    let resultPic = (<div><img src={picSource} alt="" height="180" width="165" /></div>)

    return (
      <div className="contentDiv">
        <ContentHeader title={title} />
        <ActionButton func={this.getResult} />
        <PicResultArea img={resultPic} />
      </div>
    );
  }

}
