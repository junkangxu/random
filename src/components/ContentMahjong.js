import React from 'react';
import ContentHeader from './Common/ContentHeader';
import ActionButton from './Common/ActionButton';
import TextResultArea from './Common/TextResultArea';
import { addToLocalStorage } from '../utils/localStorage';
import { getRandomMahjong } from '../utils/generateRandom';

const type = "Mahjong";
const title = type;

export default class ContentMahjong extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
  }

  getResult = () => {
    let randomMahjong = getRandomMahjong();
    this.setState({result: randomMahjong});
    addToLocalStorage(type, randomMahjong);
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
