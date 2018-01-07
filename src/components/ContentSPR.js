import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import getRandomInt from '../utils/generateRandom';

const style = {
  margin: 12
};

export default class ContentSPR extends React.Component {

  constructor(props) {
    super(props);
    this.getResult = this.getResult.bind(this);
    this.state = {
      result: ""
    };
  }

  getResult(event) {
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
