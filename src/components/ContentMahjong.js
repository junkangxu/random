import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { getRandomMahjong } from '../utils/generateRandom';

const style = {
  margin: 12
};

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
        <div>
          <RaisedButton
            label="Primary"
            primary={true}
            style={style}
            onClick={this.getResult}
          />
        </div>
        <div>{this.state.result}</div>
      </div>
    );
  }
}
