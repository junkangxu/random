import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import getRandomInt from '../utils/generateRandom';
import Divider from 'material-ui/Divider';

import './ContentYesOrNo.css';

export default class ContentYesOrNo extends React.Component {

  constructor(props) {
    super(props);
    this.getResult = this.getResult.bind(this);
    this.state = {
      result: ""
    };
  }

  getResult(event) {
    let randomInt = getRandomInt(1, 2);
    let newResult;
    if (randomInt === 1) {
      newResult = "Yes";
    } else {
      newResult = "No";
    }
    this.setState({result: newResult});
  }

  render() {
    return (
      <div>
        <div className="header">
          <h3>是否</h3>
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
