import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import getRandomInt from '../utils/generateRandom';

const style = {
  margin: 12
};

export default class ContentPoker extends React.Component {

  constructor(props) {
    super(props);
    this.getResultHead = this.getResultHead.bind(this);
    this.getResultBody = this.getResultBody.bind(this);
    this.getResult = this.getResult.bind(this);
    this.state = {
      resultHead: "",
      resultBody: ""
    };
  }

  getResultHead() {
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
  }

  getResultBody() {
    let randomInt = getRandomInt(1, 13);
    let newResultBody;
    if (randomInt <= 10) {
      newResultBody = randomInt;
    } else if (randomInt == 11) {
      newResultBody = "J";
    } else if (randomInt == 12) {
      newResultBody = "Q";
    } else {
      newResultBody = "K";
    }
    this.setState({resultBody: newResultBody});
  }

  getResult(event) {
    this.getResultHead();
    this.getResultBody();
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
        <div>{this.state.resultHead + "  "}{this.state.resultBody}</div>
      </div>
    );
  }

}
