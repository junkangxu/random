import React from 'react';
import ContentHeader from './Common/ContentHeader';
import ActionButton from './Common/ActionButton';
import PicResultArea from './Common/PicResultArea';
import getRandomInt from '../utils/generateRandom';
import { addToLocalStorage } from '../utils/localStorage';

import Head from '../imgs/coin/head.jpg';
import Tail from '../imgs/coin/tail.jpg';

const type = "Coin";
const title = type;

export default class ContentCoin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: ""
    }
  }

  getResult = () => {
    let newResult;
    if (getRandomInt(1, 2) === 1) {
      newResult = "Head";
    } else {
      newResult = "Tail";
    }
    this.setState({result: newResult});
    addToLocalStorage(type, newResult);
  };

  render() {
    let result = this.state.result;
    let resultPic = "";

    if (result === "Head") {
      resultPic = (<div><img src={Head} alt="" height="120" width="120" /></div>);
    } else if (result === "Tail") {
      resultPic = (<div><img src={Tail} alt="" height="120" width="120" /></div>)
    }

    return (
      <div className="contentDiv">
        <ContentHeader title={title}/>
        <ActionButton func={this.getResult} />
        <PicResultArea img={resultPic} />
      </div>
    );
  }

}
