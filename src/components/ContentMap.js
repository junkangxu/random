import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import { getRandomInRange } from '../utils/generateRandom';
import { addToLocalStorage } from '../utils/localStorage';

const type = "Map";
const fixed = 5;
const maxLatitude = 90;
const maxLongitude = 180;
const minLatitude = -90;
const minLongitude = -180;

export default class ContentMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null
    }
  }

  getResult = (event) => {
    let newLatitude = getRandomInRange(minLatitude, maxLatitude, fixed);
    let newLongitude = getRandomInRange(minLongitude, maxLongitude, fixed);
    this.setState({latitude: newLatitude, longitude: newLongitude});
    let resultStr = newLongitude + " " + newLatitude;
    addToLocalStorage(type, resultStr);
  };

  render() {
    return (
      <div className="contentDiv">
        <div className="header">
          <h3>地图</h3>
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
          <h1>
            {this.state.longitude}
            <br />
            {this.state.latitude}
          </h1>
        </div>
      </div>
    );
  }
}
