import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import getRandomInt from '../utils/generateRandom';

const style = {
  margin: 12
};

export default class ContentCoin extends React.Component {

  constructor(props) {
    super(props);
    this.getResult = this.getResult.bind(this);
    this.state = {
      result: ""
    }
  }

  getResult(event) {
    let randomInt = getRandomInt(1, 2);
    let newResult;
    if (randomInt == 1) {
      newResult = "Head";
    } else {
      newResult = "Tail";
    }
    this.setState({result: newResult});
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="Primary"
          primary={true}
          style={style}
          onClick={this.getResult}
        />
        <div>{this.state.result}</div>
      </div>
    );
  }

}
