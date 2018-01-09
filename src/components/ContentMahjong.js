import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { getRandomMahjong } from '../utils/generateRandom';
import Divider from 'material-ui/Divider';

import './ContentMahjong.css';

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
  }

  render() {
    return (
      <div>
        <div className="header">
          <h3>麻将</h3>
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
          <h1>{this.state.result}</h1>
        </div>
      </div>
    );
  }
}